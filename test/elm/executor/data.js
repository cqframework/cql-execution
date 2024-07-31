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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "273",
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
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "r" : "208",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "220",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "low" : {
                  "localId" : "213",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "208",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "209",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "210",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "219",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "216",
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
            "localId" : "224",
            "name" : "Patient"
         }, {
            "localId" : "255",
            "name" : "Unfiltered"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "222",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "223",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "226",
            "name" : "Age",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Age",":\n  " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "start of " ]
                        }, {
                           "r" : "228",
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
               "localId" : "233",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "232",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "231",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "227",
                  "type" : "Start",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "228",
                     "name" : "MeasurementPeriod",
                     "type" : "ParameterRef"
                  }
               } ]
            }
         }, {
            "localId" : "235",
            "name" : "InDemographic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n  " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "r" : "244",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "238",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "239",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "245",
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "r" : "253",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "247",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "248",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "254",
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "type" : "And",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "237",
                  "type" : "GreaterOrEqual",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "244",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "243",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "242",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "238",
                        "type" : "Start",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "239",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef"
                        }
                     } ]
                  }, {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "246",
                  "type" : "Less",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "253",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ ],
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
                        "localId" : "247",
                        "type" : "Start",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "248",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef"
                        }
                     } ]
                  }, {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "18",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "AgeSum",
            "context" : "Unfiltered",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","AgeSum",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "258",
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
               "localId" : "261",
               "type" : "Sum",
               "signature" : [ ],
               "source" : {
                  "localId" : "258",
                  "name" : "Age",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "263",
            "name" : "DEMO",
            "context" : "Unfiltered",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","DEMO",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "Count","(" ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "s" : [ {
                              "r" : "264",
                              "s" : [ {
                                 "r" : "265",
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
                           "r" : "267",
                           "s" : [ {
                              "value" : [ "where " ]
                           }, {
                              "r" : "267",
                              "s" : [ {
                                 "r" : "266",
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
               "localId" : "271",
               "type" : "Count",
               "signature" : [ ],
               "source" : {
                  "localId" : "268",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "264",
                     "alias" : "w",
                     "expression" : {
                        "localId" : "265",
                        "name" : "InDemographic",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "267",
                     "type" : "IsTrue",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "266",
                        "name" : "w",
                        "type" : "AliasRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "273",
            "name" : "AgeSumRef",
            "context" : "Unfiltered",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "273",
                  "s" : [ {
                     "value" : [ "","define ","AgeSumRef"," : " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "value" : [ "AgeSum" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "name" : "AgeSum",
               "type" : "ExpressionRef"
            }
         } ]
      }
   }
}

