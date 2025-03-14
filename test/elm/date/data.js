/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Date
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Year: Date(2012)
define Month: Date(2012, 2)
define Day: Date(2012, 2, 15)
*/

module.exports['Date'] = {
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
        "r" : "225"
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
                "s" : [ "", "define ", "Year", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2012", ")" ],
                    "r" : "213"
                  },
                  "globalScope" : true
                } ],
                "r" : "216"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Date",
          "localId" : "216",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2012"
          }
        },
        "name" : "Year",
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
                "s" : [ "", "define ", "Month", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2012", ", ", "2", ")" ],
                    "r" : "219"
                  },
                  "globalScope" : true
                } ],
                "r" : "223"
              },
              "globalScope" : true
            } ],
            "r" : "218"
          }
        } ],
        "localId" : "218",
        "expression" : {
          "type" : "Date",
          "localId" : "223",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "219",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2012"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "220",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2"
          }
        },
        "name" : "Month",
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
                "s" : [ "", "define ", "Day", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2012", ", ", "2", ", ", "15", ")" ],
                    "r" : "226"
                  },
                  "globalScope" : true
                } ],
                "r" : "231"
              },
              "globalScope" : true
            } ],
            "r" : "225"
          }
        } ],
        "localId" : "225",
        "expression" : {
          "type" : "Date",
          "localId" : "231",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "226",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2012"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "227",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2"
          },
          "day" : {
            "type" : "Literal",
            "localId" : "228",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "15"
          }
        },
        "name" : "Day",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* DateComponentFrom
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IdesOfMarch: Date(2000, 3, 15)
define Year: year from IdesOfMarch
define Month: month from IdesOfMarch
define Day: day from IdesOfMarch
define ImpreciseIdesOfMarch: Date(2000, 3)
define ImpreciseComponentTuple: Tuple {
  Year: year from ImpreciseIdesOfMarch,
  Month: month from ImpreciseIdesOfMarch,
  Day: day from ImpreciseIdesOfMarch
}
define NullDate: year from (null as Date)
*/

module.exports['DateComponentFrom'] = {
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
        "r" : "248"
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
                "s" : [ "", "define ", "IdesOfMarch", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                    "r" : "213"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Date",
          "localId" : "218",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2000"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3"
          },
          "day" : {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "15"
          }
        },
        "name" : "IdesOfMarch",
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
                "s" : [ "", "define ", "Year", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "year from " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "IdesOfMarch" ]
                      },
                      "globalScope" : true
                    } ],
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
          "type" : "DateTimeComponentFrom",
          "localId" : "221",
          "signature" : [ ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "222",
            "name" : "IdesOfMarch"
          },
          "precision" : "Year"
        },
        "name" : "Year",
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
                "s" : [ "", "define ", "Month", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "month from " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "IdesOfMarch" ]
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
            } ],
            "r" : "224"
          }
        } ],
        "localId" : "224",
        "expression" : {
          "type" : "DateTimeComponentFrom",
          "localId" : "225",
          "signature" : [ ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "226",
            "name" : "IdesOfMarch"
          },
          "precision" : "Month"
        },
        "name" : "Month",
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
                "s" : [ "", "define ", "Day", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "day from " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "IdesOfMarch" ]
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
            } ],
            "r" : "228"
          }
        } ],
        "localId" : "228",
        "expression" : {
          "type" : "DateTimeComponentFrom",
          "localId" : "229",
          "signature" : [ ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "230",
            "name" : "IdesOfMarch"
          },
          "precision" : "Day"
        },
        "name" : "Day",
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
                "s" : [ "", "define ", "ImpreciseIdesOfMarch", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2000", ", ", "3", ")" ],
                    "r" : "233"
                  },
                  "globalScope" : true
                } ],
                "r" : "237"
              },
              "globalScope" : true
            } ],
            "r" : "232"
          }
        } ],
        "localId" : "232",
        "expression" : {
          "type" : "Date",
          "localId" : "237",
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
            "value" : "3"
          }
        },
        "name" : "ImpreciseIdesOfMarch",
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
                "s" : [ "", "define ", "ImpreciseComponentTuple", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Tuple {\n  " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Year", ": " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "year from " ]
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "ImpreciseIdesOfMarch" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "242"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "241"
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
                        "s" : [ "Month", ": " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "month from " ]
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "ImpreciseIdesOfMarch" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "244"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "243"
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
                        "s" : [ "Day", ": " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "day from " ]
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "ImpreciseIdesOfMarch" ]
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
                "r" : "240"
              },
              "globalScope" : true
            } ],
            "r" : "239"
          }
        } ],
        "localId" : "239",
        "expression" : {
          "type" : "Tuple",
          "localId" : "240",
          "element" : [ {
            "value" : {
              "type" : "DateTimeComponentFrom",
              "localId" : "241",
              "signature" : [ ],
              "operand" : {
                "type" : "ExpressionRef",
                "localId" : "242",
                "name" : "ImpreciseIdesOfMarch"
              },
              "precision" : "Year"
            },
            "name" : "Year"
          }, {
            "value" : {
              "type" : "DateTimeComponentFrom",
              "localId" : "243",
              "signature" : [ ],
              "operand" : {
                "type" : "ExpressionRef",
                "localId" : "244",
                "name" : "ImpreciseIdesOfMarch"
              },
              "precision" : "Month"
            },
            "name" : "Month"
          }, {
            "value" : {
              "type" : "DateTimeComponentFrom",
              "localId" : "245",
              "signature" : [ ],
              "operand" : {
                "type" : "ExpressionRef",
                "localId" : "246",
                "name" : "ImpreciseIdesOfMarch"
              },
              "precision" : "Day"
            },
            "name" : "Day"
          } ]
        },
        "name" : "ImpreciseComponentTuple",
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
                "s" : [ "", "define ", "NullDate", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "year from " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "null", " as " ],
                            "r" : "251"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "Date" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "252"
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
                    "r" : "250"
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
          "type" : "DateTimeComponentFrom",
          "localId" : "249",
          "signature" : [ ],
          "operand" : {
            "type" : "As",
            "localId" : "250",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "251"
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "252",
              "name" : "{urn:hl7-org:elm-types:r1}Date"
            },
            "strict" : false
          },
          "precision" : "Year"
        },
        "name" : "NullDate",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* SameAs
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year as Date(2000, 11, 23)
define NotSameYear: Date(2000, 3, 15) same year as Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month as Date(2000, 3, 23)
define NotSameMonth: Date(2000, 3, 15) same month as Date(2000, 4, 23)
define SameMonthWrongYear: Date(2000, 3, 15) same month as Date(2001, 3, 23)
define SameDay: Date(2000, 3, 15) same day as Date(2000, 3, 15)
define NotSameDay: Date(2000, 3, 15) same day as Date(2000, 3, 23)
define SameDayWrongMonth: Date(2000, 3, 15) same day as Date(2000, 4, 15)
define Same: Date(2000, 3, 15) same as Date(2000, 3, 15)
define NotSame: Date(2000, 3, 16) same as Date(2000, 3, 15)
define NullLeft: null same as Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same as (null as Date)
define NullBoth: (null as Date) same as null
*/

