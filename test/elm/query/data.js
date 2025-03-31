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
         "translatorVersion" : "3.22.0",
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
               "localId" : "236",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "237",
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
      "valueSets" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Ambulatory/ED Visit",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
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
            "localId" : "241",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "239",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "240",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "238",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "243",
            "name" : "EncountersDuringMP",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","EncountersDuringMP",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "s" : [ {
                           "r" : "244",
                           "s" : [ {
                              "r" : "245",
                              "s" : [ {
                                 "r" : "245",
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
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "r" : "253",
                              "s" : [ {
                                 "r" : "252",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "253",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "261",
                              "value" : [ " ","during"," " ]
                           }, {
                              "r" : "258",
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
               "localId" : "276",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "277",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
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
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "244",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "250",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "251",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "245",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "248",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "249",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "dateRange" : {
                        "localId" : "258",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "259",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "260",
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
            "localId" : "279",
            "name" : "AmbulatoryEncountersDuringMP",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncountersDuringMP",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "s" : [ {
                           "r" : "280",
                           "s" : [ {
                              "r" : "283",
                              "s" : [ {
                                 "r" : "283",
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
                        "r" : "301",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "r" : "293",
                              "s" : [ {
                                 "r" : "292",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "293",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "301",
                              "value" : [ " ","during"," " ]
                           }, {
                              "r" : "298",
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
               "localId" : "316",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "317",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "313",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "314",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "315",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "280",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "290",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "291",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "283",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "288",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "289",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "codes" : {
                        "localId" : "282",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                        "name" : "Ambulatory/ED Visit",
                        "preserve" : true,
                        "type" : "ValueSetRef"
                     },
                     "dateRange" : {
                        "localId" : "298",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "299",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "300",
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
            "localId" : "319",
            "name" : "AmbulatoryEncountersIncludedInMP",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "319",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncountersIncludedInMP",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "s" : [ {
                           "r" : "320",
                           "s" : [ {
                              "r" : "323",
                              "s" : [ {
                                 "r" : "323",
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
                        "r" : "341",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "341",
                           "s" : [ {
                              "r" : "333",
                              "s" : [ {
                                 "r" : "332",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "333",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "341",
                              "value" : [ " ","included in"," " ]
                           }, {
                              "r" : "338",
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
               "localId" : "356",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "357",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "353",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "354",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "355",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "320",
                  "alias" : "E",
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
                     "localId" : "323",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "328",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "329",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "codes" : {
                        "localId" : "322",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                        "name" : "Ambulatory/ED Visit",
                        "preserve" : true,
                        "type" : "ValueSetRef"
                     },
                     "dateRange" : {
                        "localId" : "338",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "339",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "340",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "255",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FunctionWithThis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function \"FunctionWithThis\"(Encounter List<\"Encounter\">): " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "Count","(" ]
                        }, {
                           "r" : "241",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "217",
                                 "s" : [ {
                                    "r" : "226",
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
                              "r" : "234",
                              "s" : [ {
                                 "value" : [ "return " ]
                              }, {
                                 "r" : "235",
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
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Count",
               "signature" : [ {
                  "localId" : "251",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "252",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "253",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "source" : {
                  "localId" : "241",
                  "type" : "Query",
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
                  "source" : [ {
                     "localId" : "217",
                     "alias" : "EncounterPeriod",
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
                     "expression" : {
                        "localId" : "226",
                        "type" : "Query",
                        "resultTypeSpecifier" : {
                           "localId" : "228",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "229",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "230",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        },
                        "source" : [ {
                           "localId" : "225",
                           "alias" : "$this",
                           "expression" : {
                              "localId" : "218",
                              "name" : "Encounter",
                              "type" : "OperandRef"
                           }
                        } ],
                        "let" : [ ],
                        "relationship" : [ ],
                        "where" : {
                           "localId" : "222",
                           "type" : "Not",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "221",
                              "type" : "IsNull",
                              "signature" : [ ],
                              "operand" : {
                                 "localId" : "220",
                                 "path" : "period",
                                 "type" : "Property",
                                 "source" : {
                                    "localId" : "219",
                                    "name" : "$this",
                                    "type" : "AliasRef"
                                 }
                              }
                           }
                        },
                        "return" : {
                           "localId" : "227",
                           "distinct" : false,
                           "expression" : {
                              "localId" : "224",
                              "path" : "period",
                              "type" : "Property",
                              "source" : {
                                 "localId" : "223",
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
                     "localId" : "234",
                     "resultTypeSpecifier" : {
                        "localId" : "238",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "239",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "240",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "expression" : {
                        "localId" : "235",
                        "name" : "EncounterPeriod",
                        "type" : "AliasRef",
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
               }
            },
            "operand" : [ {
               "localId" : "216",
               "name" : "Encounter",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "214",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "215",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "213",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "queryWithThis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","queryWithThis",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "\"FunctionWithThis\"","(" ]
                        }, {
                           "r" : "265",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "257",
                                 "s" : [ {
                                    "r" : "258",
                                    "s" : [ {
                                       "r" : "258",
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
                        "r" : "271",
                        "value" : [ " ",">"," ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "FunctionWithThis",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "269",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "270",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "operand" : [ {
                     "localId" : "265",
                     "type" : "Query",
                     "resultTypeSpecifier" : {
                        "localId" : "266",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "267",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "source" : [ {
                        "localId" : "257",
                        "alias" : "E",
                        "resultTypeSpecifier" : {
                           "localId" : "263",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "264",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "expression" : {
                           "localId" : "258",
                           "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "Retrieve",
                           "resultTypeSpecifier" : {
                              "localId" : "261",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "262",
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
                  "localId" : "271",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "243",
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
               "localId" : "236",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "237",
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
      "valueSets" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Ambulatory/ED Visit",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
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
            "localId" : "241",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "239",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "240",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "238",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "243",
            "name" : "MPIncludedAmbulatoryEncounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","MPIncludedAmbulatoryEncounters",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "s" : [ {
                           "r" : "244",
                           "s" : [ {
                              "r" : "247",
                              "s" : [ {
                                 "r" : "247",
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
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "265",
                           "s" : [ {
                              "r" : "256",
                              "s" : [ {
                                 "value" : [ "MeasurementPeriod" ]
                              } ]
                           }, {
                              "r" : "265",
                              "value" : [ " ","includes"," " ]
                           }, {
                              "r" : "260",
                              "s" : [ {
                                 "r" : "259",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "260",
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
                  "localId" : "244",
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
                     "localId" : "247",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
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
                     "codes" : {
                        "localId" : "246",
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
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Includes",
                  "signature" : [ {
                     "localId" : "266",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "267",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "268",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "269",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "operand" : [ {
                     "localId" : "256",
                     "name" : "MeasurementPeriod",
                     "type" : "ParameterRef",
                     "resultTypeSpecifier" : {
                        "localId" : "257",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "258",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "260",
                     "path" : "period",
                     "scope" : "E",
                     "type" : "Property",
                     "resultTypeSpecifier" : {
                        "localId" : "263",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "264",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "410",
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
            "name" : "msQueryWhere",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","msQueryWhere",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "243",
                           "s" : [ {
                              "r" : "244",
                              "s" : [ {
                                 "r" : "244",
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
                           "r" : "251",
                           "s" : [ {
                              "r" : "252",
                              "s" : [ {
                                 "r" : "252",
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
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "268",
                           "s" : [ {
                              "r" : "260",
                              "s" : [ {
                                 "r" : "259",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "260",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "268",
                              "value" : [ " ","included in"," " ]
                           }, {
                              "r" : "265",
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
               "localId" : "291",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "292",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "293",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "294",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "295",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "296",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "284",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "285",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "286",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "287",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "288",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "289",
                        "name" : "C",
                        "elementType" : {
                           "localId" : "290",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "243",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "249",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "250",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "244",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "247",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "248",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "dateRange" : {
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
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               }, {
                  "localId" : "251",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "257",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "258",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "252",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "255",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "256",
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
                  "localId" : "280",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "281",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "282",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "283",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "298",
            "name" : "msQueryWhere2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "298",
                  "s" : [ {
                     "value" : [ "","define ","msQueryWhere2",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "299",
                           "s" : [ {
                              "r" : "300",
                              "s" : [ {
                                 "r" : "300",
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
                           "r" : "307",
                           "s" : [ {
                              "r" : "308",
                              "s" : [ {
                                 "r" : "308",
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
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "where  " ]
                        }, {
                           "r" : "315",
                           "s" : [ {
                              "r" : "325",
                              "s" : [ {
                                 "r" : "317",
                                 "s" : [ {
                                    "r" : "316",
                                    "s" : [ {
                                       "value" : [ "E" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "317",
                                    "s" : [ {
                                       "value" : [ "period" ]
                                    } ]
                                 } ]
                              }, {
                                 "r" : "325",
                                 "value" : [ "  ","included in"," " ]
                              }, {
                                 "r" : "322",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " and " ]
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
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "357",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "358",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "359",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "360",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "361",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "362",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "350",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "351",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "352",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "353",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "354",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "355",
                        "name" : "C",
                        "elementType" : {
                           "localId" : "356",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "299",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "305",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "306",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "300",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "303",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "304",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "dateRange" : {
                        "localId" : "322",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef",
                        "resultTypeSpecifier" : {
                           "localId" : "323",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "324",
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
                  "localId" : "307",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "313",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "314",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "308",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "311",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "312",
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
                  "localId" : "337",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "341",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "342",
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
               },
               "return" : {
                  "localId" : "346",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "347",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "348",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "349",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "364",
            "name" : "msQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "364",
                  "s" : [ {
                     "value" : [ "","define ","msQuery",": " ]
                  }, {
                     "r" : "396",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "365",
                           "s" : [ {
                              "r" : "366",
                              "s" : [ {
                                 "r" : "366",
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
                           "r" : "373",
                           "s" : [ {
                              "r" : "374",
                              "s" : [ {
                                 "r" : "374",
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
                        "r" : "381",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "382",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "E",": " ]
                              }, {
                                 "r" : "383",
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
                                 "r" : "384",
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
               "localId" : "403",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "404",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "405",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "406",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "407",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "408",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "396",
               "type" : "Query",
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
                     }, {
                        "localId" : "401",
                        "name" : "C",
                        "elementType" : {
                           "localId" : "402",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "365",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "371",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "372",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "366",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "369",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "370",
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
                  "localId" : "373",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "379",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "380",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "374",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "377",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "378",
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
                  "localId" : "381",
                  "resultTypeSpecifier" : {
                     "localId" : "390",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "391",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "392",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "393",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "394",
                           "name" : "C",
                           "elementType" : {
                              "localId" : "395",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "382",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "385",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "386",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "387",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "388",
                           "name" : "C",
                           "elementType" : {
                              "localId" : "389",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "383",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "384",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "410",
            "name" : "multiSourceWithArrays",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "410",
                  "s" : [ {
                     "value" : [ "","define ","multiSourceWithArrays",":\n  " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "411",
                           "s" : [ {
                              "r" : "412",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "412",
                                 "s" : [ {
                                    "value" : [ "List{" ]
                                 }, {
                                    "r" : "413",
                                    "s" : [ {
                                       "value" : [ "'a'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "414",
                                    "s" : [ {
                                       "value" : [ "'b'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "415",
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
                           "r" : "422",
                           "s" : [ {
                              "r" : "423",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "423",
                                 "s" : [ {
                                    "value" : [ "List{" ]
                                 }, {
                                    "r" : "424",
                                    "s" : [ {
                                       "value" : [ "{" ]
                                    }, {
                                       "r" : "425",
                                       "s" : [ {
                                          "value" : [ "'x'" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "428",
                                    "s" : [ {
                                       "value" : [ "{" ]
                                    }, {
                                       "r" : "429",
                                       "s" : [ {
                                          "value" : [ "'y'" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "432",
                                    "s" : [ {
                                       "value" : [ "{" ]
                                    }, {
                                       "r" : "433",
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
               "localId" : "457",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "458",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "459",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "460",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "461",
                     "name" : "X",
                     "elementType" : {
                        "localId" : "462",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "463",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "449",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "450",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "451",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "452",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "453",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "454",
                        "name" : "X",
                        "elementType" : {
                           "localId" : "455",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "456",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "411",
                  "alias" : "A",
                  "resultTypeSpecifier" : {
                     "localId" : "420",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "421",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "412",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "418",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "419",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "413",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "414",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "415",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  }
               }, {
                  "localId" : "422",
                  "alias" : "X",
                  "resultTypeSpecifier" : {
                     "localId" : "442",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "443",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "444",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "expression" : {
                     "localId" : "423",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "439",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "440",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "441",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "element" : [ {
                        "localId" : "424",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "426",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "427",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "425",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "x",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "428",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "430",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "431",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "429",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "432",
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
                           "localId" : "433",
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
                  "localId" : "445",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "446",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "447",
                           "name" : "A",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "X",
                        "value" : {
                           "localId" : "448",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "308",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "withQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","withQuery",":  " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "r" : "214",
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
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "with " ]
                        }, {
                           "r" : "221",
                           "s" : [ {
                              "r" : "222",
                              "s" : [ {
                                 "r" : "222",
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
                           "r" : "229",
                           "s" : [ {
                              "r" : "231",
                              "s" : [ {
                                 "r" : "230",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "231",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "232",
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
               "localId" : "241",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "242",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "238",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "239",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "240",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "213",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "219",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "220",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "217",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "218",
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
                  "localId" : "235",
                  "alias" : "C",
                  "type" : "With",
                  "resultTypeSpecifier" : {
                     "localId" : "236",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "237",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "222",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "225",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "226",
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
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "233",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "234",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "231",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "232",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "withQuery2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","withQuery2",":  " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "s" : [ {
                           "r" : "245",
                           "s" : [ {
                              "r" : "246",
                              "s" : [ {
                                 "r" : "246",
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
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "with " ]
                        }, {
                           "r" : "253",
                           "s" : [ {
                              "r" : "254",
                              "s" : [ {
                                 "r" : "254",
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
                           "r" : "261",
                           "s" : [ {
                              "r" : "263",
                              "s" : [ {
                                 "r" : "262",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "263",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "264",
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
               "localId" : "273",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "274",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "270",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "271",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "272",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "245",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "251",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "252",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "246",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "249",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "250",
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
                  "localId" : "267",
                  "alias" : "C",
                  "type" : "With",
                  "resultTypeSpecifier" : {
                     "localId" : "268",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "269",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "254",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "257",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "258",
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
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "265",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "266",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "263",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "264",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "276",
            "name" : "withOutQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","withOutQuery",":  " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "s" : [ {
                           "r" : "277",
                           "s" : [ {
                              "r" : "278",
                              "s" : [ {
                                 "r" : "278",
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
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "285",
                           "s" : [ {
                              "r" : "286",
                              "s" : [ {
                                 "r" : "286",
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
                           "r" : "293",
                           "s" : [ {
                              "r" : "295",
                              "s" : [ {
                                 "r" : "294",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "295",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "296",
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
               "localId" : "305",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "306",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "302",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "303",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "304",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "277",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "283",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "284",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "278",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "281",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "282",
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
                  "localId" : "299",
                  "alias" : "C",
                  "type" : "Without",
                  "resultTypeSpecifier" : {
                     "localId" : "300",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "301",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "286",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "289",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "290",
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
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "297",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "298",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "295",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "296",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "308",
            "name" : "withOutQuery2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "308",
                  "s" : [ {
                     "value" : [ "","define ","withOutQuery2",":  " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "s" : [ {
                           "r" : "309",
                           "s" : [ {
                              "r" : "310",
                              "s" : [ {
                                 "r" : "310",
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
                        "r" : "331",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "r" : "318",
                              "s" : [ {
                                 "r" : "318",
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
                           "r" : "325",
                           "s" : [ {
                              "r" : "327",
                              "s" : [ {
                                 "r" : "326",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "327",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "328",
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
               "localId" : "337",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "338",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "334",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "335",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "336",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "309",
                  "alias" : "E",
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
                     "localId" : "310",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "313",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "314",
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
                  "localId" : "331",
                  "alias" : "C",
                  "type" : "Without",
                  "resultTypeSpecifier" : {
                     "localId" : "332",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "333",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "318",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "321",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "322",
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
                     "localId" : "325",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "329",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "330",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "327",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "328",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "212",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "query",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","query",":  " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "r" : "214",
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
                           "r" : "221",
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "222",
                              "s" : [ {
                                 "value" : [ "E" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n" ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "E",": " ]
                              }, {
                                 "r" : "225",
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
                                 "r" : "226",
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
               "localId" : "245",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "246",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "247",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "248",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "249",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "250",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "238",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "239",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "240",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "241",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "242",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "243",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "244",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "213",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "219",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "220",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "217",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "218",
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
                  "localId" : "221",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "identifier" : "a",
                  "expression" : {
                     "localId" : "222",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "223",
                  "resultTypeSpecifier" : {
                     "localId" : "232",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "233",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "234",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "235",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "236",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "237",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "224",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "227",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "228",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "229",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "230",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "231",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "225",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "a",
                        "value" : {
                           "localId" : "226",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "212",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "query",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","query",":  " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "r" : "214",
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
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "222",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "224",
                                 "s" : [ {
                                    "r" : "223",
                                    "s" : [ {
                                       "value" : [ "E" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "224",
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
                                 "r" : "226",
                                 "s" : [ {
                                    "r" : "225",
                                    "s" : [ {
                                       "value" : [ "E" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "226",
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
               "localId" : "245",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "246",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "247",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "248",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "249",
                     "name" : "thing",
                     "elementType" : {
                        "localId" : "250",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "238",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "239",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "240",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "241",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "242",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "243",
                        "name" : "thing",
                        "elementType" : {
                           "localId" : "244",
                           "name" : "{urn:hl7-org:elm-types:r1}Code",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "213",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "219",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "220",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "217",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "218",
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
                  "localId" : "221",
                  "resultTypeSpecifier" : {
                     "localId" : "232",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "233",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "234",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "235",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "236",
                           "name" : "thing",
                           "elementType" : {
                              "localId" : "237",
                              "name" : "{urn:hl7-org:elm-types:r1}Code",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "222",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "227",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "228",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "229",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "230",
                           "name" : "thing",
                           "elementType" : {
                              "localId" : "231",
                              "name" : "{urn:hl7-org:elm-types:r1}Code",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "224",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "path" : "id",
                           "scope" : "E",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "thing",
                        "value" : {
                           "localId" : "226",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "212",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "query",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","query",":  " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "214",
                                 "s" : [ {
                                    "r" : "215",
                                    "value" : [ "List{","null",", " ]
                                 }, {
                                    "r" : "216",
                                    "s" : [ {
                                       "value" : [ "'One'" ]
                                    } ]
                                 }, {
                                    "r" : "217",
                                    "value" : [ ", ","null",", " ]
                                 }, {
                                    "r" : "218",
                                    "s" : [ {
                                       "value" : [ "'Two'" ]
                                    } ]
                                 }, {
                                    "r" : "219",
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
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "r" : "229",
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
               "localId" : "237",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "234",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "235",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "213",
                  "alias" : "I",
                  "resultTypeSpecifier" : {
                     "localId" : "227",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "228",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "225",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "226",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "220",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "215",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     }, {
                        "localId" : "216",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "One",
                        "type" : "Literal"
                     }, {
                        "localId" : "221",
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
                        "value" : "Two",
                        "type" : "Literal"
                     }, {
                        "localId" : "222",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "219",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Not",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "IsNull",
                     "signature" : [ {
                        "localId" : "231",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "229",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "903",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "QuantityListAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","QuantityListAsc",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "214",
                                 "s" : [ {
                                    "value" : [ "{ " ]
                                 }, {
                                    "r" : "219",
                                    "s" : [ {
                                       "value" : [ "ToQuantity","(" ]
                                    }, {
                                       "r" : "215",
                                       "s" : [ {
                                          "value" : [ "'10 \\'m\\''" ]
                                       } ]
                                    }, {
                                       "value" : [ ")" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "225",
                                    "s" : [ {
                                       "value" : [ "ToQuantity","(" ]
                                    }, {
                                       "r" : "221",
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
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "247",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
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
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "213",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "231",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "229",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "230",
                           "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "219",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "ToQuantity",
                        "signature" : [ {
                           "localId" : "220",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "215",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "10 'm'",
                           "type" : "Literal"
                        }
                     }, {
                        "localId" : "225",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "ToQuantity",
                        "signature" : [ {
                           "localId" : "226",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "221",
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
                  "localId" : "233",
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
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "237",
                  "by" : [ {
                     "localId" : "238",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "250",
            "name" : "QuantityListSort",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","QuantityListSort",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "s" : [ {
                           "r" : "251",
                           "s" : [ {
                              "r" : "252",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "252",
                                 "s" : [ {
                                    "value" : [ "{ " ]
                                 }, {
                                    "r" : "257",
                                    "s" : [ {
                                       "value" : [ "ToQuantity","(" ]
                                    }, {
                                       "r" : "253",
                                       "s" : [ {
                                          "value" : [ "'10 \\'m\\''" ]
                                       } ]
                                    }, {
                                       "value" : [ ")" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "263",
                                    "s" : [ {
                                       "value" : [ "ToQuantity","(" ]
                                    }, {
                                       "r" : "259",
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
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "272",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "273",
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
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "r" : "281",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "281",
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
               "localId" : "294",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "295",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "296",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "297",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
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
                        "name" : "N",
                        "elementType" : {
                           "localId" : "293",
                           "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "251",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "269",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "270",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "252",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "267",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "268",
                           "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "257",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "ToQuantity",
                        "signature" : [ {
                           "localId" : "258",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "253",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "10 'm'",
                           "type" : "Literal"
                        }
                     }, {
                        "localId" : "263",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "ToQuantity",
                        "signature" : [ {
                           "localId" : "264",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "259",
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
                  "localId" : "271",
                  "resultTypeSpecifier" : {
                     "localId" : "277",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "278",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "279",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "280",
                              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "272",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "274",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "275",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "276",
                              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "273",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "283",
                  "by" : [ {
                     "localId" : "282",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "direction" : "asc",
                     "path" : "N",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "299",
            "name" : "TupleAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsc",": " ]
                  }, {
                     "r" : "316",
                     "s" : [ {
                        "s" : [ {
                           "r" : "300",
                           "s" : [ {
                              "r" : "301",
                              "s" : [ {
                                 "r" : "301",
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
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "309",
                           "s" : [ {
                              "r" : "308",
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
               "localId" : "319",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "320",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "316",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "317",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "318",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "300",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "306",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "307",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "301",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "304",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "305",
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
                  "localId" : "310",
                  "by" : [ {
                     "localId" : "309",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "asc",
                     "path" : "id",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "322",
            "name" : "TupleReturnAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "322",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnAsc",": " ]
                  }, {
                     "r" : "343",
                     "s" : [ {
                        "s" : [ {
                           "r" : "323",
                           "s" : [ {
                              "r" : "324",
                              "s" : [ {
                                 "r" : "324",
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
                        "r" : "331",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "332",
                           "s" : [ {
                              "value" : [ "E" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "337",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "336",
                           "s" : [ {
                              "r" : "335",
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
               "localId" : "346",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "347",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "343",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "344",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "345",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "323",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "329",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "330",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "324",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "327",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "328",
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
                  "localId" : "331",
                  "resultTypeSpecifier" : {
                     "localId" : "333",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "334",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "332",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "337",
                  "by" : [ {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "asc",
                     "path" : "id",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "349",
            "name" : "TupleReturnTupleAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "349",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnTupleAsc",": " ]
                  }, {
                     "r" : "377",
                     "s" : [ {
                        "s" : [ {
                           "r" : "350",
                           "s" : [ {
                              "r" : "351",
                              "s" : [ {
                                 "r" : "351",
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
                        "r" : "358",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "359",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "E"," : " ]
                              }, {
                                 "r" : "360",
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
                        "r" : "371",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "370",
                           "s" : [ {
                              "r" : "369",
                              "s" : [ {
                                 "r" : "368",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "369",
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
               "localId" : "382",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "383",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "384",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "385",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "377",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "378",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "379",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "380",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "381",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "350",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "356",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "357",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "351",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "354",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "355",
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
                  "localId" : "358",
                  "resultTypeSpecifier" : {
                     "localId" : "364",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "365",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "366",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "367",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "359",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
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
                        } ]
                     },
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "360",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "371",
                  "by" : [ {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "369",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "type" : "Property",
                        "source" : {
                           "localId" : "368",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "IdentifierRef"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "387",
            "name" : "TupleDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "387",
                  "s" : [ {
                     "value" : [ "","define ","TupleDesc",": " ]
                  }, {
                     "r" : "404",
                     "s" : [ {
                        "s" : [ {
                           "r" : "388",
                           "s" : [ {
                              "r" : "389",
                              "s" : [ {
                                 "r" : "389",
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
                        "r" : "398",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "397",
                           "s" : [ {
                              "r" : "396",
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
               "localId" : "407",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "408",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "404",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "405",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "406",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "388",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "394",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "395",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "389",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "392",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "393",
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
                  "localId" : "398",
                  "by" : [ {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "desc",
                     "path" : "id",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "410",
            "name" : "TupleReturnDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "410",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnDesc",": " ]
                  }, {
                     "r" : "431",
                     "s" : [ {
                        "s" : [ {
                           "r" : "411",
                           "s" : [ {
                              "r" : "412",
                              "s" : [ {
                                 "r" : "412",
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
                        "r" : "419",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "420",
                           "s" : [ {
                              "value" : [ "E" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "425",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "424",
                           "s" : [ {
                              "r" : "423",
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
               "localId" : "434",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "435",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "431",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "432",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "433",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "411",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "417",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "418",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "412",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "415",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "416",
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
                  "localId" : "419",
                  "resultTypeSpecifier" : {
                     "localId" : "421",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "422",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "420",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "425",
                  "by" : [ {
                     "localId" : "424",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "desc",
                     "path" : "id",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "437",
            "name" : "TupleReturnTupleDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "437",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnTupleDesc",":  " ]
                  }, {
                     "r" : "465",
                     "s" : [ {
                        "s" : [ {
                           "r" : "438",
                           "s" : [ {
                              "r" : "439",
                              "s" : [ {
                                 "r" : "439",
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
                        "r" : "446",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "447",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "E"," : " ]
                              }, {
                                 "r" : "448",
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
                        "r" : "459",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "458",
                           "s" : [ {
                              "r" : "457",
                              "s" : [ {
                                 "r" : "456",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "457",
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
               "localId" : "470",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "471",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "472",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "473",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "465",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "466",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "467",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "468",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "469",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "438",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "444",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "445",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "439",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "442",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "443",
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
                  "localId" : "446",
                  "resultTypeSpecifier" : {
                     "localId" : "452",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "453",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "454",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "455",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "447",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "449",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "450",
                           "name" : "E",
                           "elementType" : {
                              "localId" : "451",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "448",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "459",
                  "by" : [ {
                     "localId" : "458",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "direction" : "desc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "457",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "type" : "Property",
                        "source" : {
                           "localId" : "456",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "name" : "E",
                           "type" : "IdentifierRef"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "475",
            "name" : "ConditionDates",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "475",
                  "s" : [ {
                     "value" : [ "","define ","ConditionDates",": " ]
                  }, {
                     "r" : "494",
                     "s" : [ {
                        "s" : [ {
                           "r" : "476",
                           "s" : [ {
                              "r" : "477",
                              "s" : [ {
                                 "r" : "477",
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
                        "r" : "484",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "491",
                           "s" : [ {
                              "r" : "486",
                              "s" : [ {
                                 "r" : "485",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "486",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "491",
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
               "localId" : "497",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "498",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "494",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "495",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "496",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "476",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "482",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "483",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "477",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "480",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "481",
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
                  "localId" : "484",
                  "resultTypeSpecifier" : {
                     "localId" : "492",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "493",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "491",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "path" : "low",
                     "type" : "Property",
                     "source" : {
                        "localId" : "486",
                        "path" : "period",
                        "scope" : "C",
                        "type" : "Property",
                        "resultTypeSpecifier" : {
                           "localId" : "489",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "490",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "500",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "lastDateUnsorted",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "500",
                  "s" : [ {
                     "value" : [ "","define ","lastDateUnsorted",": " ]
                  }, {
                     "r" : "508",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "501",
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
               "localId" : "508",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Last",
               "signature" : [ {
                  "localId" : "509",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "510",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "501",
                  "name" : "ConditionDates",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "502",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "503",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "localId" : "512",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "lastDateByThis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "512",
                  "s" : [ {
                     "value" : [ "","define ","lastDateByThis",": " ]
                  }, {
                     "r" : "534",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "527",
                        "s" : [ {
                           "s" : [ {
                              "r" : "513",
                              "s" : [ {
                                 "r" : "514",
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
                           "r" : "521",
                           "s" : [ {
                              "value" : [ "sort by " ]
                           }, {
                              "r" : "520",
                              "s" : [ {
                                 "r" : "519",
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
               "localId" : "534",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Last",
               "signature" : [ {
                  "localId" : "535",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "536",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "527",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "528",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "529",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "513",
                     "alias" : "CD",
                     "resultTypeSpecifier" : {
                        "localId" : "517",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "518",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "514",
                        "name" : "ConditionDates",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "515",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "516",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "sort" : {
                     "localId" : "521",
                     "by" : [ {
                        "localId" : "520",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "direction" : "asc",
                        "path" : "$this",
                        "type" : "ByColumn"
                     } ]
                  }
               }
            }
         }, {
            "localId" : "538",
            "name" : "numberAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "538",
                  "s" : [ {
                     "value" : [ "","define ","numberAsc",": " ]
                  }, {
                     "r" : "561",
                     "s" : [ {
                        "s" : [ {
                           "r" : "539",
                           "s" : [ {
                              "r" : "540",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "540",
                                 "s" : [ {
                                    "r" : "541",
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
                        "r" : "554",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "564",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "565",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "561",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "562",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "563",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "539",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "552",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "553",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "540",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "550",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "551",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "541",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "542",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "543",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "544",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "545",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "546",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "547",
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
                  "localId" : "554",
                  "by" : [ {
                     "localId" : "555",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "567",
            "name" : "numberReturnAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "567",
                  "s" : [ {
                     "value" : [ "","define ","numberReturnAsc",": " ]
                  }, {
                     "r" : "594",
                     "s" : [ {
                        "s" : [ {
                           "r" : "568",
                           "s" : [ {
                              "r" : "569",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "569",
                                 "s" : [ {
                                    "r" : "570",
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
                        "r" : "583",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "584",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "587",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "597",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "598",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "594",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "595",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "596",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "568",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "581",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "582",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "569",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "579",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "580",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "570",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "571",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "572",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "573",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "574",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "575",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "576",
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
                  "localId" : "583",
                  "resultTypeSpecifier" : {
                     "localId" : "585",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "586",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "584",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "587",
                  "by" : [ {
                     "localId" : "588",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "600",
            "name" : "numberDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "600",
                  "s" : [ {
                     "value" : [ "","define ","numberDesc",": " ]
                  }, {
                     "r" : "623",
                     "s" : [ {
                        "s" : [ {
                           "r" : "601",
                           "s" : [ {
                              "r" : "602",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "602",
                                 "s" : [ {
                                    "r" : "603",
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
                        "r" : "616",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "626",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "627",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "623",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "624",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "625",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "601",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "614",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "615",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "602",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "612",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "613",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "603",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "604",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "605",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "606",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "607",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "608",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "609",
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
                  "localId" : "616",
                  "by" : [ {
                     "localId" : "617",
                     "direction" : "desc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "629",
            "name" : "numberReturnDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "629",
                  "s" : [ {
                     "value" : [ "","define ","numberReturnDesc",": " ]
                  }, {
                     "r" : "656",
                     "s" : [ {
                        "s" : [ {
                           "r" : "630",
                           "s" : [ {
                              "r" : "631",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "631",
                                 "s" : [ {
                                    "r" : "632",
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
                        "r" : "645",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "646",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "649",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "659",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "660",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "656",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "657",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "658",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "630",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "643",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "644",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "631",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "641",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "642",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "632",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "633",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "634",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "635",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "636",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "637",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "638",
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
                  "localId" : "645",
                  "resultTypeSpecifier" : {
                     "localId" : "647",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "648",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "646",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "649",
                  "by" : [ {
                     "localId" : "650",
                     "direction" : "desc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "662",
            "name" : "stringAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "662",
                  "s" : [ {
                     "value" : [ "","define ","stringAsc",": " ]
                  }, {
                     "r" : "683",
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
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "665",
                                    "s" : [ {
                                       "value" : [ "'jenny'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "666",
                                    "s" : [ {
                                       "value" : [ "'dont'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "667",
                                    "s" : [ {
                                       "value" : [ "'change'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "668",
                                    "s" : [ {
                                       "value" : [ "'your'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "669",
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
                        "r" : "676",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "686",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "687",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "683",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "684",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "685",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "663",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "674",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "675",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "664",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "672",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "673",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "665",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "666",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "667",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "668",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "669",
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
                  "localId" : "676",
                  "by" : [ {
                     "localId" : "677",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "689",
            "name" : "stringReturnAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "689",
                  "s" : [ {
                     "value" : [ "","define ","stringReturnAsc",": " ]
                  }, {
                     "r" : "714",
                     "s" : [ {
                        "s" : [ {
                           "r" : "690",
                           "s" : [ {
                              "r" : "691",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "691",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "692",
                                    "s" : [ {
                                       "value" : [ "'jenny'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "693",
                                    "s" : [ {
                                       "value" : [ "'dont'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "694",
                                    "s" : [ {
                                       "value" : [ "'change'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "695",
                                    "s" : [ {
                                       "value" : [ "'your'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "696",
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
                        "r" : "703",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "704",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     }, {
                        "r" : "707",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "717",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "718",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "714",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "715",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "716",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "690",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "701",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "702",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "691",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "699",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "700",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "692",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "693",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "694",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "695",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "696",
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
                  "localId" : "703",
                  "resultTypeSpecifier" : {
                     "localId" : "705",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "706",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "704",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "707",
                  "by" : [ {
                     "localId" : "708",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "720",
            "name" : "stringDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "720",
                  "s" : [ {
                     "value" : [ "","define ","stringDesc",": " ]
                  }, {
                     "r" : "741",
                     "s" : [ {
                        "s" : [ {
                           "r" : "721",
                           "s" : [ {
                              "r" : "722",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "722",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "723",
                                    "s" : [ {
                                       "value" : [ "'jenny'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "724",
                                    "s" : [ {
                                       "value" : [ "'dont'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "725",
                                    "s" : [ {
                                       "value" : [ "'change'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "726",
                                    "s" : [ {
                                       "value" : [ "'your'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "727",
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
                        "r" : "734",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "744",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "745",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "741",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "742",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "743",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "721",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "732",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "733",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "722",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "730",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "731",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "723",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "724",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "725",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "726",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "727",
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
                  "localId" : "734",
                  "by" : [ {
                     "localId" : "735",
                     "direction" : "desc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "747",
            "name" : "stringReturnDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "747",
                  "s" : [ {
                     "value" : [ "","define ","stringReturnDesc",": " ]
                  }, {
                     "r" : "772",
                     "s" : [ {
                        "s" : [ {
                           "r" : "748",
                           "s" : [ {
                              "r" : "749",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "749",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "750",
                                    "s" : [ {
                                       "value" : [ "'jenny'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "751",
                                    "s" : [ {
                                       "value" : [ "'dont'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "752",
                                    "s" : [ {
                                       "value" : [ "'change'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "753",
                                    "s" : [ {
                                       "value" : [ "'your'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "754",
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
                        "r" : "761",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "762",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     }, {
                        "r" : "765",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "775",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "776",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "772",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "773",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "774",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "748",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "759",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "760",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "749",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "757",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "758",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "750",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "751",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "752",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "753",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "754",
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
                  "localId" : "761",
                  "resultTypeSpecifier" : {
                     "localId" : "763",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "764",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "762",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "765",
                  "by" : [ {
                     "localId" : "766",
                     "direction" : "desc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "778",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "five",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "778",
                  "s" : [ {
                     "r" : "779",
                     "value" : [ "","define ","five",": ","5" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "779",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "5",
               "type" : "Literal"
            }
         }, {
            "localId" : "781",
            "name" : "sortByExpression",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "781",
                  "s" : [ {
                     "value" : [ "","define ","sortByExpression",": " ]
                  }, {
                     "r" : "819",
                     "s" : [ {
                        "s" : [ {
                           "r" : "782",
                           "s" : [ {
                              "r" : "783",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "783",
                                 "s" : [ {
                                    "r" : "784",
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
                        "r" : "797",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "798",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "799",
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
                        "r" : "813",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "812",
                           "s" : [ {
                              "r" : "807",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "807",
                                 "s" : [ {
                                    "r" : "808",
                                    "s" : [ {
                                       "value" : [ "five" ]
                                    } ]
                                 }, {
                                    "value" : [ " + " ]
                                 }, {
                                    "r" : "809",
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
               "localId" : "824",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "825",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "826",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "827",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "819",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "820",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "821",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "822",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "823",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "782",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "795",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "796",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "783",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "793",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "794",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "784",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "785",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "786",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "787",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "788",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "789",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "790",
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
                  "localId" : "797",
                  "resultTypeSpecifier" : {
                     "localId" : "803",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "804",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "805",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "806",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "798",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "800",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "801",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "802",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "799",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "813",
                  "by" : [ {
                     "localId" : "812",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "807",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Add",
                        "signature" : [ {
                           "localId" : "810",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "811",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "808",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "five",
                           "type" : "ExpressionRef"
                        }, {
                           "localId" : "809",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "IdentifierRef"
                        } ]
                     }
                  } ]
               }
            }
         }, {
            "localId" : "829",
            "name" : "sortByExpressionWithNullResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "829",
                  "s" : [ {
                     "value" : [ "","define ","sortByExpressionWithNullResults",": " ]
                  }, {
                     "r" : "864",
                     "s" : [ {
                        "s" : [ {
                           "r" : "830",
                           "s" : [ {
                              "r" : "831",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "831",
                                 "s" : [ {
                                    "r" : "832",
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
                        "r" : "842",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "843",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "844",
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
                        "r" : "858",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "857",
                           "s" : [ {
                              "r" : "852",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "852",
                                 "s" : [ {
                                    "r" : "853",
                                    "s" : [ {
                                       "value" : [ "five" ]
                                    } ]
                                 }, {
                                    "value" : [ " + " ]
                                 }, {
                                    "r" : "854",
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
               "localId" : "869",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "870",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "871",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "872",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "864",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "865",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "866",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "867",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "868",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "830",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "840",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "841",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "831",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "838",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "839",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "832",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "835",
                        "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "833",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     }, {
                        "localId" : "834",
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
                  "localId" : "842",
                  "resultTypeSpecifier" : {
                     "localId" : "848",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "849",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "850",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "851",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "843",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "845",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "846",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "847",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "844",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "858",
                  "by" : [ {
                     "localId" : "857",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "852",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Add",
                        "signature" : [ {
                           "localId" : "855",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "856",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "853",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "five",
                           "type" : "ExpressionRef"
                        }, {
                           "localId" : "854",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "IdentifierRef"
                        } ]
                     }
                  } ]
               }
            }
         }, {
            "localId" : "874",
            "name" : "sortWithAscendingKeyword",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "874",
                  "s" : [ {
                     "value" : [ "","define ","sortWithAscendingKeyword",": " ]
                  }, {
                     "r" : "897",
                     "s" : [ {
                        "s" : [ {
                           "r" : "875",
                           "s" : [ {
                              "r" : "876",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "876",
                                 "s" : [ {
                                    "r" : "877",
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
                        "r" : "890",
                        "value" : [ " ","sort ascending" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "900",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "901",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "897",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "898",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "899",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "875",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "888",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "889",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "876",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "886",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "887",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "877",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "878",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "879",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "880",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "881",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "882",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "883",
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
                  "localId" : "890",
                  "by" : [ {
                     "localId" : "891",
                     "direction" : "ascending",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "903",
            "name" : "sortWithDescendingKeyword",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "903",
                  "s" : [ {
                     "value" : [ "","define ","sortWithDescendingKeyword",": " ]
                  }, {
                     "r" : "930",
                     "s" : [ {
                        "s" : [ {
                           "r" : "904",
                           "s" : [ {
                              "r" : "905",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "905",
                                 "s" : [ {
                                    "r" : "906",
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
                        "r" : "919",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "920",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "923",
                        "value" : [ " ","sort descending" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "933",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "934",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "930",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "931",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "932",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "904",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "917",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "918",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "905",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "915",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "916",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "906",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "907",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "908",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "909",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "910",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "911",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "912",
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
                  "localId" : "919",
                  "resultTypeSpecifier" : {
                     "localId" : "921",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "922",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "920",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "923",
                  "by" : [ {
                     "localId" : "924",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "530",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "defaultNumbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","defaultNumbers",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "214",
                                 "s" : [ {
                                    "r" : "215",
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
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "value" : [ "N" ]
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
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "213",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "235",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "236",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "233",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "234",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "215",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "216",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
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
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "221",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
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
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "226",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
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
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "229",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "230",
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
                  "localId" : "237",
                  "resultTypeSpecifier" : {
                     "localId" : "239",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "240",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "247",
            "name" : "defaultStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","defaultStrings",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "s" : [ {
                           "r" : "248",
                           "s" : [ {
                              "r" : "249",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "249",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "250",
                                    "s" : [ {
                                       "value" : [ "'foo'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "251",
                                    "s" : [ {
                                       "value" : [ "'bar'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "252",
                                    "s" : [ {
                                       "value" : [ "'baz'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "253",
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
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "value" : [ "S" ]
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
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "264",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "265",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "248",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "258",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "259",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "249",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "256",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "257",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "250",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "251",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "252",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "253",
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
                  "localId" : "260",
                  "resultTypeSpecifier" : {
                     "localId" : "262",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "263",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "270",
            "name" : "defaultTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","defaultTuples",": " ]
                  }, {
                     "r" : "328",
                     "s" : [ {
                        "s" : [ {
                           "r" : "271",
                           "s" : [ {
                              "r" : "272",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "272",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "273",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "274",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "275",
                                          "value" : [ "b",":","2" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "281",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "282",
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "283",
                                          "value" : [ "b",": ","3" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "289",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "290",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "291",
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
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "316",
                           "s" : [ {
                              "value" : [ "T" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "335",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "336",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "337",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "338",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "339",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "340",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "328",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "329",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "330",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "331",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "332",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "333",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "334",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "271",
                  "alias" : "T",
                  "resultTypeSpecifier" : {
                     "localId" : "309",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "310",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "311",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "312",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "313",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "314",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "272",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "303",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "304",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "305",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "306",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "307",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "308",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "element" : [ {
                        "localId" : "273",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "276",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "277",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "278",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "279",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "280",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "274",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "275",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "281",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "284",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "285",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "286",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "287",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "288",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "282",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "283",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "289",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "292",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "293",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "294",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "295",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "296",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "290",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "291",
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
                  "localId" : "315",
                  "resultTypeSpecifier" : {
                     "localId" : "322",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "323",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "324",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "325",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "326",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "327",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "316",
                     "name" : "T",
                     "type" : "AliasRef",
                     "resultTypeSpecifier" : {
                        "localId" : "317",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "318",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "319",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "320",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "321",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "localId" : "342",
            "name" : "distinctNumbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "342",
                  "s" : [ {
                     "value" : [ "","define ","distinctNumbers",": " ]
                  }, {
                     "r" : "371",
                     "s" : [ {
                        "s" : [ {
                           "r" : "343",
                           "s" : [ {
                              "r" : "344",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "344",
                                 "s" : [ {
                                    "r" : "345",
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
                        "r" : "367",
                        "s" : [ {
                           "value" : [ "return distinct " ]
                        }, {
                           "r" : "368",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "374",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "375",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "371",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "372",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "373",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "343",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "365",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "366",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "344",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "363",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "364",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "345",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "346",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "347",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "348",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "349",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "350",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "351",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "352",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "353",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "354",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "355",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "356",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "357",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
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
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "367",
                  "distinct" : true,
                  "resultTypeSpecifier" : {
                     "localId" : "369",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "370",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "368",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "377",
            "name" : "distinctStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "377",
                  "s" : [ {
                     "value" : [ "","define ","distinctStrings",": " ]
                  }, {
                     "r" : "394",
                     "s" : [ {
                        "s" : [ {
                           "r" : "378",
                           "s" : [ {
                              "r" : "379",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "379",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "380",
                                    "s" : [ {
                                       "value" : [ "'foo'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "381",
                                    "s" : [ {
                                       "value" : [ "'bar'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "382",
                                    "s" : [ {
                                       "value" : [ "'baz'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "383",
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
                        "r" : "390",
                        "s" : [ {
                           "value" : [ "return distinct " ]
                        }, {
                           "r" : "391",
                           "s" : [ {
                              "value" : [ "S" ]
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
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "394",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "395",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "396",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "378",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "388",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "389",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "379",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "386",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "387",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "380",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "381",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "382",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "383",
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
                  "localId" : "390",
                  "distinct" : true,
                  "resultTypeSpecifier" : {
                     "localId" : "392",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "393",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "391",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "400",
            "name" : "distinctTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "400",
                  "s" : [ {
                     "value" : [ "","define ","distinctTuples",": " ]
                  }, {
                     "r" : "458",
                     "s" : [ {
                        "s" : [ {
                           "r" : "401",
                           "s" : [ {
                              "r" : "402",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "402",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "403",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "404",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "405",
                                          "value" : [ "b",":","2" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "411",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "412",
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "413",
                                          "value" : [ "b",": ","3" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "419",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "420",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "421",
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
                        "r" : "445",
                        "s" : [ {
                           "value" : [ "return distinct " ]
                        }, {
                           "r" : "446",
                           "s" : [ {
                              "value" : [ "T" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "465",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "466",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "467",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "468",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "469",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "470",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "458",
               "type" : "Query",
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
               "source" : [ {
                  "localId" : "401",
                  "alias" : "T",
                  "resultTypeSpecifier" : {
                     "localId" : "439",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "440",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "441",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "442",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "443",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "444",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "402",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "433",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
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
                        }
                     },
                     "element" : [ {
                        "localId" : "403",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "406",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "407",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "408",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "409",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "410",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "404",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "405",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "411",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "414",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "415",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "416",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "417",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "418",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "412",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "413",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "419",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "422",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "423",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "424",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "425",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "426",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "420",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "421",
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
                  "localId" : "445",
                  "distinct" : true,
                  "resultTypeSpecifier" : {
                     "localId" : "452",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "453",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "454",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "455",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "456",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "457",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "446",
                     "name" : "T",
                     "type" : "AliasRef",
                     "resultTypeSpecifier" : {
                        "localId" : "447",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "448",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "449",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "450",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "451",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "localId" : "472",
            "name" : "allNumbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "472",
                  "s" : [ {
                     "value" : [ "","define ","allNumbers",": " ]
                  }, {
                     "r" : "501",
                     "s" : [ {
                        "s" : [ {
                           "r" : "473",
                           "s" : [ {
                              "r" : "474",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "474",
                                 "s" : [ {
                                    "r" : "475",
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
                        "r" : "497",
                        "s" : [ {
                           "value" : [ "return all " ]
                        }, {
                           "r" : "498",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "504",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "505",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "501",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "502",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "503",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "473",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "495",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "496",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "474",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "493",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "494",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "475",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "476",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "477",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "478",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "479",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "480",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "481",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "482",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "483",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "484",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "485",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "486",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
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
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "489",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "490",
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
                  "localId" : "497",
                  "distinct" : false,
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
                     "localId" : "498",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "507",
            "name" : "allStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "507",
                  "s" : [ {
                     "value" : [ "","define ","allStrings",": " ]
                  }, {
                     "r" : "524",
                     "s" : [ {
                        "s" : [ {
                           "r" : "508",
                           "s" : [ {
                              "r" : "509",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "509",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "510",
                                    "s" : [ {
                                       "value" : [ "'foo'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "511",
                                    "s" : [ {
                                       "value" : [ "'bar'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "512",
                                    "s" : [ {
                                       "value" : [ "'baz'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "513",
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
                        "r" : "520",
                        "s" : [ {
                           "value" : [ "return all " ]
                        }, {
                           "r" : "521",
                           "s" : [ {
                              "value" : [ "S" ]
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
                  "name" : "{urn:hl7-org:elm-types:r1}String",
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
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "508",
                  "alias" : "S",
                  "resultTypeSpecifier" : {
                     "localId" : "518",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "519",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "509",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "516",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "517",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "510",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "511",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "512",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "513",
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
                  "localId" : "520",
                  "distinct" : false,
                  "resultTypeSpecifier" : {
                     "localId" : "522",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "523",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "521",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "530",
            "name" : "allTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "530",
                  "s" : [ {
                     "value" : [ "","define ","allTuples",": " ]
                  }, {
                     "r" : "588",
                     "s" : [ {
                        "s" : [ {
                           "r" : "531",
                           "s" : [ {
                              "r" : "532",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "532",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "533",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "534",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "535",
                                          "value" : [ "b",":","2" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "541",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "542",
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "543",
                                          "value" : [ "b",": ","3" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "549",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "550",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "551",
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
                        "r" : "575",
                        "s" : [ {
                           "value" : [ "return all " ]
                        }, {
                           "r" : "576",
                           "s" : [ {
                              "value" : [ "T" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "595",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "596",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "597",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "598",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "599",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "600",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "588",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "589",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "590",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "591",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "592",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "593",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "594",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "531",
                  "alias" : "T",
                  "resultTypeSpecifier" : {
                     "localId" : "569",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "570",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "571",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "572",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "573",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "574",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "532",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "563",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "564",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "565",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "566",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "567",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "568",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "element" : [ {
                        "localId" : "533",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "536",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "537",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "538",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "539",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "540",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "534",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "535",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "541",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "544",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "545",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "546",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "547",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "548",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "542",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "543",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "549",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "552",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "553",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "554",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }, {
                              "localId" : "555",
                              "name" : "b",
                              "elementType" : {
                                 "localId" : "556",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "550",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "551",
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
                  "localId" : "575",
                  "distinct" : false,
                  "resultTypeSpecifier" : {
                     "localId" : "582",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "583",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "584",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "585",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "586",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "587",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "576",
                     "name" : "T",
                     "type" : "AliasRef",
                     "resultTypeSpecifier" : {
                        "localId" : "577",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "578",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "579",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "580",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "581",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "495",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "encounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","encounters",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "r" : "214",
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
               "localId" : "224",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "225",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "221",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "223",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "213",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "219",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "220",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "217",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "218",
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
            "localId" : "227",
            "name" : "conditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","conditions",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "s" : [ {
                           "r" : "228",
                           "s" : [ {
                              "r" : "229",
                              "s" : [ {
                                 "r" : "229",
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
               "localId" : "239",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "240",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "236",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "237",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "238",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "228",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "234",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "235",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "229",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "232",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "233",
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
            "localId" : "242",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "firstEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","firstEncounter",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "s" : [ {
                              "r" : "243",
                              "s" : [ {
                                 "r" : "244",
                                 "s" : [ {
                                    "r" : "244",
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
               "localId" : "258",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "First",
               "signature" : [ {
                  "localId" : "259",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "260",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "251",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "252",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "253",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "243",
                     "alias" : "E",
                     "resultTypeSpecifier" : {
                        "localId" : "249",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "250",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "244",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "247",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "248",
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
            "localId" : "262",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "name" : "firstCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","firstCondition",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "s" : [ {
                              "r" : "263",
                              "s" : [ {
                                 "r" : "264",
                                 "s" : [ {
                                    "r" : "264",
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
                           "r" : "271",
                           "s" : [ {
                              "value" : [ "where " ]
                           }, {
                              "r" : "271",
                              "s" : [ {
                                 "r" : "273",
                                 "s" : [ {
                                    "r" : "272",
                                    "s" : [ {
                                       "value" : [ "C" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "273",
                                    "s" : [ {
                                       "value" : [ "id" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " ","="," " ]
                              }, {
                                 "r" : "274",
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
               "localId" : "284",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "type" : "First",
               "signature" : [ {
                  "localId" : "285",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "286",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "277",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "278",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "279",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "263",
                     "alias" : "C",
                     "resultTypeSpecifier" : {
                        "localId" : "269",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "270",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "264",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "267",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "268",
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
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "275",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "276",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "273",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "274",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
                     } ]
                  }
               }
            }
         }, {
            "localId" : "288",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "singleAlias",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","singleAlias",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "s" : [ {
                           "r" : "289",
                           "s" : [ {
                              "r" : "290",
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
               "localId" : "291",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Query",
               "source" : [ {
                  "localId" : "289",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "290",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ]
            }
         }, {
            "localId" : "293",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "singleAliasWhere",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWhere",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "s" : [ {
                           "r" : "294",
                           "s" : [ {
                              "r" : "295",
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
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "299",
                           "s" : [ {
                              "r" : "296",
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
               "localId" : "301",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Query",
               "source" : [ {
                  "localId" : "294",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "295",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Not",
                  "signature" : [ {
                     "localId" : "300",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "IsNull",
                     "signature" : [ {
                        "localId" : "298",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "296",
                        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "name" : "E",
                        "type" : "AliasRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "303",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "singleAliasWhereToNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWhereToNull",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "s" : [ {
                           "r" : "304",
                           "s" : [ {
                              "r" : "305",
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
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "312",
                           "s" : [ {
                              "r" : "307",
                              "s" : [ {
                                 "r" : "306",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "307",
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
               "localId" : "314",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Query",
               "source" : [ {
                  "localId" : "304",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "305",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "312",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "IsNull",
                  "signature" : [ {
                     "localId" : "313",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "307",
                     "path" : "period",
                     "scope" : "E",
                     "type" : "Property",
                     "resultTypeSpecifier" : {
                        "localId" : "310",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "311",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "316",
            "name" : "singleAliases",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "","define ","singleAliases",": " ]
                  }, {
                     "r" : "325",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "r" : "318",
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
                           "r" : "319",
                           "s" : [ {
                              "r" : "320",
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
               "localId" : "331",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "332",
                  "name" : "E",
                  "elementType" : {
                     "localId" : "333",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "334",
                  "name" : "C",
                  "elementType" : {
                     "localId" : "335",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "325",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "326",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "327",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "328",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "329",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "330",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "source" : [ {
                  "localId" : "317",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "318",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "319",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "320",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "321",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "322",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "323",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "324",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "337",
            "name" : "singleAliasesAndList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "337",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasesAndList",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "338",
                           "s" : [ {
                              "r" : "339",
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
                           "r" : "340",
                           "s" : [ {
                              "r" : "341",
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
                           "r" : "342",
                           "s" : [ {
                              "r" : "343",
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
               "localId" : "362",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "363",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "364",
                     "name" : "E",
                     "elementType" : {
                        "localId" : "365",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "366",
                     "name" : "C",
                     "elementType" : {
                        "localId" : "367",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "368",
                     "name" : "Con",
                     "elementType" : {
                        "localId" : "369",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "353",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "354",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "355",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "356",
                        "name" : "E",
                        "elementType" : {
                           "localId" : "357",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "358",
                        "name" : "C",
                        "elementType" : {
                           "localId" : "359",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "360",
                        "name" : "Con",
                        "elementType" : {
                           "localId" : "361",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "338",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "339",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "340",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "341",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "342",
                  "alias" : "Con",
                  "resultTypeSpecifier" : {
                     "localId" : "346",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "347",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "343",
                     "name" : "conditions",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "344",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "345",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "348",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "349",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "350",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "351",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "Con",
                        "value" : {
                           "localId" : "352",
                           "name" : "Con",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "371",
            "name" : "singleAliasWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "371",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWith",":  " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "s" : [ {
                           "r" : "372",
                           "s" : [ {
                              "r" : "373",
                              "s" : [ {
                                 "r" : "373",
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
                        "r" : "388",
                        "s" : [ {
                           "value" : [ "with " ]
                        }, {
                           "r" : "380",
                           "s" : [ {
                              "r" : "381",
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
                           "r" : "382",
                           "s" : [ {
                              "r" : "384",
                              "s" : [ {
                                 "r" : "383",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "384",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "385",
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
               "localId" : "392",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "393",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "389",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "390",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "391",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "372",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "378",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "379",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "373",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "376",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "377",
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
                  "localId" : "388",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "type" : "With",
                  "expression" : {
                     "localId" : "381",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "382",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "386",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "387",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "384",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "385",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "395",
            "name" : "singleAliasWithOut",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "395",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithOut",":  " ]
                  }, {
                     "r" : "413",
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
                        "r" : "412",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "404",
                           "s" : [ {
                              "r" : "405",
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
                           "r" : "406",
                           "s" : [ {
                              "r" : "408",
                              "s" : [ {
                                 "r" : "407",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "408",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "409",
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
               "localId" : "416",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "417",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
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
                  "localId" : "412",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "type" : "Without",
                  "expression" : {
                     "localId" : "405",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "406",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "410",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "411",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "408",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "409",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "419",
            "name" : "singleAliasWithEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "419",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithEmpty",":  " ]
                  }, {
                     "r" : "437",
                     "s" : [ {
                        "s" : [ {
                           "r" : "420",
                           "s" : [ {
                              "r" : "421",
                              "s" : [ {
                                 "r" : "421",
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
                        "r" : "436",
                        "s" : [ {
                           "value" : [ "with " ]
                        }, {
                           "r" : "428",
                           "s" : [ {
                              "r" : "429",
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
                           "r" : "430",
                           "s" : [ {
                              "r" : "432",
                              "s" : [ {
                                 "r" : "431",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "432",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "433",
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
               "localId" : "440",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "441",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "437",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "438",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "439",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "420",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "426",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "427",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "421",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "424",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "425",
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
                  "localId" : "436",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "type" : "With",
                  "expression" : {
                     "localId" : "429",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "430",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "434",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "435",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "432",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "433",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "443",
            "name" : "singleAliasWithOutEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "443",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithOutEmpty",":  " ]
                  }, {
                     "r" : "461",
                     "s" : [ {
                        "s" : [ {
                           "r" : "444",
                           "s" : [ {
                              "r" : "445",
                              "s" : [ {
                                 "r" : "445",
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
                        "r" : "460",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "452",
                           "s" : [ {
                              "r" : "453",
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
                           "r" : "454",
                           "s" : [ {
                              "r" : "456",
                              "s" : [ {
                                 "r" : "455",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "456",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "457",
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
               "localId" : "464",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "465",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "461",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "462",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "463",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "444",
                  "alias" : "E",
                  "resultTypeSpecifier" : {
                     "localId" : "450",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "451",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "445",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "448",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "449",
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
                  "localId" : "460",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "C",
                  "type" : "Without",
                  "expression" : {
                     "localId" : "453",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "454",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "Equal",
                     "signature" : [ {
                        "localId" : "458",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "459",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "456",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "457",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "467",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "asNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "467",
                  "s" : [ {
                     "r" : "468",
                     "value" : [ "","define ","asNull",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "468",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Null"
            }
         }, {
            "localId" : "470",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "nullQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "470",
                  "s" : [ {
                     "value" : [ "","define ","nullQuery",": " ]
                  }, {
                     "r" : "473",
                     "s" : [ {
                        "s" : [ {
                           "r" : "471",
                           "s" : [ {
                              "r" : "472",
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
               "localId" : "473",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Query",
               "source" : [ {
                  "localId" : "471",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "472",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "name" : "asNull",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ]
            }
         }, {
            "localId" : "475",
            "name" : "singleAliasReturnTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "475",
                  "s" : [ {
                     "value" : [ "//define singleAliasWith: firstEncounter E with [Condition] C\n//                         such that C.id = 'http://cqframework.org/3/2'\n//define singleAliasWithNull: firstEncounter E with conditions C\n//                        such that C.id is null\n","define ","singleAliasReturnTuple",": " ]
                  }, {
                     "r" : "487",
                     "s" : [ {
                        "s" : [ {
                           "r" : "476",
                           "s" : [ {
                              "r" : "477",
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
                        "r" : "478",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "479",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "480",
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
               "localId" : "491",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "492",
                  "name" : "a",
                  "elementType" : {
                     "localId" : "493",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "487",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "488",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "489",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "490",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "source" : [ {
                  "localId" : "476",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "477",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "478",
                  "resultTypeSpecifier" : {
                     "localId" : "484",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "485",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "486",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "expression" : {
                     "localId" : "479",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
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
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "480",
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
            "localId" : "495",
            "name" : "singleAliasReturnList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "495",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasReturnList",": " ]
                  }, {
                     "r" : "508",
                     "s" : [ {
                        "s" : [ {
                           "r" : "496",
                           "s" : [ {
                              "r" : "497",
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
                        "r" : "498",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "499",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "500",
                              "s" : [ {
                                 "value" : [ "'foo'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "501",
                              "s" : [ {
                                 "value" : [ "'bar'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "502",
                              "s" : [ {
                                 "value" : [ "'baz'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "503",
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
               "localId" : "511",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "512",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "508",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "509",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "510",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "496",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "497",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "498",
                  "resultTypeSpecifier" : {
                     "localId" : "506",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "507",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "499",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "504",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "505",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "500",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "501",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "502",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "503",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "497",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "noStartingAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","noStartingAggregation",":\n " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "214",
                                 "s" : [ {
                                    "r" : "215",
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
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "aggregate ","T"," : " ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "r" : "236",
                              "s" : [ {
                                 "value" : [ "Coalesce","(" ]
                              }, {
                                 "r" : "230",
                                 "s" : [ {
                                    "value" : [ "T" ]
                                 } ]
                              }, {
                                 "r" : "231",
                                 "value" : [ ", ","1",")" ]
                              } ]
                           }, {
                              "value" : [ " * " ]
                           }, {
                              "r" : "239",
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
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "R",
                  "resultTypeSpecifier" : {
                     "localId" : "224",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "225",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "222",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "223",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "215",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "216",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "219",
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
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "identifier" : "T",
                  "expression" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Multiply",
                     "signature" : [ {
                        "localId" : "241",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "242",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "240",
                        "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "236",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Coalesce",
                           "signature" : [ {
                              "localId" : "237",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "238",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           } ],
                           "operand" : [ {
                              "localId" : "230",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "name" : "T",
                              "type" : "QueryLetRef"
                           }, {
                              "localId" : "231",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           } ]
                        }
                     }, {
                        "localId" : "239",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "R",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "245",
            "name" : "encounterPeriods",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","encounterPeriods",":\n  " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "s" : [ {
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
                              "value" : [ " ","e" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n    " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "r" : "255",
                              "s" : [ {
                                 "value" : [ "e" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "256",
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
               "localId" : "268",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "269",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            },
            "expression" : {
               "localId" : "264",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "265",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "266",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "267",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "source" : [ {
                  "localId" : "246",
                  "alias" : "e",
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
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "254",
                  "resultTypeSpecifier" : {
                     "localId" : "261",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "262",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "263",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "expression" : {
                     "localId" : "256",
                     "path" : "period",
                     "scope" : "e",
                     "type" : "Property",
                     "resultTypeSpecifier" : {
                        "localId" : "259",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "260",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "272",
            "name" : "expressionStartingAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","expressionStartingAggregation",":\n  " ]
                  }, {
                     "r" : "398",
                     "s" : [ {
                        "s" : [ {
                           "r" : "273",
                           "s" : [ {
                              "r" : "274",
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
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "aggregate ","R"," " ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "starting (" ]
                           }, {
                              "r" : "282",
                              "s" : [ {
                                 "r" : "283",
                                 "value" : [ "List{}"," as " ]
                              }, {
                                 "r" : "286",
                                 "s" : [ {
                                    "value" : [ "List<" ]
                                 }, {
                                    "r" : "287",
                                    "s" : [ {
                                       "value" : [ "Interval<" ]
                                    }, {
                                       "r" : "288",
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
                           "r" : "385",
                           "s" : [ {
                              "r" : "305",
                              "s" : [ {
                                 "value" : [ "R" ]
                              } ]
                           }, {
                              "value" : [ " union " ]
                           }, {
                              "r" : "309",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "309",
                                 "s" : [ {
                                    "value" : [ "{\n      " ]
                                 }, {
                                    "r" : "376",
                                    "s" : [ {
                                       "s" : [ {
                                          "r" : "310",
                                          "s" : [ {
                                             "r" : "311",
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
                                          "r" : "316",
                                          "s" : [ {
                                             "value" : [ "S",": " ]
                                          }, {
                                             "r" : "358",
                                             "s" : [ {
                                                "value" : [ "Max","(" ]
                                             }, {
                                                "r" : "317",
                                                "s" : [ {
                                                   "value" : [ "{ " ]
                                                }, {
                                                   "r" : "318",
                                                   "s" : [ {
                                                      "r" : "319",
                                                      "s" : [ {
                                                         "value" : [ "end of " ]
                                                      }, {
                                                         "r" : "329",
                                                         "s" : [ {
                                                            "value" : [ "Last","(" ]
                                                         }, {
                                                            "r" : "320",
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
                                                      "r" : "337",
                                                      "s" : [ {
                                                         "value" : [ "1 ","day" ]
                                                      } ]
                                                   } ]
                                                }, {
                                                   "value" : [ ", " ]
                                                }, {
                                                   "r" : "348",
                                                   "s" : [ {
                                                      "r" : "340",
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
                                          "r" : "361",
                                          "s" : [ {
                                             "value" : [ "E",": " ]
                                          }, {
                                             "r" : "362",
                                             "s" : [ {
                                                "value" : [ "start of " ]
                                             }, {
                                                "r" : "363",
                                                "s" : [ {
                                                   "value" : [ "X" ]
                                                } ]
                                             } ]
                                          } ]
                                       } ]
                                    }, {
                                       "value" : [ "\n        " ]
                                    }, {
                                       "r" : "368",
                                       "s" : [ {
                                          "value" : [ "return " ]
                                       }, {
                                          "r" : "371",
                                          "s" : [ {
                                             "value" : [ "Interval[" ]
                                          }, {
                                             "r" : "369",
                                             "s" : [ {
                                                "value" : [ "S" ]
                                             } ]
                                          }, {
                                             "value" : [ ", " ]
                                          }, {
                                             "r" : "370",
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
            "expression" : {
               "localId" : "398",
               "type" : "Query",
               "resultTypeSpecifier" : {
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
               },
               "source" : [ {
                  "localId" : "273",
                  "alias" : "M",
                  "resultTypeSpecifier" : {
                     "localId" : "278",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "279",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "280",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "expression" : {
                     "localId" : "274",
                     "name" : "encounterPeriods",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "275",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "276",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "277",
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
                  "localId" : "281",
                  "identifier" : "R",
                  "resultTypeSpecifier" : {
                     "localId" : "395",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "396",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "397",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "expression" : {
                     "localId" : "385",
                     "type" : "Union",
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
                     "signature" : [ {
                        "localId" : "386",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "387",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "388",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }, {
                        "localId" : "389",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "390",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "391",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     } ],
                     "operand" : [ {
                        "localId" : "305",
                        "name" : "R",
                        "type" : "QueryLetRef",
                        "resultTypeSpecifier" : {
                           "localId" : "306",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "307",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "308",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     }, {
                        "localId" : "309",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "382",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "383",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "384",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        },
                        "element" : [ {
                           "localId" : "376",
                           "type" : "Query",
                           "resultTypeSpecifier" : {
                              "localId" : "377",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "378",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           },
                           "source" : [ {
                              "localId" : "310",
                              "alias" : "X",
                              "resultTypeSpecifier" : {
                                 "localId" : "314",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "315",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              },
                              "expression" : {
                                 "localId" : "311",
                                 "name" : "M",
                                 "type" : "AliasRef",
                                 "resultTypeSpecifier" : {
                                    "localId" : "312",
                                    "type" : "IntervalTypeSpecifier",
                                    "pointType" : {
                                       "localId" : "313",
                                       "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              }
                           } ],
                           "let" : [ {
                              "localId" : "316",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "identifier" : "S",
                              "expression" : {
                                 "localId" : "358",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "Max",
                                 "signature" : [ {
                                    "localId" : "359",
                                    "type" : "ListTypeSpecifier",
                                    "elementType" : {
                                       "localId" : "360",
                                       "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ],
                                 "source" : {
                                    "localId" : "317",
                                    "type" : "List",
                                    "resultTypeSpecifier" : {
                                       "localId" : "352",
                                       "type" : "ListTypeSpecifier",
                                       "elementType" : {
                                          "localId" : "353",
                                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                          "type" : "NamedTypeSpecifier"
                                       }
                                    },
                                    "element" : [ {
                                       "localId" : "318",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "Add",
                                       "signature" : [ {
                                          "localId" : "338",
                                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "339",
                                          "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                                          "type" : "NamedTypeSpecifier"
                                       } ],
                                       "operand" : [ {
                                          "localId" : "319",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                          "type" : "End",
                                          "signature" : [ {
                                             "localId" : "335",
                                             "type" : "IntervalTypeSpecifier",
                                             "pointType" : {
                                                "localId" : "336",
                                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                                "type" : "NamedTypeSpecifier"
                                             }
                                          } ],
                                          "operand" : {
                                             "localId" : "329",
                                             "type" : "Last",
                                             "resultTypeSpecifier" : {
                                                "localId" : "333",
                                                "type" : "IntervalTypeSpecifier",
                                                "pointType" : {
                                                   "localId" : "334",
                                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                                   "type" : "NamedTypeSpecifier"
                                                }
                                             },
                                             "signature" : [ {
                                                "localId" : "330",
                                                "type" : "ListTypeSpecifier",
                                                "elementType" : {
                                                   "localId" : "331",
                                                   "type" : "IntervalTypeSpecifier",
                                                   "pointType" : {
                                                      "localId" : "332",
                                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                                      "type" : "NamedTypeSpecifier"
                                                   }
                                                }
                                             } ],
                                             "source" : {
                                                "localId" : "320",
                                                "name" : "R",
                                                "type" : "QueryLetRef",
                                                "resultTypeSpecifier" : {
                                                   "localId" : "321",
                                                   "type" : "ListTypeSpecifier",
                                                   "elementType" : {
                                                      "localId" : "322",
                                                      "type" : "IntervalTypeSpecifier",
                                                      "pointType" : {
                                                         "localId" : "323",
                                                         "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                                         "type" : "NamedTypeSpecifier"
                                                      }
                                                   }
                                                }
                                             }
                                          }
                                       }, {
                                          "localId" : "337",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                                          "value" : 1,
                                          "unit" : "day",
                                          "type" : "Quantity"
                                       } ]
                                    }, {
                                       "localId" : "348",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "DateTime",
                                       "signature" : [ {
                                          "localId" : "349",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "350",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "351",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       } ],
                                       "year" : {
                                          "localId" : "340",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "1970",
                                          "type" : "Literal"
                                       },
                                       "month" : {
                                          "localId" : "341",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "01",
                                          "type" : "Literal"
                                       },
                                       "day" : {
                                          "localId" : "342",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "01",
                                          "type" : "Literal"
                                       }
                                    } ]
                                 }
                              }
                           }, {
                              "localId" : "361",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "identifier" : "E",
                              "expression" : {
                                 "localId" : "362",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "Start",
                                 "signature" : [ {
                                    "localId" : "366",
                                    "type" : "IntervalTypeSpecifier",
                                    "pointType" : {
                                       "localId" : "367",
                                       "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ],
                                 "operand" : {
                                    "localId" : "363",
                                    "name" : "X",
                                    "type" : "AliasRef",
                                    "resultTypeSpecifier" : {
                                       "localId" : "364",
                                       "type" : "IntervalTypeSpecifier",
                                       "pointType" : {
                                          "localId" : "365",
                                          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                          "type" : "NamedTypeSpecifier"
                                       }
                                    }
                                 }
                              }
                           } ],
                           "relationship" : [ ],
                           "return" : {
                              "localId" : "368",
                              "resultTypeSpecifier" : {
                                 "localId" : "374",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "375",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              },
                              "expression" : {
                                 "localId" : "371",
                                 "lowClosed" : true,
                                 "highClosed" : true,
                                 "type" : "Interval",
                                 "resultTypeSpecifier" : {
                                    "localId" : "372",
                                    "type" : "IntervalTypeSpecifier",
                                    "pointType" : {
                                       "localId" : "373",
                                       "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 },
                                 "low" : {
                                    "localId" : "369",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "name" : "S",
                                    "type" : "QueryLetRef"
                                 },
                                 "high" : {
                                    "localId" : "370",
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
                     "localId" : "282",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "297",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "298",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "299",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "283",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "284",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "285",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ ]
                     },
                     "asTypeSpecifier" : {
                        "localId" : "286",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "291",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "292",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "293",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        },
                        "elementType" : {
                           "localId" : "287",
                           "type" : "IntervalTypeSpecifier",
                           "resultTypeSpecifier" : {
                              "localId" : "289",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "290",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           },
                           "pointType" : {
                              "localId" : "288",
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
            "localId" : "406",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "literalStartingAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "406",
                  "s" : [ {
                     "value" : [ "","define ","literalStartingAggregation",":\n  " ]
                  }, {
                     "r" : "440",
                     "s" : [ {
                        "s" : [ {
                           "r" : "407",
                           "s" : [ {
                              "r" : "408",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "408",
                                 "s" : [ {
                                    "r" : "409",
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
                        "r" : "425",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","str"," " ]
                        }, {
                           "r" : "426",
                           "s" : [ {
                              "value" : [ "starting " ]
                           }, {
                              "r" : "426",
                              "s" : [ {
                                 "value" : [ "'Start'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "439",
                           "s" : [ {
                              "r" : "430",
                              "s" : [ {
                                 "value" : [ "str" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "435",
                              "s" : [ {
                                 "value" : [ "ToString","(" ]
                              }, {
                                 "r" : "431",
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
               "localId" : "440",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Query",
               "source" : [ {
                  "localId" : "407",
                  "alias" : "Num",
                  "resultTypeSpecifier" : {
                     "localId" : "423",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "424",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "408",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "421",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "422",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "409",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "410",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "411",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "412",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "413",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "414",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "415",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "416",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "417",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "418",
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
                  "localId" : "425",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "identifier" : "str",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "439",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "430",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "str",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "435",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "ToString",
                        "signature" : [ {
                           "localId" : "436",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "431",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "Num",
                           "type" : "AliasRef"
                        }
                     } ]
                  },
                  "starting" : {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Start",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "442",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "quantityStartingAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "442",
                  "s" : [ {
                     "value" : [ "","define ","quantityStartingAggregation",":\n " ]
                  }, {
                     "r" : "465",
                     "s" : [ {
                        "s" : [ {
                           "r" : "443",
                           "s" : [ {
                              "r" : "444",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "444",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "445",
                                    "s" : [ {
                                       "value" : [ "1 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "446",
                                    "s" : [ {
                                       "value" : [ "2 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "447",
                                    "s" : [ {
                                       "value" : [ "3 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "448",
                                    "s" : [ {
                                       "value" : [ "4 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "449",
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
                        "r" : "456",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","Sum"," " ]
                        }, {
                           "r" : "457",
                           "s" : [ {
                              "value" : [ "starting " ]
                           }, {
                              "r" : "457",
                              "s" : [ {
                                 "value" : [ "0 ","'ml'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ": " ]
                        }, {
                           "r" : "460",
                           "s" : [ {
                              "r" : "461",
                              "s" : [ {
                                 "value" : [ "Sum" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "462",
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
               "localId" : "465",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Query",
               "source" : [ {
                  "localId" : "443",
                  "alias" : "Num",
                  "resultTypeSpecifier" : {
                     "localId" : "454",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "455",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "444",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "452",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "453",
                           "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "445",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 1,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "446",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 2,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "447",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 3,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "448",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 4,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "449",
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
                  "localId" : "456",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "identifier" : "Sum",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "460",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "463",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "464",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "461",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "462",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }
               }
            }
         }, {
            "localId" : "467",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "allAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "467",
                  "s" : [ {
                     "value" : [ "","define ","allAggregation",":\n " ]
                  }, {
                     "r" : "495",
                     "s" : [ {
                        "s" : [ {
                           "r" : "468",
                           "s" : [ {
                              "r" : "469",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "469",
                                 "s" : [ {
                                    "r" : "470",
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
                        "r" : "486",
                        "s" : [ {
                           "value" : [ "aggregate all ","Sum"," " ]
                        }, {
                           "r" : "487",
                           "s" : [ {
                              "r" : "487",
                              "value" : [ "starting ","0" ]
                           } ]
                        }, {
                           "value" : [ ": " ]
                        }, {
                           "r" : "490",
                           "s" : [ {
                              "r" : "491",
                              "s" : [ {
                                 "value" : [ "Sum" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "492",
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
               "localId" : "495",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Query",
               "source" : [ {
                  "localId" : "468",
                  "alias" : "Num",
                  "resultTypeSpecifier" : {
                     "localId" : "484",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "485",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "469",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "482",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "483",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "470",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "471",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "472",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "473",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "474",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "475",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "476",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "477",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "478",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "479",
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
                  "localId" : "486",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "identifier" : "Sum",
                  "distinct" : false,
                  "expression" : {
                     "localId" : "490",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "493",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "494",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "491",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "492",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "497",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "distinctAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "497",
                  "s" : [ {
                     "value" : [ "","define ","distinctAggregation",":\n " ]
                  }, {
                     "r" : "525",
                     "s" : [ {
                        "s" : [ {
                           "r" : "498",
                           "s" : [ {
                              "r" : "499",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "499",
                                 "s" : [ {
                                    "r" : "500",
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
                        "r" : "516",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","Sum"," " ]
                        }, {
                           "r" : "517",
                           "s" : [ {
                              "r" : "517",
                              "value" : [ "starting ","0" ]
                           } ]
                        }, {
                           "value" : [ ": " ]
                        }, {
                           "r" : "520",
                           "s" : [ {
                              "r" : "521",
                              "s" : [ {
                                 "value" : [ "Sum" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "522",
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
               "localId" : "525",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Query",
               "source" : [ {
                  "localId" : "498",
                  "alias" : "Num",
                  "resultTypeSpecifier" : {
                     "localId" : "514",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "515",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "499",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "512",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "513",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "500",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "501",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
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
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "505",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "506",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
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
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "509",
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
                  "localId" : "516",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "identifier" : "Sum",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "520",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "523",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "524",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "521",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "522",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "517",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "424",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
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
            "name" : "NullListQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NullListQuery",":\n  " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "s" : [ {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "214",
                                 "s" : [ {
                                    "r" : "215",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "216",
                                    "s" : [ {
                                       "value" : [ "List<" ]
                                    }, {
                                       "r" : "217",
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
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "Tuple {\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "start",": " ]
                              }, {
                                 "r" : "228",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "230",
                                    "s" : [ {
                                       "r" : "229",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "230",
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
                                 "r" : "237",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "239",
                                    "s" : [ {
                                       "r" : "238",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "239",
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
               "localId" : "264",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "265",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "266",
                     "name" : "start",
                     "elementType" : {
                        "localId" : "267",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "268",
                     "name" : "end",
                     "elementType" : {
                        "localId" : "269",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "257",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "258",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "259",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "260",
                        "name" : "start",
                        "elementType" : {
                           "localId" : "261",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "262",
                        "name" : "end",
                        "elementType" : {
                           "localId" : "263",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "213",
                  "alias" : "X",
                  "resultTypeSpecifier" : {
                     "localId" : "224",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "225",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "214",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "222",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "223",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "215",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "216",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "218",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "219",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "elementType" : {
                           "localId" : "217",
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
                  "localId" : "226",
                  "resultTypeSpecifier" : {
                     "localId" : "251",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "252",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "253",
                           "name" : "start",
                           "elementType" : {
                              "localId" : "254",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "255",
                           "name" : "end",
                           "elementType" : {
                              "localId" : "256",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "227",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "246",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "247",
                           "name" : "start",
                           "elementType" : {
                              "localId" : "248",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "249",
                           "name" : "end",
                           "elementType" : {
                              "localId" : "250",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "start",
                        "value" : {
                           "localId" : "228",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "235",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "236",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "230",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "233",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "234",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "end",
                        "value" : {
                           "localId" : "237",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "244",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "245",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "239",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "242",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "243",
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
            "localId" : "271",
            "name" : "NullObjectQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","NullObjectQuery",":\n  " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "s" : [ {
                           "r" : "272",
                           "s" : [ {
                              "r" : "273",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "273",
                                 "s" : [ {
                                    "r" : "274",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "275",
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
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "277",
                           "s" : [ {
                              "value" : [ "Tuple {\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "start",": " ]
                              }, {
                                 "r" : "278",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "280",
                                    "s" : [ {
                                       "r" : "279",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "280",
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
                                 "r" : "287",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "289",
                                    "s" : [ {
                                       "r" : "288",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "289",
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
            "expression" : {
               "localId" : "306",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "307",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "308",
                     "name" : "start",
                     "elementType" : {
                        "localId" : "309",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "310",
                     "name" : "end",
                     "elementType" : {
                        "localId" : "311",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "source" : [ {
                  "localId" : "272",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "alias" : "X",
                  "expression" : {
                     "localId" : "273",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "274",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "275",
                        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "276",
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
                  "expression" : {
                     "localId" : "277",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "296",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "297",
                           "name" : "start",
                           "elementType" : {
                              "localId" : "298",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "299",
                           "name" : "end",
                           "elementType" : {
                              "localId" : "300",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "start",
                        "value" : {
                           "localId" : "278",
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
                              "localId" : "280",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
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
                        }
                     }, {
                        "name" : "end",
                        "value" : {
                           "localId" : "287",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "294",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "295",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "289",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "292",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "293",
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
            "localId" : "318",
            "name" : "AllNullMultiSourceQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","AllNullMultiSourceQuery",":\n  " ]
                  }, {
                     "r" : "402",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from\n    " ]
                        }, {
                           "r" : "319",
                           "s" : [ {
                              "r" : "320",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "320",
                                 "s" : [ {
                                    "r" : "321",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "322",
                                    "s" : [ {
                                       "value" : [ "List<" ]
                                    }, {
                                       "r" : "323",
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
                           "r" : "332",
                           "s" : [ {
                              "r" : "333",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "333",
                                 "s" : [ {
                                    "r" : "334",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "335",
                                    "s" : [ {
                                       "value" : [ "List<" ]
                                    }, {
                                       "r" : "336",
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
                        "r" : "345",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "346",
                           "s" : [ {
                              "value" : [ "Tuple {\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "cStart",": " ]
                              }, {
                                 "r" : "347",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "349",
                                    "s" : [ {
                                       "r" : "348",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "349",
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
                                 "r" : "356",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "358",
                                    "s" : [ {
                                       "r" : "357",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "358",
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
                                 "r" : "365",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "367",
                                    "s" : [ {
                                       "r" : "366",
                                       "s" : [ {
                                          "value" : [ "Y" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "367",
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
                                 "r" : "374",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "376",
                                    "s" : [ {
                                       "r" : "375",
                                       "s" : [ {
                                          "value" : [ "Y" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "376",
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
               "localId" : "413",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "414",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "415",
                     "name" : "cStart",
                     "elementType" : {
                        "localId" : "416",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "417",
                     "name" : "cEnd",
                     "elementType" : {
                        "localId" : "418",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "419",
                     "name" : "eStart",
                     "elementType" : {
                        "localId" : "420",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "421",
                     "name" : "eEnd",
                     "elementType" : {
                        "localId" : "422",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "402",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "403",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "404",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "405",
                        "name" : "cStart",
                        "elementType" : {
                           "localId" : "406",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "407",
                        "name" : "cEnd",
                        "elementType" : {
                           "localId" : "408",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "409",
                        "name" : "eStart",
                        "elementType" : {
                           "localId" : "410",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "411",
                        "name" : "eEnd",
                        "elementType" : {
                           "localId" : "412",
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "319",
                  "alias" : "X",
                  "resultTypeSpecifier" : {
                     "localId" : "330",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "331",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "320",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "328",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "329",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "321",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "322",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "324",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "325",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "elementType" : {
                           "localId" : "323",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "localId" : "332",
                  "alias" : "Y",
                  "resultTypeSpecifier" : {
                     "localId" : "343",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "344",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "333",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "341",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "342",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "334",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "335",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "337",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "338",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "elementType" : {
                           "localId" : "336",
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
                  "localId" : "345",
                  "resultTypeSpecifier" : {
                     "localId" : "392",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "393",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "394",
                           "name" : "cStart",
                           "elementType" : {
                              "localId" : "395",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "396",
                           "name" : "cEnd",
                           "elementType" : {
                              "localId" : "397",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "398",
                           "name" : "eStart",
                           "elementType" : {
                              "localId" : "399",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "400",
                           "name" : "eEnd",
                           "elementType" : {
                              "localId" : "401",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "346",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "383",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "384",
                           "name" : "cStart",
                           "elementType" : {
                              "localId" : "385",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "386",
                           "name" : "cEnd",
                           "elementType" : {
                              "localId" : "387",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "388",
                           "name" : "eStart",
                           "elementType" : {
                              "localId" : "389",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "390",
                           "name" : "eEnd",
                           "elementType" : {
                              "localId" : "391",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "cStart",
                        "value" : {
                           "localId" : "347",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "354",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "355",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "349",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "352",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "353",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "cEnd",
                        "value" : {
                           "localId" : "356",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "363",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "364",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "358",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "361",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "362",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "eStart",
                        "value" : {
                           "localId" : "365",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "372",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "373",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "367",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "370",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "371",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "eEnd",
                        "value" : {
                           "localId" : "374",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "381",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "382",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "376",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "379",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "380",
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
            "localId" : "424",
            "name" : "SomeNullMultiSourceQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","SomeNullMultiSourceQuery",":\n  " ]
                  }, {
                     "r" : "503",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from\n    " ]
                        }, {
                           "r" : "425",
                           "s" : [ {
                              "r" : "426",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "426",
                                 "s" : [ {
                                    "r" : "427",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "428",
                                    "s" : [ {
                                       "value" : [ "List<" ]
                                    }, {
                                       "r" : "429",
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
                           "r" : "438",
                           "s" : [ {
                              "r" : "439",
                              "s" : [ {
                                 "r" : "439",
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
                        "r" : "446",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "447",
                           "s" : [ {
                              "value" : [ "Tuple {\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "cStart",": " ]
                              }, {
                                 "r" : "448",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "450",
                                    "s" : [ {
                                       "r" : "449",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "450",
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
                                 "r" : "457",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "459",
                                    "s" : [ {
                                       "r" : "458",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "459",
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
                                 "r" : "466",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "468",
                                    "s" : [ {
                                       "r" : "467",
                                       "s" : [ {
                                          "value" : [ "Y" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "468",
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
                                 "r" : "475",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "477",
                                    "s" : [ {
                                       "r" : "476",
                                       "s" : [ {
                                          "value" : [ "Y" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "477",
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
               "localId" : "514",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "515",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "516",
                     "name" : "cStart",
                     "elementType" : {
                        "localId" : "517",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "518",
                     "name" : "cEnd",
                     "elementType" : {
                        "localId" : "519",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "520",
                     "name" : "eStart",
                     "elementType" : {
                        "localId" : "521",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "522",
                     "name" : "eEnd",
                     "elementType" : {
                        "localId" : "523",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "503",
               "type" : "Query",
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
               "source" : [ {
                  "localId" : "425",
                  "alias" : "X",
                  "resultTypeSpecifier" : {
                     "localId" : "436",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "437",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "426",
                     "strict" : false,
                     "type" : "As",
                     "resultTypeSpecifier" : {
                        "localId" : "434",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "435",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "427",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "428",
                        "type" : "ListTypeSpecifier",
                        "resultTypeSpecifier" : {
                           "localId" : "430",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "431",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "elementType" : {
                           "localId" : "429",
                           "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "localId" : "438",
                  "alias" : "Y",
                  "resultTypeSpecifier" : {
                     "localId" : "444",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "445",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "439",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "442",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "443",
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
                  "localId" : "446",
                  "resultTypeSpecifier" : {
                     "localId" : "493",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "494",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "495",
                           "name" : "cStart",
                           "elementType" : {
                              "localId" : "496",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "497",
                           "name" : "cEnd",
                           "elementType" : {
                              "localId" : "498",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "499",
                           "name" : "eStart",
                           "elementType" : {
                              "localId" : "500",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "501",
                           "name" : "eEnd",
                           "elementType" : {
                              "localId" : "502",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "447",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "484",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "485",
                           "name" : "cStart",
                           "elementType" : {
                              "localId" : "486",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "487",
                           "name" : "cEnd",
                           "elementType" : {
                              "localId" : "488",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "489",
                           "name" : "eStart",
                           "elementType" : {
                              "localId" : "490",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "491",
                           "name" : "eEnd",
                           "elementType" : {
                              "localId" : "492",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "cStart",
                        "value" : {
                           "localId" : "448",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "455",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "456",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "450",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "453",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "454",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "cEnd",
                        "value" : {
                           "localId" : "457",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "464",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "465",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "459",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "462",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "463",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "eStart",
                        "value" : {
                           "localId" : "466",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "Start",
                           "signature" : [ {
                              "localId" : "473",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "474",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "468",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "471",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "472",
                                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "eEnd",
                        "value" : {
                           "localId" : "475",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "End",
                           "signature" : [ {
                              "localId" : "482",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "483",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ],
                           "operand" : {
                              "localId" : "477",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property",
                              "resultTypeSpecifier" : {
                                 "localId" : "480",
                                 "type" : "IntervalTypeSpecifier",
                                 "pointType" : {
                                    "localId" : "481",
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

