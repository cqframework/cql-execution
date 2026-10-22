/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* oxlint-disable */

/* DateRangeOptimizedQuery
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Ambulatory/ED Visit": '2.16.840.1.113883.3.464.1003.101.12.1061'
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))
context Patient
define EncountersDuringMP: [Encounter] E where E.period during MeasurementPeriod
define AmbulatoryEncountersDuringMP: [Encounter: "Ambulatory/ED Visit"] E where E.period during MeasurementPeriod
define AmbulatoryEncountersIncludedInMP: [Encounter: "Ambulatory/ED Visit"] E where E.period included in MeasurementPeriod
*/

module.exports['DateRangeOptimizedQuery'] = {
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
        "r" : "327",
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
        "localId" : "210",
        "name" : "MeasurementPeriod",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "parameter ", "MeasurementPeriod", " default " ]
            }, {
              "r" : "235",
              "s" : [ {
                "value" : [ "Interval[" ]
              }, {
                "r" : "219",
                "s" : [ {
                  "r" : "211",
                  "value" : [ "DateTime", "(", "2013", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "231",
                "s" : [ {
                  "r" : "223",
                  "value" : [ "DateTime", "(", "2014", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "239",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "default" : {
          "type" : "Interval",
          "localId" : "235",
          "lowClosed" : true,
          "highClosed" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "236",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "237",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "low" : {
            "type" : "DateTime",
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "220",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "222",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "211",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2013",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "212",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "213",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          },
          "high" : {
            "type" : "DateTime",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "223",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2014",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }
        }
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Ambulatory/ED Visit",
        "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Ambulatory/ED Visit\"", ": ", "'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "244",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "242",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "243",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "241",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "247",
        "name" : "EncountersDuringMP",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "EncountersDuringMP", ": " ]
            }, {
              "r" : "278",
              "s" : [ {
                "s" : [ {
                  "r" : "248",
                  "s" : [ {
                    "r" : "249",
                    "s" : [ {
                      "r" : "249",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "266",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "266",
                  "s" : [ {
                    "r" : "258",
                    "s" : [ {
                      "r" : "257",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "258",
                      "s" : [ {
                        "value" : [ "period" ]
                      } ]
                    } ]
                  }, {
                    "r" : "266",
                    "value" : [ " ", "during", " " ]
                  }, {
                    "r" : "263",
                    "s" : [ {
                      "value" : [ "MeasurementPeriod" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "281",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "278",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "279",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "280",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "248",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "254",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "255",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "249",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "dateProperty" : "period",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "252",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "253",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "dateRange" : {
                "type" : "ParameterRef",
                "localId" : "263",
                "name" : "MeasurementPeriod",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "264",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "265",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ]
        }
      }, {
        "localId" : "285",
        "name" : "AmbulatoryEncountersDuringMP",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "285",
            "s" : [ {
              "value" : [ "", "define ", "AmbulatoryEncountersDuringMP", ": " ]
            }, {
              "r" : "320",
              "s" : [ {
                "s" : [ {
                  "r" : "286",
                  "s" : [ {
                    "r" : "289",
                    "s" : [ {
                      "r" : "289",
                      "s" : [ {
                        "value" : [ "[", "Encounter", ": " ]
                      }, {
                        "s" : [ {
                          "value" : [ "\"Ambulatory/ED Visit\"" ]
                        } ]
                      }, {
                        "value" : [ "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "308",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "308",
                  "s" : [ {
                    "r" : "300",
                    "s" : [ {
                      "r" : "299",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "300",
                      "s" : [ {
                        "value" : [ "period" ]
                      } ]
                    } ]
                  }, {
                    "r" : "308",
                    "value" : [ " ", "during", " " ]
                  }, {
                    "r" : "305",
                    "s" : [ {
                      "value" : [ "MeasurementPeriod" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "323",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "324",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "320",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "321",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "322",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "286",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "296",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "297",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "289",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "codeProperty" : "code",
              "codeComparator" : "in",
              "dateProperty" : "period",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "294",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "295",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "codes" : {
                "type" : "ValueSetRef",
                "localId" : "288",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                "name" : "Ambulatory/ED Visit",
                "preserve" : true,
                "annotation" : [ ]
              },
              "dateRange" : {
                "type" : "ParameterRef",
                "localId" : "305",
                "name" : "MeasurementPeriod",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "306",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "307",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ]
        }
      }, {
        "localId" : "327",
        "name" : "AmbulatoryEncountersIncludedInMP",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "327",
            "s" : [ {
              "value" : [ "", "define ", "AmbulatoryEncountersIncludedInMP", ": " ]
            }, {
              "r" : "362",
              "s" : [ {
                "s" : [ {
                  "r" : "328",
                  "s" : [ {
                    "r" : "331",
                    "s" : [ {
                      "r" : "331",
                      "s" : [ {
                        "value" : [ "[", "Encounter", ": " ]
                      }, {
                        "s" : [ {
                          "value" : [ "\"Ambulatory/ED Visit\"" ]
                        } ]
                      }, {
                        "value" : [ "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "350",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "350",
                  "s" : [ {
                    "r" : "342",
                    "s" : [ {
                      "r" : "341",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "342",
                      "s" : [ {
                        "value" : [ "period" ]
                      } ]
                    } ]
                  }, {
                    "r" : "350",
                    "value" : [ " ", "included in", " " ]
                  }, {
                    "r" : "347",
                    "s" : [ {
                      "value" : [ "MeasurementPeriod" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "365",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "366",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "362",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "363",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "364",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "328",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "338",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "339",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "331",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "codeProperty" : "code",
              "codeComparator" : "in",
              "dateProperty" : "period",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "336",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "337",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "codes" : {
                "type" : "ValueSetRef",
                "localId" : "330",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                "name" : "Ambulatory/ED Visit",
                "preserve" : true,
                "annotation" : [ ]
              },
              "dateRange" : {
                "type" : "ParameterRef",
                "localId" : "347",
                "name" : "MeasurementPeriod",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "348",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "349",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ]
        }
      } ]
    }
  }
}

/* FunctionQuery
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function "FunctionWithThis"(Encounter List<"Encounter">): Count(Encounter.period EncounterPeriod return EncounterPeriod)
define queryWithThis: "FunctionWithThis"([Encounter] E) > 0
*/

module.exports['FunctionQuery'] = {
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
        "r" : "260",
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
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FunctionWithThis",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function \"FunctionWithThis\"(Encounter List<\"Encounter\">): " ]
            }, {
              "r" : "254",
              "s" : [ {
                "r" : "254",
                "s" : [ {
                  "value" : [ "Count", "(" ]
                }, {
                  "r" : "245",
                  "s" : [ {
                    "s" : [ {
                      "r" : "220",
                      "s" : [ {
                        "r" : "229",
                        "s" : [ {
                          "s" : [ {
                            "value" : [ "Encounter", ".", "period" ]
                          } ]
                        } ]
                      }, {
                        "value" : [ " ", "EncounterPeriod" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " " ]
                  }, {
                    "r" : "238",
                    "s" : [ {
                      "value" : [ "return " ]
                    }, {
                      "r" : "239",
                      "s" : [ {
                        "value" : [ "EncounterPeriod" ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Count",
          "localId" : "254",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "255",
            "annotation" : [ ],
            "elementType" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "256",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "257",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "245",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "246",
              "annotation" : [ ],
              "elementType" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "247",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            },
            "source" : [ {
              "localId" : "220",
              "alias" : "EncounterPeriod",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "234",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "235",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "236",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "expression" : {
                "type" : "Query",
                "localId" : "229",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "231",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "232",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "233",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                },
                "source" : [ {
                  "localId" : "228",
                  "alias" : "$this",
                  "annotation" : [ ],
                  "expression" : {
                    "type" : "OperandRef",
                    "localId" : "221",
                    "name" : "Encounter",
                    "annotation" : [ ]
                  }
                } ],
                "let" : [ ],
                "relationship" : [ ],
                "where" : {
                  "type" : "Not",
                  "localId" : "225",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : {
                    "type" : "IsNull",
                    "localId" : "224",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "operand" : {
                      "type" : "Property",
                      "localId" : "223",
                      "path" : "period",
                      "annotation" : [ ],
                      "source" : {
                        "type" : "AliasRef",
                        "localId" : "222",
                        "name" : "$this",
                        "annotation" : [ ]
                      }
                    }
                  }
                },
                "return" : {
                  "localId" : "230",
                  "distinct" : false,
                  "annotation" : [ ],
                  "expression" : {
                    "type" : "Property",
                    "localId" : "227",
                    "path" : "period",
                    "annotation" : [ ],
                    "source" : {
                      "type" : "AliasRef",
                      "localId" : "226",
                      "name" : "$this",
                      "annotation" : [ ]
                    }
                  }
                }
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "238",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "242",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "243",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "244",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "expression" : {
                "type" : "AliasRef",
                "localId" : "239",
                "name" : "EncounterPeriod",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "240",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "241",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              }
            }
          }
        },
        "operand" : [ {
          "localId" : "217",
          "name" : "Encounter",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "213",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "215",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "216",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "214",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          }
        } ]
      }, {
        "localId" : "260",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "queryWithThis",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "260",
            "s" : [ {
              "value" : [ "", "define ", "queryWithThis", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "r" : "274",
                "s" : [ {
                  "value" : [ "\"FunctionWithThis\"", "(" ]
                }, {
                  "r" : "271",
                  "s" : [ {
                    "s" : [ {
                      "r" : "262",
                      "s" : [ {
                        "r" : "263",
                        "s" : [ {
                          "r" : "263",
                          "s" : [ {
                            "value" : [ "[", "Encounter", "]" ]
                          } ]
                        } ]
                      }, {
                        "value" : [ " ", "E" ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "277",
                "value" : [ " ", ">", " ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "278",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "FunctionRef",
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FunctionWithThis",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "275",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "276",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ],
            "operand" : [ {
              "type" : "Query",
              "localId" : "271",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "272",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "273",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "source" : [ {
                "localId" : "262",
                "alias" : "E",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "268",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "269",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "expression" : {
                  "type" : "Retrieve",
                  "localId" : "263",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "localId" : "266",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "267",
                      "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                      "annotation" : [ ]
                    }
                  },
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
                }
              } ],
              "let" : [ ],
              "relationship" : [ ]
            } ]
          }, {
            "type" : "Literal",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* IncludesQuery
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Ambulatory/ED Visit": '2.16.840.1.113883.3.464.1003.101.12.1061'
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))
context Patient
define MPIncludedAmbulatoryEncounters: [Encounter: "Ambulatory/ED Visit"] E where MeasurementPeriod includes E.period
*/

module.exports['IncludesQuery'] = {
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
        "r" : "247",
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
        "localId" : "210",
        "name" : "MeasurementPeriod",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "parameter ", "MeasurementPeriod", " default " ]
            }, {
              "r" : "235",
              "s" : [ {
                "value" : [ "Interval[" ]
              }, {
                "r" : "219",
                "s" : [ {
                  "r" : "211",
                  "value" : [ "DateTime", "(", "2013", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "231",
                "s" : [ {
                  "r" : "223",
                  "value" : [ "DateTime", "(", "2014", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "239",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "default" : {
          "type" : "Interval",
          "localId" : "235",
          "lowClosed" : true,
          "highClosed" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "236",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "237",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "low" : {
            "type" : "DateTime",
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "220",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "222",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "211",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2013",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "212",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "213",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          },
          "high" : {
            "type" : "DateTime",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "223",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2014",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }
        }
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Ambulatory/ED Visit",
        "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Ambulatory/ED Visit\"", ": ", "'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "244",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "242",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "243",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "241",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "247",
        "name" : "MPIncludedAmbulatoryEncounters",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "MPIncludedAmbulatoryEncounters", ": " ]
            }, {
              "r" : "282",
              "s" : [ {
                "s" : [ {
                  "r" : "248",
                  "s" : [ {
                    "r" : "251",
                    "s" : [ {
                      "r" : "251",
                      "s" : [ {
                        "value" : [ "[", "Encounter", ": " ]
                      }, {
                        "s" : [ {
                          "value" : [ "\"Ambulatory/ED Visit\"" ]
                        } ]
                      }, {
                        "value" : [ "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "270",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "270",
                  "s" : [ {
                    "r" : "261",
                    "s" : [ {
                      "value" : [ "MeasurementPeriod" ]
                    } ]
                  }, {
                    "r" : "270",
                    "value" : [ " ", "includes", " " ]
                  }, {
                    "r" : "265",
                    "s" : [ {
                      "r" : "264",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "265",
                      "s" : [ {
                        "value" : [ "period" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "285",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "286",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "282",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "283",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "284",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "248",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "258",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "259",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "251",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "codeProperty" : "code",
              "codeComparator" : "in",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "256",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "257",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "codes" : {
                "type" : "ValueSetRef",
                "localId" : "250",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                "name" : "Ambulatory/ED Visit",
                "preserve" : true,
                "annotation" : [ ]
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "where" : {
            "type" : "Includes",
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "IntervalTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "type" : "IntervalTypeSpecifier",
              "localId" : "273",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "274",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ],
            "operand" : [ {
              "type" : "ParameterRef",
              "localId" : "261",
              "name" : "MeasurementPeriod",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "262",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "Property",
              "localId" : "265",
              "path" : "period",
              "scope" : "E",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "268",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            } ]
          }
        }
      } ]
    }
  }
}

/* MultiSourceQuery
library TestSnippet version '1'
using Simple version '1.0.0'
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))
context Patient
define msQueryWhere: from [Encounter] E,
[Condition] C
where E.period included in MeasurementPeriod

define msQueryWhere2: from [Encounter] E, [Condition] C
where  E.period  included in MeasurementPeriod and C.id = 'http://cqframework.org/3/2'

define msQuery: from [Encounter] E, [Condition] C return {E: E, C:C}

define multiSourceWithArrays:
  from (List{'a', 'b', 'c'}) A, (List{{'x'}, {'y'}, {'z'}}) X
*/

module.exports['MultiSourceQuery'] = {
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
        "r" : "423",
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
        "name" : "MeasurementPeriod",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "MeasurementPeriod", " default " ]
            }, {
              "r" : "233",
              "s" : [ {
                "value" : [ "Interval[" ]
              }, {
                "r" : "217",
                "s" : [ {
                  "r" : "209",
                  "value" : [ "DateTime", "(", "2013", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "229",
                "s" : [ {
                  "r" : "221",
                  "value" : [ "DateTime", "(", "2014", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "237",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "default" : {
          "type" : "Interval",
          "localId" : "233",
          "lowClosed" : true,
          "highClosed" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "234",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "235",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "low" : {
            "type" : "DateTime",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "218",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "219",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "220",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "209",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2013",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "210",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "211",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          },
          "high" : {
            "type" : "DateTime",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "231",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "221",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2014",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "223",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "242",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "240",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "241",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "239",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "245",
        "name" : "msQueryWhere",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "245",
            "s" : [ {
              "value" : [ "", "define ", "msQueryWhere", ": " ]
            }, {
              "r" : "289",
              "s" : [ {
                "s" : [ {
                  "value" : [ "from " ]
                }, {
                  "r" : "246",
                  "s" : [ {
                    "r" : "247",
                    "s" : [ {
                      "r" : "247",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                }, {
                  "value" : [ ",\n" ]
                }, {
                  "r" : "254",
                  "s" : [ {
                    "r" : "255",
                    "s" : [ {
                      "r" : "255",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "273",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "273",
                  "s" : [ {
                    "r" : "265",
                    "s" : [ {
                      "r" : "264",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "265",
                      "s" : [ {
                        "value" : [ "period" ]
                      } ]
                    } ]
                  }, {
                    "r" : "273",
                    "value" : [ " ", "included in", " " ]
                  }, {
                    "r" : "270",
                    "s" : [ {
                      "value" : [ "MeasurementPeriod" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "296",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "297",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "298",
              "name" : "E",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "299",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            }, {
              "localId" : "300",
              "name" : "C",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "301",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "289",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "290",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "291",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "292",
                "name" : "E",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "293",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "294",
                "name" : "C",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "295",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "246",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "252",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "253",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "247",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "dateProperty" : "period",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "250",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "251",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "dateRange" : {
                "type" : "ParameterRef",
                "localId" : "270",
                "name" : "MeasurementPeriod",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "271",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "272",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          }, {
            "localId" : "254",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "260",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "261",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "255",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "258",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "259",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "285",
            "distinct" : true,
            "annotation" : [ ],
            "expression" : {
              "type" : "Tuple",
              "localId" : "286",
              "annotation" : [ ],
              "element" : [ {
                "name" : "E",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "287",
                  "name" : "E",
                  "annotation" : [ ]
                }
              }, {
                "name" : "C",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "288",
                  "name" : "C",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "304",
        "name" : "msQueryWhere2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "304",
            "s" : [ {
              "value" : [ "", "define ", "msQueryWhere2", ": " ]
            }, {
              "r" : "359",
              "s" : [ {
                "s" : [ {
                  "value" : [ "from " ]
                }, {
                  "r" : "305",
                  "s" : [ {
                    "r" : "306",
                    "s" : [ {
                      "r" : "306",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "313",
                  "s" : [ {
                    "r" : "314",
                    "s" : [ {
                      "r" : "314",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "323",
                "s" : [ {
                  "value" : [ "where  " ]
                }, {
                  "r" : "323",
                  "s" : [ {
                    "r" : "333",
                    "s" : [ {
                      "r" : "325",
                      "s" : [ {
                        "r" : "324",
                        "s" : [ {
                          "value" : [ "E" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "325",
                        "s" : [ {
                          "value" : [ "period" ]
                        } ]
                      } ]
                    }, {
                      "r" : "333",
                      "value" : [ "  ", "included in", " " ]
                    }, {
                      "r" : "330",
                      "s" : [ {
                        "value" : [ "MeasurementPeriod" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " and " ]
                  }, {
                    "r" : "345",
                    "s" : [ {
                      "r" : "347",
                      "s" : [ {
                        "r" : "346",
                        "s" : [ {
                          "value" : [ "C" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "347",
                        "s" : [ {
                          "value" : [ "id" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " ", "=", " " ]
                    }, {
                      "r" : "348",
                      "s" : [ {
                        "value" : [ "'http://cqframework.org/3/2'" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "366",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "367",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "368",
              "name" : "E",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "369",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            }, {
              "localId" : "370",
              "name" : "C",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "371",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "359",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "360",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "361",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "362",
                "name" : "E",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "363",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "364",
                "name" : "C",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "365",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "305",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "311",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "312",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "306",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "dateProperty" : "period",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "309",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "310",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "dateRange" : {
                "type" : "ParameterRef",
                "localId" : "330",
                "name" : "MeasurementPeriod",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "331",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "332",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          }, {
            "localId" : "313",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "319",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "320",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "314",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "317",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "318",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "where" : {
            "type" : "Equal",
            "localId" : "345",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "350",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "351",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Property",
              "localId" : "347",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "path" : "id",
              "scope" : "C",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "348",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "http://cqframework.org/3/2",
              "annotation" : [ ]
            } ]
          },
          "return" : {
            "localId" : "355",
            "distinct" : true,
            "annotation" : [ ],
            "expression" : {
              "type" : "Tuple",
              "localId" : "356",
              "annotation" : [ ],
              "element" : [ {
                "name" : "E",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "357",
                  "name" : "E",
                  "annotation" : [ ]
                }
              }, {
                "name" : "C",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "358",
                  "name" : "C",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "374",
        "name" : "msQuery",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "374",
            "s" : [ {
              "value" : [ "", "define ", "msQuery", ": " ]
            }, {
              "r" : "408",
              "s" : [ {
                "s" : [ {
                  "value" : [ "from " ]
                }, {
                  "r" : "375",
                  "s" : [ {
                    "r" : "376",
                    "s" : [ {
                      "r" : "376",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "383",
                  "s" : [ {
                    "r" : "384",
                    "s" : [ {
                      "r" : "384",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "393",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "394",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "E", ": " ]
                    }, {
                      "r" : "395",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "value" : [ "C", ":" ]
                    }, {
                      "r" : "396",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "415",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "416",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "417",
              "name" : "E",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "418",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            }, {
              "localId" : "419",
              "name" : "C",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "420",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "408",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "409",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "410",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "411",
                "name" : "E",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "412",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "413",
                "name" : "C",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "414",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "375",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "381",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "382",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "376",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "379",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "380",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          }, {
            "localId" : "383",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "389",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "390",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "384",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "387",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "388",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "393",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "402",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "403",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "404",
                  "name" : "E",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "405",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "406",
                  "name" : "C",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "407",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "394",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "397",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "398",
                  "name" : "E",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "399",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "400",
                  "name" : "C",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "401",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "E",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "395",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "E",
                  "annotation" : [ ]
                }
              }, {
                "name" : "C",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "396",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "C",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "423",
        "name" : "multiSourceWithArrays",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "423",
            "s" : [ {
              "value" : [ "", "define ", "multiSourceWithArrays", ":\n  " ]
            }, {
              "r" : "470",
              "s" : [ {
                "s" : [ {
                  "value" : [ "from " ]
                }, {
                  "r" : "424",
                  "s" : [ {
                    "r" : "425",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "425",
                      "s" : [ {
                        "value" : [ "List{" ]
                      }, {
                        "r" : "426",
                        "s" : [ {
                          "value" : [ "'a'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "428",
                        "s" : [ {
                          "value" : [ "'b'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "430",
                        "s" : [ {
                          "value" : [ "'c'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "A" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "438",
                  "s" : [ {
                    "r" : "439",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "439",
                      "s" : [ {
                        "value" : [ "List{" ]
                      }, {
                        "r" : "440",
                        "s" : [ {
                          "value" : [ "{" ]
                        }, {
                          "r" : "441",
                          "s" : [ {
                            "value" : [ "'x'" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "445",
                        "s" : [ {
                          "value" : [ "{" ]
                        }, {
                          "r" : "446",
                          "s" : [ {
                            "value" : [ "'y'" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "450",
                        "s" : [ {
                          "value" : [ "{" ]
                        }, {
                          "r" : "451",
                          "s" : [ {
                            "value" : [ "'z'" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "478",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "479",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "480",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "481",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "482",
              "name" : "X",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "483",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "484",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "470",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "471",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "472",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "473",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "474",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "475",
                "name" : "X",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "476",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "477",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "424",
            "alias" : "A",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "436",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "437",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "425",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "434",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "435",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "426",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "428",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "430",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c",
                "annotation" : [ ]
              } ]
            }
          }, {
            "localId" : "438",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "461",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "462",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "463",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "439",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "458",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "459",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "460",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }
              },
              "element" : [ {
                "type" : "List",
                "localId" : "440",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "443",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "444",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "441",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "x",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "List",
                "localId" : "445",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "448",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "449",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "446",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "y",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "List",
                "localId" : "450",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "453",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "454",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "451",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "z",
                  "annotation" : [ ]
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "466",
            "distinct" : true,
            "annotation" : [ ],
            "expression" : {
              "type" : "Tuple",
              "localId" : "467",
              "annotation" : [ ],
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "468",
                  "name" : "A",
                  "annotation" : [ ]
                }
              }, {
                "name" : "X",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "469",
                  "name" : "X",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      } ]
    }
  }
}

/* QueryRelationship
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define withQuery:  [Encounter] E
with [Condition] C such that C.encounterId = E.id

define withQuery2:  [Encounter] E
with [Condition] C such that C.encounterId = E.id and exists(C.status)

define withQueryEmptySecondarySource:  [Encounter] E
with [Medication] M such that M.encounterId = E.id

define withOutQuery:  [Encounter] E
without [Condition] C such that C.encounterId = E.id and exists(C.status)

define withOutQuery2:  [Encounter] E
without [Condition] C such that C.encounterId = E.id

define withOutQueryEmptySecondarySource:  [Encounter] E
without [Medication] M such that M.encounterId = E.id
*/

module.exports['QueryRelationship'] = {
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
        "r" : "407",
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
        "name" : "withQuery",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "withQuery", ":  " ]
            }, {
              "r" : "242",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "r" : "216",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "239",
                "s" : [ {
                  "value" : [ "with " ]
                }, {
                  "r" : "224",
                  "s" : [ {
                    "r" : "225",
                    "s" : [ {
                      "r" : "225",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "232",
                  "s" : [ {
                    "r" : "234",
                    "s" : [ {
                      "r" : "233",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "234",
                      "s" : [ {
                        "value" : [ "encounterId" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "=", " " ]
                  }, {
                    "r" : "236",
                    "s" : [ {
                      "r" : "235",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "236",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "245",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "246",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "242",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "243",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "244",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "215",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "221",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "216",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "219",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "220",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "With",
            "localId" : "239",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "240",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "241",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "225",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "228",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "229",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            },
            "suchThat" : {
              "type" : "Equal",
              "localId" : "232",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "237",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "238",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "234",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "encounterId",
                "scope" : "C",
                "annotation" : [ ]
              }, {
                "type" : "Property",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "E",
                "annotation" : [ ]
              } ]
            }
          } ]
        }
      }, {
        "localId" : "249",
        "name" : "withQuery2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "249",
            "s" : [ {
              "value" : [ "", "define ", "withQuery2", ":  " ]
            }, {
              "r" : "286",
              "s" : [ {
                "s" : [ {
                  "r" : "250",
                  "s" : [ {
                    "r" : "251",
                    "s" : [ {
                      "r" : "251",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "283",
                "s" : [ {
                  "value" : [ "with " ]
                }, {
                  "r" : "259",
                  "s" : [ {
                    "r" : "260",
                    "s" : [ {
                      "r" : "260",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "267",
                  "s" : [ {
                    "r" : "268",
                    "s" : [ {
                      "r" : "270",
                      "s" : [ {
                        "r" : "269",
                        "s" : [ {
                          "value" : [ "C" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "270",
                        "s" : [ {
                          "value" : [ "encounterId" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " ", "=", " " ]
                    }, {
                      "r" : "272",
                      "s" : [ {
                        "r" : "271",
                        "s" : [ {
                          "value" : [ "E" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "272",
                        "s" : [ {
                          "value" : [ "id" ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " and " ]
                  }, {
                    "r" : "275",
                    "s" : [ {
                      "value" : [ "exists" ]
                    }, {
                      "r" : "277",
                      "s" : [ {
                        "value" : [ "(" ]
                      }, {
                        "r" : "277",
                        "s" : [ {
                          "r" : "276",
                          "s" : [ {
                            "value" : [ "C" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "277",
                          "s" : [ {
                            "value" : [ "status" ]
                          } ]
                        } ]
                      }, {
                        "value" : [ ")" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "289",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "290",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "286",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "287",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "288",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "250",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "256",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "257",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "251",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "254",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "255",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "With",
            "localId" : "283",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "284",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "285",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "260",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "263",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "264",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            },
            "suchThat" : {
              "type" : "And",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "281",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "282",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Equal",
                "localId" : "268",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "Property",
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "encounterId",
                  "scope" : "C",
                  "annotation" : [ ]
                }, {
                  "type" : "Property",
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "scope" : "E",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "Exists",
                "localId" : "275",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "ListTypeSpecifier",
                  "localId" : "279",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "280",
                    "name" : "{urn:hl7-org:elm-types:r1}Code",
                    "annotation" : [ ]
                  }
                } ],
                "operand" : {
                  "type" : "ToList",
                  "localId" : "278",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "277",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                    "path" : "status",
                    "scope" : "C",
                    "annotation" : [ ]
                  }
                }
              } ]
            }
          } ]
        }
      }, {
        "localId" : "293",
        "name" : "withQueryEmptySecondarySource",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "293",
            "s" : [ {
              "value" : [ "", "define ", "withQueryEmptySecondarySource", ":  " ]
            }, {
              "r" : "321",
              "s" : [ {
                "s" : [ {
                  "r" : "294",
                  "s" : [ {
                    "r" : "295",
                    "s" : [ {
                      "r" : "295",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "318",
                "s" : [ {
                  "value" : [ "with " ]
                }, {
                  "r" : "303",
                  "s" : [ {
                    "r" : "304",
                    "s" : [ {
                      "r" : "304",
                      "s" : [ {
                        "value" : [ "[", "Medication", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "M" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "311",
                  "s" : [ {
                    "r" : "313",
                    "s" : [ {
                      "r" : "312",
                      "s" : [ {
                        "value" : [ "M" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "313",
                      "s" : [ {
                        "value" : [ "encounterId" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "=", " " ]
                  }, {
                    "r" : "315",
                    "s" : [ {
                      "r" : "314",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "315",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "324",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "325",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "321",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "322",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "323",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "294",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "300",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "301",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "295",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "298",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "299",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "With",
            "localId" : "318",
            "alias" : "M",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "319",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "320",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Medication",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "304",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Medication",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "307",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "308",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Medication",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            },
            "suchThat" : {
              "type" : "Equal",
              "localId" : "311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "316",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "317",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "313",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "encounterId",
                "scope" : "M",
                "annotation" : [ ]
              }, {
                "type" : "Property",
                "localId" : "315",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "E",
                "annotation" : [ ]
              } ]
            }
          } ]
        }
      }, {
        "localId" : "328",
        "name" : "withOutQuery",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "328",
            "s" : [ {
              "value" : [ "", "define ", "withOutQuery", ":  " ]
            }, {
              "r" : "365",
              "s" : [ {
                "s" : [ {
                  "r" : "329",
                  "s" : [ {
                    "r" : "330",
                    "s" : [ {
                      "r" : "330",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "362",
                "s" : [ {
                  "value" : [ "without " ]
                }, {
                  "r" : "338",
                  "s" : [ {
                    "r" : "339",
                    "s" : [ {
                      "r" : "339",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "346",
                  "s" : [ {
                    "r" : "347",
                    "s" : [ {
                      "r" : "349",
                      "s" : [ {
                        "r" : "348",
                        "s" : [ {
                          "value" : [ "C" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "349",
                        "s" : [ {
                          "value" : [ "encounterId" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " ", "=", " " ]
                    }, {
                      "r" : "351",
                      "s" : [ {
                        "r" : "350",
                        "s" : [ {
                          "value" : [ "E" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "351",
                        "s" : [ {
                          "value" : [ "id" ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " and " ]
                  }, {
                    "r" : "354",
                    "s" : [ {
                      "value" : [ "exists" ]
                    }, {
                      "r" : "356",
                      "s" : [ {
                        "value" : [ "(" ]
                      }, {
                        "r" : "356",
                        "s" : [ {
                          "r" : "355",
                          "s" : [ {
                            "value" : [ "C" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "356",
                          "s" : [ {
                            "value" : [ "status" ]
                          } ]
                        } ]
                      }, {
                        "value" : [ ")" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "368",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "369",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "365",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "366",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "367",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "329",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "335",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "336",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "330",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "333",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "334",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "Without",
            "localId" : "362",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "363",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "364",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "339",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "342",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "343",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            },
            "suchThat" : {
              "type" : "And",
              "localId" : "346",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "360",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "361",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Equal",
                "localId" : "347",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "352",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "353",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "Property",
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "encounterId",
                  "scope" : "C",
                  "annotation" : [ ]
                }, {
                  "type" : "Property",
                  "localId" : "351",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "scope" : "E",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "Exists",
                "localId" : "354",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "ListTypeSpecifier",
                  "localId" : "358",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "359",
                    "name" : "{urn:hl7-org:elm-types:r1}Code",
                    "annotation" : [ ]
                  }
                } ],
                "operand" : {
                  "type" : "ToList",
                  "localId" : "357",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "356",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                    "path" : "status",
                    "scope" : "C",
                    "annotation" : [ ]
                  }
                }
              } ]
            }
          } ]
        }
      }, {
        "localId" : "372",
        "name" : "withOutQuery2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "372",
            "s" : [ {
              "value" : [ "", "define ", "withOutQuery2", ":  " ]
            }, {
              "r" : "400",
              "s" : [ {
                "s" : [ {
                  "r" : "373",
                  "s" : [ {
                    "r" : "374",
                    "s" : [ {
                      "r" : "374",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "397",
                "s" : [ {
                  "value" : [ "without " ]
                }, {
                  "r" : "382",
                  "s" : [ {
                    "r" : "383",
                    "s" : [ {
                      "r" : "383",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "390",
                  "s" : [ {
                    "r" : "392",
                    "s" : [ {
                      "r" : "391",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "392",
                      "s" : [ {
                        "value" : [ "encounterId" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "=", " " ]
                  }, {
                    "r" : "394",
                    "s" : [ {
                      "r" : "393",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "394",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "403",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "404",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "400",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "401",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "402",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "373",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "379",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "380",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "374",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "377",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "378",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "Without",
            "localId" : "397",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "398",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "399",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "383",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "386",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "387",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            },
            "suchThat" : {
              "type" : "Equal",
              "localId" : "390",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "395",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "396",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "392",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "encounterId",
                "scope" : "C",
                "annotation" : [ ]
              }, {
                "type" : "Property",
                "localId" : "394",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "E",
                "annotation" : [ ]
              } ]
            }
          } ]
        }
      }, {
        "localId" : "407",
        "name" : "withOutQueryEmptySecondarySource",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "407",
            "s" : [ {
              "value" : [ "", "define ", "withOutQueryEmptySecondarySource", ":  " ]
            }, {
              "r" : "435",
              "s" : [ {
                "s" : [ {
                  "r" : "408",
                  "s" : [ {
                    "r" : "409",
                    "s" : [ {
                      "r" : "409",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "432",
                "s" : [ {
                  "value" : [ "without " ]
                }, {
                  "r" : "417",
                  "s" : [ {
                    "r" : "418",
                    "s" : [ {
                      "r" : "418",
                      "s" : [ {
                        "value" : [ "[", "Medication", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "M" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "425",
                  "s" : [ {
                    "r" : "427",
                    "s" : [ {
                      "r" : "426",
                      "s" : [ {
                        "value" : [ "M" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "427",
                      "s" : [ {
                        "value" : [ "encounterId" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "=", " " ]
                  }, {
                    "r" : "429",
                    "s" : [ {
                      "r" : "428",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "429",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "438",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "439",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "435",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "436",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "437",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "408",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "414",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "415",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "409",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "412",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "413",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "Without",
            "localId" : "432",
            "alias" : "M",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "433",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "434",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Medication",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "418",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Medication",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "421",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "422",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Medication",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            },
            "suchThat" : {
              "type" : "Equal",
              "localId" : "425",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "430",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "431",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "427",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "encounterId",
                "scope" : "M",
                "annotation" : [ ]
              }, {
                "type" : "Property",
                "localId" : "429",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "E",
                "annotation" : [ ]
              } ]
            }
          } ]
        }
      } ]
    }
  }
}

/* QueryLet
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define query:  [Encounter] E
let a: E
return {E: E, a:a}
*/

module.exports['QueryLet'] = {
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
        "name" : "query",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "query", ":  " ]
            }, {
              "r" : "242",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "r" : "216",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "s" : [ {
                  "value" : [ "let " ]
                }, {
                  "r" : "224",
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "225",
                    "s" : [ {
                      "value" : [ "E" ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ "\n" ]
              }, {
                "r" : "227",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "228",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "E", ": " ]
                    }, {
                      "r" : "229",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "value" : [ "a", ":" ]
                    }, {
                      "r" : "230",
                      "s" : [ {
                        "value" : [ "a" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "249",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "250",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "251",
              "name" : "E",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "252",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            }, {
              "localId" : "253",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "254",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "242",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "243",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "244",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "245",
                "name" : "E",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "246",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "247",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "248",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "215",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "221",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "216",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "219",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "220",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ {
            "localId" : "224",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "identifier" : "a",
            "annotation" : [ ],
            "expression" : {
              "type" : "AliasRef",
              "localId" : "225",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "E",
              "annotation" : [ ]
            }
          } ],
          "relationship" : [ ],
          "return" : {
            "localId" : "227",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "236",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "237",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "238",
                  "name" : "E",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "239",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "240",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "241",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "228",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "231",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "232",
                  "name" : "E",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "233",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "234",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "235",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "E",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "229",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "E",
                  "annotation" : [ ]
                }
              }, {
                "name" : "a",
                "value" : {
                  "type" : "QueryLetRef",
                  "localId" : "230",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "a",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      } ]
    }
  }
}

/* Tuple
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define query:  [Encounter] E return {id: E.id, thing: E.status}
*/

module.exports['Tuple'] = {
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
        "name" : "query",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "query", ":  " ]
            }, {
              "r" : "241",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "r" : "216",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "224",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "225",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "227",
                      "s" : [ {
                        "r" : "226",
                        "s" : [ {
                          "value" : [ "E" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "227",
                        "s" : [ {
                          "value" : [ "id" ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "value" : [ "thing", ": " ]
                    }, {
                      "r" : "229",
                      "s" : [ {
                        "r" : "228",
                        "s" : [ {
                          "value" : [ "E" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "229",
                        "s" : [ {
                          "value" : [ "status" ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "248",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "249",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "250",
              "name" : "id",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "251",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "252",
              "name" : "thing",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "253",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "241",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "242",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "243",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "244",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "246",
                "name" : "thing",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "215",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "221",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "216",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "219",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "220",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "224",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "235",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "236",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "237",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "238",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "239",
                  "name" : "thing",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "240",
                    "name" : "{urn:hl7-org:elm-types:r1}Code",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "225",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "230",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "231",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "232",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "233",
                  "name" : "thing",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "234",
                    "name" : "{urn:hl7-org:elm-types:r1}Code",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "id",
                "value" : {
                  "type" : "Property",
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "scope" : "E",
                  "annotation" : [ ]
                }
              }, {
                "name" : "thing",
                "value" : {
                  "type" : "Property",
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "path" : "status",
                  "scope" : "E",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      } ]
    }
  }
}

/* QueryFilterNulls
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define query:  (List{null, 'One', null, 'Two', null}) I where I is not null
*/

module.exports['QueryFilterNulls'] = {
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
        "name" : "query",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "query", ":  " ]
            }, {
              "r" : "239",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "216",
                      "s" : [ {
                        "r" : "217",
                        "value" : [ "List{", "null", ", " ]
                      }, {
                        "r" : "218",
                        "s" : [ {
                          "value" : [ "'One'" ]
                        } ]
                      }, {
                        "r" : "220",
                        "value" : [ ", ", "null", ", " ]
                      }, {
                        "r" : "221",
                        "s" : [ {
                          "value" : [ "'Two'" ]
                        } ]
                      }, {
                        "r" : "223",
                        "value" : [ ", ", "null", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "I" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "237",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "237",
                  "s" : [ {
                    "r" : "234",
                    "s" : [ {
                      "value" : [ "I" ]
                    } ]
                  }, {
                    "value" : [ " is not null" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "242",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "239",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "240",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "241",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "215",
            "alias" : "I",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "231",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "232",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "216",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "229",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "As",
                "localId" : "224",
                "asType" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "Null",
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Literal",
                "localId" : "218",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "One",
                "annotation" : [ ]
              }, {
                "type" : "As",
                "localId" : "225",
                "asType" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "Null",
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Literal",
                "localId" : "221",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Two",
                "annotation" : [ ]
              }, {
                "type" : "As",
                "localId" : "226",
                "asType" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "Null",
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "where" : {
            "type" : "Not",
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "238",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "IsNull",
              "localId" : "235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "236",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "AliasRef",
                "localId" : "234",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "I",
                "annotation" : [ ]
              }
            }
          }
        }
      } ]
    }
  }
}

/* Sorting
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define QuantityListAsc: ({ ToQuantity('10 \'m\''), ToQuantity('2 \'m\'') }) S return S sort asc
define QuantityListSort: ({ ToQuantity('10 \'m\''), ToQuantity('2 \'m\'') }) N return Tuple{N: N} sort by (N)
define TupleAsc: [Encounter] E sort by id
define TupleReturnAsc: [Encounter] E return E sort by id
define TupleReturnTupleAsc: [Encounter] E return {E : E} sort by E.id
define TupleDesc: [Encounter] E sort by id desc
define TupleReturnDesc: [Encounter] E return E sort by id desc
define TupleReturnTupleDesc:  [Encounter] E return {E : E} sort by E.id desc
define ConditionDates: [Condition] C return C.period.low
define lastDateUnsorted: Last("ConditionDates")
define lastDateByThis: Last("ConditionDates" CD sort by $this)
define numberAsc: ({8, 6, 7, 5, 3, 0, 9}) N sort asc
define numberReturnAsc: ({8, 6, 7, 5, 3, 0, 9}) N return N sort asc
define numberDesc: ({8, 6, 7, 5, 3, 0, 9}) N sort desc
define numberReturnDesc: ({8, 6, 7, 5, 3, 0, 9}) N return N sort desc
define stringAsc: ({'jenny', 'dont', 'change', 'your', 'number'}) S sort asc
define stringReturnAsc: ({'jenny', 'dont', 'change', 'your', 'number'}) S return S sort asc
define stringDesc: ({'jenny', 'dont', 'change', 'your', 'number'}) S sort desc
define stringReturnDesc: ({'jenny', 'dont', 'change', 'your', 'number'}) S return S sort desc
define five: 5
define sortByExpression: ({8, 6, 7, 5, 3, 0, 9}) N return Tuple{N: N} sort by (five + N)
define sortByExpressionWithNullResults: ({8, null, 7}) N return Tuple{N: N} sort by (five + N)
define sortWithAscendingKeyword: ({8, 6, 7, 5, 3, 0, 9}) N sort ascending
define sortWithDescendingKeyword: ({8, 6, 7, 5, 3, 0, 9}) N return N sort descending

define Newest: Last(({ Tuple { id: 'older 05:00Z', d: @2025-01-02T05:00:00.000Z }, Tuple { id: 'newer 06:00Z', d: @2025-01-01T20:00:00.000-10:00 } }) X sort by d).id
define NewestReversedInput: Last(({ Tuple { id: 'newer 06:00Z', d: @2025-01-01T20:00:00.000-10:00 }, Tuple { id: 'older 05:00Z', d: @2025-01-02T05:00:00.000Z } }) X sort by d).id
define DateTimeDirectionAsc: ({ @2025-01-02T05:00:00.000Z, @2025-01-01T20:00:00.000-10:00 }) X sort asc
define DateTimeDirectionDesc: ({ @2025-01-02T05:00:00.000Z, @2025-01-01T20:00:00.000-10:00 }) X sort desc
define DateTimeColumnAsc: ({ Tuple { value: @2025-01-02T05:00:00.000Z }, Tuple { value: @2025-01-01T20:00:00.000-10:00 } }) X sort by value asc
define DateTimeColumnDesc: ({ Tuple { value: @2025-01-02T05:00:00.000Z }, Tuple { value: @2025-01-01T20:00:00.000-10:00 } }) X sort by value desc
define DateTimeExpressionAsc: ({ Tuple { value: @2025-01-02T05:00:00.000Z }, Tuple { value: @2025-01-01T20:00:00.000-10:00 } }) X sort by (value + 0 days) asc
define DateTimeExpressionDesc: ({ Tuple { value: @2025-01-02T05:00:00.000Z }, Tuple { value: @2025-01-01T20:00:00.000-10:00 } }) X sort by (value + 0 days) desc
define DateTimeDirectionAscReversed: ({ @2025-01-01T20:00:00.000-10:00, @2025-01-02T05:00:00.000Z }) X sort asc
define DateTimeDirectionDescReversed: ({ @2025-01-01T20:00:00.000-10:00, @2025-01-02T05:00:00.000Z }) X sort desc
define DateTimeColumnAscReversed: ({ Tuple { value: @2025-01-01T20:00:00.000-10:00 }, Tuple { value: @2025-01-02T05:00:00.000Z } }) X sort by value asc
define DateTimeColumnDescReversed: ({ Tuple { value: @2025-01-01T20:00:00.000-10:00 }, Tuple { value: @2025-01-02T05:00:00.000Z } }) X sort by value desc
define DateTimeExpressionAscReversed: ({ Tuple { value: @2025-01-01T20:00:00.000-10:00 }, Tuple { value: @2025-01-02T05:00:00.000Z } }) X sort by (value + 0 days) asc
define DateTimeExpressionDescReversed: ({ Tuple { value: @2025-01-01T20:00:00.000-10:00 }, Tuple { value: @2025-01-02T05:00:00.000Z } }) X sort by (value + 0 days) desc
define DecimalDirectionAsc: ({ 2.5, 10.25 }) X sort asc
define DecimalDirectionDesc: ({ 2.5, 10.25 }) X sort desc
define DecimalColumnAsc: ({ Tuple { value: 2.5 }, Tuple { value: 10.25 } }) X sort by value asc
define DecimalColumnDesc: ({ Tuple { value: 2.5 }, Tuple { value: 10.25 } }) X sort by value desc
define DecimalExpressionAsc: ({ Tuple { value: 2.5 }, Tuple { value: 10.25 } }) X sort by (value + 0.0) asc
define DecimalExpressionDesc: ({ Tuple { value: 2.5 }, Tuple { value: 10.25 } }) X sort by (value + 0.0) desc
define DecimalDirectionAscReversed: ({ 10.25, 2.5 }) X sort asc
define DecimalDirectionDescReversed: ({ 10.25, 2.5 }) X sort desc
define DecimalColumnAscReversed: ({ Tuple { value: 10.25 }, Tuple { value: 2.5 } }) X sort by value asc
define DecimalColumnDescReversed: ({ Tuple { value: 10.25 }, Tuple { value: 2.5 } }) X sort by value desc
define DecimalExpressionAscReversed: ({ Tuple { value: 10.25 }, Tuple { value: 2.5 } }) X sort by (value + 0.0) asc
define DecimalExpressionDescReversed: ({ Tuple { value: 10.25 }, Tuple { value: 2.5 } }) X sort by (value + 0.0) desc
*/

module.exports['Sorting'] = {
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
        "r" : "2299",
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
        "name" : "QuantityListAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "QuantityListAsc", ": " ]
            }, {
              "r" : "249",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "216",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "222",
                        "s" : [ {
                          "value" : [ "ToQuantity", "(" ]
                        }, {
                          "r" : "217",
                          "s" : [ {
                            "value" : [ "'10 \\'m\\''" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "229",
                        "s" : [ {
                          "value" : [ "ToQuantity", "(" ]
                        }, {
                          "r" : "224",
                          "s" : [ {
                            "value" : [ "'2 \\'m\\''" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "S" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "238",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "239",
                  "s" : [ {
                    "value" : [ "S" ]
                  } ]
                } ]
              }, {
                "r" : "242",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "252",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "249",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "250",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "251",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "215",
            "alias" : "S",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "235",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "236",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "216",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "233",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "ToQuantity",
                "localId" : "222",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "Literal",
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10 'm'",
                  "annotation" : [ ]
                }
              }, {
                "type" : "ToQuantity",
                "localId" : "229",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "Literal",
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2 'm'",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "238",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "240",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "241",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "name" : "S",
              "annotation" : [ ]
            }
          },
          "sort" : {
            "localId" : "242",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "243",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "256",
        "name" : "QuantityListSort",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "QuantityListSort", ": " ]
            }, {
              "r" : "298",
              "s" : [ {
                "s" : [ {
                  "r" : "257",
                  "s" : [ {
                    "r" : "258",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "258",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "264",
                        "s" : [ {
                          "value" : [ "ToQuantity", "(" ]
                        }, {
                          "r" : "259",
                          "s" : [ {
                            "value" : [ "'10 \\'m\\''" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "271",
                        "s" : [ {
                          "value" : [ "ToQuantity", "(" ]
                        }, {
                          "r" : "266",
                          "s" : [ {
                            "value" : [ "'2 \\'m\\''" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "280",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "281",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "N", ": " ]
                    }, {
                      "r" : "282",
                      "s" : [ {
                        "value" : [ "N" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "292",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "291",
                  "s" : [ {
                    "r" : "290",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "290",
                      "s" : [ {
                        "value" : [ "N" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "303",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "304",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "305",
              "name" : "N",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "306",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "298",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "299",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "300",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "301",
                "name" : "N",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "302",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "257",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "277",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "278",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "258",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "275",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "276",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "ToQuantity",
                "localId" : "264",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "Literal",
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10 'm'",
                  "annotation" : [ ]
                }
              }, {
                "type" : "ToQuantity",
                "localId" : "271",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "Literal",
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2 'm'",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "280",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "286",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "287",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "288",
                  "name" : "N",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "289",
                    "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "281",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "283",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "284",
                  "name" : "N",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "285",
                    "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "N",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "N",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "sort" : {
            "localId" : "292",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "direction" : "asc",
              "path" : "N",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "309",
        "name" : "TupleAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "309",
            "s" : [ {
              "value" : [ "", "define ", "TupleAsc", ": " ]
            }, {
              "r" : "327",
              "s" : [ {
                "s" : [ {
                  "r" : "310",
                  "s" : [ {
                    "r" : "311",
                    "s" : [ {
                      "r" : "311",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "321",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "320",
                  "s" : [ {
                    "r" : "319",
                    "s" : [ {
                      "value" : [ "id" ]
                    } ]
                  } ]
                } ]
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
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "327",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "328",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "329",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "310",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "316",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "317",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "311",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "314",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "315",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "321",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "320",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "direction" : "asc",
              "path" : "id",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "334",
        "name" : "TupleReturnAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "334",
            "s" : [ {
              "value" : [ "", "define ", "TupleReturnAsc", ": " ]
            }, {
              "r" : "356",
              "s" : [ {
                "s" : [ {
                  "r" : "335",
                  "s" : [ {
                    "r" : "336",
                    "s" : [ {
                      "r" : "336",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "344",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "345",
                  "s" : [ {
                    "value" : [ "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "350",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "349",
                  "s" : [ {
                    "r" : "348",
                    "s" : [ {
                      "value" : [ "id" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "359",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "360",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "356",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "357",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "358",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "335",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "341",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "342",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "336",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "339",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "340",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "344",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "346",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "347",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "345",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "E",
              "annotation" : [ ]
            }
          },
          "sort" : {
            "localId" : "350",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "349",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "direction" : "asc",
              "path" : "id",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "363",
        "name" : "TupleReturnTupleAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "363",
            "s" : [ {
              "value" : [ "", "define ", "TupleReturnTupleAsc", ": " ]
            }, {
              "r" : "392",
              "s" : [ {
                "s" : [ {
                  "r" : "364",
                  "s" : [ {
                    "r" : "365",
                    "s" : [ {
                      "r" : "365",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "373",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "374",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "E", " : " ]
                    }, {
                      "r" : "375",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "386",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "385",
                  "s" : [ {
                    "r" : "384",
                    "s" : [ {
                      "r" : "383",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "384",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "397",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "398",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "399",
              "name" : "E",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "400",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "392",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "393",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "394",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "395",
                "name" : "E",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "396",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "364",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "370",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "371",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "365",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "368",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "369",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "373",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "379",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "380",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "381",
                  "name" : "E",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "382",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "374",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "376",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "377",
                  "name" : "E",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "378",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "E",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "375",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "E",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "sort" : {
            "localId" : "386",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "385",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "direction" : "asc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Property",
                "localId" : "384",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "annotation" : [ ],
                "source" : {
                  "type" : "IdentifierRef",
                  "localId" : "383",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "E",
                  "annotation" : [ ]
                }
              }
            } ]
          }
        }
      }, {
        "localId" : "403",
        "name" : "TupleDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "403",
            "s" : [ {
              "value" : [ "", "define ", "TupleDesc", ": " ]
            }, {
              "r" : "421",
              "s" : [ {
                "s" : [ {
                  "r" : "404",
                  "s" : [ {
                    "r" : "405",
                    "s" : [ {
                      "r" : "405",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "415",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "414",
                  "s" : [ {
                    "r" : "413",
                    "s" : [ {
                      "value" : [ "id" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "424",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "425",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "421",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "422",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "423",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "404",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "410",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "411",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "405",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "408",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "409",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "415",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "414",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "direction" : "desc",
              "path" : "id",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "428",
        "name" : "TupleReturnDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "428",
            "s" : [ {
              "value" : [ "", "define ", "TupleReturnDesc", ": " ]
            }, {
              "r" : "450",
              "s" : [ {
                "s" : [ {
                  "r" : "429",
                  "s" : [ {
                    "r" : "430",
                    "s" : [ {
                      "r" : "430",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "438",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "439",
                  "s" : [ {
                    "value" : [ "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "444",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "443",
                  "s" : [ {
                    "r" : "442",
                    "s" : [ {
                      "value" : [ "id" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "453",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "454",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "450",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "451",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "452",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "429",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "435",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "436",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "430",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "433",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "434",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "438",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "440",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "441",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "439",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "E",
              "annotation" : [ ]
            }
          },
          "sort" : {
            "localId" : "444",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "443",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "direction" : "desc",
              "path" : "id",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "457",
        "name" : "TupleReturnTupleDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "457",
            "s" : [ {
              "value" : [ "", "define ", "TupleReturnTupleDesc", ":  " ]
            }, {
              "r" : "486",
              "s" : [ {
                "s" : [ {
                  "r" : "458",
                  "s" : [ {
                    "r" : "459",
                    "s" : [ {
                      "r" : "459",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "467",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "468",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "E", " : " ]
                    }, {
                      "r" : "469",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "480",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "479",
                  "s" : [ {
                    "r" : "478",
                    "s" : [ {
                      "r" : "477",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "478",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "491",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "492",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "493",
              "name" : "E",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "494",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "486",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "487",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "488",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "489",
                "name" : "E",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "490",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "458",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "464",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "465",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "459",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "462",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "463",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "467",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "473",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "474",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "475",
                  "name" : "E",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "476",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "468",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "470",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "471",
                  "name" : "E",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "472",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "E",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "469",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "E",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "sort" : {
            "localId" : "480",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "479",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "direction" : "desc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Property",
                "localId" : "478",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "annotation" : [ ],
                "source" : {
                  "type" : "IdentifierRef",
                  "localId" : "477",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "E",
                  "annotation" : [ ]
                }
              }
            } ]
          }
        }
      }, {
        "localId" : "497",
        "name" : "ConditionDates",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "497",
            "s" : [ {
              "value" : [ "", "define ", "ConditionDates", ": " ]
            }, {
              "r" : "517",
              "s" : [ {
                "s" : [ {
                  "r" : "498",
                  "s" : [ {
                    "r" : "499",
                    "s" : [ {
                      "r" : "499",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "507",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "514",
                  "s" : [ {
                    "r" : "509",
                    "s" : [ {
                      "r" : "508",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "509",
                      "s" : [ {
                        "value" : [ "period" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "514",
                    "s" : [ {
                      "value" : [ "low" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "520",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "521",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "517",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "518",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "519",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "498",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "504",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "505",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "499",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "502",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "503",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "507",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "515",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "516",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Property",
              "localId" : "514",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "path" : "low",
              "annotation" : [ ],
              "source" : {
                "type" : "Property",
                "localId" : "509",
                "path" : "period",
                "scope" : "C",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "512",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "513",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              }
            }
          }
        }
      }, {
        "localId" : "524",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "lastDateUnsorted",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "524",
            "s" : [ {
              "value" : [ "", "define ", "lastDateUnsorted", ": " ]
            }, {
              "r" : "532",
              "s" : [ {
                "value" : [ "Last", "(" ]
              }, {
                "r" : "525",
                "s" : [ {
                  "value" : [ "\"ConditionDates\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Last",
          "localId" : "532",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "533",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "534",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "ExpressionRef",
            "localId" : "525",
            "name" : "ConditionDates",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "526",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "527",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "537",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "lastDateByThis",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "537",
            "s" : [ {
              "value" : [ "", "define ", "lastDateByThis", ": " ]
            }, {
              "r" : "560",
              "s" : [ {
                "value" : [ "Last", "(" ]
              }, {
                "r" : "553",
                "s" : [ {
                  "s" : [ {
                    "r" : "538",
                    "s" : [ {
                      "r" : "539",
                      "s" : [ {
                        "s" : [ {
                          "value" : [ "\"ConditionDates\"" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " ", "CD" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " " ]
                }, {
                  "r" : "547",
                  "s" : [ {
                    "value" : [ "sort by " ]
                  }, {
                    "r" : "546",
                    "s" : [ {
                      "r" : "545",
                      "value" : [ "$this" ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Last",
          "localId" : "560",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "561",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "562",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "553",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "554",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "555",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "source" : [ {
              "localId" : "538",
              "alias" : "CD",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "542",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "543",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              },
              "expression" : {
                "type" : "ExpressionRef",
                "localId" : "539",
                "name" : "ConditionDates",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "540",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "541",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "sort" : {
              "localId" : "547",
              "annotation" : [ ],
              "by" : [ {
                "type" : "ByColumn",
                "localId" : "546",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "direction" : "asc",
                "path" : "$this",
                "annotation" : [ ]
              } ]
            }
          }
        }
      }, {
        "localId" : "565",
        "name" : "numberAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "565",
            "s" : [ {
              "value" : [ "", "define ", "numberAsc", ": " ]
            }, {
              "r" : "589",
              "s" : [ {
                "s" : [ {
                  "r" : "566",
                  "s" : [ {
                    "r" : "567",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "567",
                      "s" : [ {
                        "r" : "568",
                        "value" : [ "{", "8", ", ", "6", ", ", "7", ", ", "5", ", ", "3", ", ", "0", ", ", "9", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "r" : "582",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "592",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "593",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "589",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "590",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "591",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "566",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "579",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "580",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "567",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "577",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "578",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "568",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "569",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "6",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "570",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "7",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "571",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "572",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "573",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "574",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "582",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "583",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "596",
        "name" : "numberReturnAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "596",
            "s" : [ {
              "value" : [ "", "define ", "numberReturnAsc", ": " ]
            }, {
              "r" : "624",
              "s" : [ {
                "s" : [ {
                  "r" : "597",
                  "s" : [ {
                    "r" : "598",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "598",
                      "s" : [ {
                        "r" : "599",
                        "value" : [ "{", "8", ", ", "6", ", ", "7", ", ", "5", ", ", "3", ", ", "0", ", ", "9", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "613",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "614",
                  "s" : [ {
                    "value" : [ "N" ]
                  } ]
                } ]
              }, {
                "r" : "617",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "627",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "628",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "624",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "625",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "626",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "597",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "610",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "611",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "598",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "608",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "609",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "599",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "600",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "6",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "601",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "7",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "602",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "603",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "604",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "605",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "613",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "615",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "616",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "614",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "N",
              "annotation" : [ ]
            }
          },
          "sort" : {
            "localId" : "617",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "618",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "631",
        "name" : "numberDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "631",
            "s" : [ {
              "value" : [ "", "define ", "numberDesc", ": " ]
            }, {
              "r" : "655",
              "s" : [ {
                "s" : [ {
                  "r" : "632",
                  "s" : [ {
                    "r" : "633",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "633",
                      "s" : [ {
                        "r" : "634",
                        "value" : [ "{", "8", ", ", "6", ", ", "7", ", ", "5", ", ", "3", ", ", "0", ", ", "9", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "r" : "648",
                "value" : [ " ", "sort desc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "658",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "659",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "655",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "656",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "657",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "632",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "645",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "646",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "633",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "643",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "644",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "634",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "635",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "6",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "636",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "7",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "637",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "638",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "639",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "640",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "648",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "649",
              "direction" : "desc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "662",
        "name" : "numberReturnDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "662",
            "s" : [ {
              "value" : [ "", "define ", "numberReturnDesc", ": " ]
            }, {
              "r" : "690",
              "s" : [ {
                "s" : [ {
                  "r" : "663",
                  "s" : [ {
                    "r" : "664",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "664",
                      "s" : [ {
                        "r" : "665",
                        "value" : [ "{", "8", ", ", "6", ", ", "7", ", ", "5", ", ", "3", ", ", "0", ", ", "9", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "679",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "680",
                  "s" : [ {
                    "value" : [ "N" ]
                  } ]
                } ]
              }, {
                "r" : "683",
                "value" : [ " ", "sort desc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "693",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "694",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "690",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "691",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "692",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "663",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "676",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "677",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "664",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "674",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "675",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "665",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "666",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "6",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "667",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "7",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "668",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "669",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "670",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "671",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "679",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "681",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "682",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "680",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "N",
              "annotation" : [ ]
            }
          },
          "sort" : {
            "localId" : "683",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "684",
              "direction" : "desc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "697",
        "name" : "stringAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "697",
            "s" : [ {
              "value" : [ "", "define ", "stringAsc", ": " ]
            }, {
              "r" : "724",
              "s" : [ {
                "s" : [ {
                  "r" : "698",
                  "s" : [ {
                    "r" : "699",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "699",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "700",
                        "s" : [ {
                          "value" : [ "'jenny'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "702",
                        "s" : [ {
                          "value" : [ "'dont'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "704",
                        "s" : [ {
                          "value" : [ "'change'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "706",
                        "s" : [ {
                          "value" : [ "'your'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "708",
                        "s" : [ {
                          "value" : [ "'number'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "S" ]
                  } ]
                } ]
              }, {
                "r" : "717",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "727",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "728",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "724",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "725",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "726",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "698",
            "alias" : "S",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "714",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "715",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "699",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "712",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "713",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "700",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "jenny",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "702",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "dont",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "704",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "change",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "706",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "your",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "708",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "number",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "717",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "718",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "731",
        "name" : "stringReturnAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "731",
            "s" : [ {
              "value" : [ "", "define ", "stringReturnAsc", ": " ]
            }, {
              "r" : "762",
              "s" : [ {
                "s" : [ {
                  "r" : "732",
                  "s" : [ {
                    "r" : "733",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "733",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "734",
                        "s" : [ {
                          "value" : [ "'jenny'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "736",
                        "s" : [ {
                          "value" : [ "'dont'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "738",
                        "s" : [ {
                          "value" : [ "'change'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "740",
                        "s" : [ {
                          "value" : [ "'your'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "742",
                        "s" : [ {
                          "value" : [ "'number'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "S" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "751",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "752",
                  "s" : [ {
                    "value" : [ "S" ]
                  } ]
                } ]
              }, {
                "r" : "755",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "765",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "766",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "762",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "763",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "764",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "732",
            "alias" : "S",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "748",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "749",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "733",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "746",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "747",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "734",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "jenny",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "736",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "dont",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "738",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "change",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "740",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "your",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "742",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "number",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "751",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "753",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "754",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "752",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "S",
              "annotation" : [ ]
            }
          },
          "sort" : {
            "localId" : "755",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "756",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "769",
        "name" : "stringDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "769",
            "s" : [ {
              "value" : [ "", "define ", "stringDesc", ": " ]
            }, {
              "r" : "796",
              "s" : [ {
                "s" : [ {
                  "r" : "770",
                  "s" : [ {
                    "r" : "771",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "771",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "772",
                        "s" : [ {
                          "value" : [ "'jenny'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "774",
                        "s" : [ {
                          "value" : [ "'dont'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "776",
                        "s" : [ {
                          "value" : [ "'change'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "778",
                        "s" : [ {
                          "value" : [ "'your'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "780",
                        "s" : [ {
                          "value" : [ "'number'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "S" ]
                  } ]
                } ]
              }, {
                "r" : "789",
                "value" : [ " ", "sort desc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "799",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "800",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "796",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "797",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "798",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "770",
            "alias" : "S",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "786",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "787",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "771",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "784",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "785",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "772",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "jenny",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "774",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "dont",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "776",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "change",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "778",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "your",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "780",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "number",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "789",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "790",
              "direction" : "desc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "803",
        "name" : "stringReturnDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "803",
            "s" : [ {
              "value" : [ "", "define ", "stringReturnDesc", ": " ]
            }, {
              "r" : "834",
              "s" : [ {
                "s" : [ {
                  "r" : "804",
                  "s" : [ {
                    "r" : "805",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "805",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "806",
                        "s" : [ {
                          "value" : [ "'jenny'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "808",
                        "s" : [ {
                          "value" : [ "'dont'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "810",
                        "s" : [ {
                          "value" : [ "'change'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "812",
                        "s" : [ {
                          "value" : [ "'your'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "814",
                        "s" : [ {
                          "value" : [ "'number'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "S" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "823",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "824",
                  "s" : [ {
                    "value" : [ "S" ]
                  } ]
                } ]
              }, {
                "r" : "827",
                "value" : [ " ", "sort desc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "837",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "838",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "834",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "835",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "836",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "804",
            "alias" : "S",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "820",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "821",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "805",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "818",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "819",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "806",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "jenny",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "808",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "dont",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "810",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "change",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "812",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "your",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "814",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "number",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "823",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "825",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "826",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "824",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "S",
              "annotation" : [ ]
            }
          },
          "sort" : {
            "localId" : "827",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "828",
              "direction" : "desc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "841",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "five",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "841",
            "s" : [ {
              "r" : "842",
              "value" : [ "", "define ", "five", ": ", "5" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "842",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "5",
          "annotation" : [ ]
        }
      }, {
        "localId" : "845",
        "name" : "sortByExpression",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "845",
            "s" : [ {
              "value" : [ "", "define ", "sortByExpression", ": " ]
            }, {
              "r" : "884",
              "s" : [ {
                "s" : [ {
                  "r" : "846",
                  "s" : [ {
                    "r" : "847",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "847",
                      "s" : [ {
                        "r" : "848",
                        "value" : [ "{", "8", ", ", "6", ", ", "7", ", ", "5", ", ", "3", ", ", "0", ", ", "9", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "862",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "863",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "N", ": " ]
                    }, {
                      "r" : "864",
                      "s" : [ {
                        "value" : [ "N" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "878",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "877",
                  "s" : [ {
                    "r" : "872",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "872",
                      "s" : [ {
                        "r" : "873",
                        "s" : [ {
                          "value" : [ "five" ]
                        } ]
                      }, {
                        "value" : [ " + " ]
                      }, {
                        "r" : "874",
                        "s" : [ {
                          "value" : [ "N" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "889",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "890",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "891",
              "name" : "N",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "892",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "884",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "885",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "886",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "887",
                "name" : "N",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "888",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "846",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "859",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "860",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "847",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "857",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "858",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "848",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "849",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "6",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "850",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "7",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "851",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "852",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "853",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "854",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "862",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "868",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "869",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "870",
                  "name" : "N",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "871",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "863",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "865",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "866",
                  "name" : "N",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "867",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "N",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "864",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "N",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "sort" : {
            "localId" : "878",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "877",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "direction" : "asc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "872",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "875",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "876",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "ExpressionRef",
                  "localId" : "873",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "five",
                  "annotation" : [ ]
                }, {
                  "type" : "IdentifierRef",
                  "localId" : "874",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "N",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "895",
        "name" : "sortByExpressionWithNullResults",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "895",
            "s" : [ {
              "value" : [ "", "define ", "sortByExpressionWithNullResults", ": " ]
            }, {
              "r" : "931",
              "s" : [ {
                "s" : [ {
                  "r" : "896",
                  "s" : [ {
                    "r" : "897",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "897",
                      "s" : [ {
                        "r" : "898",
                        "value" : [ "{", "8", ", ", "null", ", ", "7", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "909",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "910",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "N", ": " ]
                    }, {
                      "r" : "911",
                      "s" : [ {
                        "value" : [ "N" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "925",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "924",
                  "s" : [ {
                    "r" : "919",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "919",
                      "s" : [ {
                        "r" : "920",
                        "s" : [ {
                          "value" : [ "five" ]
                        } ]
                      }, {
                        "value" : [ " + " ]
                      }, {
                        "r" : "921",
                        "s" : [ {
                          "value" : [ "N" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "936",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "937",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "938",
              "name" : "N",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "939",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "931",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "932",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "933",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "934",
                "name" : "N",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "935",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "896",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "906",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "907",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "897",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "904",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "905",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "898",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              }, {
                "type" : "As",
                "localId" : "901",
                "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "Null",
                  "localId" : "899",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Literal",
                "localId" : "900",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "7",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "909",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "915",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "916",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "917",
                  "name" : "N",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "918",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "910",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "912",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "913",
                  "name" : "N",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "914",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "N",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "911",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "N",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "sort" : {
            "localId" : "925",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "924",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "direction" : "asc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "919",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "922",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "923",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "ExpressionRef",
                  "localId" : "920",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "five",
                  "annotation" : [ ]
                }, {
                  "type" : "IdentifierRef",
                  "localId" : "921",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "N",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "942",
        "name" : "sortWithAscendingKeyword",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "942",
            "s" : [ {
              "value" : [ "", "define ", "sortWithAscendingKeyword", ": " ]
            }, {
              "r" : "966",
              "s" : [ {
                "s" : [ {
                  "r" : "943",
                  "s" : [ {
                    "r" : "944",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "944",
                      "s" : [ {
                        "r" : "945",
                        "value" : [ "{", "8", ", ", "6", ", ", "7", ", ", "5", ", ", "3", ", ", "0", ", ", "9", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "r" : "959",
                "value" : [ " ", "sort ascending" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "969",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "970",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "966",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "967",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "968",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "943",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "956",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "957",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "944",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "954",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "955",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "945",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "946",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "6",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "947",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "7",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "948",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "949",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "950",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "951",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "959",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "960",
              "direction" : "ascending",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "973",
        "name" : "sortWithDescendingKeyword",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "973",
            "s" : [ {
              "value" : [ "", "define ", "sortWithDescendingKeyword", ": " ]
            }, {
              "r" : "1001",
              "s" : [ {
                "s" : [ {
                  "r" : "974",
                  "s" : [ {
                    "r" : "975",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "975",
                      "s" : [ {
                        "r" : "976",
                        "value" : [ "{", "8", ", ", "6", ", ", "7", ", ", "5", ", ", "3", ", ", "0", ", ", "9", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "990",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "991",
                  "s" : [ {
                    "value" : [ "N" ]
                  } ]
                } ]
              }, {
                "r" : "994",
                "value" : [ " ", "sort descending" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1004",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "1005",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1001",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1002",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "1003",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "974",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "987",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "988",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "975",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "985",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "986",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "976",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "977",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "6",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "978",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "7",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "979",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "980",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "981",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "982",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "990",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "992",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "993",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "991",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "N",
              "annotation" : [ ]
            }
          },
          "sort" : {
            "localId" : "994",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "995",
              "direction" : "descending",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1008",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Newest",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1008",
            "s" : [ {
              "value" : [ "", "define ", "Newest", ": " ]
            }, {
              "r" : "1099",
              "s" : [ {
                "r" : "1087",
                "s" : [ {
                  "value" : [ "Last", "(" ]
                }, {
                  "r" : "1072",
                  "s" : [ {
                    "s" : [ {
                      "r" : "1009",
                      "s" : [ {
                        "r" : "1010",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "1010",
                          "s" : [ {
                            "value" : [ "{ " ]
                          }, {
                            "r" : "1011",
                            "s" : [ {
                              "value" : [ "Tuple { " ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "1012",
                                "s" : [ {
                                  "value" : [ "'older 05:00Z'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ ", " ]
                            }, {
                              "s" : [ {
                                "r" : "1014",
                                "value" : [ "d", ": ", "@2025-01-02T05:00:00.000Z" ]
                              } ]
                            }, {
                              "value" : [ " }" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "1028",
                            "s" : [ {
                              "value" : [ "Tuple { " ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "1029",
                                "s" : [ {
                                  "value" : [ "'newer 06:00Z'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ ", " ]
                            }, {
                              "s" : [ {
                                "r" : "1031",
                                "value" : [ "d", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                              } ]
                            }, {
                              "value" : [ " }" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "X" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " " ]
                  }, {
                    "r" : "1066",
                    "s" : [ {
                      "value" : [ "sort by " ]
                    }, {
                      "r" : "1065",
                      "s" : [ {
                        "r" : "1064",
                        "s" : [ {
                          "value" : [ "d" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "1099",
                "s" : [ {
                  "value" : [ "id" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Property",
          "localId" : "1099",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "path" : "id",
          "annotation" : [ ],
          "source" : {
            "type" : "Last",
            "localId" : "1087",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1094",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1095",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1096",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "1097",
                "name" : "d",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1098",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            },
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "1088",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1089",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1090",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1091",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "1092",
                  "name" : "d",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1093",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ],
            "source" : {
              "type" : "Query",
              "localId" : "1072",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1073",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1074",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1075",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1076",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "1077",
                    "name" : "d",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1078",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "source" : [ {
                "localId" : "1009",
                "alias" : "X",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "1057",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "1058",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "1059",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "1060",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    }, {
                      "localId" : "1061",
                      "name" : "d",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "1062",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                },
                "expression" : {
                  "type" : "List",
                  "localId" : "1010",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "localId" : "1051",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "1052",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "1053",
                        "name" : "id",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1054",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      }, {
                        "localId" : "1055",
                        "name" : "d",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1056",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      } ]
                    }
                  },
                  "element" : [ {
                    "type" : "Tuple",
                    "localId" : "1011",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "1023",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "1024",
                        "name" : "id",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1025",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      }, {
                        "localId" : "1026",
                        "name" : "d",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1027",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      } ]
                    },
                    "element" : [ {
                      "name" : "id",
                      "value" : {
                        "type" : "Literal",
                        "localId" : "1012",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "older 05:00Z",
                        "annotation" : [ ]
                      }
                    }, {
                      "name" : "d",
                      "value" : {
                        "type" : "DateTime",
                        "localId" : "1014",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ],
                        "signature" : [ ],
                        "year" : {
                          "type" : "Literal",
                          "localId" : "1015",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "2025",
                          "annotation" : [ ]
                        },
                        "month" : {
                          "type" : "Literal",
                          "localId" : "1016",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "1",
                          "annotation" : [ ]
                        },
                        "day" : {
                          "type" : "Literal",
                          "localId" : "1017",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "2",
                          "annotation" : [ ]
                        },
                        "hour" : {
                          "type" : "Literal",
                          "localId" : "1018",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "5",
                          "annotation" : [ ]
                        },
                        "minute" : {
                          "type" : "Literal",
                          "localId" : "1019",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "second" : {
                          "type" : "Literal",
                          "localId" : "1020",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "millisecond" : {
                          "type" : "Literal",
                          "localId" : "1021",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "timezoneOffset" : {
                          "type" : "Literal",
                          "localId" : "1022",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                          "value" : "0.0",
                          "annotation" : [ ]
                        }
                      }
                    } ]
                  }, {
                    "type" : "Tuple",
                    "localId" : "1028",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "1040",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "1041",
                        "name" : "id",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1042",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      }, {
                        "localId" : "1043",
                        "name" : "d",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1044",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      } ]
                    },
                    "element" : [ {
                      "name" : "id",
                      "value" : {
                        "type" : "Literal",
                        "localId" : "1029",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "newer 06:00Z",
                        "annotation" : [ ]
                      }
                    }, {
                      "name" : "d",
                      "value" : {
                        "type" : "DateTime",
                        "localId" : "1031",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ],
                        "signature" : [ ],
                        "year" : {
                          "type" : "Literal",
                          "localId" : "1032",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "2025",
                          "annotation" : [ ]
                        },
                        "month" : {
                          "type" : "Literal",
                          "localId" : "1033",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "1",
                          "annotation" : [ ]
                        },
                        "day" : {
                          "type" : "Literal",
                          "localId" : "1034",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "1",
                          "annotation" : [ ]
                        },
                        "hour" : {
                          "type" : "Literal",
                          "localId" : "1035",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "20",
                          "annotation" : [ ]
                        },
                        "minute" : {
                          "type" : "Literal",
                          "localId" : "1036",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "second" : {
                          "type" : "Literal",
                          "localId" : "1037",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "millisecond" : {
                          "type" : "Literal",
                          "localId" : "1038",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "timezoneOffset" : {
                          "type" : "Literal",
                          "localId" : "1039",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                          "value" : "-10.0",
                          "annotation" : [ ]
                        }
                      }
                    } ]
                  } ]
                }
              } ],
              "let" : [ ],
              "relationship" : [ ],
              "sort" : {
                "localId" : "1066",
                "annotation" : [ ],
                "by" : [ {
                  "type" : "ByColumn",
                  "localId" : "1065",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "direction" : "asc",
                  "path" : "d",
                  "annotation" : [ ]
                } ]
              }
            }
          }
        }
      }, {
        "localId" : "1102",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NewestReversedInput",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1102",
            "s" : [ {
              "value" : [ "", "define ", "NewestReversedInput", ": " ]
            }, {
              "r" : "1193",
              "s" : [ {
                "r" : "1181",
                "s" : [ {
                  "value" : [ "Last", "(" ]
                }, {
                  "r" : "1166",
                  "s" : [ {
                    "s" : [ {
                      "r" : "1103",
                      "s" : [ {
                        "r" : "1104",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "1104",
                          "s" : [ {
                            "value" : [ "{ " ]
                          }, {
                            "r" : "1105",
                            "s" : [ {
                              "value" : [ "Tuple { " ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "1106",
                                "s" : [ {
                                  "value" : [ "'newer 06:00Z'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ ", " ]
                            }, {
                              "s" : [ {
                                "r" : "1108",
                                "value" : [ "d", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                              } ]
                            }, {
                              "value" : [ " }" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "1122",
                            "s" : [ {
                              "value" : [ "Tuple { " ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "1123",
                                "s" : [ {
                                  "value" : [ "'older 05:00Z'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ ", " ]
                            }, {
                              "s" : [ {
                                "r" : "1125",
                                "value" : [ "d", ": ", "@2025-01-02T05:00:00.000Z" ]
                              } ]
                            }, {
                              "value" : [ " }" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "X" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " " ]
                  }, {
                    "r" : "1160",
                    "s" : [ {
                      "value" : [ "sort by " ]
                    }, {
                      "r" : "1159",
                      "s" : [ {
                        "r" : "1158",
                        "s" : [ {
                          "value" : [ "d" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "1193",
                "s" : [ {
                  "value" : [ "id" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Property",
          "localId" : "1193",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "path" : "id",
          "annotation" : [ ],
          "source" : {
            "type" : "Last",
            "localId" : "1181",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1188",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1189",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1190",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "1191",
                "name" : "d",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1192",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            },
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "1182",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1183",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1184",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1185",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "1186",
                  "name" : "d",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1187",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ],
            "source" : {
              "type" : "Query",
              "localId" : "1166",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1167",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1168",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1169",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1170",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "1171",
                    "name" : "d",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1172",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "source" : [ {
                "localId" : "1103",
                "alias" : "X",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "1151",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "1152",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "1153",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "1154",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    }, {
                      "localId" : "1155",
                      "name" : "d",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "1156",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                },
                "expression" : {
                  "type" : "List",
                  "localId" : "1104",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "localId" : "1145",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "1146",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "1147",
                        "name" : "id",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1148",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      }, {
                        "localId" : "1149",
                        "name" : "d",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1150",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      } ]
                    }
                  },
                  "element" : [ {
                    "type" : "Tuple",
                    "localId" : "1105",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "1117",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "1118",
                        "name" : "id",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1119",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      }, {
                        "localId" : "1120",
                        "name" : "d",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1121",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      } ]
                    },
                    "element" : [ {
                      "name" : "id",
                      "value" : {
                        "type" : "Literal",
                        "localId" : "1106",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "newer 06:00Z",
                        "annotation" : [ ]
                      }
                    }, {
                      "name" : "d",
                      "value" : {
                        "type" : "DateTime",
                        "localId" : "1108",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ],
                        "signature" : [ ],
                        "year" : {
                          "type" : "Literal",
                          "localId" : "1109",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "2025",
                          "annotation" : [ ]
                        },
                        "month" : {
                          "type" : "Literal",
                          "localId" : "1110",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "1",
                          "annotation" : [ ]
                        },
                        "day" : {
                          "type" : "Literal",
                          "localId" : "1111",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "1",
                          "annotation" : [ ]
                        },
                        "hour" : {
                          "type" : "Literal",
                          "localId" : "1112",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "20",
                          "annotation" : [ ]
                        },
                        "minute" : {
                          "type" : "Literal",
                          "localId" : "1113",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "second" : {
                          "type" : "Literal",
                          "localId" : "1114",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "millisecond" : {
                          "type" : "Literal",
                          "localId" : "1115",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "timezoneOffset" : {
                          "type" : "Literal",
                          "localId" : "1116",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                          "value" : "-10.0",
                          "annotation" : [ ]
                        }
                      }
                    } ]
                  }, {
                    "type" : "Tuple",
                    "localId" : "1122",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "1134",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "1135",
                        "name" : "id",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1136",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      }, {
                        "localId" : "1137",
                        "name" : "d",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "1138",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      } ]
                    },
                    "element" : [ {
                      "name" : "id",
                      "value" : {
                        "type" : "Literal",
                        "localId" : "1123",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "older 05:00Z",
                        "annotation" : [ ]
                      }
                    }, {
                      "name" : "d",
                      "value" : {
                        "type" : "DateTime",
                        "localId" : "1125",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ],
                        "signature" : [ ],
                        "year" : {
                          "type" : "Literal",
                          "localId" : "1126",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "2025",
                          "annotation" : [ ]
                        },
                        "month" : {
                          "type" : "Literal",
                          "localId" : "1127",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "1",
                          "annotation" : [ ]
                        },
                        "day" : {
                          "type" : "Literal",
                          "localId" : "1128",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "2",
                          "annotation" : [ ]
                        },
                        "hour" : {
                          "type" : "Literal",
                          "localId" : "1129",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "5",
                          "annotation" : [ ]
                        },
                        "minute" : {
                          "type" : "Literal",
                          "localId" : "1130",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "second" : {
                          "type" : "Literal",
                          "localId" : "1131",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "millisecond" : {
                          "type" : "Literal",
                          "localId" : "1132",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "0",
                          "annotation" : [ ]
                        },
                        "timezoneOffset" : {
                          "type" : "Literal",
                          "localId" : "1133",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                          "value" : "0.0",
                          "annotation" : [ ]
                        }
                      }
                    } ]
                  } ]
                }
              } ],
              "let" : [ ],
              "relationship" : [ ],
              "sort" : {
                "localId" : "1160",
                "annotation" : [ ],
                "by" : [ {
                  "type" : "ByColumn",
                  "localId" : "1159",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "direction" : "asc",
                  "path" : "d",
                  "annotation" : [ ]
                } ]
              }
            }
          }
        }
      }, {
        "localId" : "1196",
        "name" : "DateTimeDirectionAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1196",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeDirectionAsc", ": " ]
            }, {
              "r" : "1231",
              "s" : [ {
                "s" : [ {
                  "r" : "1197",
                  "s" : [ {
                    "r" : "1198",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1198",
                      "s" : [ {
                        "r" : "1199",
                        "value" : [ "{ ", "@2025-01-02T05:00:00.000Z", ", ", "@2025-01-01T20:00:00.000-10:00", " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "r" : "1224",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1234",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "1235",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1231",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1232",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "1233",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "1197",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1221",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1222",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1198",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1219",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1220",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "DateTime",
                "localId" : "1199",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1200",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2025",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1201",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1202",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                },
                "hour" : {
                  "type" : "Literal",
                  "localId" : "1203",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                },
                "minute" : {
                  "type" : "Literal",
                  "localId" : "1204",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "second" : {
                  "type" : "Literal",
                  "localId" : "1205",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "millisecond" : {
                  "type" : "Literal",
                  "localId" : "1206",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "timezoneOffset" : {
                  "type" : "Literal",
                  "localId" : "1207",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "annotation" : [ ]
                }
              }, {
                "type" : "DateTime",
                "localId" : "1208",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1209",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2025",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1210",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1211",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "hour" : {
                  "type" : "Literal",
                  "localId" : "1212",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "20",
                  "annotation" : [ ]
                },
                "minute" : {
                  "type" : "Literal",
                  "localId" : "1213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "second" : {
                  "type" : "Literal",
                  "localId" : "1214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "millisecond" : {
                  "type" : "Literal",
                  "localId" : "1215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "timezoneOffset" : {
                  "type" : "Literal",
                  "localId" : "1216",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "-10.0",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1224",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "1225",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1238",
        "name" : "DateTimeDirectionDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1238",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeDirectionDesc", ": " ]
            }, {
              "r" : "1273",
              "s" : [ {
                "s" : [ {
                  "r" : "1239",
                  "s" : [ {
                    "r" : "1240",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1240",
                      "s" : [ {
                        "r" : "1241",
                        "value" : [ "{ ", "@2025-01-02T05:00:00.000Z", ", ", "@2025-01-01T20:00:00.000-10:00", " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "r" : "1266",
                "value" : [ " ", "sort desc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1276",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "1277",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1273",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1274",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "1275",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "1239",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1263",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1264",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1240",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1261",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1262",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "DateTime",
                "localId" : "1241",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1242",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2025",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1244",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                },
                "hour" : {
                  "type" : "Literal",
                  "localId" : "1245",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                },
                "minute" : {
                  "type" : "Literal",
                  "localId" : "1246",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "second" : {
                  "type" : "Literal",
                  "localId" : "1247",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "millisecond" : {
                  "type" : "Literal",
                  "localId" : "1248",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "timezoneOffset" : {
                  "type" : "Literal",
                  "localId" : "1249",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "annotation" : [ ]
                }
              }, {
                "type" : "DateTime",
                "localId" : "1250",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1251",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2025",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1252",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1253",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "hour" : {
                  "type" : "Literal",
                  "localId" : "1254",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "20",
                  "annotation" : [ ]
                },
                "minute" : {
                  "type" : "Literal",
                  "localId" : "1255",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "second" : {
                  "type" : "Literal",
                  "localId" : "1256",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "millisecond" : {
                  "type" : "Literal",
                  "localId" : "1257",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "timezoneOffset" : {
                  "type" : "Literal",
                  "localId" : "1258",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "-10.0",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1266",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "1267",
              "direction" : "desc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1280",
        "name" : "DateTimeColumnAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1280",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeColumnAsc", ": " ]
            }, {
              "r" : "1330",
              "s" : [ {
                "s" : [ {
                  "r" : "1281",
                  "s" : [ {
                    "r" : "1282",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1282",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1283",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1284",
                            "value" : [ "value", ": ", "@2025-01-02T05:00:00.000Z" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1296",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1297",
                            "value" : [ "value", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1324",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1323",
                  "s" : [ {
                    "r" : "1322",
                    "s" : [ {
                      "value" : [ "value" ]
                    } ]
                  }, {
                    "value" : [ " asc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1335",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1336",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1337",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1338",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1330",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1331",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1332",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1333",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1334",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1281",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1317",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1318",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1319",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1320",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1282",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1313",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1314",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1315",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1316",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1283",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1293",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1294",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1295",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1284",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1285",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1286",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1287",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1288",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1289",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1290",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1291",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1292",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "0.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1296",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1306",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1307",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1308",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1297",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1298",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1299",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1300",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1301",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "20",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1302",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1303",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1304",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1305",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "-10.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1324",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "1323",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "direction" : "asc",
              "path" : "value",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1341",
        "name" : "DateTimeColumnDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1341",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeColumnDesc", ": " ]
            }, {
              "r" : "1391",
              "s" : [ {
                "s" : [ {
                  "r" : "1342",
                  "s" : [ {
                    "r" : "1343",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1343",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1344",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1345",
                            "value" : [ "value", ": ", "@2025-01-02T05:00:00.000Z" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1357",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1358",
                            "value" : [ "value", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1385",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1384",
                  "s" : [ {
                    "r" : "1383",
                    "s" : [ {
                      "value" : [ "value" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1396",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1397",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1398",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1399",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1391",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1392",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1393",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1394",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1395",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1342",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1378",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1379",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1380",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1381",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1343",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1374",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1375",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1376",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1377",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1344",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1354",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1355",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1356",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1345",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1346",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1347",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1348",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1349",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1350",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1351",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1352",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1353",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "0.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1357",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1367",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1368",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1369",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1358",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1359",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1360",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1361",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1362",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "20",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1363",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1364",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1365",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1366",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "-10.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1385",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "1384",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "direction" : "desc",
              "path" : "value",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1402",
        "name" : "DateTimeExpressionAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1402",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeExpressionAsc", ": " ]
            }, {
              "r" : "1456",
              "s" : [ {
                "s" : [ {
                  "r" : "1403",
                  "s" : [ {
                    "r" : "1404",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1404",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1405",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1406",
                            "value" : [ "value", ": ", "@2025-01-02T05:00:00.000Z" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1418",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1419",
                            "value" : [ "value", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1450",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1449",
                  "s" : [ {
                    "r" : "1444",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1444",
                      "s" : [ {
                        "r" : "1445",
                        "s" : [ {
                          "value" : [ "value" ]
                        } ]
                      }, {
                        "value" : [ " + " ]
                      }, {
                        "r" : "1446",
                        "s" : [ {
                          "value" : [ "0 ", "days" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " asc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1461",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1462",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1463",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1464",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1456",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1457",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1458",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1459",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1460",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1403",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1439",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1440",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1441",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1442",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1404",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1435",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1436",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1437",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1438",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1405",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1415",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1416",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1417",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1406",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1407",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1408",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1409",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1410",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1411",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1412",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1413",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1414",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "0.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1418",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1428",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1429",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1430",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1419",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1420",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1421",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1422",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1423",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "20",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1424",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1425",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1426",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1427",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "-10.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1450",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "1449",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "direction" : "asc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "1444",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1447",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1448",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "1445",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "value",
                  "annotation" : [ ]
                }, {
                  "type" : "Quantity",
                  "localId" : "1446",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 0,
                  "unit" : "days",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1467",
        "name" : "DateTimeExpressionDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1467",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeExpressionDesc", ": " ]
            }, {
              "r" : "1521",
              "s" : [ {
                "s" : [ {
                  "r" : "1468",
                  "s" : [ {
                    "r" : "1469",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1469",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1470",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1471",
                            "value" : [ "value", ": ", "@2025-01-02T05:00:00.000Z" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1483",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1484",
                            "value" : [ "value", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1515",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1514",
                  "s" : [ {
                    "r" : "1509",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1509",
                      "s" : [ {
                        "r" : "1510",
                        "s" : [ {
                          "value" : [ "value" ]
                        } ]
                      }, {
                        "value" : [ " + " ]
                      }, {
                        "r" : "1511",
                        "s" : [ {
                          "value" : [ "0 ", "days" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1526",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1527",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1528",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1529",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1521",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1522",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1523",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1524",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1525",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1468",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1504",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1505",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1506",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1507",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1469",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1500",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1501",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1502",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1503",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1470",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1480",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1481",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1482",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1471",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1472",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1473",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1474",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1475",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1476",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1477",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1478",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1479",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "0.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1483",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1493",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1494",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1495",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1484",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1485",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1486",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1487",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1488",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "20",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1489",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1490",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1491",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1492",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "-10.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1515",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "1514",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "direction" : "desc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "1509",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1512",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1513",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "1510",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "value",
                  "annotation" : [ ]
                }, {
                  "type" : "Quantity",
                  "localId" : "1511",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 0,
                  "unit" : "days",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1532",
        "name" : "DateTimeDirectionAscReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1532",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeDirectionAscReversed", ": " ]
            }, {
              "r" : "1567",
              "s" : [ {
                "s" : [ {
                  "r" : "1533",
                  "s" : [ {
                    "r" : "1534",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1534",
                      "s" : [ {
                        "r" : "1535",
                        "value" : [ "{ ", "@2025-01-01T20:00:00.000-10:00", ", ", "@2025-01-02T05:00:00.000Z", " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "r" : "1560",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1570",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "1571",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1567",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1568",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "1569",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "1533",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1557",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1558",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1534",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1555",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1556",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "DateTime",
                "localId" : "1535",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1536",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2025",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1537",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1538",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "hour" : {
                  "type" : "Literal",
                  "localId" : "1539",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "20",
                  "annotation" : [ ]
                },
                "minute" : {
                  "type" : "Literal",
                  "localId" : "1540",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "second" : {
                  "type" : "Literal",
                  "localId" : "1541",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "millisecond" : {
                  "type" : "Literal",
                  "localId" : "1542",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "timezoneOffset" : {
                  "type" : "Literal",
                  "localId" : "1543",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "-10.0",
                  "annotation" : [ ]
                }
              }, {
                "type" : "DateTime",
                "localId" : "1544",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1545",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2025",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1546",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1547",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                },
                "hour" : {
                  "type" : "Literal",
                  "localId" : "1548",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                },
                "minute" : {
                  "type" : "Literal",
                  "localId" : "1549",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "second" : {
                  "type" : "Literal",
                  "localId" : "1550",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "millisecond" : {
                  "type" : "Literal",
                  "localId" : "1551",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "timezoneOffset" : {
                  "type" : "Literal",
                  "localId" : "1552",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1560",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "1561",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1574",
        "name" : "DateTimeDirectionDescReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1574",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeDirectionDescReversed", ": " ]
            }, {
              "r" : "1609",
              "s" : [ {
                "s" : [ {
                  "r" : "1575",
                  "s" : [ {
                    "r" : "1576",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1576",
                      "s" : [ {
                        "r" : "1577",
                        "value" : [ "{ ", "@2025-01-01T20:00:00.000-10:00", ", ", "@2025-01-02T05:00:00.000Z", " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "r" : "1602",
                "value" : [ " ", "sort desc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1612",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "1613",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1609",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1610",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "1611",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "1575",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1599",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1600",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1576",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1597",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1598",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "DateTime",
                "localId" : "1577",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1578",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2025",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1579",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1580",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "hour" : {
                  "type" : "Literal",
                  "localId" : "1581",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "20",
                  "annotation" : [ ]
                },
                "minute" : {
                  "type" : "Literal",
                  "localId" : "1582",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "second" : {
                  "type" : "Literal",
                  "localId" : "1583",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "millisecond" : {
                  "type" : "Literal",
                  "localId" : "1584",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "timezoneOffset" : {
                  "type" : "Literal",
                  "localId" : "1585",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "-10.0",
                  "annotation" : [ ]
                }
              }, {
                "type" : "DateTime",
                "localId" : "1586",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1587",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2025",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1588",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1589",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                },
                "hour" : {
                  "type" : "Literal",
                  "localId" : "1590",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                },
                "minute" : {
                  "type" : "Literal",
                  "localId" : "1591",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "second" : {
                  "type" : "Literal",
                  "localId" : "1592",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "millisecond" : {
                  "type" : "Literal",
                  "localId" : "1593",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "annotation" : [ ]
                },
                "timezoneOffset" : {
                  "type" : "Literal",
                  "localId" : "1594",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1602",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "1603",
              "direction" : "desc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1616",
        "name" : "DateTimeColumnAscReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1616",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeColumnAscReversed", ": " ]
            }, {
              "r" : "1666",
              "s" : [ {
                "s" : [ {
                  "r" : "1617",
                  "s" : [ {
                    "r" : "1618",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1618",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1619",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1620",
                            "value" : [ "value", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1632",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1633",
                            "value" : [ "value", ": ", "@2025-01-02T05:00:00.000Z" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1660",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1659",
                  "s" : [ {
                    "r" : "1658",
                    "s" : [ {
                      "value" : [ "value" ]
                    } ]
                  }, {
                    "value" : [ " asc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1671",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1672",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1673",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1674",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1666",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1667",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1668",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1669",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1670",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1617",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1653",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1654",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1655",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1656",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1618",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1649",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1650",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1651",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1652",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1619",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1629",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1630",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1631",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1620",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1621",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1622",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1623",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1624",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "20",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1625",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1626",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1627",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1628",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "-10.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1632",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1642",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1643",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1644",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1633",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1634",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1635",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1636",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1637",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1638",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1639",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1640",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1641",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "0.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1660",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "1659",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "direction" : "asc",
              "path" : "value",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1677",
        "name" : "DateTimeColumnDescReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1677",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeColumnDescReversed", ": " ]
            }, {
              "r" : "1727",
              "s" : [ {
                "s" : [ {
                  "r" : "1678",
                  "s" : [ {
                    "r" : "1679",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1679",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1680",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1681",
                            "value" : [ "value", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1693",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1694",
                            "value" : [ "value", ": ", "@2025-01-02T05:00:00.000Z" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1721",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1720",
                  "s" : [ {
                    "r" : "1719",
                    "s" : [ {
                      "value" : [ "value" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1732",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1733",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1734",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1735",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1727",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1728",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1729",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1730",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1731",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1678",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1714",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1715",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1716",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1717",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1679",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1710",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1711",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1712",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1713",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1680",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1690",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1691",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1692",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1681",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1682",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1683",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1684",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1685",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "20",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1686",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1687",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1688",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1689",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "-10.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1693",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1703",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1704",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1705",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1694",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1695",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1696",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1697",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1698",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1699",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1700",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1701",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1702",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "0.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1721",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "1720",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "direction" : "desc",
              "path" : "value",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1738",
        "name" : "DateTimeExpressionAscReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1738",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeExpressionAscReversed", ": " ]
            }, {
              "r" : "1792",
              "s" : [ {
                "s" : [ {
                  "r" : "1739",
                  "s" : [ {
                    "r" : "1740",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1740",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1741",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1742",
                            "value" : [ "value", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1754",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1755",
                            "value" : [ "value", ": ", "@2025-01-02T05:00:00.000Z" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1786",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1785",
                  "s" : [ {
                    "r" : "1780",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1780",
                      "s" : [ {
                        "r" : "1781",
                        "s" : [ {
                          "value" : [ "value" ]
                        } ]
                      }, {
                        "value" : [ " + " ]
                      }, {
                        "r" : "1782",
                        "s" : [ {
                          "value" : [ "0 ", "days" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " asc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1797",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1798",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1799",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1800",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1792",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1793",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1794",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1795",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1796",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1739",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1775",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1776",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1777",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1778",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1740",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1771",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1772",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1773",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1774",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1741",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1751",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1752",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1753",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1742",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1743",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1744",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1745",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1746",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "20",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1747",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1748",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1749",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1750",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "-10.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1754",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1764",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1765",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1766",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1755",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1756",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1757",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1758",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1759",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1760",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1761",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1762",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1763",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "0.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1786",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "1785",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "direction" : "asc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "1780",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1783",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1784",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "1781",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "value",
                  "annotation" : [ ]
                }, {
                  "type" : "Quantity",
                  "localId" : "1782",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 0,
                  "unit" : "days",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1803",
        "name" : "DateTimeExpressionDescReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1803",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeExpressionDescReversed", ": " ]
            }, {
              "r" : "1857",
              "s" : [ {
                "s" : [ {
                  "r" : "1804",
                  "s" : [ {
                    "r" : "1805",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1805",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1806",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1807",
                            "value" : [ "value", ": ", "@2025-01-01T20:00:00.000-10:00" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1819",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1820",
                            "value" : [ "value", ": ", "@2025-01-02T05:00:00.000Z" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1851",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1850",
                  "s" : [ {
                    "r" : "1845",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1845",
                      "s" : [ {
                        "r" : "1846",
                        "s" : [ {
                          "value" : [ "value" ]
                        } ]
                      }, {
                        "value" : [ " + " ]
                      }, {
                        "r" : "1847",
                        "s" : [ {
                          "value" : [ "0 ", "days" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1862",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1863",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1864",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1865",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1857",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1858",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1859",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1860",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1861",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1804",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1840",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1841",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1842",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1843",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1805",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1836",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1837",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1838",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1839",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1806",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1816",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1817",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1818",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1807",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1808",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1809",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1810",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1811",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "20",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1812",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1813",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1814",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1815",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "-10.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1819",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1829",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1830",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1831",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "DateTime",
                    "localId" : "1820",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "year" : {
                      "type" : "Literal",
                      "localId" : "1821",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2025",
                      "annotation" : [ ]
                    },
                    "month" : {
                      "type" : "Literal",
                      "localId" : "1822",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    },
                    "day" : {
                      "type" : "Literal",
                      "localId" : "1823",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "2",
                      "annotation" : [ ]
                    },
                    "hour" : {
                      "type" : "Literal",
                      "localId" : "1824",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    },
                    "minute" : {
                      "type" : "Literal",
                      "localId" : "1825",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "second" : {
                      "type" : "Literal",
                      "localId" : "1826",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "millisecond" : {
                      "type" : "Literal",
                      "localId" : "1827",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "0",
                      "annotation" : [ ]
                    },
                    "timezoneOffset" : {
                      "type" : "Literal",
                      "localId" : "1828",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "value" : "0.0",
                      "annotation" : [ ]
                    }
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1851",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "1850",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "direction" : "desc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "1845",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1848",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1849",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "1846",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "value",
                  "annotation" : [ ]
                }, {
                  "type" : "Quantity",
                  "localId" : "1847",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 0,
                  "unit" : "days",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1868",
        "name" : "DecimalDirectionAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1868",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDirectionAsc", ": " ]
            }, {
              "r" : "1887",
              "s" : [ {
                "s" : [ {
                  "r" : "1869",
                  "s" : [ {
                    "r" : "1870",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1870",
                      "s" : [ {
                        "r" : "1871",
                        "value" : [ "{ ", "2.5", ", ", "10.25", " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "r" : "1880",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1890",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "1891",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1887",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1888",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "1889",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "1869",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1877",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1878",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1870",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1875",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1876",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "1871",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "1872",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "10.25",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1880",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "1881",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1894",
        "name" : "DecimalDirectionDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1894",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDirectionDesc", ": " ]
            }, {
              "r" : "1913",
              "s" : [ {
                "s" : [ {
                  "r" : "1895",
                  "s" : [ {
                    "r" : "1896",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1896",
                      "s" : [ {
                        "r" : "1897",
                        "value" : [ "{ ", "2.5", ", ", "10.25", " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "r" : "1906",
                "value" : [ " ", "sort desc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1916",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "1917",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1913",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1914",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "1915",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "1895",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1903",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1904",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1896",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1901",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1902",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "1897",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "1898",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "10.25",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1906",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "1907",
              "direction" : "desc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1920",
        "name" : "DecimalColumnAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1920",
            "s" : [ {
              "value" : [ "", "define ", "DecimalColumnAsc", ": " ]
            }, {
              "r" : "1954",
              "s" : [ {
                "s" : [ {
                  "r" : "1921",
                  "s" : [ {
                    "r" : "1922",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1922",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1923",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1924",
                            "value" : [ "value", ": ", "2.5" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1928",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1929",
                            "value" : [ "value", ": ", "10.25" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1948",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1947",
                  "s" : [ {
                    "r" : "1946",
                    "s" : [ {
                      "value" : [ "value" ]
                    } ]
                  }, {
                    "value" : [ " asc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "1959",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "1960",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1961",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1962",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1954",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "1955",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1956",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1957",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1958",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1921",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1941",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1942",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1943",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1944",
                    "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1922",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1937",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1938",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1939",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1940",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1923",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1925",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1926",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1927",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "1924",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "2.5",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1928",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1930",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1931",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1932",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "1929",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "10.25",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1948",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "1947",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "direction" : "asc",
              "path" : "value",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1965",
        "name" : "DecimalColumnDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1965",
            "s" : [ {
              "value" : [ "", "define ", "DecimalColumnDesc", ": " ]
            }, {
              "r" : "1999",
              "s" : [ {
                "s" : [ {
                  "r" : "1966",
                  "s" : [ {
                    "r" : "1967",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "1967",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "1968",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1969",
                            "value" : [ "value", ": ", "2.5" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "1973",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "1974",
                            "value" : [ "value", ": ", "10.25" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "1993",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "1992",
                  "s" : [ {
                    "r" : "1991",
                    "s" : [ {
                      "value" : [ "value" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2004",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "2005",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "2006",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2007",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "1999",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2000",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "2001",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "2002",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2003",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "1966",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1986",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "1987",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "1988",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1989",
                    "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "1967",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "1982",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1983",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1984",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1985",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "1968",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1970",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1971",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1972",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "1969",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "2.5",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "1973",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "1975",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "1976",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "1977",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "1974",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "10.25",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "1993",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "1992",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "direction" : "desc",
              "path" : "value",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "2010",
        "name" : "DecimalExpressionAsc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "2010",
            "s" : [ {
              "value" : [ "", "define ", "DecimalExpressionAsc", ": " ]
            }, {
              "r" : "2048",
              "s" : [ {
                "s" : [ {
                  "r" : "2011",
                  "s" : [ {
                    "r" : "2012",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2012",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "2013",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2014",
                            "value" : [ "value", ": ", "2.5" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "2018",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2019",
                            "value" : [ "value", ": ", "10.25" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "2042",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "2041",
                  "s" : [ {
                    "r" : "2036",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2036",
                      "s" : [ {
                        "r" : "2037",
                        "s" : [ {
                          "value" : [ "value" ]
                        } ]
                      }, {
                        "r" : "2038",
                        "value" : [ " + ", "0.0" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " asc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2053",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "2054",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "2055",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2056",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "2048",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2049",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "2050",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "2051",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2052",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "2011",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "2031",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "2032",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "2033",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "2034",
                    "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "2012",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "2027",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2028",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2029",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2030",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "2013",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2015",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2016",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2017",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2014",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "2.5",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "2018",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2020",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2021",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2022",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2019",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "10.25",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "2042",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "2041",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "direction" : "asc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "2036",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2039",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2040",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "2037",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "name" : "value",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "2038",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "2059",
        "name" : "DecimalExpressionDesc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "2059",
            "s" : [ {
              "value" : [ "", "define ", "DecimalExpressionDesc", ": " ]
            }, {
              "r" : "2097",
              "s" : [ {
                "s" : [ {
                  "r" : "2060",
                  "s" : [ {
                    "r" : "2061",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2061",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "2062",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2063",
                            "value" : [ "value", ": ", "2.5" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "2067",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2068",
                            "value" : [ "value", ": ", "10.25" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "2091",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "2090",
                  "s" : [ {
                    "r" : "2085",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2085",
                      "s" : [ {
                        "r" : "2086",
                        "s" : [ {
                          "value" : [ "value" ]
                        } ]
                      }, {
                        "r" : "2087",
                        "value" : [ " + ", "0.0" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2102",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "2103",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "2104",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2105",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "2097",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2098",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "2099",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "2100",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2101",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "2060",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "2080",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "2081",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "2082",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "2083",
                    "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "2061",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "2076",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2077",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2078",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2079",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "2062",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2064",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2065",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2066",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2063",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "2.5",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "2067",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2069",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2070",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2071",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2068",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "10.25",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "2091",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "2090",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "direction" : "desc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "2085",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2088",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2089",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "2086",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "name" : "value",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "2087",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "2108",
        "name" : "DecimalDirectionAscReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "2108",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDirectionAscReversed", ": " ]
            }, {
              "r" : "2127",
              "s" : [ {
                "s" : [ {
                  "r" : "2109",
                  "s" : [ {
                    "r" : "2110",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2110",
                      "s" : [ {
                        "r" : "2111",
                        "value" : [ "{ ", "10.25", ", ", "2.5", " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "r" : "2120",
                "value" : [ " ", "sort asc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2130",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "2131",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "2127",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2128",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "2129",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "2109",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "2117",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2118",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "2110",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "2115",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2116",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "2111",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "10.25",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "2112",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.5",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "2120",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "2121",
              "direction" : "asc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "2134",
        "name" : "DecimalDirectionDescReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "2134",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDirectionDescReversed", ": " ]
            }, {
              "r" : "2153",
              "s" : [ {
                "s" : [ {
                  "r" : "2135",
                  "s" : [ {
                    "r" : "2136",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2136",
                      "s" : [ {
                        "r" : "2137",
                        "value" : [ "{ ", "10.25", ", ", "2.5", " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "r" : "2146",
                "value" : [ " ", "sort desc" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2156",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "2157",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "2153",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2154",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "2155",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "2135",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "2143",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2144",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "2136",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "2141",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2142",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "2137",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "10.25",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "2138",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.5",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "2146",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByDirection",
              "localId" : "2147",
              "direction" : "desc",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "2160",
        "name" : "DecimalColumnAscReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "2160",
            "s" : [ {
              "value" : [ "", "define ", "DecimalColumnAscReversed", ": " ]
            }, {
              "r" : "2194",
              "s" : [ {
                "s" : [ {
                  "r" : "2161",
                  "s" : [ {
                    "r" : "2162",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2162",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "2163",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2164",
                            "value" : [ "value", ": ", "10.25" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "2168",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2169",
                            "value" : [ "value", ": ", "2.5" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "2188",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "2187",
                  "s" : [ {
                    "r" : "2186",
                    "s" : [ {
                      "value" : [ "value" ]
                    } ]
                  }, {
                    "value" : [ " asc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2199",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "2200",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "2201",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2202",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "2194",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2195",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "2196",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "2197",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2198",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "2161",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "2181",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "2182",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "2183",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "2184",
                    "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "2162",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "2177",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2178",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2179",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2180",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "2163",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2165",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2166",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2167",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2164",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "10.25",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "2168",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2170",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2171",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2172",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2169",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "2.5",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "2188",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "2187",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "direction" : "asc",
              "path" : "value",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "2205",
        "name" : "DecimalColumnDescReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "2205",
            "s" : [ {
              "value" : [ "", "define ", "DecimalColumnDescReversed", ": " ]
            }, {
              "r" : "2239",
              "s" : [ {
                "s" : [ {
                  "r" : "2206",
                  "s" : [ {
                    "r" : "2207",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2207",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "2208",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2209",
                            "value" : [ "value", ": ", "10.25" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "2213",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2214",
                            "value" : [ "value", ": ", "2.5" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "2233",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "2232",
                  "s" : [ {
                    "r" : "2231",
                    "s" : [ {
                      "value" : [ "value" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2244",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "2245",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "2246",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2247",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "2239",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2240",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "2241",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "2242",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2243",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "2206",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "2226",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "2227",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "2228",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "2229",
                    "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "2207",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "2222",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2223",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2224",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2225",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "2208",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2210",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2211",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2212",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2209",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "10.25",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "2213",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2215",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2216",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2217",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2214",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "2.5",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "2233",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByColumn",
              "localId" : "2232",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "direction" : "desc",
              "path" : "value",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "2250",
        "name" : "DecimalExpressionAscReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "2250",
            "s" : [ {
              "value" : [ "", "define ", "DecimalExpressionAscReversed", ": " ]
            }, {
              "r" : "2288",
              "s" : [ {
                "s" : [ {
                  "r" : "2251",
                  "s" : [ {
                    "r" : "2252",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2252",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "2253",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2254",
                            "value" : [ "value", ": ", "10.25" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "2258",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2259",
                            "value" : [ "value", ": ", "2.5" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "2282",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "2281",
                  "s" : [ {
                    "r" : "2276",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2276",
                      "s" : [ {
                        "r" : "2277",
                        "s" : [ {
                          "value" : [ "value" ]
                        } ]
                      }, {
                        "r" : "2278",
                        "value" : [ " + ", "0.0" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " asc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2293",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "2294",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "2295",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2296",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "2288",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2289",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "2290",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "2291",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2292",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "2251",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "2271",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "2272",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "2273",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "2274",
                    "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "2252",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "2267",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2268",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2269",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2270",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "2253",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2255",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2256",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2257",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2254",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "10.25",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "2258",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2260",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2261",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2262",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2259",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "2.5",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "2282",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "2281",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "direction" : "asc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "2276",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2279",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2280",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "2277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "name" : "value",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "2278",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      }, {
        "localId" : "2299",
        "name" : "DecimalExpressionDescReversed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "2299",
            "s" : [ {
              "value" : [ "", "define ", "DecimalExpressionDescReversed", ": " ]
            }, {
              "r" : "2337",
              "s" : [ {
                "s" : [ {
                  "r" : "2300",
                  "s" : [ {
                    "r" : "2301",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2301",
                      "s" : [ {
                        "value" : [ "{ " ]
                      }, {
                        "r" : "2302",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2303",
                            "value" : [ "value", ": ", "10.25" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "2307",
                        "s" : [ {
                          "value" : [ "Tuple { " ]
                        }, {
                          "s" : [ {
                            "r" : "2308",
                            "value" : [ "value", ": ", "2.5" ]
                          } ]
                        }, {
                          "value" : [ " }" ]
                        } ]
                      }, {
                        "value" : [ " }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "2331",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "2330",
                  "s" : [ {
                    "r" : "2325",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "2325",
                      "s" : [ {
                        "r" : "2326",
                        "s" : [ {
                          "value" : [ "value" ]
                        } ]
                      }, {
                        "r" : "2327",
                        "value" : [ " + ", "0.0" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " desc" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "2342",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "2343",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "2344",
              "name" : "value",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "2345",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "2337",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "2338",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "2339",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "2340",
                "name" : "value",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2341",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "2300",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "2320",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "2321",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "2322",
                  "name" : "value",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "2323",
                    "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "2301",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "2316",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2317",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2318",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2319",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "2302",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2304",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2305",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2306",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2303",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "10.25",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "2307",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "2309",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "2310",
                    "name" : "value",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "2311",
                      "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "value",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "2308",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                    "value" : "2.5",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "sort" : {
            "localId" : "2331",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "2330",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "direction" : "desc",
              "annotation" : [ ],
              "expression" : {
                "type" : "Add",
                "localId" : "2325",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2328",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "2329",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "2326",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "name" : "value",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "2327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "annotation" : [ ]
                } ]
              }
            } ]
          }
        }
      } ]
    }
  }
}

/* Distinct
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define defaultNumbers: ({1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1}) N return N
define defaultStrings: ({'foo', 'bar', 'baz', 'bar'}) S return S
define defaultTuples: ({Tuple{a: 1, b:2}, Tuple{a: 2, b: 3}, Tuple{a: 1, b: 2}}) T return T
define distinctNumbers: ({1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1}) N return distinct N
define distinctStrings: ({'foo', 'bar', 'baz', 'bar'}) S return distinct S
define distinctTuples: ({Tuple{a: 1, b:2}, Tuple{a: 2, b: 3}, Tuple{a: 1, b: 2}}) T return distinct T
define allNumbers: ({1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1}) N return all N
define allStrings: ({'foo', 'bar', 'baz', 'bar'}) S return all S
define allTuples: ({Tuple{a: 1, b:2}, Tuple{a: 2, b: 3}, Tuple{a: 1, b: 2}}) T return all T
*/

module.exports['Distinct'] = {
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
        "r" : "560",
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
        "name" : "defaultNumbers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "defaultNumbers", ": " ]
            }, {
              "r" : "244",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "216",
                      "s" : [ {
                        "r" : "217",
                        "value" : [ "{", "1", ", ", "2", ", ", "2", ", ", "3", ", ", "3", ", ", "3", ", ", "4", ", ", "4", ", ", "4", ", ", "4", ", ", "3", ", ", "3", ", ", "3", ", ", "2", ", ", "2", ", ", "1", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "240",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "value" : [ "N" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "247",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "248",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "244",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "245",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "246",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "215",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "237",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "238",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "216",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "235",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
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
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "222",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "223",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "224",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "225",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "226",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "227",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "228",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "229",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "230",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "231",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "232",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "240",
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
            "expression" : {
              "type" : "AliasRef",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "N",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "251",
        "name" : "defaultStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "251",
            "s" : [ {
              "value" : [ "", "define ", "defaultStrings", ": " ]
            }, {
              "r" : "273",
              "s" : [ {
                "s" : [ {
                  "r" : "252",
                  "s" : [ {
                    "r" : "253",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "253",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "254",
                        "s" : [ {
                          "value" : [ "'foo'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "256",
                        "s" : [ {
                          "value" : [ "'bar'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "258",
                        "s" : [ {
                          "value" : [ "'baz'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "260",
                        "s" : [ {
                          "value" : [ "'bar'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "S" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "269",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "270",
                  "s" : [ {
                    "value" : [ "S" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "276",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "277",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "273",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "274",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "275",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "252",
            "alias" : "S",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "266",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "267",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "253",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "264",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "254",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "foo",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "256",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "bar",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "258",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "baz",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "260",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "bar",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "269",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "S",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "280",
        "name" : "defaultTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "280",
            "s" : [ {
              "value" : [ "", "define ", "defaultTuples", ": " ]
            }, {
              "r" : "339",
              "s" : [ {
                "s" : [ {
                  "r" : "281",
                  "s" : [ {
                    "r" : "282",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "282",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "283",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "284",
                            "value" : [ "a", ": ", "1" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "285",
                            "value" : [ "b", ":", "2" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "291",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "292",
                            "value" : [ "a", ": ", "2" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "293",
                            "value" : [ "b", ": ", "3" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "299",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "300",
                            "value" : [ "a", ": ", "1" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "301",
                            "value" : [ "b", ": ", "2" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "T" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "326",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "327",
                  "s" : [ {
                    "value" : [ "T" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "346",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "347",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "348",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "349",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "350",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "351",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "339",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "340",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "341",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "342",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "343",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "344",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "345",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "281",
            "alias" : "T",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "319",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "320",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "321",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "322",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "323",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "324",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "282",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "313",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "314",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "315",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "316",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "317",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "318",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "283",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "286",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "287",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "288",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "289",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "290",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "284",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "285",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "291",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "294",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "295",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "296",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "297",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "298",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "292",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "293",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "3",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "299",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "302",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "303",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "304",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "305",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "306",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "300",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "301",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "326",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "333",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "334",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "335",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "336",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "337",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "338",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "327",
              "name" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "328",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "329",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "330",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "331",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "332",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }
        }
      }, {
        "localId" : "354",
        "name" : "distinctNumbers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "354",
            "s" : [ {
              "value" : [ "", "define ", "distinctNumbers", ": " ]
            }, {
              "r" : "384",
              "s" : [ {
                "s" : [ {
                  "r" : "355",
                  "s" : [ {
                    "r" : "356",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "356",
                      "s" : [ {
                        "r" : "357",
                        "value" : [ "{", "1", ", ", "2", ", ", "2", ", ", "3", ", ", "3", ", ", "3", ", ", "4", ", ", "4", ", ", "4", ", ", "4", ", ", "3", ", ", "3", ", ", "3", ", ", "2", ", ", "2", ", ", "1", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "380",
                "s" : [ {
                  "value" : [ "return distinct " ]
                }, {
                  "r" : "381",
                  "s" : [ {
                    "value" : [ "N" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "387",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "388",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "384",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "385",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "386",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "355",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "377",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "378",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "356",
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
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "357",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "358",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "359",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "360",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "361",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "362",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "363",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
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
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "366",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "367",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "368",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "369",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "370",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "371",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "372",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "380",
            "distinct" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "382",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "383",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "381",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "N",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "391",
        "name" : "distinctStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "391",
            "s" : [ {
              "value" : [ "", "define ", "distinctStrings", ": " ]
            }, {
              "r" : "413",
              "s" : [ {
                "s" : [ {
                  "r" : "392",
                  "s" : [ {
                    "r" : "393",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "393",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "394",
                        "s" : [ {
                          "value" : [ "'foo'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "396",
                        "s" : [ {
                          "value" : [ "'bar'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "398",
                        "s" : [ {
                          "value" : [ "'baz'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "400",
                        "s" : [ {
                          "value" : [ "'bar'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "S" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "409",
                "s" : [ {
                  "value" : [ "return distinct " ]
                }, {
                  "r" : "410",
                  "s" : [ {
                    "value" : [ "S" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "416",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "417",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "413",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "414",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "415",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "392",
            "alias" : "S",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "406",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "407",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "393",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "404",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "405",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "394",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "foo",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "396",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "bar",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "398",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "baz",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "400",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "bar",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "409",
            "distinct" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "411",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "412",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "410",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "S",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "420",
        "name" : "distinctTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "420",
            "s" : [ {
              "value" : [ "", "define ", "distinctTuples", ": " ]
            }, {
              "r" : "479",
              "s" : [ {
                "s" : [ {
                  "r" : "421",
                  "s" : [ {
                    "r" : "422",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "422",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "423",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "424",
                            "value" : [ "a", ": ", "1" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "425",
                            "value" : [ "b", ":", "2" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "431",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "432",
                            "value" : [ "a", ": ", "2" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "433",
                            "value" : [ "b", ": ", "3" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "439",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "440",
                            "value" : [ "a", ": ", "1" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "441",
                            "value" : [ "b", ": ", "2" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "T" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "466",
                "s" : [ {
                  "value" : [ "return distinct " ]
                }, {
                  "r" : "467",
                  "s" : [ {
                    "value" : [ "T" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "486",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "487",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "488",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "489",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "490",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "491",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "479",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "480",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "481",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "482",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "483",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "484",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "485",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "421",
            "alias" : "T",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "459",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "460",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "461",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "462",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "463",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "464",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "422",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "453",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "454",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "455",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "456",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "457",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "458",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "423",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "426",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "427",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "428",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "429",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "430",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "424",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "425",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "431",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "434",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "435",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "436",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "437",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "438",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "432",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "433",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "3",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "439",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "442",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "443",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "444",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "445",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "446",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "440",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "441",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "466",
            "distinct" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "473",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "474",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "475",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "476",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "477",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "478",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "467",
              "name" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "468",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "469",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "470",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "471",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "472",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }
        }
      }, {
        "localId" : "494",
        "name" : "allNumbers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "494",
            "s" : [ {
              "value" : [ "", "define ", "allNumbers", ": " ]
            }, {
              "r" : "524",
              "s" : [ {
                "s" : [ {
                  "r" : "495",
                  "s" : [ {
                    "r" : "496",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "496",
                      "s" : [ {
                        "r" : "497",
                        "value" : [ "{", "1", ", ", "2", ", ", "2", ", ", "3", ", ", "3", ", ", "3", ", ", "4", ", ", "4", ", ", "4", ", ", "4", ", ", "3", ", ", "3", ", ", "3", ", ", "2", ", ", "2", ", ", "1", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "520",
                "s" : [ {
                  "value" : [ "return all " ]
                }, {
                  "r" : "521",
                  "s" : [ {
                    "value" : [ "N" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "527",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "528",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "524",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "525",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "526",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "495",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "517",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "518",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "496",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "515",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "516",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "497",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "498",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "499",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "500",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "501",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "502",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "503",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "504",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "505",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "506",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "507",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "508",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "509",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "510",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "511",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "512",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "520",
            "distinct" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "522",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "523",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "521",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "N",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "531",
        "name" : "allStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "531",
            "s" : [ {
              "value" : [ "", "define ", "allStrings", ": " ]
            }, {
              "r" : "553",
              "s" : [ {
                "s" : [ {
                  "r" : "532",
                  "s" : [ {
                    "r" : "533",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "533",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "534",
                        "s" : [ {
                          "value" : [ "'foo'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "536",
                        "s" : [ {
                          "value" : [ "'bar'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "538",
                        "s" : [ {
                          "value" : [ "'baz'" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "540",
                        "s" : [ {
                          "value" : [ "'bar'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "S" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "549",
                "s" : [ {
                  "value" : [ "return all " ]
                }, {
                  "r" : "550",
                  "s" : [ {
                    "value" : [ "S" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "556",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "557",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "553",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "554",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "555",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "532",
            "alias" : "S",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "546",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "547",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "533",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "544",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "545",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "534",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "foo",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "536",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "bar",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "538",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "baz",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "540",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "bar",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "549",
            "distinct" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "551",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "552",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "550",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "S",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "560",
        "name" : "allTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "560",
            "s" : [ {
              "value" : [ "", "define ", "allTuples", ": " ]
            }, {
              "r" : "619",
              "s" : [ {
                "s" : [ {
                  "r" : "561",
                  "s" : [ {
                    "r" : "562",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "562",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "563",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "564",
                            "value" : [ "a", ": ", "1" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "565",
                            "value" : [ "b", ":", "2" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "571",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "572",
                            "value" : [ "a", ": ", "2" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "573",
                            "value" : [ "b", ": ", "3" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ ", " ]
                      }, {
                        "r" : "579",
                        "s" : [ {
                          "value" : [ "Tuple{" ]
                        }, {
                          "s" : [ {
                            "r" : "580",
                            "value" : [ "a", ": ", "1" ]
                          } ]
                        }, {
                          "value" : [ ", " ]
                        }, {
                          "s" : [ {
                            "r" : "581",
                            "value" : [ "b", ": ", "2" ]
                          } ]
                        }, {
                          "value" : [ "}" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "T" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "606",
                "s" : [ {
                  "value" : [ "return all " ]
                }, {
                  "r" : "607",
                  "s" : [ {
                    "value" : [ "T" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "626",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "627",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "628",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "629",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "630",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "631",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "619",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "620",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "621",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "622",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "623",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "624",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "625",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "561",
            "alias" : "T",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "599",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "600",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "601",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "602",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "603",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "604",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "562",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "593",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "594",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "595",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "596",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "597",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "598",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "element" : [ {
                "type" : "Tuple",
                "localId" : "563",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "566",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "567",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "568",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "569",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "570",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "564",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "565",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "571",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "574",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "575",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "576",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "577",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "578",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "572",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "573",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "3",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "Tuple",
                "localId" : "579",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "582",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "583",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "584",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  }, {
                    "localId" : "585",
                    "name" : "b",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "586",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "580",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                }, {
                  "name" : "b",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "581",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "annotation" : [ ]
                  }
                } ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "606",
            "distinct" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "613",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "614",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "615",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "616",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "617",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "618",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "AliasRef",
              "localId" : "607",
              "name" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "608",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "609",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "610",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "611",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "612",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }
        }
      } ]
    }
  }
}

/* SingleObjectAlias
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define encounters: [Encounter] E
define conditions: [Condition] C
define firstEncounter: First([Encounter] E )
define firstCondition: First([Condition] C where C.id = 'http://cqframework.org/3/2')
define singleAlias: firstEncounter E
define singleAliasWhere: firstEncounter E where E is not null
define singleAliasWhereToNull: firstEncounter  E where E.period is null
define singleAliases: from firstEncounter E, firstCondition C
define singleAliasesAndList: from firstEncounter E, firstCondition C , conditions Con
define singleAliasWith:  [Encounter] E with firstCondition C such that C.id = 'http://cqframework.org/3/2'
define singleAliasWithOut:  [Encounter] E without firstCondition C such that C.id = 'http://cqframework.org/3'
define singleAliasWithEmpty:  [Encounter] E with firstCondition C such that C.id = 'http://cqframework.org/3'
define singleAliasWithOutEmpty:  [Encounter] E without firstCondition C such that C.id = 'http://cqframework.org/3/2'
define asNull: null
define nullQuery: asNull N

//define singleAliasWith: firstEncounter E with [Condition] C
//                         such that C.id = 'http://cqframework.org/3/2'
//define singleAliasWithNull: firstEncounter E with conditions C
//                        such that C.id is null
define singleAliasReturnTuple: firstEncounter E return Tuple{a:1}
define singleAliasReturnList: firstEncounter E return {'foo', 'bar', 'baz', 'bar'}
*/

module.exports['SingleObjectAlias'] = {
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
        "r" : "536",
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
        "name" : "encounters",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "encounters", ": " ]
            }, {
              "r" : "224",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "r" : "216",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "227",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "228",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "224",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "225",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "226",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "215",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "221",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "216",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "219",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "220",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ]
        }
      }, {
        "localId" : "231",
        "name" : "conditions",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "define ", "conditions", ": " ]
            }, {
              "r" : "241",
              "s" : [ {
                "s" : [ {
                  "r" : "232",
                  "s" : [ {
                    "r" : "233",
                    "s" : [ {
                      "r" : "233",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "244",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "245",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "241",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "242",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "243",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "232",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "238",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "239",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "233",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "236",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "237",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ]
        }
      }, {
        "localId" : "248",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "firstEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "248",
            "s" : [ {
              "value" : [ "", "define ", "firstEncounter", ": " ]
            }, {
              "r" : "265",
              "s" : [ {
                "value" : [ "First", "(" ]
              }, {
                "r" : "258",
                "s" : [ {
                  "s" : [ {
                    "r" : "249",
                    "s" : [ {
                      "r" : "250",
                      "s" : [ {
                        "r" : "250",
                        "s" : [ {
                          "value" : [ "[", "Encounter", "]" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " ", "E" ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ " )" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "First",
          "localId" : "265",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "266",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "267",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "258",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "259",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "260",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "source" : [ {
              "localId" : "249",
              "alias" : "E",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "255",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "256",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "expression" : {
                "type" : "Retrieve",
                "localId" : "250",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "253",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "254",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ]
          }
        }
      }, {
        "localId" : "270",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
        "name" : "firstCondition",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "firstCondition", ": " ]
            }, {
              "r" : "294",
              "s" : [ {
                "value" : [ "First", "(" ]
              }, {
                "r" : "287",
                "s" : [ {
                  "s" : [ {
                    "r" : "271",
                    "s" : [ {
                      "r" : "272",
                      "s" : [ {
                        "r" : "272",
                        "s" : [ {
                          "value" : [ "[", "Condition", "]" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " ", "C" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " " ]
                }, {
                  "r" : "280",
                  "s" : [ {
                    "value" : [ "where " ]
                  }, {
                    "r" : "280",
                    "s" : [ {
                      "r" : "282",
                      "s" : [ {
                        "r" : "281",
                        "s" : [ {
                          "value" : [ "C" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "282",
                        "s" : [ {
                          "value" : [ "id" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " ", "=", " " ]
                    }, {
                      "r" : "283",
                      "s" : [ {
                        "value" : [ "'http://cqframework.org/3/2'" ]
                      } ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "First",
          "localId" : "294",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "295",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "296",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "287",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "288",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "289",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "source" : [ {
              "localId" : "271",
              "alias" : "C",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "277",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "278",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "expression" : {
                "type" : "Retrieve",
                "localId" : "272",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "275",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "276",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "Equal",
              "localId" : "280",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "285",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "286",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "282",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "C",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "283",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "http://cqframework.org/3/2",
                "annotation" : [ ]
              } ]
            }
          }
        }
      }, {
        "localId" : "299",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "singleAlias",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "299",
            "s" : [ {
              "value" : [ "", "define ", "singleAlias", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "s" : [ {
                  "r" : "300",
                  "s" : [ {
                    "r" : "301",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstEncounter" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "303",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "300",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "alias" : "E",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "301",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "firstEncounter",
              "annotation" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ]
        }
      }, {
        "localId" : "306",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "singleAliasWhere",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "306",
            "s" : [ {
              "value" : [ "", "define ", "singleAliasWhere", ": " ]
            }, {
              "r" : "315",
              "s" : [ {
                "s" : [ {
                  "r" : "307",
                  "s" : [ {
                    "r" : "308",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstEncounter" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "313",
                  "s" : [ {
                    "r" : "310",
                    "s" : [ {
                      "value" : [ "E" ]
                    } ]
                  }, {
                    "value" : [ " is not null" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "315",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "307",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "alias" : "E",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "308",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "firstEncounter",
              "annotation" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "where" : {
            "type" : "Not",
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "314",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "IsNull",
              "localId" : "311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "312",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "AliasRef",
                "localId" : "310",
                "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "name" : "E",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "318",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "singleAliasWhereToNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "318",
            "s" : [ {
              "value" : [ "", "define ", "singleAliasWhereToNull", ": " ]
            }, {
              "r" : "330",
              "s" : [ {
                "s" : [ {
                  "r" : "319",
                  "s" : [ {
                    "r" : "320",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstEncounter" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "  ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "328",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "328",
                  "s" : [ {
                    "r" : "323",
                    "s" : [ {
                      "r" : "322",
                      "s" : [ {
                        "value" : [ "E" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "323",
                      "s" : [ {
                        "value" : [ "period" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " is null" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "330",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "319",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "alias" : "E",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "320",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "firstEncounter",
              "annotation" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "where" : {
            "type" : "IsNull",
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "329",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "323",
              "path" : "period",
              "scope" : "E",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "326",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "327",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "333",
        "name" : "singleAliases",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "333",
            "s" : [ {
              "value" : [ "", "define ", "singleAliases", ": " ]
            }, {
              "r" : "344",
              "s" : [ {
                "s" : [ {
                  "value" : [ "from " ]
                }, {
                  "r" : "334",
                  "s" : [ {
                    "r" : "335",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstEncounter" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "336",
                  "s" : [ {
                    "r" : "337",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstCondition" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "350",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "351",
            "name" : "E",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "352",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          }, {
            "localId" : "353",
            "name" : "C",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "354",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "Query",
          "localId" : "344",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "345",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "346",
              "name" : "E",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "347",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            }, {
              "localId" : "348",
              "name" : "C",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "349",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            } ]
          },
          "source" : [ {
            "localId" : "334",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "alias" : "E",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "335",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "firstEncounter",
              "annotation" : [ ]
            }
          }, {
            "localId" : "336",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "alias" : "C",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "337",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "name" : "firstCondition",
              "annotation" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "340",
            "distinct" : true,
            "annotation" : [ ],
            "expression" : {
              "type" : "Tuple",
              "localId" : "341",
              "annotation" : [ ],
              "element" : [ {
                "name" : "E",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "342",
                  "name" : "E",
                  "annotation" : [ ]
                }
              }, {
                "name" : "C",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "343",
                  "name" : "C",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "357",
        "name" : "singleAliasesAndList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "357",
            "s" : [ {
              "value" : [ "", "define ", "singleAliasesAndList", ": " ]
            }, {
              "r" : "376",
              "s" : [ {
                "s" : [ {
                  "value" : [ "from " ]
                }, {
                  "r" : "358",
                  "s" : [ {
                    "r" : "359",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstEncounter" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "360",
                  "s" : [ {
                    "r" : "361",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstCondition" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " , " ]
                }, {
                  "r" : "362",
                  "s" : [ {
                    "r" : "363",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "conditions" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "Con" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "385",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "386",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "387",
              "name" : "E",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "388",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            }, {
              "localId" : "389",
              "name" : "C",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "390",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            }, {
              "localId" : "391",
              "name" : "Con",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "392",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "376",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "377",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "378",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "379",
                "name" : "E",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "380",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "381",
                "name" : "C",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "382",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "383",
                "name" : "Con",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "384",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "358",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "alias" : "E",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "359",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "firstEncounter",
              "annotation" : [ ]
            }
          }, {
            "localId" : "360",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "alias" : "C",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "361",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "name" : "firstCondition",
              "annotation" : [ ]
            }
          }, {
            "localId" : "362",
            "alias" : "Con",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "366",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "367",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "363",
              "name" : "conditions",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "364",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "365",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              }
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "371",
            "distinct" : true,
            "annotation" : [ ],
            "expression" : {
              "type" : "Tuple",
              "localId" : "372",
              "annotation" : [ ],
              "element" : [ {
                "name" : "E",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "373",
                  "name" : "E",
                  "annotation" : [ ]
                }
              }, {
                "name" : "C",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "374",
                  "name" : "C",
                  "annotation" : [ ]
                }
              }, {
                "name" : "Con",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "375",
                  "name" : "Con",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "395",
        "name" : "singleAliasWith",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "395",
            "s" : [ {
              "value" : [ "", "define ", "singleAliasWith", ":  " ]
            }, {
              "r" : "415",
              "s" : [ {
                "s" : [ {
                  "r" : "396",
                  "s" : [ {
                    "r" : "397",
                    "s" : [ {
                      "r" : "397",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "414",
                "s" : [ {
                  "value" : [ "with " ]
                }, {
                  "r" : "405",
                  "s" : [ {
                    "r" : "406",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstCondition" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "407",
                  "s" : [ {
                    "r" : "409",
                    "s" : [ {
                      "r" : "408",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "409",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "=", " " ]
                  }, {
                    "r" : "410",
                    "s" : [ {
                      "value" : [ "'http://cqframework.org/3/2'" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "418",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "419",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "415",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "416",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "417",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "396",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "402",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "403",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "397",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "400",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "401",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "With",
            "localId" : "414",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "alias" : "C",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "406",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "name" : "firstCondition",
              "annotation" : [ ]
            },
            "suchThat" : {
              "type" : "Equal",
              "localId" : "407",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "412",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "413",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "409",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "C",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "410",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "http://cqframework.org/3/2",
                "annotation" : [ ]
              } ]
            }
          } ]
        }
      }, {
        "localId" : "422",
        "name" : "singleAliasWithOut",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "422",
            "s" : [ {
              "value" : [ "", "define ", "singleAliasWithOut", ":  " ]
            }, {
              "r" : "442",
              "s" : [ {
                "s" : [ {
                  "r" : "423",
                  "s" : [ {
                    "r" : "424",
                    "s" : [ {
                      "r" : "424",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "441",
                "s" : [ {
                  "value" : [ "without " ]
                }, {
                  "r" : "432",
                  "s" : [ {
                    "r" : "433",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstCondition" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "434",
                  "s" : [ {
                    "r" : "436",
                    "s" : [ {
                      "r" : "435",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "436",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "=", " " ]
                  }, {
                    "r" : "437",
                    "s" : [ {
                      "value" : [ "'http://cqframework.org/3'" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "445",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "446",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "442",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "443",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "444",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "423",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "429",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "430",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "424",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "427",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "428",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "Without",
            "localId" : "441",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "alias" : "C",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "433",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "name" : "firstCondition",
              "annotation" : [ ]
            },
            "suchThat" : {
              "type" : "Equal",
              "localId" : "434",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "439",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "440",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "436",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "C",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "437",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "http://cqframework.org/3",
                "annotation" : [ ]
              } ]
            }
          } ]
        }
      }, {
        "localId" : "449",
        "name" : "singleAliasWithEmpty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "449",
            "s" : [ {
              "value" : [ "", "define ", "singleAliasWithEmpty", ":  " ]
            }, {
              "r" : "469",
              "s" : [ {
                "s" : [ {
                  "r" : "450",
                  "s" : [ {
                    "r" : "451",
                    "s" : [ {
                      "r" : "451",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "468",
                "s" : [ {
                  "value" : [ "with " ]
                }, {
                  "r" : "459",
                  "s" : [ {
                    "r" : "460",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstCondition" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "461",
                  "s" : [ {
                    "r" : "463",
                    "s" : [ {
                      "r" : "462",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "463",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "=", " " ]
                  }, {
                    "r" : "464",
                    "s" : [ {
                      "value" : [ "'http://cqframework.org/3'" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "472",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "473",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "469",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "470",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "471",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "450",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "456",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "457",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "451",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "454",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "455",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "With",
            "localId" : "468",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "alias" : "C",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "460",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "name" : "firstCondition",
              "annotation" : [ ]
            },
            "suchThat" : {
              "type" : "Equal",
              "localId" : "461",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "466",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "467",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "463",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "C",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "464",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "http://cqframework.org/3",
                "annotation" : [ ]
              } ]
            }
          } ]
        }
      }, {
        "localId" : "476",
        "name" : "singleAliasWithOutEmpty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "476",
            "s" : [ {
              "value" : [ "", "define ", "singleAliasWithOutEmpty", ":  " ]
            }, {
              "r" : "496",
              "s" : [ {
                "s" : [ {
                  "r" : "477",
                  "s" : [ {
                    "r" : "478",
                    "s" : [ {
                      "r" : "478",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "495",
                "s" : [ {
                  "value" : [ "without " ]
                }, {
                  "r" : "486",
                  "s" : [ {
                    "r" : "487",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstCondition" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                }, {
                  "value" : [ " such that " ]
                }, {
                  "r" : "488",
                  "s" : [ {
                    "r" : "490",
                    "s" : [ {
                      "r" : "489",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "490",
                      "s" : [ {
                        "value" : [ "id" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "=", " " ]
                  }, {
                    "r" : "491",
                    "s" : [ {
                      "value" : [ "'http://cqframework.org/3/2'" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "499",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "500",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "496",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "497",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "498",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "477",
            "alias" : "E",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "483",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "484",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "478",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "481",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "482",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ {
            "type" : "Without",
            "localId" : "495",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "alias" : "C",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "487",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "name" : "firstCondition",
              "annotation" : [ ]
            },
            "suchThat" : {
              "type" : "Equal",
              "localId" : "488",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "493",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "494",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "490",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "path" : "id",
                "scope" : "C",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "491",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "http://cqframework.org/3/2",
                "annotation" : [ ]
              } ]
            }
          } ]
        }
      }, {
        "localId" : "503",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "asNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "503",
            "s" : [ {
              "r" : "504",
              "value" : [ "", "define ", "asNull", ": ", "null" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Null",
          "localId" : "504",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "annotation" : [ ]
        }
      }, {
        "localId" : "507",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "nullQuery",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "507",
            "s" : [ {
              "value" : [ "", "define ", "nullQuery", ": " ]
            }, {
              "r" : "511",
              "s" : [ {
                "s" : [ {
                  "r" : "508",
                  "s" : [ {
                    "r" : "509",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "asNull" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "N" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "511",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "508",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "alias" : "N",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "509",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "name" : "asNull",
              "annotation" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ]
        }
      }, {
        "localId" : "514",
        "name" : "singleAliasReturnTuple",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "514",
            "s" : [ {
              "value" : [ "//define singleAliasWith: firstEncounter E with [Condition] C\n//                         such that C.id = 'http://cqframework.org/3/2'\n//define singleAliasWithNull: firstEncounter E with conditions C\n//                        such that C.id is null\n", "define ", "singleAliasReturnTuple", ": " ]
            }, {
              "r" : "527",
              "s" : [ {
                "s" : [ {
                  "r" : "515",
                  "s" : [ {
                    "r" : "516",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstEncounter" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "518",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "519",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "520",
                      "value" : [ "a", ":", "1" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "531",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "532",
            "name" : "a",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "533",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "Query",
          "localId" : "527",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "528",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "529",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "530",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "source" : [ {
            "localId" : "515",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "alias" : "E",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "516",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "firstEncounter",
              "annotation" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "518",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "524",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "525",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "526",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "519",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "521",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "522",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "523",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "520",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "536",
        "name" : "singleAliasReturnList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "536",
            "s" : [ {
              "value" : [ "", "define ", "singleAliasReturnList", ": " ]
            }, {
              "r" : "554",
              "s" : [ {
                "s" : [ {
                  "r" : "537",
                  "s" : [ {
                    "r" : "538",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "firstEncounter" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "E" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "540",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "541",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "542",
                    "s" : [ {
                      "value" : [ "'foo'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "544",
                    "s" : [ {
                      "value" : [ "'bar'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "546",
                    "s" : [ {
                      "value" : [ "'baz'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "548",
                    "s" : [ {
                      "value" : [ "'bar'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "557",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "558",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "554",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "555",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "556",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "537",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "alias" : "E",
            "annotation" : [ ],
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "538",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "firstEncounter",
              "annotation" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "540",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "552",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "553",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "541",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "550",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "551",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "542",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "foo",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "544",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "bar",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "546",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "baz",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "548",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "bar",
                "annotation" : [ ]
              } ]
            }
          }
        }
      } ]
    }
  }
}

/* AggregateQuery
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient

define noStartingAggregation:
 ({1,2,3,4,5}) R
    aggregate T : Coalesce(T, 1) * R

define encounterPeriods:
  [Encounter] e
    return e.period

define expressionStartingAggregation:
  encounterPeriods M
    aggregate R starting (List{} as List<Interval<DateTime>>): R union ({
      M X
          let S: Max({ end of Last(R)+1 day, DateTime(1970,01,01)}),
          E: start of X
        return Interval[S, E]
    })

define literalStartingAggregation:
  ({1,2,3,4,5,1,2,3,4,5}) Num
    aggregate distinct str starting 'Start' : str + ToString(Num)

define quantityStartingAggregation:
 ({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'}) Num
  aggregate distinct Sum starting 0 'ml': Sum + Num

define allAggregation:
 ({1,2,3,4,5,1,2,3,4,5}) Num
  aggregate all Sum starting 0: Sum + Num

define distinctAggregation:
 ({1,2,3,4,5,1,2,3,4,5}) Num
  aggregate distinct Sum starting 0: Sum + Num
*/

module.exports['AggregateQuery'] = {
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
        "r" : "514",
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
        "name" : "noStartingAggregation",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "noStartingAggregation", ":\n " ]
            }, {
              "r" : "246",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "216",
                      "s" : [ {
                        "r" : "217",
                        "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "R" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "aggregate ", "T", " : " ]
                }, {
                  "r" : "232",
                  "s" : [ {
                    "r" : "239",
                    "s" : [ {
                      "value" : [ "Coalesce", "(" ]
                    }, {
                      "r" : "233",
                      "s" : [ {
                        "value" : [ "T" ]
                      } ]
                    }, {
                      "r" : "234",
                      "value" : [ ", ", "1", ")" ]
                    } ]
                  }, {
                    "value" : [ " * " ]
                  }, {
                    "r" : "242",
                    "s" : [ {
                      "value" : [ "R" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "246",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "215",
            "alias" : "R",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "226",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "227",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "216",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "224",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
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
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "aggregate" : {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "identifier" : "T",
            "annotation" : [ ],
            "expression" : {
              "type" : "Multiply",
              "localId" : "232",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
                "type" : "As",
                "localId" : "243",
                "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "Coalesce",
                  "localId" : "239",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "240",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }, {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "241",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  } ],
                  "operand" : [ {
                    "type" : "QueryLetRef",
                    "localId" : "233",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "name" : "T",
                    "annotation" : [ ]
                  }, {
                    "type" : "Literal",
                    "localId" : "234",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  } ]
                }
              }, {
                "type" : "AliasRef",
                "localId" : "242",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "R",
                "annotation" : [ ]
              } ]
            },
            "starting" : {
              "type" : "Null",
              "localId" : "230",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "249",
        "name" : "encounterPeriods",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "249",
            "s" : [ {
              "value" : [ "", "define ", "encounterPeriods", ":\n  " ]
            }, {
              "r" : "269",
              "s" : [ {
                "s" : [ {
                  "r" : "250",
                  "s" : [ {
                    "r" : "251",
                    "s" : [ {
                      "r" : "251",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "e" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "259",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "261",
                  "s" : [ {
                    "r" : "260",
                    "s" : [ {
                      "value" : [ "e" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "261",
                    "s" : [ {
                      "value" : [ "period" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "273",
          "annotation" : [ ],
          "elementType" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "274",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "275",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "269",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "270",
            "annotation" : [ ],
            "elementType" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }
          },
          "source" : [ {
            "localId" : "250",
            "alias" : "e",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "256",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "257",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "251",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "254",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "255",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "259",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "266",
              "annotation" : [ ],
              "elementType" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "267",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            },
            "expression" : {
              "type" : "Property",
              "localId" : "261",
              "path" : "period",
              "scope" : "e",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "264",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "278",
        "name" : "expressionStartingAggregation",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "expressionStartingAggregation", ":\n  " ]
            }, {
              "r" : "408",
              "s" : [ {
                "s" : [ {
                  "r" : "279",
                  "s" : [ {
                    "r" : "280",
                    "s" : [ {
                      "s" : [ {
                        "value" : [ "encounterPeriods" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "M" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "288",
                "s" : [ {
                  "value" : [ "aggregate ", "R", " " ]
                }, {
                  "r" : "289",
                  "s" : [ {
                    "value" : [ "starting (" ]
                  }, {
                    "r" : "289",
                    "s" : [ {
                      "r" : "290",
                      "value" : [ "List{}", " as " ]
                    }, {
                      "r" : "293",
                      "s" : [ {
                        "value" : [ "List<" ]
                      }, {
                        "r" : "294",
                        "s" : [ {
                          "value" : [ "Interval<" ]
                        }, {
                          "r" : "295",
                          "s" : [ {
                            "value" : [ "DateTime" ]
                          } ]
                        }, {
                          "value" : [ ">" ]
                        } ]
                      }, {
                        "value" : [ ">" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ": " ]
                }, {
                  "r" : "395",
                  "s" : [ {
                    "r" : "312",
                    "s" : [ {
                      "value" : [ "R" ]
                    } ]
                  }, {
                    "value" : [ " union " ]
                  }, {
                    "r" : "316",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "316",
                      "s" : [ {
                        "value" : [ "{\n      " ]
                      }, {
                        "r" : "386",
                        "s" : [ {
                          "s" : [ {
                            "r" : "317",
                            "s" : [ {
                              "r" : "318",
                              "s" : [ {
                                "s" : [ {
                                  "value" : [ "M" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ " ", "X" ]
                            } ]
                          } ]
                        }, {
                          "value" : [ "\n          " ]
                        }, {
                          "s" : [ {
                            "value" : [ "let " ]
                          }, {
                            "r" : "324",
                            "s" : [ {
                              "value" : [ "S", ": " ]
                            }, {
                              "r" : "366",
                              "s" : [ {
                                "value" : [ "Max", "(" ]
                              }, {
                                "r" : "325",
                                "s" : [ {
                                  "value" : [ "{ " ]
                                }, {
                                  "r" : "326",
                                  "s" : [ {
                                    "r" : "327",
                                    "s" : [ {
                                      "value" : [ "end of " ]
                                    }, {
                                      "r" : "337",
                                      "s" : [ {
                                        "value" : [ "Last", "(" ]
                                      }, {
                                        "r" : "328",
                                        "s" : [ {
                                          "value" : [ "R" ]
                                        } ]
                                      }, {
                                        "value" : [ ")" ]
                                      } ]
                                    } ]
                                  }, {
                                    "value" : [ "+" ]
                                  }, {
                                    "r" : "345",
                                    "s" : [ {
                                      "value" : [ "1 ", "day" ]
                                    } ]
                                  } ]
                                }, {
                                  "value" : [ ", " ]
                                }, {
                                  "r" : "356",
                                  "s" : [ {
                                    "r" : "348",
                                    "value" : [ "DateTime", "(", "1970", ",", "01", ",", "01", ")" ]
                                  } ]
                                }, {
                                  "value" : [ "}" ]
                                } ]
                              }, {
                                "value" : [ ")" ]
                              } ]
                            } ]
                          }, {
                            "value" : [ ",\n          " ]
                          }, {
                            "r" : "369",
                            "s" : [ {
                              "value" : [ "E", ": " ]
                            }, {
                              "r" : "370",
                              "s" : [ {
                                "value" : [ "start of " ]
                              }, {
                                "r" : "371",
                                "s" : [ {
                                  "value" : [ "X" ]
                                } ]
                              } ]
                            } ]
                          } ]
                        }, {
                          "value" : [ "\n        " ]
                        }, {
                          "r" : "378",
                          "s" : [ {
                            "value" : [ "return " ]
                          }, {
                            "r" : "381",
                            "s" : [ {
                              "value" : [ "Interval[" ]
                            }, {
                              "r" : "379",
                              "s" : [ {
                                "value" : [ "S" ]
                              } ]
                            }, {
                              "value" : [ ", " ]
                            }, {
                              "r" : "380",
                              "s" : [ {
                                "value" : [ "E" ]
                              } ]
                            }, {
                              "value" : [ "]" ]
                            } ]
                          } ]
                        } ]
                      }, {
                        "value" : [ "\n    }" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "412",
          "annotation" : [ ],
          "elementType" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "413",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "414",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "408",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "409",
            "annotation" : [ ],
            "elementType" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "410",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "411",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }
          },
          "source" : [ {
            "localId" : "279",
            "alias" : "M",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "284",
              "annotation" : [ ],
              "elementType" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "285",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            },
            "expression" : {
              "type" : "ExpressionRef",
              "localId" : "280",
              "name" : "encounterPeriods",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "281",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "282",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "283",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              }
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "aggregate" : {
            "localId" : "288",
            "identifier" : "R",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "405",
              "annotation" : [ ],
              "elementType" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "406",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "407",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            },
            "expression" : {
              "type" : "Union",
              "localId" : "395",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "402",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "403",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "404",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "396",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "397",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "398",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              }, {
                "type" : "ListTypeSpecifier",
                "localId" : "399",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "400",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "401",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              } ],
              "operand" : [ {
                "type" : "QueryLetRef",
                "localId" : "312",
                "name" : "R",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "313",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "314",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "315",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                }
              }, {
                "type" : "List",
                "localId" : "316",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "392",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "393",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "394",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                },
                "element" : [ {
                  "type" : "Query",
                  "localId" : "386",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "387",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "388",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  },
                  "source" : [ {
                    "localId" : "317",
                    "alias" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "321",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "322",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    },
                    "expression" : {
                      "type" : "AliasRef",
                      "localId" : "318",
                      "name" : "M",
                      "annotation" : [ ],
                      "resultTypeSpecifier" : {
                        "type" : "IntervalTypeSpecifier",
                        "localId" : "319",
                        "annotation" : [ ],
                        "pointType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "320",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      }
                    }
                  } ],
                  "let" : [ {
                    "localId" : "324",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "identifier" : "S",
                    "annotation" : [ ],
                    "expression" : {
                      "type" : "Max",
                      "localId" : "366",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ],
                      "signature" : [ {
                        "type" : "ListTypeSpecifier",
                        "localId" : "367",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "368",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      } ],
                      "source" : {
                        "type" : "List",
                        "localId" : "325",
                        "annotation" : [ ],
                        "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "localId" : "360",
                          "annotation" : [ ],
                          "elementType" : {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "361",
                            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                            "annotation" : [ ]
                          }
                        },
                        "element" : [ {
                          "type" : "Add",
                          "localId" : "326",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ],
                          "signature" : [ {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "346",
                            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                            "annotation" : [ ]
                          }, {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "347",
                            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                            "annotation" : [ ]
                          } ],
                          "operand" : [ {
                            "type" : "End",
                            "localId" : "327",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                            "annotation" : [ ],
                            "signature" : [ {
                              "type" : "IntervalTypeSpecifier",
                              "localId" : "343",
                              "annotation" : [ ],
                              "pointType" : {
                                "type" : "NamedTypeSpecifier",
                                "localId" : "344",
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "annotation" : [ ]
                              }
                            } ],
                            "operand" : {
                              "type" : "Last",
                              "localId" : "337",
                              "annotation" : [ ],
                              "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "localId" : "341",
                                "annotation" : [ ],
                                "pointType" : {
                                  "type" : "NamedTypeSpecifier",
                                  "localId" : "342",
                                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                  "annotation" : [ ]
                                }
                              },
                              "signature" : [ {
                                "type" : "ListTypeSpecifier",
                                "localId" : "338",
                                "annotation" : [ ],
                                "elementType" : {
                                  "type" : "IntervalTypeSpecifier",
                                  "localId" : "339",
                                  "annotation" : [ ],
                                  "pointType" : {
                                    "type" : "NamedTypeSpecifier",
                                    "localId" : "340",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "annotation" : [ ]
                                  }
                                }
                              } ],
                              "source" : {
                                "type" : "QueryLetRef",
                                "localId" : "328",
                                "name" : "R",
                                "annotation" : [ ],
                                "resultTypeSpecifier" : {
                                  "type" : "ListTypeSpecifier",
                                  "localId" : "329",
                                  "annotation" : [ ],
                                  "elementType" : {
                                    "type" : "IntervalTypeSpecifier",
                                    "localId" : "330",
                                    "annotation" : [ ],
                                    "pointType" : {
                                      "type" : "NamedTypeSpecifier",
                                      "localId" : "331",
                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                      "annotation" : [ ]
                                    }
                                  }
                                }
                              }
                            }
                          }, {
                            "type" : "Quantity",
                            "localId" : "345",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                            "value" : 1,
                            "unit" : "day",
                            "annotation" : [ ]
                          } ]
                        }, {
                          "type" : "DateTime",
                          "localId" : "356",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ],
                          "signature" : [ {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "357",
                            "name" : "{urn:hl7-org:elm-types:r1}Integer",
                            "annotation" : [ ]
                          }, {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "358",
                            "name" : "{urn:hl7-org:elm-types:r1}Integer",
                            "annotation" : [ ]
                          }, {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "359",
                            "name" : "{urn:hl7-org:elm-types:r1}Integer",
                            "annotation" : [ ]
                          } ],
                          "year" : {
                            "type" : "Literal",
                            "localId" : "348",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                            "value" : "1970",
                            "annotation" : [ ]
                          },
                          "month" : {
                            "type" : "Literal",
                            "localId" : "349",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                            "value" : "01",
                            "annotation" : [ ]
                          },
                          "day" : {
                            "type" : "Literal",
                            "localId" : "350",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                            "value" : "01",
                            "annotation" : [ ]
                          }
                        } ]
                      }
                    }
                  }, {
                    "localId" : "369",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "identifier" : "E",
                    "annotation" : [ ],
                    "expression" : {
                      "type" : "Start",
                      "localId" : "370",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ],
                      "signature" : [ {
                        "type" : "IntervalTypeSpecifier",
                        "localId" : "374",
                        "annotation" : [ ],
                        "pointType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "375",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      } ],
                      "operand" : {
                        "type" : "AliasRef",
                        "localId" : "371",
                        "name" : "X",
                        "annotation" : [ ],
                        "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "localId" : "372",
                          "annotation" : [ ],
                          "pointType" : {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "373",
                            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                            "annotation" : [ ]
                          }
                        }
                      }
                    }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                    "localId" : "378",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "384",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "385",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    },
                    "expression" : {
                      "type" : "Interval",
                      "localId" : "381",
                      "lowClosed" : true,
                      "highClosed" : true,
                      "annotation" : [ ],
                      "resultTypeSpecifier" : {
                        "type" : "IntervalTypeSpecifier",
                        "localId" : "382",
                        "annotation" : [ ],
                        "pointType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "383",
                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "annotation" : [ ]
                        }
                      },
                      "low" : {
                        "type" : "QueryLetRef",
                        "localId" : "379",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "name" : "S",
                        "annotation" : [ ]
                      },
                      "high" : {
                        "type" : "QueryLetRef",
                        "localId" : "380",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "name" : "E",
                        "annotation" : [ ]
                      }
                    }
                  }
                } ]
              } ]
            },
            "starting" : {
              "type" : "As",
              "localId" : "289",
              "strict" : false,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "304",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "305",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "306",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              },
              "signature" : [ ],
              "operand" : {
                "type" : "List",
                "localId" : "290",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "291",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "292",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                },
                "element" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "293",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "298",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "299",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "300",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                },
                "elementType" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "294",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "296",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "297",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  },
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "295",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }
              }
            }
          }
        }
      }, {
        "localId" : "417",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "literalStartingAggregation",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "417",
            "s" : [ {
              "value" : [ "", "define ", "literalStartingAggregation", ":\n  " ]
            }, {
              "r" : "452",
              "s" : [ {
                "s" : [ {
                  "r" : "418",
                  "s" : [ {
                    "r" : "419",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "419",
                      "s" : [ {
                        "r" : "420",
                        "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", ",", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "Num" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "437",
                "s" : [ {
                  "value" : [ "aggregate distinct ", "str", " " ]
                }, {
                  "r" : "438",
                  "s" : [ {
                    "value" : [ "starting " ]
                  }, {
                    "r" : "438",
                    "s" : [ {
                      "value" : [ "'Start'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "451",
                  "s" : [ {
                    "r" : "442",
                    "s" : [ {
                      "value" : [ "str" ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "447",
                    "s" : [ {
                      "value" : [ "ToString", "(" ]
                    }, {
                      "r" : "443",
                      "s" : [ {
                        "value" : [ "Num" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "452",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "418",
            "alias" : "Num",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "434",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "435",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "419",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "432",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "433",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "420",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "421",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "422",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "423",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "424",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "425",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "426",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "427",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "428",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "429",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "aggregate" : {
            "localId" : "437",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "identifier" : "str",
            "distinct" : true,
            "annotation" : [ ],
            "expression" : {
              "type" : "Concatenate",
              "localId" : "451",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : [ {
                "type" : "QueryLetRef",
                "localId" : "442",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "str",
                "annotation" : [ ]
              }, {
                "type" : "ToString",
                "localId" : "447",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "448",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "443",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Num",
                  "annotation" : [ ]
                }
              } ]
            },
            "starting" : {
              "type" : "Literal",
              "localId" : "438",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Start",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "455",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "quantityStartingAggregation",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "455",
            "s" : [ {
              "value" : [ "", "define ", "quantityStartingAggregation", ":\n " ]
            }, {
              "r" : "479",
              "s" : [ {
                "s" : [ {
                  "r" : "456",
                  "s" : [ {
                    "r" : "457",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "457",
                      "s" : [ {
                        "value" : [ "{" ]
                      }, {
                        "r" : "458",
                        "s" : [ {
                          "value" : [ "1 ", "'ml'" ]
                        } ]
                      }, {
                        "value" : [ "," ]
                      }, {
                        "r" : "459",
                        "s" : [ {
                          "value" : [ "2 ", "'ml'" ]
                        } ]
                      }, {
                        "value" : [ "," ]
                      }, {
                        "r" : "460",
                        "s" : [ {
                          "value" : [ "3 ", "'ml'" ]
                        } ]
                      }, {
                        "value" : [ "," ]
                      }, {
                        "r" : "461",
                        "s" : [ {
                          "value" : [ "4 ", "'ml'" ]
                        } ]
                      }, {
                        "value" : [ "," ]
                      }, {
                        "r" : "462",
                        "s" : [ {
                          "value" : [ "5 ", "'ml'" ]
                        } ]
                      }, {
                        "value" : [ "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "Num" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n  " ]
              }, {
                "r" : "470",
                "s" : [ {
                  "value" : [ "aggregate distinct ", "Sum", " " ]
                }, {
                  "r" : "471",
                  "s" : [ {
                    "value" : [ "starting " ]
                  }, {
                    "r" : "471",
                    "s" : [ {
                      "value" : [ "0 ", "'ml'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ": " ]
                }, {
                  "r" : "474",
                  "s" : [ {
                    "r" : "475",
                    "s" : [ {
                      "value" : [ "Sum" ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "476",
                    "s" : [ {
                      "value" : [ "Num" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "479",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "456",
            "alias" : "Num",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "467",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "468",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "457",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "465",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "466",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Quantity",
                "localId" : "458",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 1,
                "unit" : "ml",
                "annotation" : [ ]
              }, {
                "type" : "Quantity",
                "localId" : "459",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 2,
                "unit" : "ml",
                "annotation" : [ ]
              }, {
                "type" : "Quantity",
                "localId" : "460",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 3,
                "unit" : "ml",
                "annotation" : [ ]
              }, {
                "type" : "Quantity",
                "localId" : "461",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 4,
                "unit" : "ml",
                "annotation" : [ ]
              }, {
                "type" : "Quantity",
                "localId" : "462",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 5,
                "unit" : "ml",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "aggregate" : {
            "localId" : "470",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "identifier" : "Sum",
            "distinct" : true,
            "annotation" : [ ],
            "expression" : {
              "type" : "Add",
              "localId" : "474",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "477",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "478",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "QueryLetRef",
                "localId" : "475",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "Sum",
                "annotation" : [ ]
              }, {
                "type" : "AliasRef",
                "localId" : "476",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "Num",
                "annotation" : [ ]
              } ]
            },
            "starting" : {
              "type" : "Quantity",
              "localId" : "471",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "482",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "allAggregation",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "482",
            "s" : [ {
              "value" : [ "", "define ", "allAggregation", ":\n " ]
            }, {
              "r" : "511",
              "s" : [ {
                "s" : [ {
                  "r" : "483",
                  "s" : [ {
                    "r" : "484",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "484",
                      "s" : [ {
                        "r" : "485",
                        "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", ",", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "Num" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n  " ]
              }, {
                "r" : "502",
                "s" : [ {
                  "value" : [ "aggregate all ", "Sum", " " ]
                }, {
                  "r" : "503",
                  "s" : [ {
                    "r" : "503",
                    "value" : [ "starting ", "0" ]
                  } ]
                }, {
                  "value" : [ ": " ]
                }, {
                  "r" : "506",
                  "s" : [ {
                    "r" : "507",
                    "s" : [ {
                      "value" : [ "Sum" ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "508",
                    "s" : [ {
                      "value" : [ "Num" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "511",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "483",
            "alias" : "Num",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "499",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "500",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "484",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "497",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "498",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "485",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "486",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "487",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "488",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "489",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "490",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "491",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "492",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "493",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "494",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "aggregate" : {
            "localId" : "502",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "identifier" : "Sum",
            "distinct" : false,
            "annotation" : [ ],
            "expression" : {
              "type" : "Add",
              "localId" : "506",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "509",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "510",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "QueryLetRef",
                "localId" : "507",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "Sum",
                "annotation" : [ ]
              }, {
                "type" : "AliasRef",
                "localId" : "508",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "Num",
                "annotation" : [ ]
              } ]
            },
            "starting" : {
              "type" : "Literal",
              "localId" : "503",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "514",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "distinctAggregation",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "514",
            "s" : [ {
              "value" : [ "", "define ", "distinctAggregation", ":\n " ]
            }, {
              "r" : "543",
              "s" : [ {
                "s" : [ {
                  "r" : "515",
                  "s" : [ {
                    "r" : "516",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "516",
                      "s" : [ {
                        "r" : "517",
                        "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", ",", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "Num" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n  " ]
              }, {
                "r" : "534",
                "s" : [ {
                  "value" : [ "aggregate distinct ", "Sum", " " ]
                }, {
                  "r" : "535",
                  "s" : [ {
                    "r" : "535",
                    "value" : [ "starting ", "0" ]
                  } ]
                }, {
                  "value" : [ ": " ]
                }, {
                  "r" : "538",
                  "s" : [ {
                    "r" : "539",
                    "s" : [ {
                      "value" : [ "Sum" ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "540",
                    "s" : [ {
                      "value" : [ "Num" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Query",
          "localId" : "543",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "source" : [ {
            "localId" : "515",
            "alias" : "Num",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "531",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "532",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "516",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "529",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "530",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "517",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "518",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "519",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "520",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "521",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "522",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "523",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "524",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "525",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "526",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "aggregate" : {
            "localId" : "534",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "identifier" : "Sum",
            "distinct" : true,
            "annotation" : [ ],
            "expression" : {
              "type" : "Add",
              "localId" : "538",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "541",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "542",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "QueryLetRef",
                "localId" : "539",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "Sum",
                "annotation" : [ ]
              }, {
                "type" : "AliasRef",
                "localId" : "540",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "Num",
                "annotation" : [ ]
              } ]
            },
            "starting" : {
              "type" : "Literal",
              "localId" : "535",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* NullSourceQuery
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NullListQuery:
  (null as List<Condition>) X
    return Tuple {
      start: start of X.period,
      end: end of X.period
    }

define NullObjectQuery:
  (null as Condition) X
    return Tuple {
      start: start of X.period,
      end: end of X.period
    }

define AllNullMultiSourceQuery:
  from
    (null as List<Condition>) X,
    (null as List<Encounter>) Y
    return Tuple {
      cStart: start of X.period,
      cEnd: end of X.period,
      eStart: start of Y.period,
      eEnd: end of Y.period
    }

define SomeNullMultiSourceQuery:
  from
    (null as List<Condition>) X,
    [Encounter] Y
    return Tuple {
      cStart: start of X.period,
      cEnd: end of X.period,
      eStart: start of Y.period,
      eEnd: end of Y.period
    }
*/

module.exports['NullSourceQuery'] = {
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
        "r" : "433",
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
        "name" : "NullListQuery",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "NullListQuery", ":\n  " ]
            }, {
              "r" : "260",
              "s" : [ {
                "s" : [ {
                  "r" : "215",
                  "s" : [ {
                    "r" : "216",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "216",
                      "s" : [ {
                        "r" : "217",
                        "value" : [ "null", " as " ]
                      }, {
                        "r" : "218",
                        "s" : [ {
                          "value" : [ "List<" ]
                        }, {
                          "r" : "219",
                          "s" : [ {
                            "value" : [ "Condition" ]
                          } ]
                        }, {
                          "value" : [ ">" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "230",
                  "s" : [ {
                    "value" : [ "Tuple {\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "start", ": " ]
                    }, {
                      "r" : "231",
                      "s" : [ {
                        "value" : [ "start of " ]
                      }, {
                        "r" : "233",
                        "s" : [ {
                          "r" : "232",
                          "s" : [ {
                            "value" : [ "X" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "233",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ",\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "end", ": " ]
                    }, {
                      "r" : "240",
                      "s" : [ {
                        "value" : [ "end of " ]
                      }, {
                        "r" : "242",
                        "s" : [ {
                          "r" : "241",
                          "s" : [ {
                            "value" : [ "X" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "242",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n    }" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "267",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "268",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "269",
              "name" : "start",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "270",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "localId" : "271",
              "name" : "end",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "260",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "261",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "262",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "263",
                "name" : "start",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "265",
                "name" : "end",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "215",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "226",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "227",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "As",
              "localId" : "216",
              "strict" : false,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "224",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "225",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "217",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "218",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "220",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "221",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                    "annotation" : [ ]
                  }
                },
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "219",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              }
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "229",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "254",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "255",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "256",
                  "name" : "start",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "257",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "258",
                  "name" : "end",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "259",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "230",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "249",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "250",
                  "name" : "start",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "251",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "252",
                  "name" : "end",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "253",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "start",
                "value" : {
                  "type" : "Start",
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "238",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "239",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "233",
                    "path" : "period",
                    "scope" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "236",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "237",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              }, {
                "name" : "end",
                "value" : {
                  "type" : "End",
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "247",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "248",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "242",
                    "path" : "period",
                    "scope" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "245",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "246",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "275",
        "name" : "NullObjectQuery",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "275",
            "s" : [ {
              "value" : [ "", "define ", "NullObjectQuery", ":\n  " ]
            }, {
              "r" : "311",
              "s" : [ {
                "s" : [ {
                  "r" : "276",
                  "s" : [ {
                    "r" : "277",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "277",
                      "s" : [ {
                        "r" : "278",
                        "value" : [ "null", " as " ]
                      }, {
                        "r" : "279",
                        "s" : [ {
                          "value" : [ "Condition" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "281",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "282",
                  "s" : [ {
                    "value" : [ "Tuple {\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "start", ": " ]
                    }, {
                      "r" : "283",
                      "s" : [ {
                        "value" : [ "start of " ]
                      }, {
                        "r" : "285",
                        "s" : [ {
                          "r" : "284",
                          "s" : [ {
                            "value" : [ "X" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "285",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ",\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "end", ": " ]
                    }, {
                      "r" : "292",
                      "s" : [ {
                        "value" : [ "end of " ]
                      }, {
                        "r" : "294",
                        "s" : [ {
                          "r" : "293",
                          "s" : [ {
                            "value" : [ "X" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "294",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n    }" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "317",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "318",
            "name" : "start",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "319",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          }, {
            "localId" : "320",
            "name" : "end",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "321",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "Query",
          "localId" : "311",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "312",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "313",
              "name" : "start",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "314",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "localId" : "315",
              "name" : "end",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "316",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          },
          "source" : [ {
            "localId" : "276",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "alias" : "X",
            "annotation" : [ ],
            "expression" : {
              "type" : "As",
              "localId" : "277",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "278",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "279",
                "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "281",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "306",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "307",
                "name" : "start",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "308",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "309",
                "name" : "end",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "282",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "301",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "302",
                  "name" : "start",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "303",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "304",
                  "name" : "end",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "305",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "start",
                "value" : {
                  "type" : "Start",
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "290",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "291",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "285",
                    "path" : "period",
                    "scope" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "288",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "289",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              }, {
                "name" : "end",
                "value" : {
                  "type" : "End",
                  "localId" : "292",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "299",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "300",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "294",
                    "path" : "period",
                    "scope" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "297",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "298",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "324",
        "name" : "AllNullMultiSourceQuery",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "324",
            "s" : [ {
              "value" : [ "", "define ", "AllNullMultiSourceQuery", ":\n  " ]
            }, {
              "r" : "410",
              "s" : [ {
                "s" : [ {
                  "value" : [ "from\n    " ]
                }, {
                  "r" : "325",
                  "s" : [ {
                    "r" : "326",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "326",
                      "s" : [ {
                        "r" : "327",
                        "value" : [ "null", " as " ]
                      }, {
                        "r" : "328",
                        "s" : [ {
                          "value" : [ "List<" ]
                        }, {
                          "r" : "329",
                          "s" : [ {
                            "value" : [ "Condition" ]
                          } ]
                        }, {
                          "value" : [ ">" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                }, {
                  "value" : [ ",\n    " ]
                }, {
                  "r" : "338",
                  "s" : [ {
                    "r" : "339",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "339",
                      "s" : [ {
                        "r" : "340",
                        "value" : [ "null", " as " ]
                      }, {
                        "r" : "341",
                        "s" : [ {
                          "value" : [ "List<" ]
                        }, {
                          "r" : "342",
                          "s" : [ {
                            "value" : [ "Encounter" ]
                          } ]
                        }, {
                          "value" : [ ">" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "Y" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "353",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "354",
                  "s" : [ {
                    "value" : [ "Tuple {\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "cStart", ": " ]
                    }, {
                      "r" : "355",
                      "s" : [ {
                        "value" : [ "start of " ]
                      }, {
                        "r" : "357",
                        "s" : [ {
                          "r" : "356",
                          "s" : [ {
                            "value" : [ "X" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "357",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ",\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "cEnd", ": " ]
                    }, {
                      "r" : "364",
                      "s" : [ {
                        "value" : [ "end of " ]
                      }, {
                        "r" : "366",
                        "s" : [ {
                          "r" : "365",
                          "s" : [ {
                            "value" : [ "X" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "366",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ",\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "eStart", ": " ]
                    }, {
                      "r" : "373",
                      "s" : [ {
                        "value" : [ "start of " ]
                      }, {
                        "r" : "375",
                        "s" : [ {
                          "r" : "374",
                          "s" : [ {
                            "value" : [ "Y" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "375",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ",\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "eEnd", ": " ]
                    }, {
                      "r" : "382",
                      "s" : [ {
                        "value" : [ "end of " ]
                      }, {
                        "r" : "384",
                        "s" : [ {
                          "r" : "383",
                          "s" : [ {
                            "value" : [ "Y" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "384",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n    }" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "421",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "422",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "423",
              "name" : "cStart",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "424",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "localId" : "425",
              "name" : "cEnd",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "426",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "localId" : "427",
              "name" : "eStart",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "428",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "localId" : "429",
              "name" : "eEnd",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "430",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "410",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "411",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "412",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "413",
                "name" : "cStart",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "414",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "415",
                "name" : "cEnd",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "416",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "417",
                "name" : "eStart",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "418",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "419",
                "name" : "eEnd",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "420",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "325",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "336",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "337",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "As",
              "localId" : "326",
              "strict" : false,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "334",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "335",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "327",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "328",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "330",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "331",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                    "annotation" : [ ]
                  }
                },
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "329",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              }
            }
          }, {
            "localId" : "338",
            "alias" : "Y",
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
            "expression" : {
              "type" : "As",
              "localId" : "339",
              "strict" : false,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "347",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "348",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "340",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "341",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "343",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "344",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "342",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              }
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "353",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "400",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "401",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "402",
                  "name" : "cStart",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "403",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "404",
                  "name" : "cEnd",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "405",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "406",
                  "name" : "eStart",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "407",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "408",
                  "name" : "eEnd",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "409",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "354",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "391",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "392",
                  "name" : "cStart",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "393",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "394",
                  "name" : "cEnd",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "395",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "396",
                  "name" : "eStart",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "397",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "398",
                  "name" : "eEnd",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "399",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "cStart",
                "value" : {
                  "type" : "Start",
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "362",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "363",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "357",
                    "path" : "period",
                    "scope" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "360",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "361",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              }, {
                "name" : "cEnd",
                "value" : {
                  "type" : "End",
                  "localId" : "364",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "371",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "372",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "366",
                    "path" : "period",
                    "scope" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "369",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "370",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              }, {
                "name" : "eStart",
                "value" : {
                  "type" : "Start",
                  "localId" : "373",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "380",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "381",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "375",
                    "path" : "period",
                    "scope" : "Y",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "378",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "379",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              }, {
                "name" : "eEnd",
                "value" : {
                  "type" : "End",
                  "localId" : "382",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "389",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "390",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "384",
                    "path" : "period",
                    "scope" : "Y",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "387",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "388",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "433",
        "name" : "SomeNullMultiSourceQuery",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "433",
            "s" : [ {
              "value" : [ "", "define ", "SomeNullMultiSourceQuery", ":\n  " ]
            }, {
              "r" : "514",
              "s" : [ {
                "s" : [ {
                  "value" : [ "from\n    " ]
                }, {
                  "r" : "434",
                  "s" : [ {
                    "r" : "435",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "435",
                      "s" : [ {
                        "r" : "436",
                        "value" : [ "null", " as " ]
                      }, {
                        "r" : "437",
                        "s" : [ {
                          "value" : [ "List<" ]
                        }, {
                          "r" : "438",
                          "s" : [ {
                            "value" : [ "Condition" ]
                          } ]
                        }, {
                          "value" : [ ">" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ ")" ]
                    } ]
                  }, {
                    "value" : [ " ", "X" ]
                  } ]
                }, {
                  "value" : [ ",\n    " ]
                }, {
                  "r" : "447",
                  "s" : [ {
                    "r" : "448",
                    "s" : [ {
                      "r" : "448",
                      "s" : [ {
                        "value" : [ "[", "Encounter", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "Y" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "457",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "458",
                  "s" : [ {
                    "value" : [ "Tuple {\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "cStart", ": " ]
                    }, {
                      "r" : "459",
                      "s" : [ {
                        "value" : [ "start of " ]
                      }, {
                        "r" : "461",
                        "s" : [ {
                          "r" : "460",
                          "s" : [ {
                            "value" : [ "X" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "461",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ",\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "cEnd", ": " ]
                    }, {
                      "r" : "468",
                      "s" : [ {
                        "value" : [ "end of " ]
                      }, {
                        "r" : "470",
                        "s" : [ {
                          "r" : "469",
                          "s" : [ {
                            "value" : [ "X" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "470",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ",\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "eStart", ": " ]
                    }, {
                      "r" : "477",
                      "s" : [ {
                        "value" : [ "start of " ]
                      }, {
                        "r" : "479",
                        "s" : [ {
                          "r" : "478",
                          "s" : [ {
                            "value" : [ "Y" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "479",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ",\n      " ]
                  }, {
                    "s" : [ {
                      "value" : [ "eEnd", ": " ]
                    }, {
                      "r" : "486",
                      "s" : [ {
                        "value" : [ "end of " ]
                      }, {
                        "r" : "488",
                        "s" : [ {
                          "r" : "487",
                          "s" : [ {
                            "value" : [ "Y" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "488",
                          "s" : [ {
                            "value" : [ "period" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n    }" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "525",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "526",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "527",
              "name" : "cStart",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "528",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "localId" : "529",
              "name" : "cEnd",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "530",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "localId" : "531",
              "name" : "eStart",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "532",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }, {
              "localId" : "533",
              "name" : "eEnd",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "534",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "514",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "515",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "516",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "517",
                "name" : "cStart",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "518",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "519",
                "name" : "cEnd",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "520",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "521",
                "name" : "eStart",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "522",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "523",
                "name" : "eEnd",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "524",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "434",
            "alias" : "X",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "445",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "446",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "As",
              "localId" : "435",
              "strict" : false,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "443",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "444",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "436",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "437",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "439",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "440",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                    "annotation" : [ ]
                  }
                },
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "438",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              }
            }
          }, {
            "localId" : "447",
            "alias" : "Y",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "453",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "454",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "448",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "451",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "452",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ],
          "return" : {
            "localId" : "457",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "504",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "505",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "506",
                  "name" : "cStart",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "507",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "508",
                  "name" : "cEnd",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "509",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "510",
                  "name" : "eStart",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "511",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "512",
                  "name" : "eEnd",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "513",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "458",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "495",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "496",
                  "name" : "cStart",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "497",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "498",
                  "name" : "cEnd",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "499",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "500",
                  "name" : "eStart",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "501",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "502",
                  "name" : "eEnd",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "503",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "cStart",
                "value" : {
                  "type" : "Start",
                  "localId" : "459",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "466",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "467",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "461",
                    "path" : "period",
                    "scope" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "464",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "465",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              }, {
                "name" : "cEnd",
                "value" : {
                  "type" : "End",
                  "localId" : "468",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "475",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "476",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "470",
                    "path" : "period",
                    "scope" : "X",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "473",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "474",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              }, {
                "name" : "eStart",
                "value" : {
                  "type" : "Start",
                  "localId" : "477",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "484",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "485",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "479",
                    "path" : "period",
                    "scope" : "Y",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "482",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "483",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              }, {
                "name" : "eEnd",
                "value" : {
                  "type" : "End",
                  "localId" : "486",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "493",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "494",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  } ],
                  "operand" : {
                    "type" : "Property",
                    "localId" : "488",
                    "path" : "period",
                    "scope" : "Y",
                    "annotation" : [ ],
                    "resultTypeSpecifier" : {
                      "type" : "IntervalTypeSpecifier",
                      "localId" : "491",
                      "annotation" : [ ],
                      "pointType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "492",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "annotation" : [ ]
                      }
                    }
                  }
                }
              } ]
            }
          }
        }
      } ]
    }
  }
}

