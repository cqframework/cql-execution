/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Age
library TestSnippet version '1'
using Simple version '1.0.0'
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define Age:
  AgeInYearsAt(start of MeasurementPeriod)

define InDemographic:
  AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18  


context Unfiltered

define AgeSum: Sum(Age)

define DEMO: Count(InDemographic w where w is true )

define AgeSumRef : AgeSum
*/

module.exports['Age'] = {
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
        "r" : "273"
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
    "parameters" : {
      "def" : [ {
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "parameter ", "MeasurementPeriod", " default " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Interval[" ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "DateTime", "(", "2013", ", ", "1", ", ", "1", ")" ],
                        "r" : "208"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "213"
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
                        "s" : [ "DateTime", "(", "2014", ", ", "1", ", ", "1", ")" ],
                        "r" : "214"
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
                    "s" : [ ")" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "220"
              },
              "globalScope" : true
            } ],
            "r" : "207"
          }
        } ],
        "localId" : "207",
        "default" : {
          "type" : "Interval",
          "localId" : "220",
          "low" : {
            "type" : "DateTime",
            "localId" : "213",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "208",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2013"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "209",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "210",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1"
            }
          },
          "high" : {
            "type" : "DateTime",
            "localId" : "219",
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "214",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2014"
            },
            "month" : {
              "type" : "Literal",
              "localId" : "215",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1"
            },
            "day" : {
              "type" : "Literal",
              "localId" : "216",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1"
            }
          },
          "lowClosed" : true,
          "highClosed" : false
        },
        "name" : "MeasurementPeriod",
        "accessLevel" : "Public"
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "224",
        "name" : "Patient"
      }, {
        "localId" : "255",
        "name" : "Unfiltered"
      } ]
    },
    "statements" : {
      "def" : [ {
        "type" : "ExpressionDef",
        "localId" : "222",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "223",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "221",
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
                "s" : [ "", "define ", "Age", ":\n  " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "AgeInYearsAt", "(" ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "start of " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "MeasurementPeriod" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "228"
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
                "r" : "233"
              },
              "globalScope" : true
            } ],
            "r" : "226"
          }
        } ],
        "localId" : "226",
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "233",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Property",
            "localId" : "232",
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "231",
              "name" : "Patient"
            },
            "path" : "birthDate"
          }, {
            "type" : "Start",
            "localId" : "227",
            "signature" : [ ],
            "operand" : {
              "type" : "ParameterRef",
              "localId" : "228",
              "name" : "MeasurementPeriod"
            }
          } ],
          "precision" : "Year"
        },
        "name" : "Age",
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
                "s" : [ "", "define ", "InDemographic", ":\n  " ]
              },
              "globalScope" : true
            }, {
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
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "AgeInYearsAt", "(" ]
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "start of " ]
                              },
                              "globalScope" : true
                            }, {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ {
                                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                                  "value" : {
                                    "s" : [ "MeasurementPeriod" ]
                                  },
                                  "globalScope" : true
                                } ],
                                "r" : "239"
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
                        "r" : "244"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ " ", ">=", " ", "2" ],
                        "r" : "245"
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
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "AgeInYearsAt", "(" ]
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "start of " ]
                              },
                              "globalScope" : true
                            }, {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ {
                                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                                  "value" : {
                                    "s" : [ "MeasurementPeriod" ]
                                  },
                                  "globalScope" : true
                                } ],
                                "r" : "248"
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
                            "s" : [ ")" ]
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
                        "s" : [ " ", "<", " ", "18" ],
                        "r" : "254"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "246"
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
          "type" : "And",
          "localId" : "236",
          "signature" : [ ],
          "operand" : [ {
            "type" : "GreaterOrEqual",
            "localId" : "237",
            "signature" : [ ],
            "operand" : [ {
              "type" : "CalculateAgeAt",
              "localId" : "244",
              "signature" : [ ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "243",
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "242",
                  "name" : "Patient"
                },
                "path" : "birthDate"
              }, {
                "type" : "Start",
                "localId" : "238",
                "signature" : [ ],
                "operand" : {
                  "type" : "ParameterRef",
                  "localId" : "239",
                  "name" : "MeasurementPeriod"
                }
              } ],
              "precision" : "Year"
            }, {
              "type" : "Literal",
              "localId" : "245",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            } ]
          }, {
            "type" : "Less",
            "localId" : "246",
            "signature" : [ ],
            "operand" : [ {
              "type" : "CalculateAgeAt",
              "localId" : "253",
              "signature" : [ ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "252",
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "251",
                  "name" : "Patient"
                },
                "path" : "birthDate"
              }, {
                "type" : "Start",
                "localId" : "247",
                "signature" : [ ],
                "operand" : {
                  "type" : "ParameterRef",
                  "localId" : "248",
                  "name" : "MeasurementPeriod"
                }
              } ],
              "precision" : "Year"
            }, {
              "type" : "Literal",
              "localId" : "254",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "18"
            } ]
          } ]
        },
        "name" : "InDemographic",
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
                "s" : [ "", "define ", "AgeSum", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Sum", "(" ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Age" ]
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
                    "s" : [ ")" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "261"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "Sum",
          "localId" : "261",
          "signature" : [ ],
          "source" : {
            "type" : "ExpressionRef",
            "localId" : "258",
            "name" : "Age"
          }
        },
        "name" : "AgeSum",
        "context" : "Unfiltered",
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
                "s" : [ "", "define ", "DEMO", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Count", "(" ]
                  },
                  "globalScope" : true
                }, {
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
                                    "s" : [ {
                                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                                      "value" : {
                                        "s" : [ "InDemographic" ]
                                      },
                                      "globalScope" : true
                                    } ]
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
                                "s" : [ " ", "w" ]
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
                        "s" : [ " " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "where " ]
                          },
                          "globalScope" : true
                        }, {
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
                                    "s" : [ "w" ]
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
                                "s" : [ " is true" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "267"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "267"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "268"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " )" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "271"
              },
              "globalScope" : true
            } ],
            "r" : "263"
          }
        } ],
        "localId" : "263",
        "expression" : {
          "type" : "Count",
          "localId" : "271",
          "signature" : [ ],
          "source" : {
            "type" : "Query",
            "localId" : "268",
            "source" : [ {
              "type" : "AliasedQuerySource",
              "localId" : "264",
              "expression" : {
                "type" : "ExpressionRef",
                "localId" : "265",
                "name" : "InDemographic"
              },
              "alias" : "w"
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "IsTrue",
              "localId" : "267",
              "signature" : [ ],
              "operand" : {
                "type" : "AliasRef",
                "localId" : "266",
                "name" : "w"
              }
            }
          }
        },
        "name" : "DEMO",
        "context" : "Unfiltered",
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
                "s" : [ "", "define ", "AgeSumRef", " : " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "AgeSum" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "274"
              },
              "globalScope" : true
            } ],
            "r" : "273"
          }
        } ],
        "localId" : "273",
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "274",
          "name" : "AgeSum"
        },
        "name" : "AgeSumRef",
        "context" : "Unfiltered",
        "accessLevel" : "Public"
      } ]
    }
  }
}