module.exports['SameAs'] = {
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
        "r" : "385"
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
                "s" : [ "", "define ", "SameYear", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "213"
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
                    "s" : [ " ", "same year as", " " ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "11", ", ", "23", ")" ],
                        "r" : "219"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "225"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "SameAs",
          "localId" : "225",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "218",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "213",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "214",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "215",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "224",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "219",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "220",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "221",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "SameYear",
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
                "s" : [ "", "define ", "NotSameYear", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "228"
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
                    "s" : [ " ", "same year as", " " ],
                    "r" : "240"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2001", ", ", "11", ", ", "23", ")" ],
                        "r" : "234"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "239"
                  },
                  "globalScope" : true
                } ],
                "r" : "240"
              },
              "globalScope" : true
            } ],
            "r" : "227"
          }
        } ],
        "localId" : "227",
        "expression" : {
          "type" : "SameAs",
          "localId" : "240",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "233",
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
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "230",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "239",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "234",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2001"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "235",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "236",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "NotSameYear",
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
                "s" : [ "", "define ", "SameMonth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "243"
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
                    "s" : [ " ", "same month as", " " ],
                    "r" : "255"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "23", ")" ],
                        "r" : "249"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "254"
                  },
                  "globalScope" : true
                } ],
                "r" : "255"
              },
              "globalScope" : true
            } ],
            "r" : "242"
          }
        } ],
        "localId" : "242",
        "expression" : {
          "type" : "SameAs",
          "localId" : "255",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "248",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "243",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "244",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "245",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "254",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "249",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "250",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "251",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "SameMonth",
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
                "s" : [ "", "define ", "NotSameMonth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "258"
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
                    "s" : [ " ", "same month as", " " ],
                    "r" : "270"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "23", ")" ],
                        "r" : "264"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "269"
                  },
                  "globalScope" : true
                } ],
                "r" : "270"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "SameAs",
          "localId" : "270",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "263",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "258",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "259",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "260",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "269",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "264",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "265",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "266",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "NotSameMonth",
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
                "s" : [ "", "define ", "SameMonthWrongYear", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "273"
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
                    "s" : [ " ", "same month as", " " ],
                    "r" : "285"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2001", ", ", "3", ", ", "23", ")" ],
                        "r" : "279"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "284"
                  },
                  "globalScope" : true
                } ],
                "r" : "285"
              },
              "globalScope" : true
            } ],
            "r" : "272"
          }
        } ],
        "localId" : "272",
        "expression" : {
          "type" : "SameAs",
          "localId" : "285",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "278",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "273",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "274",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "275",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "284",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "279",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2001"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "280",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "281",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "SameMonthWrongYear",
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
                "s" : [ "", "define ", "SameDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "288"
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
                    "s" : [ " ", "same day as", " " ],
                    "r" : "300"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "294"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                } ],
                "r" : "300"
              },
              "globalScope" : true
            } ],
            "r" : "287"
          }
        } ],
        "localId" : "287",
        "expression" : {
          "type" : "SameAs",
          "localId" : "300",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "293",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "288",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "289",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "290",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "299",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "294",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "295",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "296",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "SameDay",
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
                "s" : [ "", "define ", "NotSameDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "303"
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
                    "s" : [ " ", "same day as", " " ],
                    "r" : "315"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "23", ")" ],
                        "r" : "309"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "314"
                  },
                  "globalScope" : true
                } ],
                "r" : "315"
              },
              "globalScope" : true
            } ],
            "r" : "302"
          }
        } ],
        "localId" : "302",
        "expression" : {
          "type" : "SameAs",
          "localId" : "315",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "308",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "303",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "304",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "305",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "314",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "309",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "310",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "311",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "NotSameDay",
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
                "s" : [ "", "define ", "SameDayWrongMonth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "318"
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
                    "s" : [ " ", "same day as", " " ],
                    "r" : "330"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "15", ")" ],
                        "r" : "324"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "329"
                  },
                  "globalScope" : true
                } ],
                "r" : "330"
              },
              "globalScope" : true
            } ],
            "r" : "317"
          }
        } ],
        "localId" : "317",
        "expression" : {
          "type" : "SameAs",
          "localId" : "330",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "323",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "318",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "319",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "320",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "329",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "324",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "325",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "326",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "SameDayWrongMonth",
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
                "s" : [ "", "define ", "Same", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "333"
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
                    "s" : [ " ", "same as", " " ],
                    "r" : "345"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "339"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "344"
                  },
                  "globalScope" : true
                } ],
                "r" : "345"
              },
              "globalScope" : true
            } ],
            "r" : "332"
          }
        } ],
        "localId" : "332",
        "expression" : {
          "type" : "SameAs",
          "localId" : "345",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "338",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "333",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "334",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "335",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "344",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "339",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "340",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "341",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Same",
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
                "s" : [ "", "define ", "NotSame", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "16", ")" ],
                        "r" : "348"
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
                    "s" : [ " ", "same as", " " ],
                    "r" : "360"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "354"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "359"
                  },
                  "globalScope" : true
                } ],
                "r" : "360"
              },
              "globalScope" : true
            } ],
            "r" : "347"
          }
        } ],
        "localId" : "347",
        "expression" : {
          "type" : "SameAs",
          "localId" : "360",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "353",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "348",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "349",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "350",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          }, {
            "type" : "Date",
            "localId" : "359",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "354",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "355",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "356",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "NotSame",
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
                "s" : [ "", "define ", "NullLeft", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " ", "same as", " " ],
                    "r" : "363"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "364"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "369"
                  },
                  "globalScope" : true
                } ],
                "r" : "370"
              },
              "globalScope" : true
            } ],
            "r" : "362"
          }
        } ],
        "localId" : "362",
        "expression" : {
          "type" : "SameAs",
          "localId" : "370",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "371",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "363"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          }, {
            "type" : "Date",
            "localId" : "369",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "364",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "365",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "366",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "NullLeft",
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
                "s" : [ "", "define ", "NullRight", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "374"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "379"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same as", " " ],
                    "r" : "383"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "null", " as " ],
                            "r" : "381"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "Date" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "382"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "380"
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
                    "r" : "380"
                  },
                  "globalScope" : true
                } ],
                "r" : "383"
              },
              "globalScope" : true
            } ],
            "r" : "373"
          }
        } ],
        "localId" : "373",
        "expression" : {
          "type" : "SameAs",
          "localId" : "383",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "379",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "374",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "375",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "376",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "As",
            "localId" : "380",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "381"
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "382",
              "name" : "{urn:hl7-org:elm-types:r1}Date"
            },
            "strict" : false
          } ]
        },
        "name" : "NullRight",
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
                "s" : [ "", "define ", "NullBoth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "null", " as " ],
                            "r" : "387"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "Date" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "388"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "386"
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
                    "r" : "386"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same as", " ", "null" ],
                    "r" : "390"
                  },
                  "globalScope" : true
                } ],
                "r" : "390"
              },
              "globalScope" : true
            } ],
            "r" : "385"
          }
        } ],
        "localId" : "385",
        "expression" : {
          "type" : "SameAs",
          "localId" : "390",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "386",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "387"
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "388",
              "name" : "{urn:hl7-org:elm-types:r1}Date"
            },
            "strict" : false
          }, {
            "type" : "As",
            "localId" : "391",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "389"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullBoth",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* SameOrAfter
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year or after Date(2000, 11, 23)
define YearAfter: Date(2000, 3, 15) same year or after Date(1999, 11, 23)
define YearBefore: Date(2000, 3, 15) same year or after Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month or after Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 15) same month or after Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 15) same month or after Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) same day or after Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) same day or after Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) same day or after Date(2000, 3, 16)
define Same: Date(2000, 3, 15) same or after Date(2000, 3, 15)
define After: Date(2000, 3, 15) same or after Date(2000, 3, 15)
define Before: Date(2000, 3, 14) same or after Date(2000, 3, 15)
define SameDayMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4, 15)
define DayAfterMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4, 14)
define DayBeforeMonthAfter: Date(2000, 3, 15) same day or after Date(2000, 2, 16)
define ImpreciseDay: Date(2000, 3, 15) same day or after Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) same day or after Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4)
define NullLeft: null same or after Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same or after null
define NullBoth: (null as Date) same or after null
*/

module.exports['SameOrAfter'] = {
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
        "r" : "501"
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
                "s" : [ "", "define ", "SameYear", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "213"
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
                    "s" : [ " ", "same year or after", " " ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "11", ", ", "23", ")" ],
                        "r" : "219"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "225"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "225",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "218",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "213",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "214",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "215",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "224",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "219",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "220",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "221",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "SameYear",
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
                "s" : [ "", "define ", "YearAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "228"
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
                    "s" : [ " ", "same year or after", " " ],
                    "r" : "240"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "1999", ", ", "11", ", ", "23", ")" ],
                        "r" : "234"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "239"
                  },
                  "globalScope" : true
                } ],
                "r" : "240"
              },
              "globalScope" : true
            } ],
            "r" : "227"
          }
        } ],
        "localId" : "227",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "240",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "233",
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
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "230",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "239",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "234",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1999"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "235",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "236",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "YearAfter",
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
                "s" : [ "", "define ", "YearBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "243"
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
                    "s" : [ " ", "same year or after", " " ],
                    "r" : "255"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2001", ", ", "11", ", ", "23", ")" ],
                        "r" : "249"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "254"
                  },
                  "globalScope" : true
                } ],
                "r" : "255"
              },
              "globalScope" : true
            } ],
            "r" : "242"
          }
        } ],
        "localId" : "242",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "255",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "248",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "243",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "244",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "245",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "254",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "249",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2001"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "250",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "251",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "YearBefore",
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
                "s" : [ "", "define ", "SameMonth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "258"
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
                    "s" : [ " ", "same month or after", " " ],
                    "r" : "270"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "23", ")" ],
                        "r" : "264"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "269"
                  },
                  "globalScope" : true
                } ],
                "r" : "270"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "270",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "263",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "258",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "259",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "260",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "269",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "264",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "265",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "266",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "SameMonth",
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
                "s" : [ "", "define ", "MonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "273"
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
                    "s" : [ " ", "same month or after", " " ],
                    "r" : "285"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ", ", "23", ")" ],
                        "r" : "279"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "284"
                  },
                  "globalScope" : true
                } ],
                "r" : "285"
              },
              "globalScope" : true
            } ],
            "r" : "272"
          }
        } ],
        "localId" : "272",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "285",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "278",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "273",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "274",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "275",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "284",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "279",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "280",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "281",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "MonthAfter",
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
                "s" : [ "", "define ", "MonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "288"
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
                    "s" : [ " ", "same month or after", " " ],
                    "r" : "300"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "23", ")" ],
                        "r" : "294"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                } ],
                "r" : "300"
              },
              "globalScope" : true
            } ],
            "r" : "287"
          }
        } ],
        "localId" : "287",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "300",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "293",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "288",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "289",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "290",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "299",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "294",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "295",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "296",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "MonthBefore",
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
                "s" : [ "", "define ", "SameDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "303"
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
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "315"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "309"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "314"
                  },
                  "globalScope" : true
                } ],
                "r" : "315"
              },
              "globalScope" : true
            } ],
            "r" : "302"
          }
        } ],
        "localId" : "302",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "315",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "308",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "303",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "304",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "305",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "314",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "309",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "310",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "311",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "SameDay",
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
                "s" : [ "", "define ", "DayAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "318"
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
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "330"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "14", ")" ],
                        "r" : "324"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "329"
                  },
                  "globalScope" : true
                } ],
                "r" : "330"
              },
              "globalScope" : true
            } ],
            "r" : "317"
          }
        } ],
        "localId" : "317",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "330",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "323",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "318",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "319",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "320",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "329",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "324",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "325",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "326",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayAfter",
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
                "s" : [ "", "define ", "DayBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "333"
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
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "345"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "16", ")" ],
                        "r" : "339"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "344"
                  },
                  "globalScope" : true
                } ],
                "r" : "345"
              },
              "globalScope" : true
            } ],
            "r" : "332"
          }
        } ],
        "localId" : "332",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "345",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "338",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "333",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "334",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "335",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "344",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "339",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "340",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "341",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayBefore",
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
                "s" : [ "", "define ", "Same", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "348"
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
                    "s" : [ " ", "same or after", " " ],
                    "r" : "360"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "354"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "359"
                  },
                  "globalScope" : true
                } ],
                "r" : "360"
              },
              "globalScope" : true
            } ],
            "r" : "347"
          }
        } ],
        "localId" : "347",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "360",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "353",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "348",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "349",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "350",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "359",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "354",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "355",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "356",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Same",
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
                "s" : [ "", "define ", "After", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "363"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "368"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same or after", " " ],
                    "r" : "375"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "369"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "374"
                  },
                  "globalScope" : true
                } ],
                "r" : "375"
              },
              "globalScope" : true
            } ],
            "r" : "362"
          }
        } ],
        "localId" : "362",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "375",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "368",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "363",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "364",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "365",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "374",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "369",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "370",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "371",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "After",
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
                "s" : [ "", "define ", "Before", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "14", ")" ],
                        "r" : "378"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "383"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same or after", " " ],
                    "r" : "390"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "384"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "389"
                  },
                  "globalScope" : true
                } ],
                "r" : "390"
              },
              "globalScope" : true
            } ],
            "r" : "377"
          }
        } ],
        "localId" : "377",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "390",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "383",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "378",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "379",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "380",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14"
            }
          }, {
            "type" : "Date",
            "localId" : "389",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "384",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "385",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "386",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Before",
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
                "s" : [ "", "define ", "SameDayMonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "393"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "398"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "405"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "15", ")" ],
                        "r" : "399"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "404"
                  },
                  "globalScope" : true
                } ],
                "r" : "405"
              },
              "globalScope" : true
            } ],
            "r" : "392"
          }
        } ],
        "localId" : "392",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "405",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "398",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "393",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "394",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "395",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "404",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "399",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "400",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "401",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "SameDayMonthBefore",
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
                "s" : [ "", "define ", "DayAfterMonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "408"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "413"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "420"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "14", ")" ],
                        "r" : "414"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "419"
                  },
                  "globalScope" : true
                } ],
                "r" : "420"
              },
              "globalScope" : true
            } ],
            "r" : "407"
          }
        } ],
        "localId" : "407",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "420",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "413",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "408",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "409",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "410",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "419",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "414",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "415",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "416",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayAfterMonthBefore",
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
                "s" : [ "", "define ", "DayBeforeMonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "423"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "428"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "435"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ", ", "16", ")" ],
                        "r" : "429"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "434"
                  },
                  "globalScope" : true
                } ],
                "r" : "435"
              },
              "globalScope" : true
            } ],
            "r" : "422"
          }
        } ],
        "localId" : "422",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "435",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "428",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "423",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "424",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "425",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "434",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "429",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "430",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "431",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayBeforeMonthAfter",
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
                "s" : [ "", "define ", "ImpreciseDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "438"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "443"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "449"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ")" ],
                        "r" : "444"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "448"
                  },
                  "globalScope" : true
                } ],
                "r" : "449"
              },
              "globalScope" : true
            } ],
            "r" : "437"
          }
        } ],
        "localId" : "437",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "449",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "443",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "438",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "439",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "440",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "448",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "444",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "445",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDay",
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
                "s" : [ "", "define ", "ImpreciseDayMonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "452"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "457"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "463"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ")" ],
                        "r" : "458"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "462"
                  },
                  "globalScope" : true
                } ],
                "r" : "463"
              },
              "globalScope" : true
            } ],
            "r" : "451"
          }
        } ],
        "localId" : "451",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "463",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "457",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "452",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "453",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "454",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "462",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "458",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "459",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDayMonthAfter",
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
                "s" : [ "", "define ", "ImpreciseDayMonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "466"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "471"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or after", " " ],
                    "r" : "477"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ")" ],
                        "r" : "472"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "476"
                  },
                  "globalScope" : true
                } ],
                "r" : "477"
              },
              "globalScope" : true
            } ],
            "r" : "465"
          }
        } ],
        "localId" : "465",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "477",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "471",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "466",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "467",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "468",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "476",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "472",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "473",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDayMonthBefore",
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
                "s" : [ "", "define ", "NullLeft", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " ", "same or after", " " ],
                    "r" : "480"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "481"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "486"
                  },
                  "globalScope" : true
                } ],
                "r" : "487"
              },
              "globalScope" : true
            } ],
            "r" : "479"
          }
        } ],
        "localId" : "479",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "487",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "488",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "480"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          }, {
            "type" : "Date",
            "localId" : "486",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "481",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "482",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "483",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "NullLeft",
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
                "s" : [ "", "define ", "NullRight", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "491"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "496"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same or after", " ", "null" ],
                    "r" : "498"
                  },
                  "globalScope" : true
                } ],
                "r" : "498"
              },
              "globalScope" : true
            } ],
            "r" : "490"
          }
        } ],
        "localId" : "490",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "498",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "496",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "491",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "492",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "493",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "As",
            "localId" : "499",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "497"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullRight",
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
                "s" : [ "", "define ", "NullBoth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "null", " as " ],
                            "r" : "503"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "Date" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "504"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "502"
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
                    "r" : "502"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same or after", " ", "null" ],
                    "r" : "506"
                  },
                  "globalScope" : true
                } ],
                "r" : "506"
              },
              "globalScope" : true
            } ],
            "r" : "501"
          }
        } ],
        "localId" : "501",
        "expression" : {
          "type" : "SameOrAfter",
          "localId" : "506",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "502",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "503"
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "504",
              "name" : "{urn:hl7-org:elm-types:r1}Date"
            },
            "strict" : false
          }, {
            "type" : "As",
            "localId" : "507",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "505"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullBoth",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* SameOrBefore
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year or before Date(2000, 11, 23)
define YearAfter: Date(2000, 3, 15) same year or before Date(1999, 11, 23)
define YearBefore: Date(2000, 3, 15) same year or before Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month or before Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 15) same month or before Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 15) same month or before Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) same day or before Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) same day or before Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) same day or before Date(2000, 3, 16)
define Same: Date(2000, 3, 15) same or before Date(2000, 3, 15)
define After: Date(2000, 3, 16) same or before Date(2000, 3, 15)
define Before: Date(2000, 3, 15) same or before Date(2000, 3, 15)
define SameDayMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4, 15)
define DayAfterMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4, 14)
define DayBeforeMonthAfter: Date(2000, 3, 15) same day or before Date(2000, 2, 16)
define ImpreciseDay: Date(2000, 3, 15) same day or before Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) same day or before Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4)
define NullLeft: null same or before Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same or before null
define NullBoth: (null as Date) same or before null
*/

