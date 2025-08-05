/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "327",
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
            "localId" : "210",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "211",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "r" : "223",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "239",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "235",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "236",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "211",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "212",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Ambulatory/ED Visit\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "244",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "242",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "243",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","EncountersDuringMP",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","during"," " ]
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
               "localId" : "281",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "282",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "278",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "279",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "280",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "248",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "254",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "255",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "249",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "252",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "253",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "dateRange" : {
                        "localId" : "263",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "264",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "265",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncountersDuringMP",": " ]
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
                                    "value" : [ "[","Encounter",": " ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "\"Ambulatory/ED Visit\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","during"," " ]
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
               "localId" : "323",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "324",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "320",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "321",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "322",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "286",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "296",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "297",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "289",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "294",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "295",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "codes" : {
                        "localId" : "288",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                        "name" : "Ambulatory/ED Visit",
                        "preserve" : true,
                        "type" : "ValueSetRef"
                     },
                     "dateRange" : {
                        "localId" : "305",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "306",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "307",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "327",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncountersIncludedInMP",": " ]
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
                                    "value" : [ "[","Encounter",": " ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "\"Ambulatory/ED Visit\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","included in"," " ]
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
               "localId" : "365",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "366",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "362",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "363",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "364",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "328",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "338",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "339",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "331",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "336",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "337",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "codes" : {
                        "localId" : "330",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                        "name" : "Ambulatory/ED Visit",
                        "preserve" : true,
                        "type" : "ValueSetRef"
                     },
                     "dateRange" : {
                        "localId" : "347",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "348",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "349",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "260",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FunctionWithThis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function \"FunctionWithThis\"(Encounter List<\"Encounter\">): " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "Count","(" ]
                        }, {
                           "r" : "245",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "220",
                                 "s" : [ {
                                    "r" : "229",
                                    "s" : [ {
                                       "s" : [ {
                                          "value" : [ "Encounter",".","period" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " ","EncounterPeriod" ]
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
               "localId" : "254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Count",
               "signature" : [ {
                  "localId" : "255",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "256",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "257",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "source" : {
                  "localId" : "245",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "246",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "247",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "248",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "source" : [ {
                     "localId" : "220",
                     "alias" : "EncounterPeriod",
                     "resultTypeSpecifier" : {
                        "localId" : "234",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "235",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "236",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "expression" : {
                        "localId" : "229",
                        "type" : "Query",
                        "resultTypeSpecifier" : {
                           "localId" : "231",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "232",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "233",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        },
                        "source" : [ {
                           "localId" : "228",
                           "alias" : "$this",
                           "expression" : {
                              "localId" : "221",
                              "name" : "Encounter",
                              "type" : "OperandRef"
                           }
                        } ],
                        "let" : [ ],
                        "relationship" : [ ],
                        "where" : {
                           "localId" : "225",
                           "type" : "Not",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "224",
                              "type" : "IsNull",
                              "signature" : [ ],
                              "operand" : {
                                 "localId" : "223",
                                 "path" : "period",
                                 "type" : "Property",
                                 "source" : {
                                    "localId" : "222",
                                    "name" : "$this",
                                    "type" : "AliasRef"
                                 }
                              }
                           }
                        },
                        "return" : {
                           "localId" : "230",
                           "distinct" : false,
                           "expression" : {
                              "localId" : "227",
                              "path" : "period",
                              "type" : "Property",
                              "source" : {
                                 "localId" : "226",
                                 "name" : "$this",
                                 "type" : "AliasRef"
                              }
                           }
                        }
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "238",
                     "resultTypeSpecifier" : {
                        "localId" : "242",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "243",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "244",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "expression" : {
                        "localId" : "239",
                        "name" : "EncounterPeriod",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "240",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "241",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }
                  }
               }
            },
            "operand" : [ {
               "localId" : "217",
               "name" : "Encounter",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "215",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "216",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "214",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","queryWithThis",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "\"FunctionWithThis\"","(" ]
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
                                          "value" : [ "[","Encounter","]" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " ","E" ]
                                 } ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "277",
                        "value" : [ " ",">"," ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "name" : "FunctionWithThis",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "275",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "276",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "operand" : [ {
                     "localId" : "271",
                     "type" : "Query",
                     "resultTypeSpecifier" : {
                        "localId" : "272",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "273",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "source" : [ {
                        "localId" : "262",
                        "alias" : "E",
                        "resultTypeSpecifier" : {
                           "localId" : "268",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "269",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "expression" : {
                           "localId" : "263",
                           "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "Retrieve",
                           "resultTypeSpecifier" : {
                              "localId" : "266",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "267",
                                 "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                                 "type" : "NamedTypeSpecifier"
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
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "247",
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
            "localId" : "210",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "211",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "r" : "223",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "239",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "235",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "236",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "211",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "212",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Ambulatory/ED Visit\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "244",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "242",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "243",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","MPIncludedAmbulatoryEncounters",": " ]
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
                                    "value" : [ "[","Encounter",": " ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "\"Ambulatory/ED Visit\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","includes"," " ]
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
               "localId" : "285",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "286",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "282",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "283",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "284",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "248",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "258",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "259",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "251",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "256",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "257",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "codes" : {
                        "localId" : "250",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                        "name" : "Ambulatory/ED Visit",
                        "preserve" : true,
                        "type" : "ValueSetRef"
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
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Includes",
                  "signature" : [ {
                     "localId" : "271",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "273",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "274",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "operand" : [ {
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
                  }, {
                     "localId" : "265",
                     "path" : "period",
                     "scope" : "E",
                     "type" : "Property",
                     "resultTypeSpecifier" : {
                        "localId" : "268",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "269",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "423",
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
            "name" : "msQueryWhere",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","msQueryWhere",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
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
                              "value" : [ " ","included in"," " ]
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
               "localId" : "296",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "297",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "298",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "299",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "300",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "301",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "289",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "290",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "291",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "292",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "293",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "294",
                        "name" : "C",
                        "elementType" : {
                           "localId" : "295",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "246",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "252",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "253",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "247",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "250",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "251",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "dateRange" : {
                        "localId" : "270",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "271",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "272",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "260",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "261",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "255",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "258",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "259",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
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
                  "expression" : {
                     "localId" : "286",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "287",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "288",
                           "name" : "C",
                           "type" : "AliasRef"
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
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","msQueryWhere2",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
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
                                 "value" : [ "  ","included in"," " ]
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
                                 "value" : [ " ","="," " ]
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
               "localId" : "366",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "367",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "368",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "369",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "370",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "371",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "359",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "360",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "361",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "362",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "363",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "364",
                        "name" : "C",
                        "elementType" : {
                           "localId" : "365",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "305",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "311",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "312",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "306",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "309",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "310",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "dateRange" : {
                        "localId" : "330",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "331",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "332",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "319",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "320",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "314",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "317",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "318",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "345",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "350",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "351",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "path" : "id",
                     "scope" : "C",
                     "type" : "Property"
                  }, {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "http://cqframework.org/3/2",
                     "type" : "Literal"
                  } ]
               },
               "return" : {
                  "localId" : "355",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "356",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "357",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "358",
                           "name" : "C",
                           "type" : "AliasRef"
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
               "s" : {
                  "r" : "374",
                  "s" : [ {
                     "value" : [ "","define ","msQuery",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
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
                                 "value" : [ "E",": " ]
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
                                 "value" : [ "C",":" ]
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
               "localId" : "415",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "416",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "417",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "418",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "419",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "420",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "408",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "409",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "410",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "411",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "412",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "413",
                        "name" : "C",
                        "elementType" : {
                           "localId" : "414",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "375",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "381",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "382",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "376",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "379",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "380",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "389",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "390",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "384",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "387",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "388",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "402",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "403",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "404",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "405",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "406",
                           "name" : "C",
                           "elementType" : {
                              "localId" : "407",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "394",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "397",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "398",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "399",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "400",
                           "name" : "C",
                           "elementType" : {
                              "localId" : "401",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "395",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "396",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "name" : "C",
                           "type" : "AliasRef"
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
               "s" : {
                  "r" : "423",
                  "s" : [ {
                     "value" : [ "","define ","multiSourceWithArrays",":\n  " ]
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
                              "value" : [ " ","A" ]
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
                              "value" : [ " ","X" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "478",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "479",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "480",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "481",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "482",
                     "name" : "X",
                     "elementType" : {
                        "localId" : "483",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "484",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "470",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "471",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "472",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "473",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "474",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "475",
                        "name" : "X",
                        "elementType" : {
                           "localId" : "476",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "477",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "424",
                  "alias" : "A",
                  "resultTypeSpecifier" : {
                     "localId" : "436",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "437",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "425",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "434",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "435",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "426",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "428",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "430",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  }
               }, {
                  "localId" : "438",
                  "alias" : "X",
                  "resultTypeSpecifier" : {
                     "localId" : "461",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "462",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "463",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "expression" : {
                     "localId" : "439",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "458",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "459",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "460",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "element" : [ {
                        "localId" : "440",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "443",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "444",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "441",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "x",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "445",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "448",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "449",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "446",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "450",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "453",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "454",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "451",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "z",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "466",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "467",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "468",
                           "name" : "A",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "X",
                        "value" : {
                           "localId" : "469",
                           "name" : "X",
                           "type" : "AliasRef"
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
with [Condition] C such that C.id = 'http://cqframework.org/3/2'

define withQuery2:  [Encounter] E
with [Condition] C such that C.id = 'http://cqframework.org/3'

define withOutQuery:  [Encounter] E
without [Condition] C such that C.id = 'http://cqframework.org/3/'

define withOutQuery2:  [Encounter] E
without [Condition] C such that C.id = 'http://cqframework.org/3/2'
*/

module.exports['QueryRelationship'] = {
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
            "r" : "319",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","withQuery",":  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
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
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "235",
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
               "localId" : "245",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "246",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "242",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "243",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "244",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "215",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "222",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "219",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "220",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "239",
                  "alias" : "C",
                  "type" : "With",
                  "resultTypeSpecifier" : {
                     "localId" : "240",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "241",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "225",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "228",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "229",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  },
                  "suchThat" : {
                     "localId" : "232",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "237",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "238",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "234",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","withQuery2",":  " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "s" : [ {
                           "r" : "250",
                           "s" : [ {
                              "r" : "251",
                              "s" : [ {
                                 "r" : "251",
                                 "s" : [ {
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n" ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "with " ]
                        }, {
                           "r" : "259",
                           "s" : [ {
                              "r" : "260",
                              "s" : [ {
                                 "r" : "260",
                                 "s" : [ {
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
                           } ]
                        }, {
                           "value" : [ " such that " ]
                        }, {
                           "r" : "267",
                           "s" : [ {
                              "r" : "269",
                              "s" : [ {
                                 "r" : "268",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "269",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "270",
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
               "localId" : "280",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "281",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "277",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "278",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "279",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "250",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "256",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "257",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "251",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "254",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "255",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "274",
                  "alias" : "C",
                  "type" : "With",
                  "resultTypeSpecifier" : {
                     "localId" : "275",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "276",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "260",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "263",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "264",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  },
                  "suchThat" : {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "273",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "269",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "270",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "284",
            "name" : "withOutQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "284",
                  "s" : [ {
                     "value" : [ "","define ","withOutQuery",":  " ]
                  }, {
                     "r" : "312",
                     "s" : [ {
                        "s" : [ {
                           "r" : "285",
                           "s" : [ {
                              "r" : "286",
                              "s" : [ {
                                 "r" : "286",
                                 "s" : [ {
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n" ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "294",
                           "s" : [ {
                              "r" : "295",
                              "s" : [ {
                                 "r" : "295",
                                 "s" : [ {
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
                           } ]
                        }, {
                           "value" : [ " such that " ]
                        }, {
                           "r" : "302",
                           "s" : [ {
                              "r" : "304",
                              "s" : [ {
                                 "r" : "303",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "304",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "305",
                              "s" : [ {
                                 "value" : [ "'http://cqframework.org/3/'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "315",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "316",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "312",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "313",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "314",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "285",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "291",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "292",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "286",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "289",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "290",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "309",
                  "alias" : "C",
                  "type" : "Without",
                  "resultTypeSpecifier" : {
                     "localId" : "310",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "311",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "295",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "298",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "299",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  },
                  "suchThat" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "307",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "308",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "304",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "305",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "319",
            "name" : "withOutQuery2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "319",
                  "s" : [ {
                     "value" : [ "","define ","withOutQuery2",":  " ]
                  }, {
                     "r" : "347",
                     "s" : [ {
                        "s" : [ {
                           "r" : "320",
                           "s" : [ {
                              "r" : "321",
                              "s" : [ {
                                 "r" : "321",
                                 "s" : [ {
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n" ]
                     }, {
                        "r" : "344",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "329",
                           "s" : [ {
                              "r" : "330",
                              "s" : [ {
                                 "r" : "330",
                                 "s" : [ {
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
                           } ]
                        }, {
                           "value" : [ " such that " ]
                        }, {
                           "r" : "337",
                           "s" : [ {
                              "r" : "339",
                              "s" : [ {
                                 "r" : "338",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "339",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "340",
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
               "localId" : "350",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "351",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "347",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "348",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "349",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "320",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "326",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "327",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "321",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "324",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "325",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "344",
                  "alias" : "C",
                  "type" : "Without",
                  "resultTypeSpecifier" : {
                     "localId" : "345",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "346",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "330",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "333",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "334",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  },
                  "suchThat" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "342",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "343",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "339",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "340",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "214",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","query",":  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ "a",": " ]
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
                                 "value" : [ "E",": " ]
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
                                 "value" : [ "a",":" ]
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
               "localId" : "249",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "250",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "251",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "252",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "253",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "254",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "242",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "243",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "244",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "245",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "246",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "247",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "248",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "215",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "222",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "219",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "220",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "expression" : {
                     "localId" : "225",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "227",
                  "resultTypeSpecifier" : {
                     "localId" : "236",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "237",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "238",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "239",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "240",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "241",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "228",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "231",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "232",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "233",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "234",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "235",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "229",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "a",
                        "value" : {
                           "localId" : "230",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "a",
                           "type" : "QueryLetRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "214",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","query",":  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                                 "value" : [ "id",": " ]
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
                                 "value" : [ "thing",": " ]
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
               "localId" : "248",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "249",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "250",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "251",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "252",
                     "name" : "thing",
                     "elementType" : {
                        "localId" : "253",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "241",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "242",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "243",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "244",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "245",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "246",
                        "name" : "thing",
                        "elementType" : {
                           "localId" : "247",
                           "name" : "{urn:hl7-org:elm-types:r1}Code",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "215",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "222",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "219",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "220",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "235",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "236",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "237",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "238",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "239",
                           "name" : "thing",
                           "elementType" : {
                              "localId" : "240",
                              "name" : "{urn:hl7-org:elm-types:r1}Code",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "225",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "230",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "231",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "232",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "233",
                           "name" : "thing",
                           "elementType" : {
                              "localId" : "234",
                              "name" : "{urn:hl7-org:elm-types:r1}Code",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "227",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "path" : "id",
                           "scope" : "E",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "thing",
                        "value" : {
                           "localId" : "229",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                           "path" : "status",
                           "scope" : "E",
                           "type" : "Property"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "214",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","query",":  " ]
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
                                    "value" : [ "List{","null",", " ]
                                 }, {
                                    "r" : "218",
                                    "s" : [ {
                                       "value" : [ "'One'" ]
                                    } ]
                                 }, {
                                    "r" : "220",
                                    "value" : [ ", ","null",", " ]
                                 }, {
                                    "r" : "221",
                                    "s" : [ {
                                       "value" : [ "'Two'" ]
                                    } ]
                                 }, {
                                    "r" : "223",
                                    "value" : [ ", ","null","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","I" ]
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
               "localId" : "242",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "239",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "240",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "241",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "215",
                  "alias" : "I",
                  "resultTypeSpecifier" : {
                     "localId" : "231",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "229",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "230",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "224",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "217",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     }, {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "One",
                        "type" : "Literal"
                     }, {
                        "localId" : "225",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "220",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     }, {
                        "localId" : "221",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Two",
                        "type" : "Literal"
                     }, {
                        "localId" : "226",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "223",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Not",
                  "signature" : [ {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "IsNull",
                     "signature" : [ {
                        "localId" : "236",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "234",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "I",
                        "type" : "AliasRef"
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
*/

module.exports['Sorting'] = {
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
            "r" : "973",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","QuantityListAsc",": " ]
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
                                       "value" : [ "ToQuantity","(" ]
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
                                       "value" : [ "ToQuantity","(" ]
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
                              "value" : [ " ","S" ]
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
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "252",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "249",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "250",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "215",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "235",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "236",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "233",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "234",
                           "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "ToQuantity",
                        "signature" : [ {
                           "localId" : "223",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "217",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "10 'm'",
                           "type" : "Literal"
                        }
                     }, {
                        "localId" : "229",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "ToQuantity",
                        "signature" : [ {
                           "localId" : "230",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "224",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2 'm'",
                           "type" : "Literal"
                        }
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "238",
                  "resultTypeSpecifier" : {
                     "localId" : "240",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "241",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "242",
                  "by" : [ {
                     "localId" : "243",
                     "direction" : "asc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","QuantityListSort",": " ]
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
                                       "value" : [ "ToQuantity","(" ]
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
                                       "value" : [ "ToQuantity","(" ]
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
                              "value" : [ " ","N" ]
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
                                 "value" : [ "N",": " ]
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
               "localId" : "303",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "304",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "305",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "306",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "298",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "299",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "300",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "301",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "302",
                           "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "257",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "277",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "278",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "258",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "275",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "276",
                           "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "264",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "ToQuantity",
                        "signature" : [ {
                           "localId" : "265",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "259",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "10 'm'",
                           "type" : "Literal"
                        }
                     }, {
                        "localId" : "271",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "ToQuantity",
                        "signature" : [ {
                           "localId" : "272",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "266",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2 'm'",
                           "type" : "Literal"
                        }
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "280",
                  "resultTypeSpecifier" : {
                     "localId" : "286",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "287",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "288",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "289",
                              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "281",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "283",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "284",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "285",
                              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "282",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "292",
                  "by" : [ {
                     "localId" : "291",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "direction" : "asc",
                     "path" : "N",
                     "type" : "ByColumn"
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
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsc",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
               "localId" : "330",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "331",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "327",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "328",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "329",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "310",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "316",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "317",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "311",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "314",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "315",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "by" : [ {
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "asc",
                     "path" : "id",
                     "type" : "ByColumn"
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
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnAsc",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
               "localId" : "359",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "360",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "356",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "357",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "358",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "335",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "341",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "342",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "336",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "339",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "340",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "346",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "347",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "345",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "350",
                  "by" : [ {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "asc",
                     "path" : "id",
                     "type" : "ByColumn"
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
               "s" : {
                  "r" : "363",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnTupleAsc",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                                 "value" : [ "E"," : " ]
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
               "localId" : "397",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "398",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "399",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "400",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "392",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "393",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "394",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "395",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "396",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "364",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "370",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "371",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "365",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "368",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "369",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "379",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "380",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "381",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "382",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "374",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "376",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "377",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "378",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "375",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "386",
                  "by" : [ {
                     "localId" : "385",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "384",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "type" : "Property",
                        "source" : {
                           "localId" : "383",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "IdentifierRef"
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
               "s" : {
                  "r" : "403",
                  "s" : [ {
                     "value" : [ "","define ","TupleDesc",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
               "localId" : "424",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "425",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "421",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "422",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "423",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "404",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "410",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "411",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "405",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "408",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "409",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "by" : [ {
                     "localId" : "414",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "desc",
                     "path" : "id",
                     "type" : "ByColumn"
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
               "s" : {
                  "r" : "428",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnDesc",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
               "localId" : "453",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "454",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "450",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "451",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "452",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "429",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "435",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "436",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "430",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "433",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "434",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "440",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "441",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "439",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "444",
                  "by" : [ {
                     "localId" : "443",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "desc",
                     "path" : "id",
                     "type" : "ByColumn"
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
               "s" : {
                  "r" : "457",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnTupleDesc",":  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                                 "value" : [ "E"," : " ]
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
               "localId" : "491",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "492",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "493",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "494",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "486",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "487",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "488",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "489",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "490",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "458",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "464",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "465",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "459",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "462",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "463",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "473",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "474",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "475",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "476",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "468",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "470",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "471",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "472",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "469",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "480",
                  "by" : [ {
                     "localId" : "479",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "desc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "478",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "type" : "Property",
                        "source" : {
                           "localId" : "477",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "IdentifierRef"
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
               "s" : {
                  "r" : "497",
                  "s" : [ {
                     "value" : [ "","define ","ConditionDates",": " ]
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
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
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
               "localId" : "520",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "521",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "517",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "518",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "519",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "498",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "504",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "505",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "499",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "502",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "503",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "515",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "516",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "514",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "path" : "low",
                     "type" : "Property",
                     "source" : {
                        "localId" : "509",
                        "path" : "period",
                        "scope" : "C",
                        "type" : "Property",
                        "resultTypeSpecifier" : {
                           "localId" : "512",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "513",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "524",
                  "s" : [ {
                     "value" : [ "","define ","lastDateUnsorted",": " ]
                  }, {
                     "r" : "532",
                     "s" : [ {
                        "value" : [ "Last","(" ]
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
               "localId" : "532",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Last",
               "signature" : [ {
                  "localId" : "533",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "534",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "525",
                  "name" : "ConditionDates",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "526",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "527",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "537",
                  "s" : [ {
                     "value" : [ "","define ","lastDateByThis",": " ]
                  }, {
                     "r" : "560",
                     "s" : [ {
                        "value" : [ "Last","(" ]
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
                                 "value" : [ " ","CD" ]
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
               "localId" : "560",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Last",
               "signature" : [ {
                  "localId" : "561",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "562",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "553",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "554",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "555",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "538",
                     "alias" : "CD",
                     "resultTypeSpecifier" : {
                        "localId" : "542",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "543",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "539",
                        "name" : "ConditionDates",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "540",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "541",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "sort" : {
                     "localId" : "547",
                     "by" : [ {
                        "localId" : "546",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "direction" : "asc",
                        "path" : "$this",
                        "type" : "ByColumn"
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
               "s" : {
                  "r" : "565",
                  "s" : [ {
                     "value" : [ "","define ","numberAsc",": " ]
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
                                    "value" : [ "{","8",", ","6",", ","7",", ","5",", ","3",", ","0",", ","9","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "582",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "592",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "593",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "589",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "590",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "591",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "566",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "579",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "580",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "567",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "577",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "578",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "568",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "569",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "570",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "571",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "572",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "573",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "574",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "582",
                  "by" : [ {
                     "localId" : "583",
                     "direction" : "asc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "596",
                  "s" : [ {
                     "value" : [ "","define ","numberReturnAsc",": " ]
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
                                    "value" : [ "{","8",", ","6",", ","7",", ","5",", ","3",", ","0",", ","9","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
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
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "627",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "628",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "624",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "625",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "626",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "597",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "610",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "611",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "598",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "608",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "609",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "599",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "600",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "601",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "602",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "603",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "604",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "605",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "613",
                  "resultTypeSpecifier" : {
                     "localId" : "615",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "616",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "614",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "617",
                  "by" : [ {
                     "localId" : "618",
                     "direction" : "asc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "631",
                  "s" : [ {
                     "value" : [ "","define ","numberDesc",": " ]
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
                                    "value" : [ "{","8",", ","6",", ","7",", ","5",", ","3",", ","0",", ","9","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "648",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "658",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "659",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "655",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "656",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "657",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "632",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "645",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "646",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "633",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "643",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "644",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "634",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "635",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "636",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "637",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "638",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "639",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "640",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "648",
                  "by" : [ {
                     "localId" : "649",
                     "direction" : "desc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "662",
                  "s" : [ {
                     "value" : [ "","define ","numberReturnDesc",": " ]
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
                                    "value" : [ "{","8",", ","6",", ","7",", ","5",", ","3",", ","0",", ","9","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
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
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "693",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "694",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "690",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "691",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "692",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "663",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "676",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "677",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "664",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "674",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "675",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "665",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "666",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "667",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "668",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "669",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "670",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "671",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "679",
                  "resultTypeSpecifier" : {
                     "localId" : "681",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "682",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "680",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "683",
                  "by" : [ {
                     "localId" : "684",
                     "direction" : "desc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "697",
                  "s" : [ {
                     "value" : [ "","define ","stringAsc",": " ]
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
                              "value" : [ " ","S" ]
                           } ]
                        } ]
                     }, {
                        "r" : "717",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "727",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "728",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "724",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "725",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "726",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "698",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "714",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "715",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "699",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "712",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "713",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "700",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "702",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "704",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "706",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "708",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "number",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "717",
                  "by" : [ {
                     "localId" : "718",
                     "direction" : "asc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "731",
                  "s" : [ {
                     "value" : [ "","define ","stringReturnAsc",": " ]
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
                              "value" : [ " ","S" ]
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
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "765",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "766",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "762",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "763",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "764",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "732",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "748",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "749",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "733",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "746",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "747",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "734",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "736",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "738",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "740",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "742",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "number",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "751",
                  "resultTypeSpecifier" : {
                     "localId" : "753",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "754",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "752",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "755",
                  "by" : [ {
                     "localId" : "756",
                     "direction" : "asc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "769",
                  "s" : [ {
                     "value" : [ "","define ","stringDesc",": " ]
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
                              "value" : [ " ","S" ]
                           } ]
                        } ]
                     }, {
                        "r" : "789",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "799",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "800",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "796",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "797",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "798",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "770",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "786",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "787",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "771",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "784",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "785",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "772",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "774",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "776",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "778",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "780",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "number",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "789",
                  "by" : [ {
                     "localId" : "790",
                     "direction" : "desc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "803",
                  "s" : [ {
                     "value" : [ "","define ","stringReturnDesc",": " ]
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
                              "value" : [ " ","S" ]
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
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "837",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "838",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "834",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "835",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "836",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "804",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "820",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "821",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "805",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "818",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "819",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "806",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "808",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "810",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "812",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "814",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "number",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "823",
                  "resultTypeSpecifier" : {
                     "localId" : "825",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "826",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "824",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "827",
                  "by" : [ {
                     "localId" : "828",
                     "direction" : "desc",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "841",
                  "s" : [ {
                     "r" : "842",
                     "value" : [ "","define ","five",": ","5" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "842",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "5",
               "type" : "Literal"
            }
         }, {
            "localId" : "845",
            "name" : "sortByExpression",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "845",
                  "s" : [ {
                     "value" : [ "","define ","sortByExpression",": " ]
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
                                    "value" : [ "{","8",", ","6",", ","7",", ","5",", ","3",", ","0",", ","9","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
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
                                 "value" : [ "N",": " ]
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
               "localId" : "889",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "890",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "891",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "892",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "884",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "885",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "886",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "887",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "888",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "846",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "859",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "860",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "847",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "857",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "858",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "848",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "849",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "850",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "851",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "852",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "853",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "854",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "862",
                  "resultTypeSpecifier" : {
                     "localId" : "868",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "869",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "870",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "871",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "863",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "865",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "866",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "867",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "864",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "878",
                  "by" : [ {
                     "localId" : "877",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "872",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Add",
                        "signature" : [ {
                           "localId" : "875",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "876",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "873",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "five",
                           "type" : "ExpressionRef"
                        }, {
                           "localId" : "874",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "IdentifierRef"
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
               "s" : {
                  "r" : "895",
                  "s" : [ {
                     "value" : [ "","define ","sortByExpressionWithNullResults",": " ]
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
                                    "value" : [ "{","8",", ","null",", ","7","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
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
                                 "value" : [ "N",": " ]
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
               "localId" : "936",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "937",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "938",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "939",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "931",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "932",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "933",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "934",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "935",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "896",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "906",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "907",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "897",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "904",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "905",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "898",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "901",
                        "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "899",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     }, {
                        "localId" : "900",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "909",
                  "resultTypeSpecifier" : {
                     "localId" : "915",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "916",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "917",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "918",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "910",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "912",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "913",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "914",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "911",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "925",
                  "by" : [ {
                     "localId" : "924",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "919",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Add",
                        "signature" : [ {
                           "localId" : "922",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "923",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "920",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "five",
                           "type" : "ExpressionRef"
                        }, {
                           "localId" : "921",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "IdentifierRef"
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
               "s" : {
                  "r" : "942",
                  "s" : [ {
                     "value" : [ "","define ","sortWithAscendingKeyword",": " ]
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
                                    "value" : [ "{","8",", ","6",", ","7",", ","5",", ","3",", ","0",", ","9","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "959",
                        "value" : [ " ","sort ascending" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "969",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "970",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "966",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "967",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "968",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "943",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "956",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "957",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "944",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "954",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "955",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "945",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "946",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "947",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "948",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "949",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "950",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "951",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "959",
                  "by" : [ {
                     "localId" : "960",
                     "direction" : "ascending",
                     "type" : "ByDirection"
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
               "s" : {
                  "r" : "973",
                  "s" : [ {
                     "value" : [ "","define ","sortWithDescendingKeyword",": " ]
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
                                    "value" : [ "{","8",", ","6",", ","7",", ","5",", ","3",", ","0",", ","9","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
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
                        "value" : [ " ","sort descending" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "1004",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "1005",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "1001",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "1002",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "1003",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "974",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "987",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "988",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "975",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "985",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "986",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "976",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "977",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "978",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "979",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "980",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "981",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "982",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "990",
                  "resultTypeSpecifier" : {
                     "localId" : "992",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "993",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "991",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "994",
                  "by" : [ {
                     "localId" : "995",
                     "direction" : "descending",
                     "type" : "ByDirection"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "560",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","defaultNumbers",": " ]
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
                                    "value" : [ "{","1",", ","2",", ","2",", ","3",", ","3",", ","3",", ","4",", ","4",", ","4",", ","4",", ","3",", ","3",", ","3",", ","2",", ","2",", ","1","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
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
               "localId" : "247",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "244",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "245",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "246",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "215",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "237",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "238",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "235",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "236",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "219",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "220",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "221",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "223",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "224",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "225",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "226",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "227",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "228",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "229",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "230",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "231",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "232",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "240",
                  "resultTypeSpecifier" : {
                     "localId" : "242",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "243",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
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
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","defaultStrings",": " ]
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
                              "value" : [ " ","S" ]
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
               "localId" : "276",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "277",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "273",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "274",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "275",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "252",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "266",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "267",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "253",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "264",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "265",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "254",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "256",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "258",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "260",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "269",
                  "resultTypeSpecifier" : {
                     "localId" : "271",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
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
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","defaultTuples",": " ]
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
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "285",
                                          "value" : [ "b",":","2" ]
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
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "293",
                                          "value" : [ "b",": ","3" ]
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
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "301",
                                          "value" : [ "b",": ","2" ]
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
                              "value" : [ " ","T" ]
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
               "localId" : "346",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "347",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "348",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "349",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "350",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "351",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "339",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "340",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "341",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "342",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "343",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "344",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "345",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "281",
                  "alias" : "T",
                  "resultTypeSpecifier" : {
                     "localId" : "319",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "320",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "321",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "322",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "323",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "324",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "282",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "313",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "314",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "315",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "316",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "317",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "318",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "element" : [ {
                        "localId" : "283",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "286",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "287",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "288",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "289",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "290",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "284",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "285",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "291",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "294",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "295",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "296",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "297",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "298",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "292",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "293",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "299",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "302",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "303",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "304",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "305",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "306",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "300",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "301",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "326",
                  "resultTypeSpecifier" : {
                     "localId" : "333",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "334",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "335",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "336",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "337",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "338",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "327",
                     "name" : "T",
                     "type" : "AliasRef",
                     "resultTypeSpecifier" : {
                        "localId" : "328",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "329",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "330",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "331",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "332",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "354",
                  "s" : [ {
                     "value" : [ "","define ","distinctNumbers",": " ]
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
                                    "value" : [ "{","1",", ","2",", ","2",", ","3",", ","3",", ","3",", ","4",", ","4",", ","4",", ","4",", ","3",", ","3",", ","3",", ","2",", ","2",", ","1","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
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
               "localId" : "387",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "388",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "384",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "385",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "355",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "377",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "378",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "356",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "375",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "376",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "357",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "358",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "359",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "360",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "361",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "362",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "363",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "364",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "365",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "366",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "367",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "368",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "369",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "370",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "371",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "372",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "380",
                  "distinct" : true,
                  "resultTypeSpecifier" : {
                     "localId" : "382",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "383",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "381",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
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
               "s" : {
                  "r" : "391",
                  "s" : [ {
                     "value" : [ "","define ","distinctStrings",": " ]
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
                              "value" : [ " ","S" ]
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
               "localId" : "416",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "417",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "413",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "414",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "415",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "392",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "406",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "407",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "393",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "404",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "405",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "394",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "396",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "398",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "400",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "409",
                  "distinct" : true,
                  "resultTypeSpecifier" : {
                     "localId" : "411",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "412",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "410",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
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
               "s" : {
                  "r" : "420",
                  "s" : [ {
                     "value" : [ "","define ","distinctTuples",": " ]
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
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "425",
                                          "value" : [ "b",":","2" ]
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
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "433",
                                          "value" : [ "b",": ","3" ]
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
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "441",
                                          "value" : [ "b",": ","2" ]
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
                              "value" : [ " ","T" ]
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
               "localId" : "486",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "487",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "488",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "489",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "490",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "491",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "479",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "480",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "481",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "482",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "483",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "484",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "485",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "421",
                  "alias" : "T",
                  "resultTypeSpecifier" : {
                     "localId" : "459",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "460",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "461",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "462",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "463",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "464",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "422",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "453",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "454",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "455",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "456",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "457",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "458",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "element" : [ {
                        "localId" : "423",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "426",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "427",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "428",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "429",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "430",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "424",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "425",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "431",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "434",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "435",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "436",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "437",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "438",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "432",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "433",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "439",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "442",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "443",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "444",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "445",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "446",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "440",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "441",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
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
                  "resultTypeSpecifier" : {
                     "localId" : "473",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "474",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "475",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "476",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "477",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "478",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "467",
                     "name" : "T",
                     "type" : "AliasRef",
                     "resultTypeSpecifier" : {
                        "localId" : "468",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "469",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "470",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "471",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "472",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "494",
                  "s" : [ {
                     "value" : [ "","define ","allNumbers",": " ]
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
                                    "value" : [ "{","1",", ","2",", ","2",", ","3",", ","3",", ","3",", ","4",", ","4",", ","4",", ","4",", ","3",", ","3",", ","3",", ","2",", ","2",", ","1","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
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
               "localId" : "527",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "528",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "524",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "525",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "526",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "495",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "517",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "518",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "496",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "515",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "516",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "497",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "498",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "499",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "500",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "501",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "502",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "503",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "504",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "505",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "506",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "507",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "508",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "509",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "510",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "511",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "512",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "520",
                  "distinct" : false,
                  "resultTypeSpecifier" : {
                     "localId" : "522",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "523",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "521",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
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
               "s" : {
                  "r" : "531",
                  "s" : [ {
                     "value" : [ "","define ","allStrings",": " ]
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
                              "value" : [ " ","S" ]
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
               "localId" : "556",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "557",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "553",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "554",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "555",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "532",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "546",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "547",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "533",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "544",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "545",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "534",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "536",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "538",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "540",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "549",
                  "distinct" : false,
                  "resultTypeSpecifier" : {
                     "localId" : "551",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "552",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "550",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
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
               "s" : {
                  "r" : "560",
                  "s" : [ {
                     "value" : [ "","define ","allTuples",": " ]
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
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "565",
                                          "value" : [ "b",":","2" ]
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
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "573",
                                          "value" : [ "b",": ","3" ]
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
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "581",
                                          "value" : [ "b",": ","2" ]
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
                              "value" : [ " ","T" ]
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
               "localId" : "626",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "627",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "628",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "629",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "630",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "631",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "619",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "620",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "621",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "622",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "623",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "624",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "625",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "561",
                  "alias" : "T",
                  "resultTypeSpecifier" : {
                     "localId" : "599",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "600",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "601",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "602",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "603",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "604",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "562",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "593",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "594",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "595",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "596",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "597",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "598",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "element" : [ {
                        "localId" : "563",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "566",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "567",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "568",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "569",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "570",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "564",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "565",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "571",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "574",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "575",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "576",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "577",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "578",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "572",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "573",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "579",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "582",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "583",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "584",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "585",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "586",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "580",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "581",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
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
                  "resultTypeSpecifier" : {
                     "localId" : "613",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "614",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "615",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "616",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "617",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "618",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "607",
                     "name" : "T",
                     "type" : "AliasRef",
                     "resultTypeSpecifier" : {
                        "localId" : "608",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "609",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "610",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "611",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "612",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "536",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","encounters",": " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "227",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "228",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "224",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "225",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "226",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "215",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "222",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "219",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "220",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","conditions",": " ]
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
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "244",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "245",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "241",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "242",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "243",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "232",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "238",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "239",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "233",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "236",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "237",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","firstEncounter",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "First","(" ]
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
                                       "value" : [ "[","Encounter","]" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " ","E" ]
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
               "localId" : "265",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "First",
               "signature" : [ {
                  "localId" : "266",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "267",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "258",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "259",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "260",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "249",
                     "alias" : "E",
                     "resultTypeSpecifier" : {
                        "localId" : "255",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "256",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "250",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "253",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "254",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","firstCondition",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "value" : [ "First","(" ]
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
                                       "value" : [ "[","Condition","]" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " ","C" ]
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
                                 "value" : [ " ","="," " ]
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
               "localId" : "294",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "type" : "First",
               "signature" : [ {
                  "localId" : "295",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "296",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "287",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "288",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "289",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "271",
                     "alias" : "C",
                     "resultTypeSpecifier" : {
                        "localId" : "277",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "278",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "272",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "275",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "276",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
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
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "285",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "286",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "282",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "283",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","singleAlias",": " ]
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
                              "value" : [ " ","E" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "303",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Query",
               "source" : [ {
                  "localId" : "300",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "301",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "306",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWhere",": " ]
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
                              "value" : [ " ","E" ]
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
               "localId" : "315",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Query",
               "source" : [ {
                  "localId" : "307",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "308",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Not",
                  "signature" : [ {
                     "localId" : "314",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "IsNull",
                     "signature" : [ {
                        "localId" : "312",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "310",
                        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "name" : "E",
                        "type" : "AliasRef"
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
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWhereToNull",": " ]
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
                              "value" : [ "  ","E" ]
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
               "localId" : "330",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Query",
               "source" : [ {
                  "localId" : "319",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "320",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "328",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "IsNull",
                  "signature" : [ {
                     "localId" : "329",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "323",
                     "path" : "period",
                     "scope" : "E",
                     "type" : "Property",
                     "resultTypeSpecifier" : {
                        "localId" : "326",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "327",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","singleAliases",": " ]
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
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","C" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "350",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "351",
                  "name" : "E",
                  "elementType" : {
                     "localId" : "352",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "353",
                  "name" : "C",
                  "elementType" : {
                     "localId" : "354",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "344",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "345",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "346",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "347",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "348",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "349",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "source" : [ {
                  "localId" : "334",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "335",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "336",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "337",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "340",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "341",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "342",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "343",
                           "name" : "C",
                           "type" : "AliasRef"
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
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasesAndList",": " ]
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
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","C" ]
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
                              "value" : [ " ","Con" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "385",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "386",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "387",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "388",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "389",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "390",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "391",
                     "name" : "Con",
                     "elementType" : {
                        "localId" : "392",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "376",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "377",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "378",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "379",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "380",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "381",
                        "name" : "C",
                        "elementType" : {
                           "localId" : "382",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "383",
                        "name" : "Con",
                        "elementType" : {
                           "localId" : "384",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "358",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "359",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "360",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "361",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "362",
                  "alias" : "Con",
                  "resultTypeSpecifier" : {
                     "localId" : "366",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "367",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "363",
                     "name" : "conditions",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "364",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "365",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "371",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "372",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "373",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "374",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "Con",
                        "value" : {
                           "localId" : "375",
                           "name" : "Con",
                           "type" : "AliasRef"
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
               "s" : {
                  "r" : "395",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWith",":  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","C" ]
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
                              "value" : [ " ","="," " ]
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
               "localId" : "418",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "419",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "415",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "416",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "417",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "396",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "402",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "403",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "397",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "400",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "401",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "414",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "type" : "With",
                  "expression" : {
                     "localId" : "406",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "407",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "412",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "413",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "409",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "410",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "422",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithOut",":  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","C" ]
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
                              "value" : [ " ","="," " ]
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
               "localId" : "445",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "446",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "442",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "443",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "444",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "423",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "429",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "430",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "424",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "427",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "428",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "441",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "type" : "Without",
                  "expression" : {
                     "localId" : "433",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "434",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "439",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "440",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "436",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "437",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "449",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithEmpty",":  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","C" ]
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
                              "value" : [ " ","="," " ]
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
               "localId" : "472",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "473",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "469",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "470",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "471",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "450",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "456",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "457",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "451",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "454",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "455",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "468",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "type" : "With",
                  "expression" : {
                     "localId" : "460",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "461",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "466",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "467",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "463",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "464",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "476",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithOutEmpty",":  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","E" ]
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
                              "value" : [ " ","C" ]
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
                              "value" : [ " ","="," " ]
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
               "localId" : "499",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "500",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "496",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "497",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "498",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "477",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "483",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "484",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "478",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "481",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "482",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "localId" : "495",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "type" : "Without",
                  "expression" : {
                     "localId" : "487",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "488",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "493",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "494",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "490",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "491",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "503",
                  "s" : [ {
                     "r" : "504",
                     "value" : [ "","define ","asNull",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "504",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Null"
            }
         }, {
            "localId" : "507",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "nullQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "507",
                  "s" : [ {
                     "value" : [ "","define ","nullQuery",": " ]
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
                              "value" : [ " ","N" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "511",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Query",
               "source" : [ {
                  "localId" : "508",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "509",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "name" : "asNull",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "//define singleAliasWith: firstEncounter E with [Condition] C\n//                         such that C.id = 'http://cqframework.org/3/2'\n//define singleAliasWithNull: firstEncounter E with conditions C\n//                        such that C.id is null\n","define ","singleAliasReturnTuple",": " ]
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
                              "value" : [ " ","E" ]
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
                                 "value" : [ "a",":","1" ]
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
               "localId" : "531",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "532",
                  "name" : "a",
                  "elementType" : {
                     "localId" : "533",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "527",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "528",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "529",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "530",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "source" : [ {
                  "localId" : "515",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "516",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "518",
                  "resultTypeSpecifier" : {
                     "localId" : "524",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "525",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "526",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "expression" : {
                     "localId" : "519",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "521",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "522",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "523",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "520",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
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
               "s" : {
                  "r" : "536",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasReturnList",": " ]
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
                              "value" : [ " ","E" ]
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
               "localId" : "557",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "558",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "554",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "555",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "556",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "537",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "538",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "540",
                  "resultTypeSpecifier" : {
                     "localId" : "552",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "553",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "541",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "550",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "551",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "542",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "544",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "546",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "548",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "514",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","noStartingAggregation",":\n " ]
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
                                    "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","R" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n    " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "aggregate ","T"," : " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "r" : "239",
                              "s" : [ {
                                 "value" : [ "Coalesce","(" ]
                              }, {
                                 "r" : "233",
                                 "s" : [ {
                                    "value" : [ "T" ]
                                 } ]
                              }, {
                                 "r" : "234",
                                 "value" : [ ", ","1",")" ]
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
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Query",
               "source" : [ {
                  "localId" : "215",
                  "alias" : "R",
                  "resultTypeSpecifier" : {
                     "localId" : "226",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "227",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "224",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "225",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "219",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "220",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "221",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "aggregate" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "identifier" : "T",
                  "expression" : {
                     "localId" : "232",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Multiply",
                     "signature" : [ {
                        "localId" : "244",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "245",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "243",
                        "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "239",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Coalesce",
                           "signature" : [ {
                              "localId" : "240",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "241",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           } ],
                           "operand" : [ {
                              "localId" : "233",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "name" : "T",
                              "type" : "QueryLetRef"
                           }, {
                              "localId" : "234",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           } ]
                        }
                     }, {
                        "localId" : "242",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "R",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","encounterPeriods",":\n  " ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","e" ]
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
               "localId" : "273",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "274",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "275",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            },
            "expression" : {
               "localId" : "269",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "270",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "271",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "source" : [ {
                  "localId" : "250",
                  "alias" : "e",
                  "resultTypeSpecifier" : {
                     "localId" : "256",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "257",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "251",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "254",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "255",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "266",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "267",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "268",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "expression" : {
                     "localId" : "261",
                     "path" : "period",
                     "scope" : "e",
                     "type" : "Property",
                     "resultTypeSpecifier" : {
                        "localId" : "264",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "265",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","expressionStartingAggregation",":\n  " ]
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
                              "value" : [ " ","M" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n    " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "aggregate ","R"," " ]
                        }, {
                           "r" : "289",
                           "s" : [ {
                              "value" : [ "starting (" ]
                           }, {
                              "r" : "289",
                              "s" : [ {
                                 "r" : "290",
                                 "value" : [ "List{}"," as " ]
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
                                             "value" : [ " ","X" ]
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
                                             "value" : [ "S",": " ]
                                          }, {
                                             "r" : "366",
                                             "s" : [ {
                                                "value" : [ "Max","(" ]
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
                                                            "value" : [ "Last","(" ]
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
                                                         "value" : [ "1 ","day" ]
                                                      } ]
                                                   } ]
                                                }, {
                                                   "value" : [ ", " ]
                                                }, {
                                                   "r" : "356",
                                                   "s" : [ {
                                                      "r" : "348",
                                                      "value" : [ "DateTime","(","1970",",","01",",","01",")" ]
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
                                             "value" : [ "E",": " ]
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
               "localId" : "412",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "413",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "414",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            },
            "expression" : {
               "localId" : "408",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "409",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "410",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "411",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "source" : [ {
                  "localId" : "279",
                  "alias" : "M",
                  "resultTypeSpecifier" : {
                     "localId" : "284",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "285",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "286",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "expression" : {
                     "localId" : "280",
                     "name" : "encounterPeriods",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "281",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "282",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "283",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "405",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "406",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "407",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "expression" : {
                     "localId" : "395",
                     "type" : "Union",
                     "resultTypeSpecifier" : {
                        "localId" : "402",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "403",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "404",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "signature" : [ {
                        "localId" : "396",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "397",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "398",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }, {
                        "localId" : "399",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "400",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "401",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     } ],
                     "operand" : [ {
                        "localId" : "312",
                        "name" : "R",
                        "type" : "QueryLetRef",
                        "resultTypeSpecifier" : {
                           "localId" : "313",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "314",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "315",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     }, {
                        "localId" : "316",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "392",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "393",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "394",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        },
                        "element" : [ {
                           "localId" : "386",
                           "type" : "Query",
                           "resultTypeSpecifier" : {
                              "localId" : "387",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "388",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           },
                           "source" : [ {
                              "localId" : "317",
                              "alias" : "X",
                              "resultTypeSpecifier" : {
                                 "localId" : "321",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "322",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              },
                              "expression" : {
                                 "localId" : "318",
                                 "name" : "M",
                                 "type" : "AliasRef",
                                 "resultTypeSpecifier" : {
                                    "localId" : "319",
                                    "type" : "IntervalTypeSpecifier",
                                    "pointType" : {
                                       "localId" : "320",
                                       "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              }
                           } ],
                           "let" : [ {
                              "localId" : "324",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "identifier" : "S",
                              "expression" : {
                                 "localId" : "366",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "Max",
                                 "signature" : [ {
                                    "localId" : "367",
                                    "type" : "ListTypeSpecifier",
                                    "elementType" : {
                                       "localId" : "368",
                                       "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ],
                                 "source" : {
                                    "localId" : "325",
                                    "type" : "List",
                                    "resultTypeSpecifier" : {
                                       "localId" : "360",
                                       "type" : "ListTypeSpecifier",
                                       "elementType" : {
                                          "localId" : "361",
                                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                          "type" : "NamedTypeSpecifier"
                                       }
                                    },
                                    "element" : [ {
                                       "localId" : "326",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "Add",
                                       "signature" : [ {
                                          "localId" : "346",
                                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "347",
                                          "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                                          "type" : "NamedTypeSpecifier"
                                       } ],
                                       "operand" : [ {
                                          "localId" : "327",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                          "type" : "End",
                                          "signature" : [ {
                                             "localId" : "343",
                                             "type" : "IntervalTypeSpecifier",
                                             "pointType" : {
                                                "localId" : "344",
                                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                                "type" : "NamedTypeSpecifier"
                                             }
                                          } ],
                                          "operand" : {
                                             "localId" : "337",
                                             "type" : "Last",
                                             "resultTypeSpecifier" : {
                                                "localId" : "341",
                                                "type" : "IntervalTypeSpecifier",
                                                "pointType" : {
                                                   "localId" : "342",
                                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                                   "type" : "NamedTypeSpecifier"
                                                }
                                             },
                                             "signature" : [ {
                                                "localId" : "338",
                                                "type" : "ListTypeSpecifier",
                                                "elementType" : {
                                                   "localId" : "339",
                                                   "type" : "IntervalTypeSpecifier",
                                                   "pointType" : {
                                                      "localId" : "340",
                                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                                      "type" : "NamedTypeSpecifier"
                                                   }
                                                }
                                             } ],
                                             "source" : {
                                                "localId" : "328",
                                                "name" : "R",
                                                "type" : "QueryLetRef",
                                                "resultTypeSpecifier" : {
                                                   "localId" : "329",
                                                   "type" : "ListTypeSpecifier",
                                                   "elementType" : {
                                                      "localId" : "330",
                                                      "type" : "IntervalTypeSpecifier",
                                                      "pointType" : {
                                                         "localId" : "331",
                                                         "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                                         "type" : "NamedTypeSpecifier"
                                                      }
                                                   }
                                                }
                                             }
                                          }
                                       }, {
                                          "localId" : "345",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                                          "value" : 1,
                                          "unit" : "day",
                                          "type" : "Quantity"
                                       } ]
                                    }, {
                                       "localId" : "356",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "DateTime",
                                       "signature" : [ {
                                          "localId" : "357",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "358",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "359",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       } ],
                                       "year" : {
                                          "localId" : "348",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "1970",
                                          "type" : "Literal"
                                       },
                                       "month" : {
                                          "localId" : "349",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "01",
                                          "type" : "Literal"
                                       },
                                       "day" : {
                                          "localId" : "350",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "01",
                                          "type" : "Literal"
                                       }
                                    } ]
                                 }
                              }
                           }, {
                              "localId" : "369",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "identifier" : "E",
                              "expression" : {
                                 "localId" : "370",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "Start",
                                 "signature" : [ {
                                    "localId" : "374",
                                    "type" : "IntervalTypeSpecifier",
                                    "pointType" : {
                                       "localId" : "375",
                                       "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ],
                                 "operand" : {
                                    "localId" : "371",
                                    "name" : "X",
                                    "type" : "AliasRef",
                                    "resultTypeSpecifier" : {
                                       "localId" : "372",
                                       "type" : "IntervalTypeSpecifier",
                                       "pointType" : {
                                          "localId" : "373",
                                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                          "type" : "NamedTypeSpecifier"
                                       }
                                    }
                                 }
                              }
                           } ],
                           "relationship" : [ ],
                           "return" : {
                              "localId" : "378",
                              "resultTypeSpecifier" : {
                                 "localId" : "384",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "385",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              },
                              "expression" : {
                                 "localId" : "381",
                                 "lowClosed" : true,
                                 "highClosed" : true,
                                 "type" : "Interval",
                                 "resultTypeSpecifier" : {
                                    "localId" : "382",
                                    "type" : "IntervalTypeSpecifier",
                                    "pointType" : {
                                       "localId" : "383",
                                       "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 },
                                 "low" : {
                                    "localId" : "379",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "name" : "S",
                                    "type" : "QueryLetRef"
                                 },
                                 "high" : {
                                    "localId" : "380",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "name" : "E",
                                    "type" : "QueryLetRef"
                                 }
                              }
                           }
                        } ]
                     } ]
                  },
                  "starting" : {
                     "localId" : "289",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "304",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "305",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "306",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "290",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "291",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "292",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ ]
                     },
                     "asTypeSpecifier" : {
                        "localId" : "293",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "298",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "299",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "300",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        },
                        "elementType" : {
                           "localId" : "294",
                           "type" : "IntervalTypeSpecifier",
                           "resultTypeSpecifier" : {
                              "localId" : "296",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "297",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           },
                           "pointType" : {
                              "localId" : "295",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "417",
                  "s" : [ {
                     "value" : [ "","define ","literalStartingAggregation",":\n  " ]
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
                                    "value" : [ "{","1",",","2",",","3",",","4",",","5",",","1",",","2",",","3",",","4",",","5","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","Num" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n    " ]
                     }, {
                        "r" : "437",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","str"," " ]
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
                                 "value" : [ "ToString","(" ]
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
               "localId" : "452",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Query",
               "source" : [ {
                  "localId" : "418",
                  "alias" : "Num",
                  "resultTypeSpecifier" : {
                     "localId" : "434",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "435",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "419",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "432",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "433",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "420",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "421",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "422",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "423",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "424",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "425",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "426",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "427",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "428",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "429",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
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
                  "expression" : {
                     "localId" : "451",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "442",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "str",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "447",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "ToString",
                        "signature" : [ {
                           "localId" : "448",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "443",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "Num",
                           "type" : "AliasRef"
                        }
                     } ]
                  },
                  "starting" : {
                     "localId" : "438",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Start",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "455",
                  "s" : [ {
                     "value" : [ "","define ","quantityStartingAggregation",":\n " ]
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
                                       "value" : [ "1 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "459",
                                    "s" : [ {
                                       "value" : [ "2 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "460",
                                    "s" : [ {
                                       "value" : [ "3 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "461",
                                    "s" : [ {
                                       "value" : [ "4 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "462",
                                    "s" : [ {
                                       "value" : [ "5 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","Num" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n  " ]
                     }, {
                        "r" : "470",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","Sum"," " ]
                        }, {
                           "r" : "471",
                           "s" : [ {
                              "value" : [ "starting " ]
                           }, {
                              "r" : "471",
                              "s" : [ {
                                 "value" : [ "0 ","'ml'" ]
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
               "localId" : "479",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Query",
               "source" : [ {
                  "localId" : "456",
                  "alias" : "Num",
                  "resultTypeSpecifier" : {
                     "localId" : "467",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "468",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "457",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "465",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "466",
                           "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "458",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 1,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "459",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 2,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "460",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 3,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "461",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 4,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "462",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 5,
                        "unit" : "ml",
                        "type" : "Quantity"
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
                  "expression" : {
                     "localId" : "474",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "477",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "478",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "475",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "476",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "471",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
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
               "s" : {
                  "r" : "482",
                  "s" : [ {
                     "value" : [ "","define ","allAggregation",":\n " ]
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
                                    "value" : [ "{","1",",","2",",","3",",","4",",","5",",","1",",","2",",","3",",","4",",","5","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","Num" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n  " ]
                     }, {
                        "r" : "502",
                        "s" : [ {
                           "value" : [ "aggregate all ","Sum"," " ]
                        }, {
                           "r" : "503",
                           "s" : [ {
                              "r" : "503",
                              "value" : [ "starting ","0" ]
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
               "localId" : "511",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Query",
               "source" : [ {
                  "localId" : "483",
                  "alias" : "Num",
                  "resultTypeSpecifier" : {
                     "localId" : "499",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "500",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "484",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "497",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "498",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "485",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "486",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "487",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "488",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "489",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "490",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "491",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "492",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "493",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "494",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
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
                  "expression" : {
                     "localId" : "506",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "509",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "510",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "507",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "508",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "503",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","distinctAggregation",":\n " ]
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
                                    "value" : [ "{","1",",","2",",","3",",","4",",","5",",","1",",","2",",","3",",","4",",","5","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","Num" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n  " ]
                     }, {
                        "r" : "534",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","Sum"," " ]
                        }, {
                           "r" : "535",
                           "s" : [ {
                              "r" : "535",
                              "value" : [ "starting ","0" ]
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
               "localId" : "543",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Query",
               "source" : [ {
                  "localId" : "515",
                  "alias" : "Num",
                  "resultTypeSpecifier" : {
                     "localId" : "531",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "532",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "516",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "529",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "530",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "517",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "518",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "519",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "520",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "521",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "522",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "523",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "524",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "525",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "526",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
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
                  "expression" : {
                     "localId" : "538",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "541",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "542",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "539",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "540",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "535",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "433",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NullListQuery",":\n  " ]
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
                                    "value" : [ "null"," as " ]
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
                              "value" : [ " ","X" ]
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
                                 "value" : [ "start",": " ]
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
                                 "value" : [ "end",": " ]
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
               "localId" : "267",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "268",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "269",
                     "name" : "start",
                     "elementType" : {
                        "localId" : "270",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "271",
                     "name" : "end",
                     "elementType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "260",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "261",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "262",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "263",
                        "name" : "start",
                        "elementType" : {
                           "localId" : "264",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "265",
                        "name" : "end",
                        "elementType" : {
                           "localId" : "266",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "215",
                  "alias" : "X",
                  "resultTypeSpecifier" : {
                     "localId" : "226",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "227",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "216",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "224",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "225",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "218",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "220",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "221",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "elementType" : {
                           "localId" : "219",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "229",
                  "resultTypeSpecifier" : {
                     "localId" : "254",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "255",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "256",
                           "name" : "start",
                           "elementType" : {
                              "localId" : "257",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "258",
                           "name" : "end",
                           "elementType" : {
                              "localId" : "259",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "230",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "249",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "250",
                           "name" : "start",
                           "elementType" : {
                              "localId" : "251",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "252",
                           "name" : "end",
                           "elementType" : {
                              "localId" : "253",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "start",
                        "value" : {
                           "localId" : "231",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "238",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "239",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "233",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "236",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "237",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "end",
                        "value" : {
                           "localId" : "240",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
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
                              "localId" : "242",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
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
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","NullObjectQuery",":\n  " ]
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
                                    "value" : [ "null"," as " ]
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
                              "value" : [ " ","X" ]
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
                                 "value" : [ "start",": " ]
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
                                 "value" : [ "end",": " ]
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
               "localId" : "317",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "318",
                  "name" : "start",
                  "elementType" : {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "320",
                  "name" : "end",
                  "elementType" : {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "311",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "312",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "313",
                     "name" : "start",
                     "elementType" : {
                        "localId" : "314",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "315",
                     "name" : "end",
                     "elementType" : {
                        "localId" : "316",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "source" : [ {
                  "localId" : "276",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "X",
                  "expression" : {
                     "localId" : "277",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "278",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "279",
                        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "281",
                  "resultTypeSpecifier" : {
                     "localId" : "306",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "307",
                        "name" : "start",
                        "elementType" : {
                           "localId" : "308",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "309",
                        "name" : "end",
                        "elementType" : {
                           "localId" : "310",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "expression" : {
                     "localId" : "282",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "301",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "302",
                           "name" : "start",
                           "elementType" : {
                              "localId" : "303",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "304",
                           "name" : "end",
                           "elementType" : {
                              "localId" : "305",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "start",
                        "value" : {
                           "localId" : "283",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "290",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "291",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "285",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "288",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "289",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "end",
                        "value" : {
                           "localId" : "292",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "299",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "300",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "294",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "297",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "298",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "324",
                  "s" : [ {
                     "value" : [ "","define ","AllNullMultiSourceQuery",":\n  " ]
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
                                    "value" : [ "null"," as " ]
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
                              "value" : [ " ","X" ]
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
                                    "value" : [ "null"," as " ]
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
                              "value" : [ " ","Y" ]
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
                                 "value" : [ "cStart",": " ]
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
                                 "value" : [ "cEnd",": " ]
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
                                 "value" : [ "eStart",": " ]
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
                                 "value" : [ "eEnd",": " ]
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
               "localId" : "421",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "422",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "423",
                     "name" : "cStart",
                     "elementType" : {
                        "localId" : "424",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "425",
                     "name" : "cEnd",
                     "elementType" : {
                        "localId" : "426",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "427",
                     "name" : "eStart",
                     "elementType" : {
                        "localId" : "428",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "429",
                     "name" : "eEnd",
                     "elementType" : {
                        "localId" : "430",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "410",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "411",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "412",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "413",
                        "name" : "cStart",
                        "elementType" : {
                           "localId" : "414",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "415",
                        "name" : "cEnd",
                        "elementType" : {
                           "localId" : "416",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "417",
                        "name" : "eStart",
                        "elementType" : {
                           "localId" : "418",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "419",
                        "name" : "eEnd",
                        "elementType" : {
                           "localId" : "420",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "325",
                  "alias" : "X",
                  "resultTypeSpecifier" : {
                     "localId" : "336",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "337",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "326",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "334",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "335",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "327",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "328",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "330",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "331",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "elementType" : {
                           "localId" : "329",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "localId" : "338",
                  "alias" : "Y",
                  "resultTypeSpecifier" : {
                     "localId" : "349",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "350",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "339",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "347",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "348",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "340",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "341",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "343",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "344",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "elementType" : {
                           "localId" : "342",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "353",
                  "resultTypeSpecifier" : {
                     "localId" : "400",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "401",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "402",
                           "name" : "cStart",
                           "elementType" : {
                              "localId" : "403",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "404",
                           "name" : "cEnd",
                           "elementType" : {
                              "localId" : "405",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "406",
                           "name" : "eStart",
                           "elementType" : {
                              "localId" : "407",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "408",
                           "name" : "eEnd",
                           "elementType" : {
                              "localId" : "409",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "354",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "391",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "392",
                           "name" : "cStart",
                           "elementType" : {
                              "localId" : "393",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "394",
                           "name" : "cEnd",
                           "elementType" : {
                              "localId" : "395",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "396",
                           "name" : "eStart",
                           "elementType" : {
                              "localId" : "397",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "398",
                           "name" : "eEnd",
                           "elementType" : {
                              "localId" : "399",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "cStart",
                        "value" : {
                           "localId" : "355",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "362",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "363",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "357",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "360",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "361",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "cEnd",
                        "value" : {
                           "localId" : "364",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "371",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "372",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "366",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "369",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "370",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "eStart",
                        "value" : {
                           "localId" : "373",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "380",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "381",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "375",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "378",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "379",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "eEnd",
                        "value" : {
                           "localId" : "382",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "389",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "390",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "384",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "387",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "388",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "433",
                  "s" : [ {
                     "value" : [ "","define ","SomeNullMultiSourceQuery",":\n  " ]
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
                                    "value" : [ "null"," as " ]
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
                              "value" : [ " ","X" ]
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
                                    "value" : [ "[","Encounter","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","Y" ]
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
                                 "value" : [ "cStart",": " ]
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
                                 "value" : [ "cEnd",": " ]
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
                                 "value" : [ "eStart",": " ]
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
                                 "value" : [ "eEnd",": " ]
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
               "localId" : "525",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "526",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "527",
                     "name" : "cStart",
                     "elementType" : {
                        "localId" : "528",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "529",
                     "name" : "cEnd",
                     "elementType" : {
                        "localId" : "530",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "531",
                     "name" : "eStart",
                     "elementType" : {
                        "localId" : "532",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "533",
                     "name" : "eEnd",
                     "elementType" : {
                        "localId" : "534",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "514",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "515",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "516",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "517",
                        "name" : "cStart",
                        "elementType" : {
                           "localId" : "518",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "519",
                        "name" : "cEnd",
                        "elementType" : {
                           "localId" : "520",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "521",
                        "name" : "eStart",
                        "elementType" : {
                           "localId" : "522",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "523",
                        "name" : "eEnd",
                        "elementType" : {
                           "localId" : "524",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "434",
                  "alias" : "X",
                  "resultTypeSpecifier" : {
                     "localId" : "445",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "446",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "435",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "443",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "444",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "436",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "437",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "439",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "440",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "elementType" : {
                           "localId" : "438",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "localId" : "447",
                  "alias" : "Y",
                  "resultTypeSpecifier" : {
                     "localId" : "453",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "454",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "448",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "451",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "452",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
                  "resultTypeSpecifier" : {
                     "localId" : "504",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "505",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "506",
                           "name" : "cStart",
                           "elementType" : {
                              "localId" : "507",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "508",
                           "name" : "cEnd",
                           "elementType" : {
                              "localId" : "509",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "510",
                           "name" : "eStart",
                           "elementType" : {
                              "localId" : "511",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "512",
                           "name" : "eEnd",
                           "elementType" : {
                              "localId" : "513",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "458",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "495",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "496",
                           "name" : "cStart",
                           "elementType" : {
                              "localId" : "497",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "498",
                           "name" : "cEnd",
                           "elementType" : {
                              "localId" : "499",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "500",
                           "name" : "eStart",
                           "elementType" : {
                              "localId" : "501",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "502",
                           "name" : "eEnd",
                           "elementType" : {
                              "localId" : "503",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "cStart",
                        "value" : {
                           "localId" : "459",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "466",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "467",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "461",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "464",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "465",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "cEnd",
                        "value" : {
                           "localId" : "468",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "475",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "476",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "470",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "473",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "474",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "eStart",
                        "value" : {
                           "localId" : "477",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "484",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "485",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "479",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "482",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "483",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "eEnd",
                        "value" : {
                           "localId" : "486",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "493",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "494",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "488",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "491",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "492",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
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

