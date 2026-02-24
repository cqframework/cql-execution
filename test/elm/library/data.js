/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* In Age Demographic
library TestSnippet version '1'
using Simple version '1.0.0'
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define InDemographic:
AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18
*/

module.exports['In Age Demographic'] = {
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
        "r" : "245",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "InDemographic",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "245",
            "s" : [ {
              "value" : [ "", "define ", "InDemographic", ":\n" ]
            }, {
              "r" : "246",
              "s" : [ {
                "r" : "247",
                "s" : [ {
                  "r" : "258",
                  "s" : [ {
                    "value" : [ "AgeInYearsAt", "(" ]
                  }, {
                    "r" : "248",
                    "s" : [ {
                      "value" : [ "start of " ]
                    }, {
                      "r" : "249",
                      "s" : [ {
                        "value" : [ "MeasurementPeriod" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "r" : "261",
                  "value" : [ " ", ">=", " ", "2" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "264",
                "s" : [ {
                  "r" : "275",
                  "s" : [ {
                    "value" : [ "AgeInYearsAt", "(" ]
                  }, {
                    "r" : "265",
                    "s" : [ {
                      "value" : [ "start of " ]
                    }, {
                      "r" : "266",
                      "s" : [ {
                        "value" : [ "MeasurementPeriod" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "r" : "278",
                  "value" : [ " ", "<", " ", "18" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "246",
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
            "type" : "GreaterOrEqual",
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "262",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "263",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "CalculateAgeAt",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "precision" : "Year",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "259",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "260",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "257",
                "path" : "birthDate",
                "annotation" : [ ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "256",
                  "name" : "Patient",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Start",
                "localId" : "248",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "252",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "253",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ],
                "operand" : {
                  "type" : "ParameterRef",
                  "localId" : "249",
                  "name" : "MeasurementPeriod",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "250",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "251",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                }
              } ]
            }, {
              "type" : "Literal",
              "localId" : "261",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Less",
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "279",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "280",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "CalculateAgeAt",
              "localId" : "275",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "precision" : "Year",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "276",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "277",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "274",
                "path" : "birthDate",
                "annotation" : [ ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "273",
                  "name" : "Patient",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Start",
                "localId" : "265",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "269",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "270",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ],
                "operand" : {
                  "type" : "ParameterRef",
                  "localId" : "266",
                  "name" : "MeasurementPeriod",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
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
                }
              } ]
            }, {
              "type" : "Literal",
              "localId" : "278",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "18",
              "annotation" : [ ]
            } ]
          } ]
        }
      } ]
    }
  }
}

/* CommonLib
library Common
using Simple version '1.0.0'
include Common2 called common2

valueset "My Favorite VS": '9.7.5.3.1'
valueset "Acute Pharyngitis": '2.16.840.1.113883.3.464.1003.101.12.1001'
codesystem "My Favorite CS": '1.3.5.7.9'
codesystem "SNOMEDCT": '2.16.840.1.113883.6.96'
code "directReferenceCode": '428371000124100' from "SNOMEDCT" display 'directReferenceCode'

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define InDemographic:
AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18

define function foo (a Integer, b Integer) :
  a + b

define SupportLibDef:
  common2.TheParameter + common2.TwoPlusOne + common2.TwoTimesThree
*/

module.exports['CommonLib'] = {
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
          "value" : [ "", "library Common" ]
        } ]
      }
    } ],
    "identifier" : {
      "id" : "Common"
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
    "includes" : {
      "def" : [ {
        "localId" : "208",
        "localIdentifier" : "common2",
        "path" : "Common2",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "include " ]
            }, {
              "s" : [ {
                "value" : [ "Common2" ]
              } ]
            }, {
              "value" : [ " called ", "common2" ]
            } ]
          }
        } ]
      } ]
    },
    "parameters" : {
      "def" : [ {
        "localId" : "221",
        "name" : "MeasurementPeriod",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "221",
            "s" : [ {
              "value" : [ "", "parameter ", "MeasurementPeriod", " default " ]
            }, {
              "r" : "246",
              "s" : [ {
                "value" : [ "Interval[" ]
              }, {
                "r" : "230",
                "s" : [ {
                  "r" : "222",
                  "value" : [ "DateTime", "(", "2013", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "242",
                "s" : [ {
                  "r" : "234",
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
          "localId" : "250",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "default" : {
          "type" : "Interval",
          "localId" : "246",
          "lowClosed" : true,
          "highClosed" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "247",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "248",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "low" : {
            "type" : "DateTime",
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "231",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2013",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "223",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          },
          "high" : {
            "type" : "DateTime",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "243",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
            "year" : {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2014",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "236",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }
        }
      } ]
    },
    "codeSystems" : {
      "def" : [ {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "My Favorite CS",
        "id" : "1.3.5.7.9",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"My Favorite CS\"", ": ", "'1.3.5.7.9'" ]
            } ]
          }
        } ]
      }, {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "SNOMEDCT",
        "id" : "2.16.840.1.113883.6.96",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"SNOMEDCT\"", ": ", "'2.16.840.1.113883.6.96'" ]
            } ]
          }
        } ]
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "My Favorite VS",
        "id" : "9.7.5.3.1",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "valueset ", "\"My Favorite VS\"", ": ", "'9.7.5.3.1'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Acute Pharyngitis",
        "id" : "2.16.840.1.113883.3.464.1003.101.12.1001",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Acute Pharyngitis\"", ": ", "'2.16.840.1.113883.3.464.1003.101.12.1001'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "codes" : {
      "def" : [ {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "directReferenceCode",
        "id" : "428371000124100",
        "display" : "directReferenceCode",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "value" : [ "", "code ", "\"directReferenceCode\"", ": ", "'428371000124100'", " from " ]
            }, {
              "r" : "219",
              "s" : [ {
                "value" : [ "\"SNOMEDCT\"" ]
              } ]
            }, {
              "value" : [ " display ", "'directReferenceCode'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "SNOMEDCT",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "255",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "253",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "254",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "252",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "258",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "InDemographic",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "258",
            "s" : [ {
              "value" : [ "", "define ", "InDemographic", ":\n" ]
            }, {
              "r" : "259",
              "s" : [ {
                "r" : "260",
                "s" : [ {
                  "r" : "271",
                  "s" : [ {
                    "value" : [ "AgeInYearsAt", "(" ]
                  }, {
                    "r" : "261",
                    "s" : [ {
                      "value" : [ "start of " ]
                    }, {
                      "r" : "262",
                      "s" : [ {
                        "value" : [ "MeasurementPeriod" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "r" : "274",
                  "value" : [ " ", ">=", " ", "2" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "277",
                "s" : [ {
                  "r" : "288",
                  "s" : [ {
                    "value" : [ "AgeInYearsAt", "(" ]
                  }, {
                    "r" : "278",
                    "s" : [ {
                      "value" : [ "start of " ]
                    }, {
                      "r" : "279",
                      "s" : [ {
                        "value" : [ "MeasurementPeriod" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "r" : "291",
                  "value" : [ " ", "<", " ", "18" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "259",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "294",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "295",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "GreaterOrEqual",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "275",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "276",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "CalculateAgeAt",
              "localId" : "271",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "precision" : "Year",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "273",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "270",
                "path" : "birthDate",
                "annotation" : [ ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "269",
                  "name" : "Patient",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Start",
                "localId" : "261",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "265",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "266",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ],
                "operand" : {
                  "type" : "ParameterRef",
                  "localId" : "262",
                  "name" : "MeasurementPeriod",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "263",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "264",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                }
              } ]
            }, {
              "type" : "Literal",
              "localId" : "274",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Less",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "292",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "293",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "CalculateAgeAt",
              "localId" : "288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "precision" : "Year",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "289",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "290",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Property",
                "localId" : "287",
                "path" : "birthDate",
                "annotation" : [ ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "286",
                  "name" : "Patient",
                  "annotation" : [ ]
                }
              }, {
                "type" : "Start",
                "localId" : "278",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "282",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "283",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                } ],
                "operand" : {
                  "type" : "ParameterRef",
                  "localId" : "279",
                  "name" : "MeasurementPeriod",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "IntervalTypeSpecifier",
                    "localId" : "280",
                    "annotation" : [ ],
                    "pointType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "281",
                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                      "annotation" : [ ]
                    }
                  }
                }
              } ]
            }, {
              "type" : "Literal",
              "localId" : "291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "18",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "296",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "foo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "296",
            "s" : [ {
              "value" : [ "", "define function foo (a Integer, b Integer) :\n  " ]
            }, {
              "r" : "304",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "r" : "305",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "306",
                  "s" : [ {
                    "value" : [ "b" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "304",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "307",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "308",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "OperandRef",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "306",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "b",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "298",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }, {
          "localId" : "300",
          "name" : "b",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "311",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "SupportLibDef",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "311",
            "s" : [ {
              "value" : [ "", "define ", "SupportLibDef", ":\n  " ]
            }, {
              "r" : "312",
              "s" : [ {
                "r" : "313",
                "s" : [ {
                  "r" : "315",
                  "s" : [ {
                    "r" : "314",
                    "s" : [ {
                      "value" : [ "common2" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "315",
                    "s" : [ {
                      "value" : [ "TheParameter" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "317",
                  "s" : [ {
                    "r" : "316",
                    "s" : [ {
                      "value" : [ "common2" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "317",
                    "s" : [ {
                      "value" : [ "TwoPlusOne" ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "321",
                "s" : [ {
                  "r" : "320",
                  "s" : [ {
                    "value" : [ "common2" ]
                  } ]
                }, {
                  "value" : [ "." ]
                }, {
                  "r" : "321",
                  "s" : [ {
                    "value" : [ "TwoTimesThree" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "312",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "323",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Add",
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "318",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "319",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "315",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "TheParameter",
              "libraryName" : "common2",
              "annotation" : [ ]
            }, {
              "type" : "ExpressionRef",
              "localId" : "317",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "TwoPlusOne",
              "libraryName" : "common2",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TwoTimesThree",
            "libraryName" : "common2",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* Using CommonLib
library TestSnippet version '1'
using Simple version '1.0.0'

include Common called common

valueset "My Favorite VS": '10.8.6.4.2'
codesystem "My Favorite CS": '2.4.6.8.10'

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define ID: common.InDemographic

define L : Length(Patient.name)
define FuncTest : common.foo(2, 5)
define supportLibCode: common."directReferenceCode"
define supportLibCodeSystem: common."SNOMEDCT"
define supportClashingCodeSystemNames:
  Tuple {
    MyFavorite: "My Favorite CS",
    MyLibsFavorite: common."My Favorite CS"
  }
define supportLibValueSet: common."Acute Pharyngitis"
define supportClashingValueSetNames:
  Tuple {
    MyFavorite: "My Favorite VS",
    MyLibsFavorite: common."My Favorite VS"
  }
*/

module.exports['Using CommonLib'] = {
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
    "includes" : {
      "def" : [ {
        "localId" : "208",
        "localIdentifier" : "common",
        "path" : "Common",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "include " ]
            }, {
              "s" : [ {
                "value" : [ "Common" ]
              } ]
            }, {
              "value" : [ " called ", "common" ]
            } ]
          }
        } ]
      } ]
    },
    "parameters" : {
      "def" : [ {
        "localId" : "214",
        "name" : "MeasurementPeriod",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "parameter ", "MeasurementPeriod", " default " ]
            }, {
              "r" : "239",
              "s" : [ {
                "value" : [ "Interval[" ]
              }, {
                "r" : "223",
                "s" : [ {
                  "r" : "215",
                  "value" : [ "DateTime", "(", "2013", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "235",
                "s" : [ {
                  "r" : "227",
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
          "localId" : "243",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "default" : {
          "type" : "Interval",
          "localId" : "239",
          "lowClosed" : true,
          "highClosed" : false,
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
          },
          "low" : {
            "type" : "DateTime",
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "224",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "225",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "226",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "215",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2013",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          },
          "high" : {
            "type" : "DateTime",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "236",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "237",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "238",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2014",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "229",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }
        }
      } ]
    },
    "codeSystems" : {
      "def" : [ {
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "My Favorite CS",
        "id" : "2.4.6.8.10",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"My Favorite CS\"", ": ", "'2.4.6.8.10'" ]
            } ]
          }
        } ]
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "My Favorite VS",
        "id" : "10.8.6.4.2",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "valueset ", "\"My Favorite VS\"", ": ", "'10.8.6.4.2'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "248",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "246",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "247",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "245",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "251",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ID",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "251",
            "s" : [ {
              "value" : [ "", "define ", "ID", ": " ]
            }, {
              "r" : "253",
              "s" : [ {
                "r" : "252",
                "s" : [ {
                  "value" : [ "common" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "253",
                "s" : [ {
                  "value" : [ "InDemographic" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "253",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "InDemographic",
          "libraryName" : "common",
          "annotation" : [ ]
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "L",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "L", " : " ]
            }, {
              "r" : "262",
              "s" : [ {
                "value" : [ "Length", "(" ]
              }, {
                "r" : "258",
                "s" : [ {
                  "r" : "257",
                  "s" : [ {
                    "value" : [ "Patient" ]
                  } ]
                }, {
                  "value" : [ "." ]
                }, {
                  "r" : "258",
                  "s" : [ {
                    "value" : [ "name" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Length",
          "localId" : "262",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "263",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "path" : "name",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "257",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Patient",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "266",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FuncTest",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "266",
            "s" : [ {
              "value" : [ "", "define ", "FuncTest", " : " ]
            }, {
              "r" : "270",
              "s" : [ {
                "r" : "267",
                "s" : [ {
                  "value" : [ "common" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "270",
                "s" : [ {
                  "r" : "268",
                  "value" : [ "foo", "(", "2", ", ", "5", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "foo",
          "libraryName" : "common",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "272",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "275",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "supportLibCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "275",
            "s" : [ {
              "value" : [ "", "define ", "supportLibCode", ": " ]
            }, {
              "r" : "277",
              "s" : [ {
                "r" : "276",
                "s" : [ {
                  "value" : [ "common" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "277",
                "s" : [ {
                  "value" : [ "\"directReferenceCode\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CodeRef",
          "localId" : "277",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "directReferenceCode",
          "libraryName" : "common",
          "annotation" : [ ]
        }
      }, {
        "localId" : "280",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "supportLibCodeSystem",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "280",
            "s" : [ {
              "value" : [ "", "define ", "supportLibCodeSystem", ": " ]
            }, {
              "r" : "282",
              "s" : [ {
                "r" : "281",
                "s" : [ {
                  "value" : [ "common" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "282",
                "s" : [ {
                  "value" : [ "\"SNOMEDCT\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CodeSystemRef",
          "localId" : "282",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "SNOMEDCT",
          "libraryName" : "common",
          "annotation" : [ ]
        }
      }, {
        "localId" : "285",
        "name" : "supportClashingCodeSystemNames",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "285",
            "s" : [ {
              "value" : [ "", "define ", "supportClashingCodeSystemNames", ":\n  " ]
            }, {
              "r" : "286",
              "s" : [ {
                "value" : [ "Tuple {\n    " ]
              }, {
                "s" : [ {
                  "value" : [ "MyFavorite", ": " ]
                }, {
                  "r" : "287",
                  "s" : [ {
                    "value" : [ "\"My Favorite CS\"" ]
                  } ]
                } ]
              }, {
                "value" : [ ",\n    " ]
              }, {
                "s" : [ {
                  "value" : [ "MyLibsFavorite", ": " ]
                }, {
                  "r" : "289",
                  "s" : [ {
                    "r" : "288",
                    "s" : [ {
                      "value" : [ "common" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "289",
                    "s" : [ {
                      "value" : [ "\"My Favorite CS\"" ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ "\n  }" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "295",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "296",
            "name" : "MyFavorite",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "297",
              "name" : "{urn:hl7-org:elm-types:r1}CodeSystem",
              "annotation" : [ ]
            }
          }, {
            "localId" : "298",
            "name" : "MyLibsFavorite",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "299",
              "name" : "{urn:hl7-org:elm-types:r1}CodeSystem",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "Tuple",
          "localId" : "286",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "290",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "291",
              "name" : "MyFavorite",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "292",
                "name" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                "annotation" : [ ]
              }
            }, {
              "localId" : "293",
              "name" : "MyLibsFavorite",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "294",
                "name" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                "annotation" : [ ]
              }
            } ]
          },
          "element" : [ {
            "name" : "MyFavorite",
            "value" : {
              "type" : "CodeSystemRef",
              "localId" : "287",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
              "name" : "My Favorite CS",
              "annotation" : [ ]
            }
          }, {
            "name" : "MyLibsFavorite",
            "value" : {
              "type" : "CodeSystemRef",
              "localId" : "289",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
              "name" : "My Favorite CS",
              "libraryName" : "common",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "302",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "supportLibValueSet",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "supportLibValueSet", ": " ]
            }, {
              "r" : "304",
              "s" : [ {
                "r" : "303",
                "s" : [ {
                  "value" : [ "common" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "304",
                "s" : [ {
                  "value" : [ "\"Acute Pharyngitis\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ValueSetRef",
          "localId" : "304",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
          "name" : "Acute Pharyngitis",
          "libraryName" : "common",
          "preserve" : true,
          "annotation" : [ ]
        }
      }, {
        "localId" : "307",
        "name" : "supportClashingValueSetNames",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "307",
            "s" : [ {
              "value" : [ "", "define ", "supportClashingValueSetNames", ":\n  " ]
            }, {
              "r" : "308",
              "s" : [ {
                "value" : [ "Tuple {\n    " ]
              }, {
                "s" : [ {
                  "value" : [ "MyFavorite", ": " ]
                }, {
                  "r" : "309",
                  "s" : [ {
                    "value" : [ "\"My Favorite VS\"" ]
                  } ]
                } ]
              }, {
                "value" : [ ",\n    " ]
              }, {
                "s" : [ {
                  "value" : [ "MyLibsFavorite", ": " ]
                }, {
                  "r" : "311",
                  "s" : [ {
                    "r" : "310",
                    "s" : [ {
                      "value" : [ "common" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "311",
                    "s" : [ {
                      "value" : [ "\"My Favorite VS\"" ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ "\n  }" ]
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
            "name" : "MyFavorite",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "319",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            }
          }, {
            "localId" : "320",
            "name" : "MyLibsFavorite",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "321",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "Tuple",
          "localId" : "308",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "312",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "313",
              "name" : "MyFavorite",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "314",
                "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                "annotation" : [ ]
              }
            }, {
              "localId" : "315",
              "name" : "MyLibsFavorite",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "316",
                "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                "annotation" : [ ]
              }
            } ]
          },
          "element" : [ {
            "name" : "MyFavorite",
            "value" : {
              "type" : "ValueSetRef",
              "localId" : "309",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "My Favorite VS",
              "preserve" : true,
              "annotation" : [ ]
            }
          }, {
            "name" : "MyLibsFavorite",
            "value" : {
              "type" : "ValueSetRef",
              "localId" : "311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "My Favorite VS",
              "libraryName" : "common",
              "preserve" : true,
              "annotation" : [ ]
            }
          } ]
        }
      } ]
    }
  }
}

/* CommonLib2
library Common2
using Simple version '1.0.0'
parameter SomeNumber default 17
parameter AnotherNumber default 20

context Patient

define TheParameter:
  SomeNumber

define function addToParameter(a Integer):
  SomeNumber + a

define AnotherParameter:
  AnotherNumber

define function addToAnotherParameter(a Integer):
  AnotherNumber + a

define function multiply(a Integer, b Integer) :
  a * b

define function square(a Integer):
  multiply(a, a)

define TwoTimesThree:
  multiply(2, 3)

define Two:
  2

define function addTwo(a Integer):
  a + Two

define TwoPlusOne:
  Two + 1

define SortUsingFunction:
  ({1, 3, 2, 5, 4}) N return Tuple{N: N} sort by square(N)
*/

module.exports['CommonLib2'] = {
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
        "r" : "301",
        "s" : [ {
          "value" : [ "", "library Common2" ]
        } ]
      }
    } ],
    "identifier" : {
      "id" : "Common2"
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "SomeNumber",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "r" : "209",
              "value" : [ "", "parameter ", "SomeNumber", " default ", "17" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "17",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AnotherNumber",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "r" : "212",
              "value" : [ "", "parameter ", "AnotherNumber", " default ", "20" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "20",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "217",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "216",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "214",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "TheParameter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "TheParameter", ":\n  " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "SomeNumber" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "SomeNumber",
          "annotation" : [ ]
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "addToParameter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define function addToParameter(a Integer):\n  " ]
            }, {
              "r" : "227",
              "s" : [ {
                "r" : "227",
                "s" : [ {
                  "r" : "228",
                  "s" : [ {
                    "value" : [ "SomeNumber" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "229",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
          } ],
          "operand" : [ {
            "type" : "ParameterRef",
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SomeNumber",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "224",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AnotherParameter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "AnotherParameter", ":\n  " ]
            }, {
              "r" : "235",
              "s" : [ {
                "value" : [ "AnotherNumber" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "235",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "AnotherNumber",
          "annotation" : [ ]
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "236",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "addToAnotherParameter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "236",
            "s" : [ {
              "value" : [ "", "define function addToAnotherParameter(a Integer):\n  " ]
            }, {
              "r" : "241",
              "s" : [ {
                "r" : "241",
                "s" : [ {
                  "r" : "242",
                  "s" : [ {
                    "value" : [ "AnotherNumber" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "243",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "241",
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
            "type" : "ParameterRef",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AnotherNumber",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "238",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "multiply",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define function multiply(a Integer, b Integer) :\n  " ]
            }, {
              "r" : "254",
              "s" : [ {
                "r" : "254",
                "s" : [ {
                  "r" : "255",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                }, {
                  "value" : [ " * " ]
                }, {
                  "r" : "256",
                  "s" : [ {
                    "value" : [ "b" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "254",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "257",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "OperandRef",
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "b",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "248",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }, {
          "localId" : "250",
          "name" : "b",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "259",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "square",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "259",
            "s" : [ {
              "value" : [ "", "define function square(a Integer):\n  " ]
            }, {
              "r" : "266",
              "s" : [ {
                "r" : "266",
                "s" : [ {
                  "value" : [ "multiply", "(" ]
                }, {
                  "r" : "264",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "265",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "266",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "multiply",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "268",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "OperandRef",
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "261",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "271",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "TwoTimesThree",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "271",
            "s" : [ {
              "value" : [ "", "define ", "TwoTimesThree", ":\n  " ]
            }, {
              "r" : "274",
              "s" : [ {
                "r" : "272",
                "value" : [ "multiply", "(", "2", ", ", "3", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "274",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "multiply",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "276",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
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
          } ]
        }
      }, {
        "localId" : "279",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Two",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "279",
            "s" : [ {
              "r" : "280",
              "value" : [ "", "define ", "Two", ":\n  ", "2" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "280",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "2",
          "annotation" : [ ]
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "281",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "addTwo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "281",
            "s" : [ {
              "value" : [ "", "define function addTwo(a Integer):\n  " ]
            }, {
              "r" : "286",
              "s" : [ {
                "r" : "286",
                "s" : [ {
                  "r" : "287",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "288",
                  "s" : [ {
                    "value" : [ "Two" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "286",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "289",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "290",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "OperandRef",
            "localId" : "287",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Two",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "283",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "293",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "TwoPlusOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "293",
            "s" : [ {
              "value" : [ "", "define ", "TwoPlusOne", ":\n  " ]
            }, {
              "r" : "294",
              "s" : [ {
                "r" : "295",
                "s" : [ {
                  "value" : [ "Two" ]
                } ]
              }, {
                "r" : "296",
                "value" : [ " + ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "294",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "297",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "295",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Two",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "301",
        "name" : "SortUsingFunction",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "301",
            "s" : [ {
              "value" : [ "", "define ", "SortUsingFunction", ":\n  " ]
            }, {
              "r" : "340",
              "s" : [ {
                "s" : [ {
                  "r" : "302",
                  "s" : [ {
                    "r" : "303",
                    "s" : [ {
                      "value" : [ "(" ]
                    }, {
                      "r" : "303",
                      "s" : [ {
                        "r" : "304",
                        "value" : [ "{", "1", ", ", "3", ", ", "2", ", ", "5", ", ", "4", "}" ]
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
                "r" : "316",
                "s" : [ {
                  "value" : [ "return " ]
                }, {
                  "r" : "317",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "N", ": " ]
                    }, {
                      "r" : "318",
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
                "r" : "334",
                "s" : [ {
                  "value" : [ "sort by " ]
                }, {
                  "r" : "333",
                  "s" : [ {
                    "r" : "331",
                    "s" : [ {
                      "value" : [ "square", "(" ]
                    }, {
                      "r" : "330",
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
          "localId" : "345",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "346",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "347",
              "name" : "N",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "348",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "340",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "341",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "342",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "343",
                "name" : "N",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "344",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "source" : [ {
            "localId" : "302",
            "alias" : "N",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "313",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "314",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "List",
              "localId" : "303",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "311",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "312",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "304",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "305",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "306",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "307",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "308",
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
            "localId" : "316",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "322",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "323",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "324",
                  "name" : "N",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "325",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "expression" : {
              "type" : "Tuple",
              "localId" : "317",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "319",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "320",
                  "name" : "N",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "321",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "N",
                "value" : {
                  "type" : "AliasRef",
                  "localId" : "318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "N",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "sort" : {
            "localId" : "334",
            "annotation" : [ ],
            "by" : [ {
              "type" : "ByExpression",
              "localId" : "333",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "direction" : "asc",
              "annotation" : [ ],
              "expression" : {
                "type" : "FunctionRef",
                "localId" : "331",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "square",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "332",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "IdentifierRef",
                  "localId" : "330",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "N",
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

/* Using CommonLib2
library TestSnippet version '1'
using Simple version '1.0.0'
include Common2 called common2

context Patient

define ExprUsesParam: common2.TheParameter
define ExprUsesParamDirectly: common2.SomeNumber
define ExprUsesAnotherParam: common2.AnotherParameter
define ExprUsesAnotherParamDirectly: common2.AnotherNumber
define FuncUsesAnotherParam: common2.addToAnotherParameter(5)
define FuncUsesParam: common2.addToParameter(5)
define ExprCallsFunc: common2.TwoTimesThree
define FuncCallsFunc: common2.square(5)
define ExprUsesExpr: common2.TwoPlusOne
define FuncUsesExpr: common2.addTwo(5)
define ExprSortsOnFunc: common2.SortUsingFunction
*/

module.exports['Using CommonLib2'] = {
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
        "r" : "274",
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
    "includes" : {
      "def" : [ {
        "localId" : "208",
        "localIdentifier" : "common2",
        "path" : "Common2",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "include " ]
            }, {
              "s" : [ {
                "value" : [ "Common2" ]
              } ]
            }, {
              "value" : [ " called ", "common2" ]
            } ]
          }
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "213",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "212",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "210",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ExprUsesParam",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "define ", "ExprUsesParam", ": " ]
            }, {
              "r" : "218",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "218",
                "s" : [ {
                  "value" : [ "TheParameter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "218",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "TheParameter",
          "libraryName" : "common2",
          "annotation" : [ ]
        }
      }, {
        "localId" : "221",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ExprUsesParamDirectly",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "221",
            "s" : [ {
              "value" : [ "", "define ", "ExprUsesParamDirectly", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "222",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "223",
                "s" : [ {
                  "value" : [ "SomeNumber" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "SomeNumber",
          "libraryName" : "common2",
          "annotation" : [ ]
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ExprUsesAnotherParam",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "ExprUsesAnotherParam", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "r" : "227",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "228",
                "s" : [ {
                  "value" : [ "AnotherParameter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "AnotherParameter",
          "libraryName" : "common2",
          "annotation" : [ ]
        }
      }, {
        "localId" : "231",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ExprUsesAnotherParamDirectly",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "define ", "ExprUsesAnotherParamDirectly", ": " ]
            }, {
              "r" : "233",
              "s" : [ {
                "r" : "232",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "233",
                "s" : [ {
                  "value" : [ "AnotherNumber" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "233",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "AnotherNumber",
          "libraryName" : "common2",
          "annotation" : [ ]
        }
      }, {
        "localId" : "236",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FuncUsesAnotherParam",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "236",
            "s" : [ {
              "value" : [ "", "define ", "FuncUsesAnotherParam", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "237",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "239",
                "s" : [ {
                  "r" : "238",
                  "value" : [ "addToAnotherParameter", "(", "5", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "addToAnotherParameter",
          "libraryName" : "common2",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "243",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FuncUsesParam",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "FuncUsesParam", ": " ]
            }, {
              "r" : "246",
              "s" : [ {
                "r" : "244",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "246",
                "s" : [ {
                  "r" : "245",
                  "value" : [ "addToParameter", "(", "5", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "246",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "addToParameter",
          "libraryName" : "common2",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "250",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ExprCallsFunc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "ExprCallsFunc", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "r" : "251",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "252",
                "s" : [ {
                  "value" : [ "TwoTimesThree" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "TwoTimesThree",
          "libraryName" : "common2",
          "annotation" : [ ]
        }
      }, {
        "localId" : "255",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FuncCallsFunc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "255",
            "s" : [ {
              "value" : [ "", "define ", "FuncCallsFunc", ": " ]
            }, {
              "r" : "258",
              "s" : [ {
                "r" : "256",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "258",
                "s" : [ {
                  "r" : "257",
                  "value" : [ "square", "(", "5", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "258",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "square",
          "libraryName" : "common2",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "262",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ExprUsesExpr",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "ExprUsesExpr", ": " ]
            }, {
              "r" : "264",
              "s" : [ {
                "r" : "263",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "264",
                "s" : [ {
                  "value" : [ "TwoPlusOne" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "264",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "TwoPlusOne",
          "libraryName" : "common2",
          "annotation" : [ ]
        }
      }, {
        "localId" : "267",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FuncUsesExpr",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "267",
            "s" : [ {
              "value" : [ "", "define ", "FuncUsesExpr", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "r" : "268",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "270",
                "s" : [ {
                  "r" : "269",
                  "value" : [ "addTwo", "(", "5", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "addTwo",
          "libraryName" : "common2",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "274",
        "name" : "ExprSortsOnFunc",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "ExprSortsOnFunc", ": " ]
            }, {
              "r" : "276",
              "s" : [ {
                "r" : "275",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "276",
                "s" : [ {
                  "value" : [ "SortUsingFunction" ]
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
            "type" : "TupleTypeSpecifier",
            "localId" : "286",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "287",
              "name" : "N",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "288",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "276",
          "name" : "SortUsingFunction",
          "libraryName" : "common2",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "281",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "282",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "283",
                "name" : "N",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
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

/* Using CommonLib and CommonLib2
library UsingTwoLibs version '0.0.1'
using Simple version '1.0.0'
include Common2 called common2
include Common called common

context Patient

define testCommonLib: common.SupportLibDef
define testCommon2Lib: common2.SortUsingFunction
*/

module.exports['Using CommonLib and CommonLib2'] = {
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
        "r" : "223",
        "s" : [ {
          "value" : [ "", "library UsingTwoLibs version '0.0.1'" ]
        } ]
      }
    } ],
    "identifier" : {
      "id" : "UsingTwoLibs",
      "version" : "0.0.1"
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
    "includes" : {
      "def" : [ {
        "localId" : "208",
        "localIdentifier" : "common2",
        "path" : "Common2",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "include " ]
            }, {
              "s" : [ {
                "value" : [ "Common2" ]
              } ]
            }, {
              "value" : [ " called ", "common2" ]
            } ]
          }
        } ]
      }, {
        "localId" : "210",
        "localIdentifier" : "common",
        "path" : "Common",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "include " ]
            }, {
              "s" : [ {
                "value" : [ "Common" ]
              } ]
            }, {
              "value" : [ " called ", "common" ]
            } ]
          }
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "213",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "214",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "212",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "testCommonLib",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "value" : [ "", "define ", "testCommonLib", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "r" : "219",
                "s" : [ {
                  "value" : [ "common" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "220",
                "s" : [ {
                  "value" : [ "SupportLibDef" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "SupportLibDef",
          "libraryName" : "common",
          "annotation" : [ ]
        }
      }, {
        "localId" : "223",
        "name" : "testCommon2Lib",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "testCommon2Lib", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "r" : "224",
                "s" : [ {
                  "value" : [ "common2" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "225",
                "s" : [ {
                  "value" : [ "SortUsingFunction" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "234",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "235",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "236",
              "name" : "N",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "237",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "225",
          "name" : "SortUsingFunction",
          "libraryName" : "common2",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "230",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "231",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "232",
                "name" : "N",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
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