module.exports['SameOrBefore'] = {
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
        "r" : "501"
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
                "s" : [ "", "define ", "SameYear", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "213"
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
                    "s" : [ " ", "same year or before", " " ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "11", ", ", "23", ")" ],
                        "r" : "219"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "225"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "225",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "218",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "213",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "214",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "215",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "224",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "219",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "220",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "221",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "SameYear",
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
                "s" : [ "", "define ", "YearAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "228"
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
                    "s" : [ " ", "same year or before", " " ],
                    "r" : "240"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "1999", ", ", "11", ", ", "23", ")" ],
                        "r" : "234"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "239"
                  },
                  "globalScope" : true
                } ],
                "r" : "240"
              },
              "globalScope" : true
            } ],
            "r" : "227"
          }
        } ],
        "localId" : "227",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "240",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "233",
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
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "230",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "239",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "234",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1999"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "235",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "236",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "YearAfter",
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
                "s" : [ "", "define ", "YearBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "243"
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
                    "s" : [ " ", "same year or before", " " ],
                    "r" : "255"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2001", ", ", "11", ", ", "23", ")" ],
                        "r" : "249"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "254"
                  },
                  "globalScope" : true
                } ],
                "r" : "255"
              },
              "globalScope" : true
            } ],
            "r" : "242"
          }
        } ],
        "localId" : "242",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "255",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "248",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "243",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "244",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "245",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "254",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "249",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2001"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "250",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "251",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "YearBefore",
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
                "s" : [ "", "define ", "SameMonth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "258"
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
                    "s" : [ " ", "same month or before", " " ],
                    "r" : "270"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "23", ")" ],
                        "r" : "264"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "269"
                  },
                  "globalScope" : true
                } ],
                "r" : "270"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "270",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "263",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "258",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "259",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "260",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "269",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "264",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "265",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "266",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "SameMonth",
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
                "s" : [ "", "define ", "MonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "273"
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
                    "s" : [ " ", "same month or before", " " ],
                    "r" : "285"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ", ", "23", ")" ],
                        "r" : "279"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "284"
                  },
                  "globalScope" : true
                } ],
                "r" : "285"
              },
              "globalScope" : true
            } ],
            "r" : "272"
          }
        } ],
        "localId" : "272",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "285",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "278",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "273",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "274",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "275",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "284",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "279",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "280",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "281",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "MonthAfter",
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
                "s" : [ "", "define ", "MonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "288"
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
                    "s" : [ " ", "same month or before", " " ],
                    "r" : "300"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "23", ")" ],
                        "r" : "294"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                } ],
                "r" : "300"
              },
              "globalScope" : true
            } ],
            "r" : "287"
          }
        } ],
        "localId" : "287",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "300",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "293",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "288",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "289",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "290",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "299",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "294",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "295",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "296",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "MonthBefore",
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
                "s" : [ "", "define ", "SameDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "303"
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
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "315"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "309"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "314"
                  },
                  "globalScope" : true
                } ],
                "r" : "315"
              },
              "globalScope" : true
            } ],
            "r" : "302"
          }
        } ],
        "localId" : "302",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "315",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "308",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "303",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "304",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "305",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "314",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "309",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "310",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "311",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "SameDay",
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
                "s" : [ "", "define ", "DayAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "318"
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
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "330"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "14", ")" ],
                        "r" : "324"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "329"
                  },
                  "globalScope" : true
                } ],
                "r" : "330"
              },
              "globalScope" : true
            } ],
            "r" : "317"
          }
        } ],
        "localId" : "317",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "330",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "323",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "318",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "319",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "320",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "329",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "324",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "325",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "326",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayAfter",
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
                "s" : [ "", "define ", "DayBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "333"
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
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "345"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "16", ")" ],
                        "r" : "339"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "344"
                  },
                  "globalScope" : true
                } ],
                "r" : "345"
              },
              "globalScope" : true
            } ],
            "r" : "332"
          }
        } ],
        "localId" : "332",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "345",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "338",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "333",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "334",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "335",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "344",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "339",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "340",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "341",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayBefore",
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
                "s" : [ "", "define ", "Same", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "348"
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
                    "s" : [ " ", "same or before", " " ],
                    "r" : "360"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "354"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "359"
                  },
                  "globalScope" : true
                } ],
                "r" : "360"
              },
              "globalScope" : true
            } ],
            "r" : "347"
          }
        } ],
        "localId" : "347",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "360",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "353",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "348",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "349",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "350",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "359",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "354",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "355",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "356",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Same",
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
                "s" : [ "", "define ", "After", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "16", ")" ],
                        "r" : "363"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "368"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same or before", " " ],
                    "r" : "375"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "369"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "374"
                  },
                  "globalScope" : true
                } ],
                "r" : "375"
              },
              "globalScope" : true
            } ],
            "r" : "362"
          }
        } ],
        "localId" : "362",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "375",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "368",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "363",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "364",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "365",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          }, {
            "type" : "Date",
            "localId" : "374",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "369",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "370",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "371",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "After",
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
                "s" : [ "", "define ", "Before", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "378"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "383"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same or before", " " ],
                    "r" : "390"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "384"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "389"
                  },
                  "globalScope" : true
                } ],
                "r" : "390"
              },
              "globalScope" : true
            } ],
            "r" : "377"
          }
        } ],
        "localId" : "377",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "390",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "383",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "378",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "379",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "380",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "389",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "384",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "385",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "386",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Before",
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
                "s" : [ "", "define ", "SameDayMonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "393"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "398"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "405"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "15", ")" ],
                        "r" : "399"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "404"
                  },
                  "globalScope" : true
                } ],
                "r" : "405"
              },
              "globalScope" : true
            } ],
            "r" : "392"
          }
        } ],
        "localId" : "392",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "405",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "398",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "393",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "394",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "395",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "404",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "399",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "400",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "401",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "SameDayMonthBefore",
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
                "s" : [ "", "define ", "DayAfterMonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "408"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "413"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "420"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "14", ")" ],
                        "r" : "414"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "419"
                  },
                  "globalScope" : true
                } ],
                "r" : "420"
              },
              "globalScope" : true
            } ],
            "r" : "407"
          }
        } ],
        "localId" : "407",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "420",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "413",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "408",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "409",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "410",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "419",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "414",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "415",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "416",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayAfterMonthBefore",
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
                "s" : [ "", "define ", "DayBeforeMonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "423"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "428"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "435"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ", ", "16", ")" ],
                        "r" : "429"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "434"
                  },
                  "globalScope" : true
                } ],
                "r" : "435"
              },
              "globalScope" : true
            } ],
            "r" : "422"
          }
        } ],
        "localId" : "422",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "435",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "428",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "423",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "424",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "425",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "434",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "429",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "430",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "431",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayBeforeMonthAfter",
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
                "s" : [ "", "define ", "ImpreciseDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "438"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "443"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "449"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ")" ],
                        "r" : "444"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "448"
                  },
                  "globalScope" : true
                } ],
                "r" : "449"
              },
              "globalScope" : true
            } ],
            "r" : "437"
          }
        } ],
        "localId" : "437",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "449",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "443",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "438",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "439",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "440",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "448",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "444",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "445",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDay",
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
                "s" : [ "", "define ", "ImpreciseDayMonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "452"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "457"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "463"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ")" ],
                        "r" : "458"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "462"
                  },
                  "globalScope" : true
                } ],
                "r" : "463"
              },
              "globalScope" : true
            } ],
            "r" : "451"
          }
        } ],
        "localId" : "451",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "463",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "457",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "452",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "453",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "454",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "462",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "458",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "459",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDayMonthAfter",
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
                "s" : [ "", "define ", "ImpreciseDayMonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "466"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "471"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same day or before", " " ],
                    "r" : "477"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ")" ],
                        "r" : "472"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "476"
                  },
                  "globalScope" : true
                } ],
                "r" : "477"
              },
              "globalScope" : true
            } ],
            "r" : "465"
          }
        } ],
        "localId" : "465",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "477",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "471",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "466",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "467",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "468",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "476",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "472",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "473",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDayMonthBefore",
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
                "s" : [ "", "define ", "NullLeft", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " ", "same or before", " " ],
                    "r" : "480"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "481"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "486"
                  },
                  "globalScope" : true
                } ],
                "r" : "487"
              },
              "globalScope" : true
            } ],
            "r" : "479"
          }
        } ],
        "localId" : "479",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "487",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "488",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "480"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          }, {
            "type" : "Date",
            "localId" : "486",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "481",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "482",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "483",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "NullLeft",
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
                "s" : [ "", "define ", "NullRight", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "491"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "496"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same or before", " ", "null" ],
                    "r" : "498"
                  },
                  "globalScope" : true
                } ],
                "r" : "498"
              },
              "globalScope" : true
            } ],
            "r" : "490"
          }
        } ],
        "localId" : "490",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "498",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "496",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "491",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "492",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "493",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "As",
            "localId" : "499",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "497"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullRight",
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
                "s" : [ "", "define ", "NullBoth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "null", " as " ],
                            "r" : "503"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "Date" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "504"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "502"
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
                    "r" : "502"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "same or before", " ", "null" ],
                    "r" : "506"
                  },
                  "globalScope" : true
                } ],
                "r" : "506"
              },
              "globalScope" : true
            } ],
            "r" : "501"
          }
        } ],
        "localId" : "501",
        "expression" : {
          "type" : "SameOrBefore",
          "localId" : "506",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "502",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "503"
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "504",
              "name" : "{urn:hl7-org:elm-types:r1}Date"
            },
            "strict" : false
          }, {
            "type" : "As",
            "localId" : "507",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "505"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullBoth",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* After
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 12, 15) after year of Date(2000, 11, 23)
define YearAfter: Date(2000, 12, 15) after year of Date(1999, 11, 23)
define YearBefore: Date(2000, 12, 15) after year of Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 25) after month of Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 25) after month of Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 25) after month of Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) after day of Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) after day of Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) after day of Date(2000, 3, 16)
define Same: Date(2000, 3, 15) after Date(2000, 3, 15)
define After: Date(2000, 3, 16) after Date(2000, 3, 15)
define Before: Date(2000, 3, 15) after Date(2000, 3, 15)
define ImpreciseDay: Date(2000, 3, 15) after day of Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) after day of Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) after day of Date(2000, 4)
define NullLeft: null after Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) after null
define NullBoth: (null as Date) after null
*/

