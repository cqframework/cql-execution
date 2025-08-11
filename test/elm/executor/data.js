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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "338",
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
            "localId" : "208",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "r" : "209",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "r" : "221",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "237",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "233",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "234",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "218",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "209",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "210",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "211",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "223",
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
            "localId" : "242",
            "name" : "Patient"
         }, {
            "localId" : "299",
            "name" : "Unfiltered"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "240",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "241",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "239",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","Age",":\n  " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
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
               "localId" : "256",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "255",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "254",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "Start",
                  "signature" : [ {
                     "localId" : "250",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "251",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "operand" : {
                     "localId" : "247",
                     "name" : "MeasurementPeriod",
                     "type" : "ParameterRef",
                     "resultTypeSpecifier" : {
                        "localId" : "248",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "249",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n  " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "r" : "274",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
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
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "r" : "291",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
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
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "GreaterOrEqual",
                  "signature" : [ {
                     "localId" : "278",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "275",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "276",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "273",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "272",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "264",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "268",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "269",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "265",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "266",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "267",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Less",
                  "signature" : [ {
                     "localId" : "295",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "291",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "292",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "293",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "290",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "289",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "281",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "285",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "286",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "282",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "283",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "284",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "18",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","AgeSum",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
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
               "localId" : "310",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "311",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "312",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "303",
                  "name" : "Age",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "304",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "305",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "315",
                  "s" : [ {
                     "value" : [ "","define ","DEMO",": " ]
                  }, {
                     "r" : "333",
                     "s" : [ {
                        "value" : [ "Count","(" ]
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
                                 "value" : [ " ","w" ]
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
               "localId" : "333",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Count",
               "signature" : [ {
                  "localId" : "334",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "335",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "326",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "327",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "328",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "316",
                     "alias" : "w",
                     "resultTypeSpecifier" : {
                        "localId" : "320",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "321",
                           "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "317",
                        "name" : "InDemographic",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "318",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "319",
                              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "324",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "IsTrue",
                     "signature" : [ {
                        "localId" : "325",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "323",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "name" : "w",
                        "type" : "AliasRef"
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
               "s" : {
                  "r" : "338",
                  "s" : [ {
                     "value" : [ "","define ","AgeSumRef"," : " ]
                  }, {
                     "r" : "339",
                     "s" : [ {
                        "value" : [ "AgeSum" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "339",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "AgeSum",
               "type" : "ExpressionRef"
            }
         } ]
      }
   }
}

