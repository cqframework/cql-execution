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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "330",
            "s" : [ {
               "value" : [ "","library TestSnippet version '1'" ]
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
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "206",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "206",
                  "s" : [ {
                     "value" : [ "","using " ]
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
            "localId" : "207",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "216",
                        "s" : [ {
                           "r" : "208",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "235",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "232",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "233",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "217",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "218",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "208",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "209",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "210",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "240",
            "name" : "Patient"
         }, {
            "localId" : "295",
            "name" : "Unfiltered"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "238",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "239",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Age",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","Age",":\n  " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "start of " ]
                        }, {
                           "r" : "244",
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
               "localId" : "253",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "252",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "251",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "Start",
                  "signature" : [ {
                     "localId" : "247",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "248",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "operand" : {
                     "localId" : "244",
                     "name" : "MeasurementPeriod",
                     "type" : "ParameterRef",
                     "resultTypeSpecifier" : {
                        "localId" : "245",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "246",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ]
            }
         }, {
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "InDemographic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n  " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "r" : "270",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "260",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "261",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "273",
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "277",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "278",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "290",
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "294",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "GreaterOrEqual",
                  "signature" : [ {
                     "localId" : "274",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "275",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "271",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "269",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "268",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "260",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "264",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "265",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "261",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "262",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "263",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Less",
                  "signature" : [ {
                     "localId" : "291",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "288",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "289",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "286",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "285",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "277",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "281",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "282",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "278",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "279",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "280",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "18",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeSum",
            "context" : "Unfiltered",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "297",
                  "s" : [ {
                     "value" : [ "","define ","AgeSum",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "298",
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
               "localId" : "305",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "306",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "307",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "298",
                  "name" : "Age",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "299",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "300",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DEMO",
            "context" : "Unfiltered",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","DEMO",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "value" : [ "Count","(" ]
                     }, {
                        "r" : "319",
                        "s" : [ {
                           "s" : [ {
                              "r" : "310",
                              "s" : [ {
                                 "r" : "311",
                                 "s" : [ {
                                    "s" : [ {
                                       "value" : [ "InDemographic" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " ","w" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " " ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "value" : [ "where " ]
                           }, {
                              "r" : "317",
                              "s" : [ {
                                 "r" : "316",
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
               "localId" : "326",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Count",
               "signature" : [ {
                  "localId" : "327",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "319",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "320",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "321",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "310",
                     "alias" : "w",
                     "resultTypeSpecifier" : {
                        "localId" : "314",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "315",
                           "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "311",
                        "name" : "InDemographic",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "312",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "313",
                              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "IsTrue",
                     "signature" : [ {
                        "localId" : "318",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "316",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "name" : "w",
                        "type" : "AliasRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "330",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeSumRef",
            "context" : "Unfiltered",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "330",
                  "s" : [ {
                     "value" : [ "","define ","AgeSumRef"," : " ]
                  }, {
                     "r" : "331",
                     "s" : [ {
                        "value" : [ "AgeSum" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "331",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "AgeSum",
               "type" : "ExpressionRef"
            }
         } ]
      }
   }
}