module.exports['After'] = {
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
        "r" : "456"
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
                "s" : [ "", "define ", "SameYear", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "12", ", ", "15", ")" ],
                        "r" : "213"
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
                    "s" : [ " ", "after year of", " " ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "11", ", ", "23", ")" ],
                        "r" : "219"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "225"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "After",
          "localId" : "225",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "218",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "213",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "214",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "215",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "224",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "219",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "220",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "221",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "SameYear",
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
                "s" : [ "", "define ", "YearAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "12", ", ", "15", ")" ],
                        "r" : "228"
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
                    "s" : [ " ", "after year of", " " ],
                    "r" : "240"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "1999", ", ", "11", ", ", "23", ")" ],
                        "r" : "234"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "239"
                  },
                  "globalScope" : true
                } ],
                "r" : "240"
              },
              "globalScope" : true
            } ],
            "r" : "227"
          }
        } ],
        "localId" : "227",
        "expression" : {
          "type" : "After",
          "localId" : "240",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "233",
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
              "value" : "12"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "230",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "239",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "234",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1999"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "235",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "236",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "YearAfter",
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
                "s" : [ "", "define ", "YearBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "12", ", ", "15", ")" ],
                        "r" : "243"
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
                    "s" : [ " ", "after year of", " " ],
                    "r" : "255"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2001", ", ", "11", ", ", "23", ")" ],
                        "r" : "249"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "254"
                  },
                  "globalScope" : true
                } ],
                "r" : "255"
              },
              "globalScope" : true
            } ],
            "r" : "242"
          }
        } ],
        "localId" : "242",
        "expression" : {
          "type" : "After",
          "localId" : "255",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "248",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "243",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "244",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "245",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "254",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "249",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2001"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "250",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "251",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "YearBefore",
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
                "s" : [ "", "define ", "SameMonth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "25", ")" ],
                        "r" : "258"
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
                    "s" : [ " ", "after month of", " " ],
                    "r" : "270"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "23", ")" ],
                        "r" : "264"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "269"
                  },
                  "globalScope" : true
                } ],
                "r" : "270"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "After",
          "localId" : "270",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "263",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "258",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "259",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "260",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25"
            }
          }, {
            "type" : "Date",
            "localId" : "269",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "264",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "265",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "266",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "SameMonth",
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
                "s" : [ "", "define ", "MonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "25", ")" ],
                        "r" : "273"
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
                    "s" : [ " ", "after month of", " " ],
                    "r" : "285"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ", ", "23", ")" ],
                        "r" : "279"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "284"
                  },
                  "globalScope" : true
                } ],
                "r" : "285"
              },
              "globalScope" : true
            } ],
            "r" : "272"
          }
        } ],
        "localId" : "272",
        "expression" : {
          "type" : "After",
          "localId" : "285",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "278",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "273",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "274",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "275",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25"
            }
          }, {
            "type" : "Date",
            "localId" : "284",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "279",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "280",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "281",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "MonthAfter",
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
                "s" : [ "", "define ", "MonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "25", ")" ],
                        "r" : "288"
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
                    "s" : [ " ", "after month of", " " ],
                    "r" : "300"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "23", ")" ],
                        "r" : "294"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                } ],
                "r" : "300"
              },
              "globalScope" : true
            } ],
            "r" : "287"
          }
        } ],
        "localId" : "287",
        "expression" : {
          "type" : "After",
          "localId" : "300",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "293",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "288",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "289",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "290",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25"
            }
          }, {
            "type" : "Date",
            "localId" : "299",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "294",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "295",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "296",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "MonthBefore",
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
                "s" : [ "", "define ", "SameDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "303"
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
                    "s" : [ " ", "after day of", " " ],
                    "r" : "315"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "309"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "314"
                  },
                  "globalScope" : true
                } ],
                "r" : "315"
              },
              "globalScope" : true
            } ],
            "r" : "302"
          }
        } ],
        "localId" : "302",
        "expression" : {
          "type" : "After",
          "localId" : "315",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "308",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "303",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "304",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "305",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "314",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "309",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "310",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "311",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "SameDay",
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
                "s" : [ "", "define ", "DayAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "318"
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
                    "s" : [ " ", "after day of", " " ],
                    "r" : "330"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "14", ")" ],
                        "r" : "324"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "329"
                  },
                  "globalScope" : true
                } ],
                "r" : "330"
              },
              "globalScope" : true
            } ],
            "r" : "317"
          }
        } ],
        "localId" : "317",
        "expression" : {
          "type" : "After",
          "localId" : "330",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "323",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "318",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "319",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "320",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "329",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "324",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "325",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "326",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayAfter",
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
                "s" : [ "", "define ", "DayBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "333"
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
                    "s" : [ " ", "after day of", " " ],
                    "r" : "345"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "16", ")" ],
                        "r" : "339"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "344"
                  },
                  "globalScope" : true
                } ],
                "r" : "345"
              },
              "globalScope" : true
            } ],
            "r" : "332"
          }
        } ],
        "localId" : "332",
        "expression" : {
          "type" : "After",
          "localId" : "345",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "338",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "333",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "334",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "335",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "344",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "339",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "340",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "341",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayBefore",
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
                "s" : [ "", "define ", "Same", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "348"
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
                    "s" : [ " ", "after", " " ],
                    "r" : "360"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "354"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "359"
                  },
                  "globalScope" : true
                } ],
                "r" : "360"
              },
              "globalScope" : true
            } ],
            "r" : "347"
          }
        } ],
        "localId" : "347",
        "expression" : {
          "type" : "After",
          "localId" : "360",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "353",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "348",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "349",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "350",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "359",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "354",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "355",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "356",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Same",
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
                "s" : [ "", "define ", "After", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "16", ")" ],
                        "r" : "363"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "368"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "after", " " ],
                    "r" : "375"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "369"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "374"
                  },
                  "globalScope" : true
                } ],
                "r" : "375"
              },
              "globalScope" : true
            } ],
            "r" : "362"
          }
        } ],
        "localId" : "362",
        "expression" : {
          "type" : "After",
          "localId" : "375",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "368",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "363",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "364",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "365",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          }, {
            "type" : "Date",
            "localId" : "374",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "369",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "370",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "371",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "After",
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
                "s" : [ "", "define ", "Before", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "378"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "383"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "after", " " ],
                    "r" : "390"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "384"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "389"
                  },
                  "globalScope" : true
                } ],
                "r" : "390"
              },
              "globalScope" : true
            } ],
            "r" : "377"
          }
        } ],
        "localId" : "377",
        "expression" : {
          "type" : "After",
          "localId" : "390",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "383",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "378",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "379",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "380",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "389",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "384",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "385",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "386",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Before",
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
                "s" : [ "", "define ", "ImpreciseDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "393"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "398"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "after day of", " " ],
                    "r" : "404"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ")" ],
                        "r" : "399"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "403"
                  },
                  "globalScope" : true
                } ],
                "r" : "404"
              },
              "globalScope" : true
            } ],
            "r" : "392"
          }
        } ],
        "localId" : "392",
        "expression" : {
          "type" : "After",
          "localId" : "404",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "398",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "393",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "394",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "395",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "403",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "399",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "400",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDay",
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
                "s" : [ "", "define ", "ImpreciseDayMonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "407"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "412"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "after day of", " " ],
                    "r" : "418"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ")" ],
                        "r" : "413"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "417"
                  },
                  "globalScope" : true
                } ],
                "r" : "418"
              },
              "globalScope" : true
            } ],
            "r" : "406"
          }
        } ],
        "localId" : "406",
        "expression" : {
          "type" : "After",
          "localId" : "418",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "412",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "407",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "408",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "409",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "417",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "413",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "414",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDayMonthAfter",
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
                "s" : [ "", "define ", "ImpreciseDayMonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "421"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "426"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "after day of", " " ],
                    "r" : "432"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ")" ],
                        "r" : "427"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "431"
                  },
                  "globalScope" : true
                } ],
                "r" : "432"
              },
              "globalScope" : true
            } ],
            "r" : "420"
          }
        } ],
        "localId" : "420",
        "expression" : {
          "type" : "After",
          "localId" : "432",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "426",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "421",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "422",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "423",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "431",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "427",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "428",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDayMonthBefore",
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
                "s" : [ "", "define ", "NullLeft", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " ", "after", " " ],
                    "r" : "435"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "436"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "441"
                  },
                  "globalScope" : true
                } ],
                "r" : "442"
              },
              "globalScope" : true
            } ],
            "r" : "434"
          }
        } ],
        "localId" : "434",
        "expression" : {
          "type" : "After",
          "localId" : "442",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "443",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "435"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          }, {
            "type" : "Date",
            "localId" : "441",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "436",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "437",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "438",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "NullLeft",
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
                "s" : [ "", "define ", "NullRight", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "446"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "451"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "after", " ", "null" ],
                    "r" : "453"
                  },
                  "globalScope" : true
                } ],
                "r" : "453"
              },
              "globalScope" : true
            } ],
            "r" : "445"
          }
        } ],
        "localId" : "445",
        "expression" : {
          "type" : "After",
          "localId" : "453",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "451",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "446",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "447",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "448",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "As",
            "localId" : "454",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "452"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullRight",
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
                "s" : [ "", "define ", "NullBoth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "null", " as " ],
                            "r" : "458"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "Date" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "459"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "457"
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
                    "r" : "457"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "after", " ", "null" ],
                    "r" : "461"
                  },
                  "globalScope" : true
                } ],
                "r" : "461"
              },
              "globalScope" : true
            } ],
            "r" : "456"
          }
        } ],
        "localId" : "456",
        "expression" : {
          "type" : "After",
          "localId" : "461",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "457",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "458"
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "459",
              "name" : "{urn:hl7-org:elm-types:r1}Date"
            },
            "strict" : false
          }, {
            "type" : "As",
            "localId" : "462",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "460"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullBoth",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* Before
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 10, 15) before year of Date(2000, 11, 23)
define YearAfter: Date(2000, 10, 15) before year of Date(1999, 11, 23)
define YearBefore: Date(2000, 10, 15) before year of Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 22) before month of Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 22) before month of Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 22) before month of Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) before day of Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) before day of Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) before day of Date(2000, 3, 16)
define Same: Date(2000, 3, 15) before Date(2000, 3, 15)
define After: Date(2000, 3, 15) before Date(2000, 3, 15)
define Before: Date(2000, 3, 14) before Date(2000, 3, 15)
define ImpreciseDay: Date(2000, 3, 15) before day of Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) before day of Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) before day of Date(2000, 4)
define NullLeft: null before Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) before null
define NullBoth: (null as Date) before null
*/

