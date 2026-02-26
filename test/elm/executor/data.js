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
        "r" : "338",
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
      }, {
        "localId" : "299",
        "name" : "Unfiltered",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Age",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "245",
            "s" : [ {
              "value" : [ "", "define ", "Age", ":\n  " ]
            }, {
              "r" : "256",
              "s" : [ {
                "value" : [ "AgeInYearsAt", "(" ]
              }, {
                "r" : "246",
                "s" : [ {
                  "value" : [ "start of " ]
                }, {
                  "r" : "247",
                  "s" : [ {
                    "value" : [ "MeasurementPeriod" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "256",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "257",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Property",
            "localId" : "255",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "254",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }, {
            "type" : "Start",
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "IntervalTypeSpecifier",
              "localId" : "250",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "251",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            } ],
            "operand" : {
              "type" : "ParameterRef",
              "localId" : "247",
              "name" : "MeasurementPeriod",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "248",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ]
                }
              }
            }
          } ]
        }
      }, {
        "localId" : "261",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "InDemographic",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "261",
            "s" : [ {
              "value" : [ "", "define ", "InDemographic", ":\n  " ]
            }, {
              "r" : "262",
              "s" : [ {
                "r" : "263",
                "s" : [ {
                  "r" : "274",
                  "s" : [ {
                    "value" : [ "AgeInYearsAt", "(" ]
                  }, {
                    "r" : "264",
                    "s" : [ {
                      "value" : [ "start of " ]
                    }, {
                      "r" : "265",
                      "s" : [ {
                        "value" : [ "MeasurementPeriod" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "r" : "277",
                  "value" : [ " ", ">=", " ", "2" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "280",
                "s" : [ {
                  "r" : "291",
                  "s" : [ {
                    "value" : [ "AgeInYearsAt", "(" ]
                  }, {
                    "r" : "281",
                    "s" : [ {
                      "value" : [ "start of " ]
                    }, {
                      "r" : "282",
                      "s" : [ {
                        "value" : [ "MeasurementPeriod" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "r" : "294",
                  "value" : [ " ", "<", " ", "18" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "262",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "297",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "GreaterOrEqual",
            "localId" : "263",
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
              "type" : "CalculateAgeAt",
              "localId" : "274",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "precision" : "Year",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "275",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "276",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "273",
                "path" : "birthDate",
                "annotation" : [ ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "272",
                  "name" : "Patient",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Start",
                "localId" : "264",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "268",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "269",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ],
                "operand" : {
                  "type" : "ParameterRef",
                  "localId" : "265",
                  "name" : "MeasurementPeriod",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "266",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "267",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                }
              } ]
            }, {
              "type" : "Literal",
              "localId" : "277",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Less",
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "295",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "296",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "CalculateAgeAt",
              "localId" : "291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "precision" : "Year",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "292",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "293",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "290",
                "path" : "birthDate",
                "annotation" : [ ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "289",
                  "name" : "Patient",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Start",
                "localId" : "281",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "285",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "286",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ],
                "operand" : {
                  "type" : "ParameterRef",
                  "localId" : "282",
                  "name" : "MeasurementPeriod",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "283",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "284",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                }
              } ]
            }, {
              "type" : "Literal",
              "localId" : "294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "18",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "302",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeSum",
        "context" : "Unfiltered",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "AgeSum", ": " ]
            }, {
              "r" : "310",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "303",
                "s" : [ {
                  "value" : [ "Age" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Sum",
          "localId" : "310",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "311",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "312",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "ExpressionRef",
            "localId" : "303",
            "name" : "Age",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "304",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "305",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "315",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "DEMO",
        "context" : "Unfiltered",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "315",
            "s" : [ {
              "value" : [ "", "define ", "DEMO", ": " ]
            }, {
              "r" : "333",
              "s" : [ {
                "value" : [ "Count", "(" ]
              }, {
                "r" : "326",
                "s" : [ {
                  "s" : [ {
                    "r" : "316",
                    "s" : [ {
                      "r" : "317",
                      "s" : [ {
                        "s" : [ {
                          "value" : [ "InDemographic" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " ", "w" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " " ]
                }, {
                  "r" : "324",
                  "s" : [ {
                    "value" : [ "where " ]
                  }, {
                    "r" : "324",
                    "s" : [ {
                      "r" : "323",
                      "s" : [ {
                        "value" : [ "w" ]
                      } ]
                    }, {
                      "value" : [ " is true" ]
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
          "type" : "Count",
          "localId" : "333",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "334",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "335",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "326",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "327",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "328",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "source" : [ {
              "localId" : "316",
              "alias" : "w",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "320",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "annotation" : [ ]
                }
              },
              "expression" : {
                "type" : "ExpressionRef",
                "localId" : "317",
                "name" : "InDemographic",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "318",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "319",
                    "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "annotation" : [ ]
                  }
                }
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "IsTrue",
              "localId" : "324",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "325",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "AliasRef",
                "localId" : "323",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                "name" : "w",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "338",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeSumRef",
        "context" : "Unfiltered",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "338",
            "s" : [ {
              "value" : [ "", "define ", "AgeSumRef", " : " ]
            }, {
              "r" : "339",
              "s" : [ {
                "value" : [ "AgeSum" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "339",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "AgeSum",
          "annotation" : [ ]
        }
      } ]
    }
  }
}