module.exports['Before'] = {
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
        "r" : "456"
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
                "s" : [ "", "define ", "SameYear", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "10", ", ", "15", ")" ],
                        "r" : "213"
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
                    "s" : [ " ", "before year of", " " ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "11", ", ", "23", ")" ],
                        "r" : "219"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "225"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Before",
          "localId" : "225",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "218",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "213",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "214",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "215",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "224",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "219",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "220",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "221",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "SameYear",
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
                "s" : [ "", "define ", "YearAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "10", ", ", "15", ")" ],
                        "r" : "228"
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
                    "s" : [ " ", "before year of", " " ],
                    "r" : "240"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "1999", ", ", "11", ", ", "23", ")" ],
                        "r" : "234"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "239"
                  },
                  "globalScope" : true
                } ],
                "r" : "240"
              },
              "globalScope" : true
            } ],
            "r" : "227"
          }
        } ],
        "localId" : "227",
        "expression" : {
          "type" : "Before",
          "localId" : "240",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "233",
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
              "value" : "10"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "230",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "239",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "234",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1999"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "235",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "236",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "YearAfter",
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
                "s" : [ "", "define ", "YearBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "10", ", ", "15", ")" ],
                        "r" : "243"
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
                    "s" : [ " ", "before year of", " " ],
                    "r" : "255"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2001", ", ", "11", ", ", "23", ")" ],
                        "r" : "249"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "254"
                  },
                  "globalScope" : true
                } ],
                "r" : "255"
              },
              "globalScope" : true
            } ],
            "r" : "242"
          }
        } ],
        "localId" : "242",
        "expression" : {
          "type" : "Before",
          "localId" : "255",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "248",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "243",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "244",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "245",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "254",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "249",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2001"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "250",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "11"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "251",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "YearBefore",
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
                "s" : [ "", "define ", "SameMonth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "22", ")" ],
                        "r" : "258"
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
                    "s" : [ " ", "before month of", " " ],
                    "r" : "270"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "23", ")" ],
                        "r" : "264"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "269"
                  },
                  "globalScope" : true
                } ],
                "r" : "270"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "Before",
          "localId" : "270",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "263",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "258",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "259",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "260",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "22"
            }
          }, {
            "type" : "Date",
            "localId" : "269",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "264",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "265",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "266",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "SameMonth",
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
                "s" : [ "", "define ", "MonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "22", ")" ],
                        "r" : "273"
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
                    "s" : [ " ", "before month of", " " ],
                    "r" : "285"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ", ", "23", ")" ],
                        "r" : "279"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "284"
                  },
                  "globalScope" : true
                } ],
                "r" : "285"
              },
              "globalScope" : true
            } ],
            "r" : "272"
          }
        } ],
        "localId" : "272",
        "expression" : {
          "type" : "Before",
          "localId" : "285",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "278",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "273",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "274",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "275",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "22"
            }
          }, {
            "type" : "Date",
            "localId" : "284",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "279",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "280",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "281",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "MonthAfter",
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
                "s" : [ "", "define ", "MonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "22", ")" ],
                        "r" : "288"
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
                    "s" : [ " ", "before month of", " " ],
                    "r" : "300"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ", ", "23", ")" ],
                        "r" : "294"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                } ],
                "r" : "300"
              },
              "globalScope" : true
            } ],
            "r" : "287"
          }
        } ],
        "localId" : "287",
        "expression" : {
          "type" : "Before",
          "localId" : "300",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "293",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "288",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "289",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "290",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "22"
            }
          }, {
            "type" : "Date",
            "localId" : "299",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "294",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "295",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "296",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23"
            }
          } ],
          "precision" : "Month"
        },
        "name" : "MonthBefore",
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
                "s" : [ "", "define ", "SameDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "303"
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
                    "s" : [ " ", "before day of", " " ],
                    "r" : "315"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "309"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "314"
                  },
                  "globalScope" : true
                } ],
                "r" : "315"
              },
              "globalScope" : true
            } ],
            "r" : "302"
          }
        } ],
        "localId" : "302",
        "expression" : {
          "type" : "Before",
          "localId" : "315",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "308",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "303",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "304",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "305",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "314",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "309",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "310",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "311",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "SameDay",
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
                "s" : [ "", "define ", "DayAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "318"
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
                    "s" : [ " ", "before day of", " " ],
                    "r" : "330"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "14", ")" ],
                        "r" : "324"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "329"
                  },
                  "globalScope" : true
                } ],
                "r" : "330"
              },
              "globalScope" : true
            } ],
            "r" : "317"
          }
        } ],
        "localId" : "317",
        "expression" : {
          "type" : "Before",
          "localId" : "330",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "323",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "318",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "319",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "320",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "329",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "324",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "325",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "326",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayAfter",
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
                "s" : [ "", "define ", "DayBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "333"
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
                    "s" : [ " ", "before day of", " " ],
                    "r" : "345"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "16", ")" ],
                        "r" : "339"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "344"
                  },
                  "globalScope" : true
                } ],
                "r" : "345"
              },
              "globalScope" : true
            } ],
            "r" : "332"
          }
        } ],
        "localId" : "332",
        "expression" : {
          "type" : "Before",
          "localId" : "345",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "338",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "333",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "334",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "335",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "344",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "339",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "340",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "341",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "DayBefore",
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
                "s" : [ "", "define ", "Same", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "348"
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
                    "s" : [ " ", "before", " " ],
                    "r" : "360"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "354"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "359"
                  },
                  "globalScope" : true
                } ],
                "r" : "360"
              },
              "globalScope" : true
            } ],
            "r" : "347"
          }
        } ],
        "localId" : "347",
        "expression" : {
          "type" : "Before",
          "localId" : "360",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "353",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "348",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "349",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "350",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "359",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "354",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "355",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "356",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Same",
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
                "s" : [ "", "define ", "After", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "363"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "368"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "before", " " ],
                    "r" : "375"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "369"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "374"
                  },
                  "globalScope" : true
                } ],
                "r" : "375"
              },
              "globalScope" : true
            } ],
            "r" : "362"
          }
        } ],
        "localId" : "362",
        "expression" : {
          "type" : "Before",
          "localId" : "375",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "368",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "363",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "364",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "365",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "374",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "369",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "370",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "371",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "After",
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
                "s" : [ "", "define ", "Before", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "14", ")" ],
                        "r" : "378"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "383"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "before", " " ],
                    "r" : "390"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "384"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "389"
                  },
                  "globalScope" : true
                } ],
                "r" : "390"
              },
              "globalScope" : true
            } ],
            "r" : "377"
          }
        } ],
        "localId" : "377",
        "expression" : {
          "type" : "Before",
          "localId" : "390",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "383",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "378",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "379",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "380",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14"
            }
          }, {
            "type" : "Date",
            "localId" : "389",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "384",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "385",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "386",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "Before",
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
                "s" : [ "", "define ", "ImpreciseDay", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "393"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "398"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "before day of", " " ],
                    "r" : "404"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ")" ],
                        "r" : "399"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "403"
                  },
                  "globalScope" : true
                } ],
                "r" : "404"
              },
              "globalScope" : true
            } ],
            "r" : "392"
          }
        } ],
        "localId" : "392",
        "expression" : {
          "type" : "Before",
          "localId" : "404",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "398",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "393",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "394",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "395",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "403",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "399",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "400",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDay",
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
                "s" : [ "", "define ", "ImpreciseDayMonthAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "407"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "412"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "before day of", " " ],
                    "r" : "418"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "2", ")" ],
                        "r" : "413"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "417"
                  },
                  "globalScope" : true
                } ],
                "r" : "418"
              },
              "globalScope" : true
            } ],
            "r" : "406"
          }
        } ],
        "localId" : "406",
        "expression" : {
          "type" : "Before",
          "localId" : "418",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "412",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "407",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "408",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "409",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "417",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "413",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "414",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDayMonthAfter",
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
                "s" : [ "", "define ", "ImpreciseDayMonthBefore", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "421"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "426"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "before day of", " " ],
                    "r" : "432"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "4", ")" ],
                        "r" : "427"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "431"
                  },
                  "globalScope" : true
                } ],
                "r" : "432"
              },
              "globalScope" : true
            } ],
            "r" : "420"
          }
        } ],
        "localId" : "420",
        "expression" : {
          "type" : "Before",
          "localId" : "432",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "426",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "421",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "422",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "423",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "Date",
            "localId" : "431",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "427",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "428",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            }
          } ],
          "precision" : "Day"
        },
        "name" : "ImpreciseDayMonthBefore",
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
                "s" : [ "", "define ", "NullLeft", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " ", "before", " " ],
                    "r" : "435"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "436"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "441"
                  },
                  "globalScope" : true
                } ],
                "r" : "442"
              },
              "globalScope" : true
            } ],
            "r" : "434"
          }
        } ],
        "localId" : "434",
        "expression" : {
          "type" : "Before",
          "localId" : "442",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "443",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "435"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          }, {
            "type" : "Date",
            "localId" : "441",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "436",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "437",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "438",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          } ]
        },
        "name" : "NullLeft",
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
                "s" : [ "", "define ", "NullRight", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "Date", "(", "2000", ", ", "3", ", ", "15", ")" ],
                        "r" : "446"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "451"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "before", " ", "null" ],
                    "r" : "453"
                  },
                  "globalScope" : true
                } ],
                "r" : "453"
              },
              "globalScope" : true
            } ],
            "r" : "445"
          }
        } ],
        "localId" : "445",
        "expression" : {
          "type" : "Before",
          "localId" : "453",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Date",
            "localId" : "451",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "446",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "447",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "448",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15"
            }
          }, {
            "type" : "As",
            "localId" : "454",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "452"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullRight",
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
                "s" : [ "", "define ", "NullBoth", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "null", " as " ],
                            "r" : "458"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "Date" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "459"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "457"
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
                    "r" : "457"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "before", " ", "null" ],
                    "r" : "461"
                  },
                  "globalScope" : true
                } ],
                "r" : "461"
              },
              "globalScope" : true
            } ],
            "r" : "456"
          }
        } ],
        "localId" : "456",
        "expression" : {
          "type" : "Before",
          "localId" : "461",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "457",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "458"
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "459",
              "name" : "{urn:hl7-org:elm-types:r1}Date"
            },
            "strict" : false
          }, {
            "type" : "As",
            "localId" : "462",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "460"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Date"
          } ]
        },
        "name" : "NullBoth",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* DifferenceBetween
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NewYear2013: Date(2013, 1, 1)
define NewYear2014: Date(2014, 1, 1)
define January2014: Date(2014, 1)
define YearsBetween: difference in years between NewYear2013 and NewYear2014
define MonthsBetween: difference in months between NewYear2013 and NewYear2014
define WeeksBetween: difference in weeks between NewYear2013 and NewYear2014
define DaysBetween: difference in days between NewYear2013 and NewYear2014
define YearsBetweenUncertainty: difference in years between NewYear2014 and January2014
define MonthsBetweenUncertainty: difference in months between NewYear2014 and January2014
define WeeksBetweenUncertainty: difference in weeks between NewYear2014 and January2014
define DaysBetweenUncertainty: difference in days between NewYear2014 and January2014
*/

module.exports['DifferenceBetween'] = {
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
        "r" : "270"
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
                "s" : [ "", "define ", "NewYear2013", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2013", ", ", "1", ", ", "1", ")" ],
                    "r" : "213"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Date",
          "localId" : "218",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2013"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          },
          "day" : {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }
        },
        "name" : "NewYear2013",
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
                "s" : [ "", "define ", "NewYear2014", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2014", ", ", "1", ", ", "1", ")" ],
                    "r" : "221"
                  },
                  "globalScope" : true
                } ],
                "r" : "226"
              },
              "globalScope" : true
            } ],
            "r" : "220"
          }
        } ],
        "localId" : "220",
        "expression" : {
          "type" : "Date",
          "localId" : "226",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "221",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2014"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "222",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          },
          "day" : {
            "type" : "Literal",
            "localId" : "223",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }
        },
        "name" : "NewYear2014",
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
                "s" : [ "", "define ", "January2014", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2014", ", ", "1", ")" ],
                    "r" : "229"
                  },
                  "globalScope" : true
                } ],
                "r" : "233"
              },
              "globalScope" : true
            } ],
            "r" : "228"
          }
        } ],
        "localId" : "228",
        "expression" : {
          "type" : "Date",
          "localId" : "233",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "229",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2014"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "230",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }
        },
        "name" : "January2014",
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
                "s" : [ "", "define ", "YearsBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "difference in years between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2013" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2014" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "238"
                  },
                  "globalScope" : true
                } ],
                "r" : "236"
              },
              "globalScope" : true
            } ],
            "r" : "235"
          }
        } ],
        "localId" : "235",
        "expression" : {
          "type" : "DifferenceBetween",
          "localId" : "236",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "237",
            "name" : "NewYear2013"
          }, {
            "type" : "ExpressionRef",
            "localId" : "238",
            "name" : "NewYear2014"
          } ],
          "precision" : "Year"
        },
        "name" : "YearsBetween",
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
                "s" : [ "", "define ", "MonthsBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "difference in months between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2013" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2014" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "243"
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
          "type" : "DifferenceBetween",
          "localId" : "241",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "242",
            "name" : "NewYear2013"
          }, {
            "type" : "ExpressionRef",
            "localId" : "243",
            "name" : "NewYear2014"
          } ],
          "precision" : "Month"
        },
        "name" : "MonthsBetween",
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
                "s" : [ "", "define ", "WeeksBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "difference in weeks between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2013" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2014" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "248"
                  },
                  "globalScope" : true
                } ],
                "r" : "246"
              },
              "globalScope" : true
            } ],
            "r" : "245"
          }
        } ],
        "localId" : "245",
        "expression" : {
          "type" : "DifferenceBetween",
          "localId" : "246",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "247",
            "name" : "NewYear2013"
          }, {
            "type" : "ExpressionRef",
            "localId" : "248",
            "name" : "NewYear2014"
          } ],
          "precision" : "Week"
        },
        "name" : "WeeksBetween",
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
                "s" : [ "", "define ", "DaysBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "difference in days between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2013" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2014" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "253"
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
          "type" : "DifferenceBetween",
          "localId" : "251",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "252",
            "name" : "NewYear2013"
          }, {
            "type" : "ExpressionRef",
            "localId" : "253",
            "name" : "NewYear2014"
          } ],
          "precision" : "Day"
        },
        "name" : "DaysBetween",
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
                "s" : [ "", "define ", "YearsBetweenUncertainty", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "difference in years between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2014" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "January2014" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "258"
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
          "type" : "DifferenceBetween",
          "localId" : "256",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "257",
            "name" : "NewYear2014"
          }, {
            "type" : "ExpressionRef",
            "localId" : "258",
            "name" : "January2014"
          } ],
          "precision" : "Year"
        },
        "name" : "YearsBetweenUncertainty",
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
                "s" : [ "", "define ", "MonthsBetweenUncertainty", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "difference in months between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2014" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "January2014" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "263"
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
          "type" : "DifferenceBetween",
          "localId" : "261",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "262",
            "name" : "NewYear2014"
          }, {
            "type" : "ExpressionRef",
            "localId" : "263",
            "name" : "January2014"
          } ],
          "precision" : "Month"
        },
        "name" : "MonthsBetweenUncertainty",
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
                "s" : [ "", "define ", "WeeksBetweenUncertainty", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "difference in weeks between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2014" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "January2014" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "268"
                  },
                  "globalScope" : true
                } ],
                "r" : "266"
              },
              "globalScope" : true
            } ],
            "r" : "265"
          }
        } ],
        "localId" : "265",
        "expression" : {
          "type" : "DifferenceBetween",
          "localId" : "266",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "267",
            "name" : "NewYear2014"
          }, {
            "type" : "ExpressionRef",
            "localId" : "268",
            "name" : "January2014"
          } ],
          "precision" : "Week"
        },
        "name" : "WeeksBetweenUncertainty",
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
                "s" : [ "", "define ", "DaysBetweenUncertainty", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "difference in days between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "NewYear2014" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "January2014" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "273"
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
          "type" : "DifferenceBetween",
          "localId" : "271",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "272",
            "name" : "NewYear2014"
          }, {
            "type" : "ExpressionRef",
            "localId" : "273",
            "name" : "January2014"
          } ],
          "precision" : "Day"
        },
        "name" : "DaysBetweenUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* DifferenceBetween Comparisons
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NewYear2014: Date(2014, 1, 1)
define February2014: Date(2014, 2)
define GreaterThan25DaysAfter: difference in days between NewYear2014 and February2014 > 25
define GreaterThan40DaysAfter: difference in days between NewYear2014 and February2014 > 40
define GreaterThan80DaysAfter: difference in days between NewYear2014 and February2014 > 80
define GreaterOrEqualTo25DaysAfter: difference in days between NewYear2014 and February2014 >= 25
define GreaterOrEqualTo40DaysAfter: difference in days between NewYear2014 and February2014 >= 40
define GreaterOrEqualTo80DaysAfter: difference in days between NewYear2014 and February2014 >= 80
define EqualTo25DaysAfter: difference in days between NewYear2014 and February2014 = 25
define EqualTo40DaysAfter: difference in days between NewYear2014 and February2014 = 40
define EqualTo80DaysAfter: difference in days between NewYear2014 and February2014 = 80
define LessOrEqualTo25DaysAfter: difference in days between NewYear2014 and February2014 <= 25
define LessOrEqualTo40DaysAfter: difference in days between NewYear2014 and February2014 <= 40
define LessOrEqualTo80DaysAfter: difference in days between NewYear2014 and February2014 <= 80
define LessThan25DaysAfter: difference in days between NewYear2014 and February2014 < 25
define LessThan40DaysAfter: difference in days between NewYear2014 and February2014 < 40
define LessThan80DaysAfter: difference in days between NewYear2014 and February2014 < 80
define TwentyFiveDaysLessThanDaysBetween: 25 < difference in days between NewYear2014 and February2014
define FortyDaysEqualToDaysBetween: 40 = difference in days between NewYear2014 and February2014
define TwentyFiveDaysGreaterThanDaysBetween: 25 > difference in days between NewYear2014 and February2014
*/

module.exports['DifferenceBetween Comparisons'] = {
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
        "r" : "346"
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
                "s" : [ "", "define ", "NewYear2014", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2014", ", ", "1", ", ", "1", ")" ],
                    "r" : "213"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Date",
          "localId" : "218",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2014"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          },
          "day" : {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }
        },
        "name" : "NewYear2014",
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
                "s" : [ "", "define ", "February2014", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2014", ", ", "2", ")" ],
                    "r" : "221"
                  },
                  "globalScope" : true
                } ],
                "r" : "225"
              },
              "globalScope" : true
            } ],
            "r" : "220"
          }
        } ],
        "localId" : "220",
        "expression" : {
          "type" : "Date",
          "localId" : "225",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "221",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2014"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "222",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2"
          }
        },
        "name" : "February2014",
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
                "s" : [ "", "define ", "GreaterThan25DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "231"
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
                    "s" : [ " ", ">", " ", "25" ],
                    "r" : "232"
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
          "type" : "Greater",
          "localId" : "228",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "229",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "230",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "231",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "232",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "25"
          } ]
        },
        "name" : "GreaterThan25DaysAfter",
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
                "s" : [ "", "define ", "GreaterThan40DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "238"
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
                    "s" : [ " ", ">", " ", "40" ],
                    "r" : "239"
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
          "type" : "Greater",
          "localId" : "235",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "236",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "237",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "238",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "239",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "40"
          } ]
        },
        "name" : "GreaterThan40DaysAfter",
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
                "s" : [ "", "define ", "GreaterThan80DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "245"
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
                    "s" : [ " ", ">", " ", "80" ],
                    "r" : "246"
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
          "type" : "Greater",
          "localId" : "242",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "243",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "244",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "245",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "246",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "80"
          } ]
        },
        "name" : "GreaterThan80DaysAfter",
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
                "s" : [ "", "define ", "GreaterOrEqualTo25DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "252"
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
                    "s" : [ " ", ">=", " ", "25" ],
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
          "type" : "GreaterOrEqual",
          "localId" : "249",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "250",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "251",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "252",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "253",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "25"
          } ]
        },
        "name" : "GreaterOrEqualTo25DaysAfter",
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
                "s" : [ "", "define ", "GreaterOrEqualTo40DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "259"
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
                    "s" : [ " ", ">=", " ", "40" ],
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
          "type" : "GreaterOrEqual",
          "localId" : "256",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "257",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "258",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "259",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "260",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "40"
          } ]
        },
        "name" : "GreaterOrEqualTo40DaysAfter",
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
                "s" : [ "", "define ", "GreaterOrEqualTo80DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "266"
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
                    "s" : [ " ", ">=", " ", "80" ],
                    "r" : "267"
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
          "type" : "GreaterOrEqual",
          "localId" : "263",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "264",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "265",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "266",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "267",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "80"
          } ]
        },
        "name" : "GreaterOrEqualTo80DaysAfter",
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
                "s" : [ "", "define ", "EqualTo25DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "273"
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
                    "s" : [ " ", "=", " ", "25" ],
                    "r" : "274"
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
          "type" : "Equal",
          "localId" : "270",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "271",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "272",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "273",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "274",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "25"
          } ]
        },
        "name" : "EqualTo25DaysAfter",
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
                "s" : [ "", "define ", "EqualTo40DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "280"
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
                    "s" : [ " ", "=", " ", "40" ],
                    "r" : "281"
                  },
                  "globalScope" : true
                } ],
                "r" : "277"
              },
              "globalScope" : true
            } ],
            "r" : "276"
          }
        } ],
        "localId" : "276",
        "expression" : {
          "type" : "Equal",
          "localId" : "277",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "278",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "279",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "280",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "281",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "40"
          } ]
        },
        "name" : "EqualTo40DaysAfter",
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
                "s" : [ "", "define ", "EqualTo80DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "287"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "285"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "=", " ", "80" ],
                    "r" : "288"
                  },
                  "globalScope" : true
                } ],
                "r" : "284"
              },
              "globalScope" : true
            } ],
            "r" : "283"
          }
        } ],
        "localId" : "283",
        "expression" : {
          "type" : "Equal",
          "localId" : "284",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "285",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "286",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "287",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "288",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "80"
          } ]
        },
        "name" : "EqualTo80DaysAfter",
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
                "s" : [ "", "define ", "LessOrEqualTo25DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "294"
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
                    "s" : [ " ", "<=", " ", "25" ],
                    "r" : "295"
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
          "type" : "LessOrEqual",
          "localId" : "291",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "292",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "293",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "294",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "295",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "25"
          } ]
        },
        "name" : "LessOrEqualTo25DaysAfter",
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
                "s" : [ "", "define ", "LessOrEqualTo40DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "301"
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
                    "s" : [ " ", "<=", " ", "40" ],
                    "r" : "302"
                  },
                  "globalScope" : true
                } ],
                "r" : "298"
              },
              "globalScope" : true
            } ],
            "r" : "297"
          }
        } ],
        "localId" : "297",
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "298",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "299",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "300",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "301",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "302",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "40"
          } ]
        },
        "name" : "LessOrEqualTo40DaysAfter",
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
                "s" : [ "", "define ", "LessOrEqualTo80DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "307"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "308"
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
                    "s" : [ " ", "<=", " ", "80" ],
                    "r" : "309"
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
          "type" : "LessOrEqual",
          "localId" : "305",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "306",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "307",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "308",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "309",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "80"
          } ]
        },
        "name" : "LessOrEqualTo80DaysAfter",
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
                "s" : [ "", "define ", "LessThan25DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "315"
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
                    "s" : [ " ", "<", " ", "25" ],
                    "r" : "316"
                  },
                  "globalScope" : true
                } ],
                "r" : "312"
              },
              "globalScope" : true
            } ],
            "r" : "311"
          }
        } ],
        "localId" : "311",
        "expression" : {
          "type" : "Less",
          "localId" : "312",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "313",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "314",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "315",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "316",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "25"
          } ]
        },
        "name" : "LessThan25DaysAfter",
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
                "s" : [ "", "define ", "LessThan40DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "322"
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
                    "s" : [ " ", "<", " ", "40" ],
                    "r" : "323"
                  },
                  "globalScope" : true
                } ],
                "r" : "319"
              },
              "globalScope" : true
            } ],
            "r" : "318"
          }
        } ],
        "localId" : "318",
        "expression" : {
          "type" : "Less",
          "localId" : "319",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "320",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "321",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "322",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "323",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "40"
          } ]
        },
        "name" : "LessThan40DaysAfter",
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
                "s" : [ "", "define ", "LessThan80DaysAfter", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
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
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "329"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "327"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " ", "<", " ", "80" ],
                    "r" : "330"
                  },
                  "globalScope" : true
                } ],
                "r" : "326"
              },
              "globalScope" : true
            } ],
            "r" : "325"
          }
        } ],
        "localId" : "325",
        "expression" : {
          "type" : "Less",
          "localId" : "326",
          "signature" : [ ],
          "operand" : [ {
            "type" : "DifferenceBetween",
            "localId" : "327",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "328",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "329",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          }, {
            "type" : "Literal",
            "localId" : "330",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "80"
          } ]
        },
        "name" : "LessThan80DaysAfter",
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
                "s" : [ "", "define ", "TwentyFiveDaysLessThanDaysBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "25", " ", "<", " " ],
                    "r" : "334"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "336"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "337"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "335"
                  },
                  "globalScope" : true
                } ],
                "r" : "333"
              },
              "globalScope" : true
            } ],
            "r" : "332"
          }
        } ],
        "localId" : "332",
        "expression" : {
          "type" : "Less",
          "localId" : "333",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "334",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "25"
          }, {
            "type" : "DifferenceBetween",
            "localId" : "335",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "336",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "337",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          } ]
        },
        "name" : "TwentyFiveDaysLessThanDaysBetween",
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
                "s" : [ "", "define ", "FortyDaysEqualToDaysBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "40", " ", "=", " " ],
                    "r" : "341"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "343"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "344"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "342"
                  },
                  "globalScope" : true
                } ],
                "r" : "340"
              },
              "globalScope" : true
            } ],
            "r" : "339"
          }
        } ],
        "localId" : "339",
        "expression" : {
          "type" : "Equal",
          "localId" : "340",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "341",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "40"
          }, {
            "type" : "DifferenceBetween",
            "localId" : "342",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "343",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "344",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          } ]
        },
        "name" : "FortyDaysEqualToDaysBetween",
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
                "s" : [ "", "define ", "TwentyFiveDaysGreaterThanDaysBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "25", " ", ">", " " ],
                    "r" : "348"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "difference in days between " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "NewYear2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "350"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ " and " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "February2014" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "351"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "349"
                  },
                  "globalScope" : true
                } ],
                "r" : "347"
              },
              "globalScope" : true
            } ],
            "r" : "346"
          }
        } ],
        "localId" : "346",
        "expression" : {
          "type" : "Greater",
          "localId" : "347",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "348",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "25"
          }, {
            "type" : "DifferenceBetween",
            "localId" : "349",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "350",
              "name" : "NewYear2014"
            }, {
              "type" : "ExpressionRef",
              "localId" : "351",
              "name" : "February2014"
            } ],
            "precision" : "Day"
          } ]
        },
        "name" : "TwentyFiveDaysGreaterThanDaysBetween",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* DurationBetween
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define DecTen2013: Date(2013, 12, 10)
define JanOne2015: Date(2015, 1, 1)
define January2015: Date(2015, 1)
define YearsBetween: years between DecTen2013 and JanOne2015
define MonthsBetween: months between DecTen2013 and JanOne2015
define WeeksBetween: weeks between DecTen2013 and JanOne2015
define DaysBetween: days between DecTen2013 and JanOne2015
define YearsBetweenUncertainty: years between JanOne2015 and January2015
define MonthsBetweenUncertainty: months between JanOne2015 and January2015
define WeeksBetweenUncertainty: weeks between JanOne2015 and January2015
define DaysBetweenUncertainty: days between JanOne2015 and January2015
*/

module.exports['DurationBetween'] = {
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
        "r" : "270"
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
                "s" : [ "", "define ", "DecTen2013", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2013", ", ", "12", ", ", "10", ")" ],
                    "r" : "213"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Date",
          "localId" : "218",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2013"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "12"
          },
          "day" : {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10"
          }
        },
        "name" : "DecTen2013",
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
                "s" : [ "", "define ", "JanOne2015", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2015", ", ", "1", ", ", "1", ")" ],
                    "r" : "221"
                  },
                  "globalScope" : true
                } ],
                "r" : "226"
              },
              "globalScope" : true
            } ],
            "r" : "220"
          }
        } ],
        "localId" : "220",
        "expression" : {
          "type" : "Date",
          "localId" : "226",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "221",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2015"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "222",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          },
          "day" : {
            "type" : "Literal",
            "localId" : "223",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }
        },
        "name" : "JanOne2015",
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
                "s" : [ "", "define ", "January2015", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2015", ", ", "1", ")" ],
                    "r" : "229"
                  },
                  "globalScope" : true
                } ],
                "r" : "233"
              },
              "globalScope" : true
            } ],
            "r" : "228"
          }
        } ],
        "localId" : "228",
        "expression" : {
          "type" : "Date",
          "localId" : "233",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "229",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2015"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "230",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }
        },
        "name" : "January2015",
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
                "s" : [ "", "define ", "YearsBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "years between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "DecTen2013" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "JanOne2015" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "238"
                  },
                  "globalScope" : true
                } ],
                "r" : "236"
              },
              "globalScope" : true
            } ],
            "r" : "235"
          }
        } ],
        "localId" : "235",
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "236",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "237",
            "name" : "DecTen2013"
          }, {
            "type" : "ExpressionRef",
            "localId" : "238",
            "name" : "JanOne2015"
          } ],
          "precision" : "Year"
        },
        "name" : "YearsBetween",
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
                "s" : [ "", "define ", "MonthsBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "months between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "DecTen2013" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "JanOne2015" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "243"
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
          "type" : "DurationBetween",
          "localId" : "241",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "242",
            "name" : "DecTen2013"
          }, {
            "type" : "ExpressionRef",
            "localId" : "243",
            "name" : "JanOne2015"
          } ],
          "precision" : "Month"
        },
        "name" : "MonthsBetween",
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
                "s" : [ "", "define ", "WeeksBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "weeks between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "DecTen2013" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "JanOne2015" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "248"
                  },
                  "globalScope" : true
                } ],
                "r" : "246"
              },
              "globalScope" : true
            } ],
            "r" : "245"
          }
        } ],
        "localId" : "245",
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "246",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "247",
            "name" : "DecTen2013"
          }, {
            "type" : "ExpressionRef",
            "localId" : "248",
            "name" : "JanOne2015"
          } ],
          "precision" : "Week"
        },
        "name" : "WeeksBetween",
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
                "s" : [ "", "define ", "DaysBetween", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "days between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "DecTen2013" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "JanOne2015" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "253"
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
          "type" : "DurationBetween",
          "localId" : "251",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "252",
            "name" : "DecTen2013"
          }, {
            "type" : "ExpressionRef",
            "localId" : "253",
            "name" : "JanOne2015"
          } ],
          "precision" : "Day"
        },
        "name" : "DaysBetween",
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
                "s" : [ "", "define ", "YearsBetweenUncertainty", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "years between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "JanOne2015" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "January2015" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "258"
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
          "type" : "DurationBetween",
          "localId" : "256",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "257",
            "name" : "JanOne2015"
          }, {
            "type" : "ExpressionRef",
            "localId" : "258",
            "name" : "January2015"
          } ],
          "precision" : "Year"
        },
        "name" : "YearsBetweenUncertainty",
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
                "s" : [ "", "define ", "MonthsBetweenUncertainty", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "months between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "JanOne2015" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "January2015" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "263"
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
          "type" : "DurationBetween",
          "localId" : "261",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "262",
            "name" : "JanOne2015"
          }, {
            "type" : "ExpressionRef",
            "localId" : "263",
            "name" : "January2015"
          } ],
          "precision" : "Month"
        },
        "name" : "MonthsBetweenUncertainty",
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
                "s" : [ "", "define ", "WeeksBetweenUncertainty", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "weeks between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "JanOne2015" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "January2015" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "268"
                  },
                  "globalScope" : true
                } ],
                "r" : "266"
              },
              "globalScope" : true
            } ],
            "r" : "265"
          }
        } ],
        "localId" : "265",
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "266",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "267",
            "name" : "JanOne2015"
          }, {
            "type" : "ExpressionRef",
            "localId" : "268",
            "name" : "January2015"
          } ],
          "precision" : "Week"
        },
        "name" : "WeeksBetweenUncertainty",
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
                "s" : [ "", "define ", "DaysBetweenUncertainty", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "days between " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "JanOne2015" ]
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
                    "s" : [ " and " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "January2015" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "273"
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
          "type" : "DurationBetween",
          "localId" : "271",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "272",
            "name" : "JanOne2015"
          }, {
            "type" : "ExpressionRef",
            "localId" : "273",
            "name" : "January2015"
          } ],
          "precision" : "Day"
        },
        "name" : "DaysBetweenUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* DateMath
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define June15th2013: Date(2013, 6, 15)
define PlusThreeYears: June15th2013 + 3 years
define MinusThreeYears: June15th2013 - 3 years
define PlusEightMonths: June15th2013 + 8 months
define MinusEightMonths: June15th2013 - 8 months
define PlusThreeWeeks: June15th2013 + 3 weeks
define MinusThreeWeeks: June15th2013 - 3 weeks
define PlusTwentyDays: June15th2013 + 20 days
define MinusTwentyDays: June15th2013 - 20 days
*/

module.exports['DateMath'] = {
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
        "r" : "255"
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
                "s" : [ "", "define ", "June15th2013", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Date", "(", "2013", ", ", "6", ", ", "15", ")" ],
                    "r" : "213"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Date",
          "localId" : "218",
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2013"
          },
          "month" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "6"
          },
          "day" : {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "15"
          }
        },
        "name" : "June15th2013",
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
                "s" : [ "", "define ", "PlusThreeYears", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "June15th2013" ]
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
                    "s" : [ " + " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "3 ", "years" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "223"
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
          "type" : "Add",
          "localId" : "221",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "222",
            "name" : "June15th2013"
          }, {
            "type" : "Quantity",
            "localId" : "223",
            "value" : 3.0,
            "unit" : "years"
          } ]
        },
        "name" : "PlusThreeYears",
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
                "s" : [ "", "define ", "MinusThreeYears", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "June15th2013" ]
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
                    "s" : [ " - " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "3 ", "years" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "228"
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
          "type" : "Subtract",
          "localId" : "226",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "227",
            "name" : "June15th2013"
          }, {
            "type" : "Quantity",
            "localId" : "228",
            "value" : 3.0,
            "unit" : "years"
          } ]
        },
        "name" : "MinusThreeYears",
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
                "s" : [ "", "define ", "PlusEightMonths", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "June15th2013" ]
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
                    "s" : [ " + " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "8 ", "months" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "233"
                  },
                  "globalScope" : true
                } ],
                "r" : "231"
              },
              "globalScope" : true
            } ],
            "r" : "230"
          }
        } ],
        "localId" : "230",
        "expression" : {
          "type" : "Add",
          "localId" : "231",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "232",
            "name" : "June15th2013"
          }, {
            "type" : "Quantity",
            "localId" : "233",
            "value" : 8.0,
            "unit" : "months"
          } ]
        },
        "name" : "PlusEightMonths",
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
                "s" : [ "", "define ", "MinusEightMonths", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "June15th2013" ]
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
                    "s" : [ " - " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "8 ", "months" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "238"
                  },
                  "globalScope" : true
                } ],
                "r" : "236"
              },
              "globalScope" : true
            } ],
            "r" : "235"
          }
        } ],
        "localId" : "235",
        "expression" : {
          "type" : "Subtract",
          "localId" : "236",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "237",
            "name" : "June15th2013"
          }, {
            "type" : "Quantity",
            "localId" : "238",
            "value" : 8.0,
            "unit" : "months"
          } ]
        },
        "name" : "MinusEightMonths",
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
                "s" : [ "", "define ", "PlusThreeWeeks", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "June15th2013" ]
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
                    "s" : [ " + " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "3 ", "weeks" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "243"
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
          "type" : "Add",
          "localId" : "241",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "242",
            "name" : "June15th2013"
          }, {
            "type" : "Quantity",
            "localId" : "243",
            "value" : 3.0,
            "unit" : "weeks"
          } ]
        },
        "name" : "PlusThreeWeeks",
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
                "s" : [ "", "define ", "MinusThreeWeeks", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "June15th2013" ]
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
                    "s" : [ " - " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "3 ", "weeks" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "248"
                  },
                  "globalScope" : true
                } ],
                "r" : "246"
              },
              "globalScope" : true
            } ],
            "r" : "245"
          }
        } ],
        "localId" : "245",
        "expression" : {
          "type" : "Subtract",
          "localId" : "246",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "247",
            "name" : "June15th2013"
          }, {
            "type" : "Quantity",
            "localId" : "248",
            "value" : 3.0,
            "unit" : "weeks"
          } ]
        },
        "name" : "MinusThreeWeeks",
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
                "s" : [ "", "define ", "PlusTwentyDays", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "June15th2013" ]
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
                    "s" : [ " + " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "20 ", "days" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "253"
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
          "type" : "Add",
          "localId" : "251",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "252",
            "name" : "June15th2013"
          }, {
            "type" : "Quantity",
            "localId" : "253",
            "value" : 20.0,
            "unit" : "days"
          } ]
        },
        "name" : "PlusTwentyDays",
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
                "s" : [ "", "define ", "MinusTwentyDays", ": " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ "June15th2013" ]
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
                    "s" : [ " - " ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "20 ", "days" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "258"
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
          "type" : "Subtract",
          "localId" : "256",
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "257",
            "name" : "June15th2013"
          }, {
            "type" : "Quantity",
            "localId" : "258",
            "value" : 20.0,
            "unit" : "days"
          } ]
        },
        "name" : "MinusTwentyDays",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

