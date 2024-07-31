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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "252",
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
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "r" : "209",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "221",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "low" : {
                  "localId" : "214",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "209",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "210",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "211",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "220",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
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
            "localId" : "225",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "223",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "224",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "222",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "227",
            "name" : "EncountersDuringMP",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","EncountersDuringMP",": " ]
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
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "r" : "231",
                              "s" : [ {
                                 "r" : "230",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "231",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "233",
                              "value" : [ " ","during"," " ]
                           }, {
                              "r" : "232",
                              "s" : [ {
                                 "value" : [ "MeasurementPeriod" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "type" : "Query",
               "source" : [ {
                  "localId" : "228",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "229",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "dateRange" : {
                        "localId" : "232",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef"
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
            "localId" : "238",
            "name" : "AmbulatoryEncountersDuringMP",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncountersDuringMP",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "s" : [ {
                           "r" : "239",
                           "s" : [ {
                              "r" : "242",
                              "s" : [ {
                                 "r" : "242",
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
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "r" : "245",
                              "s" : [ {
                                 "r" : "244",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "245",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "247",
                              "value" : [ " ","during"," " ]
                           }, {
                              "r" : "246",
                              "s" : [ {
                                 "value" : [ "MeasurementPeriod" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "type" : "Query",
               "source" : [ {
                  "localId" : "239",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "242",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "codes" : {
                        "localId" : "241",
                        "name" : "Ambulatory/ED Visit",
                        "preserve" : true,
                        "type" : "ValueSetRef"
                     },
                     "dateRange" : {
                        "localId" : "246",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef"
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
            "localId" : "252",
            "name" : "AmbulatoryEncountersIncludedInMP",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncountersIncludedInMP",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "s" : [ {
                           "r" : "253",
                           "s" : [ {
                              "r" : "256",
                              "s" : [ {
                                 "r" : "256",
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
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "r" : "259",
                              "s" : [ {
                                 "r" : "258",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "259",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "261",
                              "value" : [ " ","included in"," " ]
                           }, {
                              "r" : "260",
                              "s" : [ {
                                 "value" : [ "MeasurementPeriod" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "type" : "Query",
               "source" : [ {
                  "localId" : "253",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "256",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "codes" : {
                        "localId" : "255",
                        "name" : "Ambulatory/ED Visit",
                        "preserve" : true,
                        "type" : "ValueSetRef"
                     },
                     "dateRange" : {
                        "localId" : "260",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef"
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "233",
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
                     "r" : "231",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Count","(" ]
                        }, {
                           "r" : "228",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "215",
                                 "s" : [ {
                                    "r" : "224",
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
                              "r" : "226",
                              "s" : [ {
                                 "value" : [ "return " ]
                              }, {
                                 "r" : "227",
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
               "localId" : "231",
               "type" : "Count",
               "signature" : [ ],
               "source" : {
                  "localId" : "228",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "215",
                     "alias" : "EncounterPeriod",
                     "expression" : {
                        "localId" : "224",
                        "type" : "Query",
                        "source" : [ {
                           "localId" : "223",
                           "alias" : "$this",
                           "expression" : {
                              "localId" : "216",
                              "name" : "Encounter",
                              "type" : "OperandRef"
                           }
                        } ],
                        "let" : [ ],
                        "relationship" : [ ],
                        "where" : {
                           "localId" : "220",
                           "type" : "Not",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "219",
                              "type" : "IsNull",
                              "signature" : [ ],
                              "operand" : {
                                 "localId" : "218",
                                 "path" : "period",
                                 "type" : "Property",
                                 "source" : {
                                    "localId" : "217",
                                    "name" : "$this",
                                    "type" : "AliasRef"
                                 }
                              }
                           }
                        },
                        "return" : {
                           "localId" : "225",
                           "distinct" : false,
                           "expression" : {
                              "localId" : "222",
                              "path" : "period",
                              "type" : "Property",
                              "source" : {
                                 "localId" : "221",
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
                     "localId" : "226",
                     "expression" : {
                        "localId" : "227",
                        "name" : "EncounterPeriod",
                        "type" : "AliasRef"
                     }
                  }
               }
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "Encounter",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "213",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "localId" : "233",
            "name" : "queryWithThis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","queryWithThis",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "\"FunctionWithThis\"","(" ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "235",
                                 "s" : [ {
                                    "r" : "236",
                                    "s" : [ {
                                       "r" : "236",
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
                        "r" : "239",
                        "value" : [ " ",">"," ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "238",
                  "name" : "FunctionWithThis",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "237",
                     "type" : "Query",
                     "source" : [ {
                        "localId" : "235",
                        "alias" : "E",
                        "expression" : {
                           "localId" : "236",
                           "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "Retrieve",
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
                  "localId" : "239",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "227",
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
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "r" : "209",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "221",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "low" : {
                  "localId" : "214",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "209",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "210",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "211",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "220",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
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
            "localId" : "225",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "223",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "224",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "222",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "227",
            "name" : "MPIncludedAmbulatoryEncounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","MPIncludedAmbulatoryEncounters",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "s" : [ {
                           "r" : "228",
                           "s" : [ {
                              "r" : "231",
                              "s" : [ {
                                 "r" : "231",
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
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "r" : "233",
                              "s" : [ {
                                 "value" : [ "MeasurementPeriod" ]
                              } ]
                           }, {
                              "r" : "236",
                              "value" : [ " ","includes"," " ]
                           }, {
                              "r" : "235",
                              "s" : [ {
                                 "r" : "234",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "235",
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
            "expression" : {
               "localId" : "239",
               "type" : "Query",
               "source" : [ {
                  "localId" : "228",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "231",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "localId" : "230",
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
                  "localId" : "236",
                  "type" : "Includes",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "233",
                     "name" : "MeasurementPeriod",
                     "type" : "ParameterRef"
                  }, {
                     "localId" : "235",
                     "path" : "period",
                     "scope" : "E",
                     "type" : "Property"
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "277",
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
            "name" : "msQueryWhere",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","msQueryWhere",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "r" : "228",
                              "s" : [ {
                                 "r" : "228",
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
                           "r" : "229",
                           "s" : [ {
                              "r" : "230",
                              "s" : [ {
                                 "r" : "230",
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
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "r" : "232",
                              "s" : [ {
                                 "r" : "231",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "232",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "234",
                              "value" : [ " ","included in"," " ]
                           }, {
                              "r" : "233",
                              "s" : [ {
                                 "value" : [ "MeasurementPeriod" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "Query",
               "source" : [ {
                  "localId" : "227",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "228",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "dateRange" : {
                        "localId" : "233",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef"
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               }, {
                  "localId" : "229",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "230",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "237",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "238",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "239",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "240",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "243",
            "name" : "msQueryWhere2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","msQueryWhere2",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
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
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "r" : "247",
                              "s" : [ {
                                 "r" : "247",
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
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "where  " ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "r" : "252",
                              "s" : [ {
                                 "r" : "250",
                                 "s" : [ {
                                    "r" : "249",
                                    "s" : [ {
                                       "value" : [ "E" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "250",
                                    "s" : [ {
                                       "value" : [ "period" ]
                                    } ]
                                 } ]
                              }, {
                                 "r" : "252",
                                 "value" : [ "  ","included in"," " ]
                              }, {
                                 "r" : "251",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " and " ]
                           }, {
                              "r" : "255",
                              "s" : [ {
                                 "r" : "257",
                                 "s" : [ {
                                    "r" : "256",
                                    "s" : [ {
                                       "value" : [ "C" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "257",
                                    "s" : [ {
                                       "value" : [ "id" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " ","="," " ]
                              }, {
                                 "r" : "258",
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
            "expression" : {
               "localId" : "264",
               "type" : "Query",
               "source" : [ {
                  "localId" : "244",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "245",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "dateRange" : {
                        "localId" : "251",
                        "name" : "MeasurementPeriod",
                        "type" : "ParameterRef"
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               }, {
                  "localId" : "246",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "247",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "255",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "257",
                     "path" : "id",
                     "scope" : "C",
                     "type" : "Property"
                  }, {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "http://cqframework.org/3/2",
                     "type" : "Literal"
                  } ]
               },
               "return" : {
                  "localId" : "260",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "261",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "262",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "263",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "266",
            "name" : "msQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","msQuery",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "267",
                           "s" : [ {
                              "r" : "268",
                              "s" : [ {
                                 "r" : "268",
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
                           "r" : "269",
                           "s" : [ {
                              "r" : "270",
                              "s" : [ {
                                 "r" : "270",
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
                           "value" : [ "return " ]
                        }, {
                           "r" : "272",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "E",": " ]
                              }, {
                                 "r" : "273",
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
                                 "r" : "274",
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
            "expression" : {
               "localId" : "275",
               "type" : "Query",
               "source" : [ {
                  "localId" : "267",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "268",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               }, {
                  "localId" : "269",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "270",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "271",
                  "expression" : {
                     "localId" : "272",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "273",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "274",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "277",
            "name" : "multiSourceWithArrays",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","multiSourceWithArrays",":\n  " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "278",
                           "s" : [ {
                              "r" : "279",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "279",
                                 "s" : [ {
                                    "value" : [ "List{" ]
                                 }, {
                                    "r" : "280",
                                    "s" : [ {
                                       "value" : [ "'a'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "281",
                                    "s" : [ {
                                       "value" : [ "'b'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "282",
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
                           "r" : "283",
                           "s" : [ {
                              "r" : "284",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "284",
                                 "s" : [ {
                                    "value" : [ "List{" ]
                                 }, {
                                    "r" : "285",
                                    "s" : [ {
                                       "value" : [ "{" ]
                                    }, {
                                       "r" : "286",
                                       "s" : [ {
                                          "value" : [ "'x'" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "287",
                                    "s" : [ {
                                       "value" : [ "{" ]
                                    }, {
                                       "r" : "288",
                                       "s" : [ {
                                          "value" : [ "'y'" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "289",
                                    "s" : [ {
                                       "value" : [ "{" ]
                                    }, {
                                       "r" : "290",
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
            "expression" : {
               "localId" : "295",
               "type" : "Query",
               "source" : [ {
                  "localId" : "278",
                  "alias" : "A",
                  "expression" : {
                     "localId" : "279",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "280",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "281",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "282",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  }
               }, {
                  "localId" : "283",
                  "alias" : "X",
                  "expression" : {
                     "localId" : "284",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "285",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "286",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "x",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "287",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "288",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "289",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "290",
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
                  "localId" : "291",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "292",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "293",
                           "name" : "A",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "X",
                        "value" : {
                           "localId" : "294",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "248",
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
                     "r" : "222",
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
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "with " ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "r" : "216",
                              "s" : [ {
                                 "r" : "216",
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
                           "r" : "217",
                           "s" : [ {
                              "r" : "219",
                              "s" : [ {
                                 "r" : "218",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "219",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "220",
                              "s" : [ {
                                 "value" : [ "'http://cqframework.org/3/2'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ {
                  "localId" : "221",
                  "alias" : "C",
                  "type" : "With",
                  "expression" : {
                     "localId" : "216",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  },
                  "suchThat" : {
                     "localId" : "217",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "219",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "220",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "224",
            "name" : "withQuery2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","withQuery2",":  " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "s" : [ {
                           "r" : "225",
                           "s" : [ {
                              "r" : "226",
                              "s" : [ {
                                 "r" : "226",
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
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "with " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "r" : "228",
                              "s" : [ {
                                 "r" : "228",
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
                                 "value" : [ "'http://cqframework.org/3'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "type" : "Query",
               "source" : [ {
                  "localId" : "225",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "226",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ {
                  "localId" : "233",
                  "alias" : "C",
                  "type" : "With",
                  "expression" : {
                     "localId" : "228",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  },
                  "suchThat" : {
                     "localId" : "229",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "231",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "232",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "236",
            "name" : "withOutQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","withOutQuery",":  " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "s" : [ {
                           "r" : "237",
                           "s" : [ {
                              "r" : "238",
                              "s" : [ {
                                 "r" : "238",
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
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "239",
                           "s" : [ {
                              "r" : "240",
                              "s" : [ {
                                 "r" : "240",
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
                           "r" : "241",
                           "s" : [ {
                              "r" : "243",
                              "s" : [ {
                                 "r" : "242",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "243",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "244",
                              "s" : [ {
                                 "value" : [ "'http://cqframework.org/3/'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "type" : "Query",
               "source" : [ {
                  "localId" : "237",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "238",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ {
                  "localId" : "245",
                  "alias" : "C",
                  "type" : "Without",
                  "expression" : {
                     "localId" : "240",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  },
                  "suchThat" : {
                     "localId" : "241",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "243",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "244",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "248",
            "name" : "withOutQuery2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","withOutQuery2",":  " ]
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
                     }, {
                        "value" : [ "\n" ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "without " ]
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
                        }, {
                           "value" : [ " such that " ]
                        }, {
                           "r" : "253",
                           "s" : [ {
                              "r" : "255",
                              "s" : [ {
                                 "r" : "254",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "255",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "256",
                              "s" : [ {
                                 "value" : [ "'http://cqframework.org/3/2'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "type" : "Query",
               "source" : [ {
                  "localId" : "249",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "250",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ {
                  "localId" : "257",
                  "alias" : "C",
                  "type" : "Without",
                  "expression" : {
                     "localId" : "252",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  },
                  "suchThat" : {
                     "localId" : "253",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "255",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "256",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
                     }, {
                        "value" : [ "\n" ]
                     }, {
                        "s" : [ {
                           "value" : [ "let " ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "216",
                              "s" : [ {
                                 "value" : [ "E" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n" ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "E",": " ]
                              }, {
                                 "r" : "219",
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
                                 "r" : "220",
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
            "expression" : {
               "localId" : "221",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ {
                  "localId" : "215",
                  "identifier" : "a",
                  "expression" : {
                     "localId" : "216",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "217",
                  "expression" : {
                     "localId" : "218",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "219",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "a",
                        "value" : {
                           "localId" : "220",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "218",
                                 "s" : [ {
                                    "r" : "217",
                                    "s" : [ {
                                       "value" : [ "E" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "218",
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
                                 "r" : "220",
                                 "s" : [ {
                                    "r" : "219",
                                    "s" : [ {
                                       "value" : [ "E" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "220",
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
            "expression" : {
               "localId" : "221",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "215",
                  "expression" : {
                     "localId" : "216",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "218",
                           "path" : "id",
                           "scope" : "E",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "thing",
                        "value" : {
                           "localId" : "220",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
                     "r" : "226",
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
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "r" : "223",
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
            "expression" : {
               "localId" : "226",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "I",
                  "expression" : {
                     "localId" : "214",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "220",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "215",
                           "type" : "Null"
                        }
                     }, {
                        "localId" : "216",
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
                           "type" : "Null"
                        }
                     }, {
                        "localId" : "218",
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
                           "type" : "Null"
                        }
                     } ]
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
                     "r" : "230",
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
                                    "r" : "218",
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
                                    "r" : "222",
                                    "s" : [ {
                                       "value" : [ "ToQuantity","(" ]
                                    }, {
                                       "r" : "219",
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
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "S",
                  "expression" : {
                     "localId" : "214",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "218",
                        "type" : "ToQuantity",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "215",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "10 'm'",
                           "type" : "Literal"
                        }
                     }, {
                        "localId" : "222",
                        "type" : "ToQuantity",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "219",
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
                  "localId" : "223",
                  "expression" : {
                     "localId" : "224",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "225",
                  "by" : [ {
                     "localId" : "226",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "232",
            "name" : "QuantityListSort",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","QuantityListSort",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "s" : [ {
                           "r" : "233",
                           "s" : [ {
                              "r" : "234",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "234",
                                 "s" : [ {
                                    "value" : [ "{ " ]
                                 }, {
                                    "r" : "238",
                                    "s" : [ {
                                       "value" : [ "ToQuantity","(" ]
                                    }, {
                                       "r" : "235",
                                       "s" : [ {
                                          "value" : [ "'10 \\'m\\''" ]
                                       } ]
                                    }, {
                                       "value" : [ ")" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "242",
                                    "s" : [ {
                                       "value" : [ "ToQuantity","(" ]
                                    }, {
                                       "r" : "239",
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
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "244",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "245",
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
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "r" : "246",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "246",
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
            "expression" : {
               "localId" : "252",
               "type" : "Query",
               "source" : [ {
                  "localId" : "233",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "234",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "238",
                        "type" : "ToQuantity",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "235",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "10 'm'",
                           "type" : "Literal"
                        }
                     }, {
                        "localId" : "242",
                        "type" : "ToQuantity",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "239",
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
                  "localId" : "243",
                  "expression" : {
                     "localId" : "244",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "245",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "248",
                  "by" : [ {
                     "localId" : "247",
                     "direction" : "asc",
                     "path" : "N",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "254",
            "name" : "TupleAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsc",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "s" : [ {
                           "r" : "255",
                           "s" : [ {
                              "r" : "256",
                              "s" : [ {
                                 "r" : "256",
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
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "258",
                           "s" : [ {
                              "r" : "257",
                              "s" : [ {
                                 "value" : [ "id" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "Query",
               "source" : [ {
                  "localId" : "255",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "256",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "259",
                  "by" : [ {
                     "localId" : "258",
                     "direction" : "asc",
                     "path" : "id",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "265",
            "name" : "TupleReturnAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnAsc",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "s" : [ {
                           "r" : "266",
                           "s" : [ {
                              "r" : "267",
                              "s" : [ {
                                 "r" : "267",
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
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "E" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "271",
                           "s" : [ {
                              "r" : "270",
                              "s" : [ {
                                 "value" : [ "id" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "276",
               "type" : "Query",
               "source" : [ {
                  "localId" : "266",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "267",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "268",
                  "expression" : {
                     "localId" : "269",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "272",
                  "by" : [ {
                     "localId" : "271",
                     "direction" : "asc",
                     "path" : "id",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "278",
            "name" : "TupleReturnTupleAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnTupleAsc",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "s" : [ {
                           "r" : "279",
                           "s" : [ {
                              "r" : "280",
                              "s" : [ {
                                 "r" : "280",
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
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "E"," : " ]
                              }, {
                                 "r" : "283",
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
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "r" : "285",
                              "s" : [ {
                                 "r" : "284",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "285",
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
            "expression" : {
               "localId" : "291",
               "type" : "Query",
               "source" : [ {
                  "localId" : "279",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "280",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "281",
                  "expression" : {
                     "localId" : "282",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "283",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "287",
                  "by" : [ {
                     "localId" : "286",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "285",
                        "path" : "id",
                        "type" : "Property",
                        "source" : {
                           "localId" : "284",
                           "name" : "E",
                           "type" : "IdentifierRef"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "293",
            "name" : "TupleDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","TupleDesc",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "s" : [ {
                           "r" : "294",
                           "s" : [ {
                              "r" : "295",
                              "s" : [ {
                                 "r" : "295",
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
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "r" : "296",
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
            "expression" : {
               "localId" : "302",
               "type" : "Query",
               "source" : [ {
                  "localId" : "294",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "295",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "298",
                  "by" : [ {
                     "localId" : "297",
                     "direction" : "desc",
                     "path" : "id",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "304",
            "name" : "TupleReturnDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnDesc",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "s" : [ {
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
                        } ]
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "308",
                           "s" : [ {
                              "value" : [ "E" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "311",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "310",
                           "s" : [ {
                              "r" : "309",
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
            "expression" : {
               "localId" : "315",
               "type" : "Query",
               "source" : [ {
                  "localId" : "305",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "306",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "307",
                  "expression" : {
                     "localId" : "308",
                     "name" : "E",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "311",
                  "by" : [ {
                     "localId" : "310",
                     "direction" : "desc",
                     "path" : "id",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "localId" : "317",
            "name" : "TupleReturnTupleDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","TupleReturnTupleDesc",":  " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "s" : [ {
                           "r" : "318",
                           "s" : [ {
                              "r" : "319",
                              "s" : [ {
                                 "r" : "319",
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
                        "r" : "320",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "321",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "E"," : " ]
                              }, {
                                 "r" : "322",
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
                        "r" : "326",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "325",
                           "s" : [ {
                              "r" : "324",
                              "s" : [ {
                                 "r" : "323",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "324",
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
            "expression" : {
               "localId" : "330",
               "type" : "Query",
               "source" : [ {
                  "localId" : "318",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "319",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "320",
                  "expression" : {
                     "localId" : "321",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "322",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "326",
                  "by" : [ {
                     "localId" : "325",
                     "direction" : "desc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "324",
                        "path" : "id",
                        "type" : "Property",
                        "source" : {
                           "localId" : "323",
                           "name" : "E",
                           "type" : "IdentifierRef"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "332",
            "name" : "ConditionDates",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","ConditionDates",": " ]
                  }, {
                     "r" : "339",
                     "s" : [ {
                        "s" : [ {
                           "r" : "333",
                           "s" : [ {
                              "r" : "334",
                              "s" : [ {
                                 "r" : "334",
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
                        "r" : "335",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "338",
                           "s" : [ {
                              "r" : "337",
                              "s" : [ {
                                 "r" : "336",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "337",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "338",
                              "s" : [ {
                                 "value" : [ "low" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "339",
               "type" : "Query",
               "source" : [ {
                  "localId" : "333",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "334",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "335",
                  "expression" : {
                     "localId" : "338",
                     "path" : "low",
                     "type" : "Property",
                     "source" : {
                        "localId" : "337",
                        "path" : "period",
                        "scope" : "C",
                        "type" : "Property"
                     }
                  }
               }
            }
         }, {
            "localId" : "341",
            "name" : "lastDateUnsorted",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "341",
                  "s" : [ {
                     "value" : [ "","define ","lastDateUnsorted",": " ]
                  }, {
                     "r" : "345",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "342",
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
               "localId" : "345",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "342",
                  "name" : "ConditionDates",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "347",
            "name" : "lastDateByThis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","lastDateByThis",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "356",
                        "s" : [ {
                           "s" : [ {
                              "r" : "348",
                              "s" : [ {
                                 "r" : "349",
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
                           "r" : "352",
                           "s" : [ {
                              "value" : [ "sort by " ]
                           }, {
                              "r" : "351",
                              "s" : [ {
                                 "r" : "350",
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
               "localId" : "359",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "356",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "348",
                     "alias" : "CD",
                     "expression" : {
                        "localId" : "349",
                        "name" : "ConditionDates",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "sort" : {
                     "localId" : "352",
                     "by" : [ {
                        "localId" : "351",
                        "direction" : "asc",
                        "path" : "$this",
                        "type" : "ByColumn"
                     } ]
                  }
               }
            }
         }, {
            "localId" : "361",
            "name" : "numberAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "361",
                  "s" : [ {
                     "value" : [ "","define ","numberAsc",": " ]
                  }, {
                     "r" : "376",
                     "s" : [ {
                        "s" : [ {
                           "r" : "362",
                           "s" : [ {
                              "r" : "363",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "363",
                                 "s" : [ {
                                    "r" : "364",
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
                        "r" : "371",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "376",
               "type" : "Query",
               "source" : [ {
                  "localId" : "362",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "363",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "364",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "365",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "366",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "367",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "368",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "369",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "370",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "371",
                  "by" : [ {
                     "localId" : "372",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "378",
            "name" : "numberReturnAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "378",
                  "s" : [ {
                     "value" : [ "","define ","numberReturnAsc",": " ]
                  }, {
                     "r" : "395",
                     "s" : [ {
                        "s" : [ {
                           "r" : "379",
                           "s" : [ {
                              "r" : "380",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "380",
                                 "s" : [ {
                                    "r" : "381",
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
                        "r" : "388",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "389",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "390",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "395",
               "type" : "Query",
               "source" : [ {
                  "localId" : "379",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "380",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "381",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "382",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "383",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "384",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "385",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "386",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "387",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "388",
                  "expression" : {
                     "localId" : "389",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "390",
                  "by" : [ {
                     "localId" : "391",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "397",
            "name" : "numberDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "397",
                  "s" : [ {
                     "value" : [ "","define ","numberDesc",": " ]
                  }, {
                     "r" : "412",
                     "s" : [ {
                        "s" : [ {
                           "r" : "398",
                           "s" : [ {
                              "r" : "399",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "399",
                                 "s" : [ {
                                    "r" : "400",
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
                        "r" : "407",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "412",
               "type" : "Query",
               "source" : [ {
                  "localId" : "398",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "399",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "400",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "401",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "402",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "403",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "404",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "405",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "406",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "407",
                  "by" : [ {
                     "localId" : "408",
                     "direction" : "desc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "414",
            "name" : "numberReturnDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "414",
                  "s" : [ {
                     "value" : [ "","define ","numberReturnDesc",": " ]
                  }, {
                     "r" : "431",
                     "s" : [ {
                        "s" : [ {
                           "r" : "415",
                           "s" : [ {
                              "r" : "416",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "416",
                                 "s" : [ {
                                    "r" : "417",
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
                        "r" : "424",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "425",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "426",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "431",
               "type" : "Query",
               "source" : [ {
                  "localId" : "415",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "416",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "417",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "418",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "419",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "420",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "421",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "422",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "423",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "424",
                  "expression" : {
                     "localId" : "425",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "426",
                  "by" : [ {
                     "localId" : "427",
                     "direction" : "desc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "433",
            "name" : "stringAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "433",
                  "s" : [ {
                     "value" : [ "","define ","stringAsc",": " ]
                  }, {
                     "r" : "446",
                     "s" : [ {
                        "s" : [ {
                           "r" : "434",
                           "s" : [ {
                              "r" : "435",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "435",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "436",
                                    "s" : [ {
                                       "value" : [ "'jenny'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "437",
                                    "s" : [ {
                                       "value" : [ "'dont'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "438",
                                    "s" : [ {
                                       "value" : [ "'change'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "439",
                                    "s" : [ {
                                       "value" : [ "'your'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "440",
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
                        "r" : "441",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "446",
               "type" : "Query",
               "source" : [ {
                  "localId" : "434",
                  "alias" : "S",
                  "expression" : {
                     "localId" : "435",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "436",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "437",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "438",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "439",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "440",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "number",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "441",
                  "by" : [ {
                     "localId" : "442",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "448",
            "name" : "stringReturnAsc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "448",
                  "s" : [ {
                     "value" : [ "","define ","stringReturnAsc",": " ]
                  }, {
                     "r" : "463",
                     "s" : [ {
                        "s" : [ {
                           "r" : "449",
                           "s" : [ {
                              "r" : "450",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "450",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "451",
                                    "s" : [ {
                                       "value" : [ "'jenny'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "452",
                                    "s" : [ {
                                       "value" : [ "'dont'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "453",
                                    "s" : [ {
                                       "value" : [ "'change'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "454",
                                    "s" : [ {
                                       "value" : [ "'your'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "455",
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
                        "r" : "456",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "457",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     }, {
                        "r" : "458",
                        "value" : [ " ","sort asc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "463",
               "type" : "Query",
               "source" : [ {
                  "localId" : "449",
                  "alias" : "S",
                  "expression" : {
                     "localId" : "450",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "451",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "452",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "453",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "454",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "455",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "number",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "456",
                  "expression" : {
                     "localId" : "457",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "458",
                  "by" : [ {
                     "localId" : "459",
                     "direction" : "asc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "465",
            "name" : "stringDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "465",
                  "s" : [ {
                     "value" : [ "","define ","stringDesc",": " ]
                  }, {
                     "r" : "478",
                     "s" : [ {
                        "s" : [ {
                           "r" : "466",
                           "s" : [ {
                              "r" : "467",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "467",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "468",
                                    "s" : [ {
                                       "value" : [ "'jenny'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "469",
                                    "s" : [ {
                                       "value" : [ "'dont'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "470",
                                    "s" : [ {
                                       "value" : [ "'change'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "471",
                                    "s" : [ {
                                       "value" : [ "'your'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "472",
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
                        "r" : "473",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "478",
               "type" : "Query",
               "source" : [ {
                  "localId" : "466",
                  "alias" : "S",
                  "expression" : {
                     "localId" : "467",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "468",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "469",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "470",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "471",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "472",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "number",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "473",
                  "by" : [ {
                     "localId" : "474",
                     "direction" : "desc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "480",
            "name" : "stringReturnDesc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "480",
                  "s" : [ {
                     "value" : [ "","define ","stringReturnDesc",": " ]
                  }, {
                     "r" : "495",
                     "s" : [ {
                        "s" : [ {
                           "r" : "481",
                           "s" : [ {
                              "r" : "482",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "482",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "483",
                                    "s" : [ {
                                       "value" : [ "'jenny'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "484",
                                    "s" : [ {
                                       "value" : [ "'dont'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "485",
                                    "s" : [ {
                                       "value" : [ "'change'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "486",
                                    "s" : [ {
                                       "value" : [ "'your'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "487",
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
                        "r" : "488",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "489",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     }, {
                        "r" : "490",
                        "value" : [ " ","sort desc" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "495",
               "type" : "Query",
               "source" : [ {
                  "localId" : "481",
                  "alias" : "S",
                  "expression" : {
                     "localId" : "482",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "483",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "jenny",
                        "type" : "Literal"
                     }, {
                        "localId" : "484",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "dont",
                        "type" : "Literal"
                     }, {
                        "localId" : "485",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "change",
                        "type" : "Literal"
                     }, {
                        "localId" : "486",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "your",
                        "type" : "Literal"
                     }, {
                        "localId" : "487",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "number",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "488",
                  "expression" : {
                     "localId" : "489",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "490",
                  "by" : [ {
                     "localId" : "491",
                     "direction" : "desc",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "497",
            "name" : "five",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "497",
                  "s" : [ {
                     "r" : "498",
                     "value" : [ "","define ","five",": ","5" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "498",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "5",
               "type" : "Literal"
            }
         }, {
            "localId" : "500",
            "name" : "sortByExpression",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "500",
                  "s" : [ {
                     "value" : [ "","define ","sortByExpression",": " ]
                  }, {
                     "r" : "521",
                     "s" : [ {
                        "s" : [ {
                           "r" : "501",
                           "s" : [ {
                              "r" : "502",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "502",
                                 "s" : [ {
                                    "r" : "503",
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
                        "r" : "510",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "511",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "512",
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
                        "r" : "517",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "516",
                           "s" : [ {
                              "r" : "513",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "513",
                                 "s" : [ {
                                    "r" : "514",
                                    "s" : [ {
                                       "value" : [ "five" ]
                                    } ]
                                 }, {
                                    "value" : [ " + " ]
                                 }, {
                                    "r" : "515",
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
            "expression" : {
               "localId" : "521",
               "type" : "Query",
               "source" : [ {
                  "localId" : "501",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "502",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "503",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "504",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "505",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "506",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "507",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "508",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "509",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "510",
                  "expression" : {
                     "localId" : "511",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "512",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "517",
                  "by" : [ {
                     "localId" : "516",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "513",
                        "type" : "Add",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "514",
                           "name" : "five",
                           "type" : "ExpressionRef"
                        }, {
                           "localId" : "515",
                           "name" : "N",
                           "type" : "IdentifierRef"
                        } ]
                     }
                  } ]
               }
            }
         }, {
            "localId" : "523",
            "name" : "sortByExpressionWithNullResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "523",
                  "s" : [ {
                     "value" : [ "","define ","sortByExpressionWithNullResults",": " ]
                  }, {
                     "r" : "541",
                     "s" : [ {
                        "s" : [ {
                           "r" : "524",
                           "s" : [ {
                              "r" : "525",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "525",
                                 "s" : [ {
                                    "r" : "526",
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
                        "r" : "530",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "531",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "532",
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
                        "r" : "537",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "536",
                           "s" : [ {
                              "r" : "533",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "533",
                                 "s" : [ {
                                    "r" : "534",
                                    "s" : [ {
                                       "value" : [ "five" ]
                                    } ]
                                 }, {
                                    "value" : [ " + " ]
                                 }, {
                                    "r" : "535",
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
            "expression" : {
               "localId" : "541",
               "type" : "Query",
               "source" : [ {
                  "localId" : "524",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "525",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "526",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "529",
                        "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "527",
                           "type" : "Null"
                        }
                     }, {
                        "localId" : "528",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "530",
                  "expression" : {
                     "localId" : "531",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "532",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "537",
                  "by" : [ {
                     "localId" : "536",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "533",
                        "type" : "Add",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "534",
                           "name" : "five",
                           "type" : "ExpressionRef"
                        }, {
                           "localId" : "535",
                           "name" : "N",
                           "type" : "IdentifierRef"
                        } ]
                     }
                  } ]
               }
            }
         }, {
            "localId" : "543",
            "name" : "sortWithAscendingKeyword",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "543",
                  "s" : [ {
                     "value" : [ "","define ","sortWithAscendingKeyword",": " ]
                  }, {
                     "r" : "558",
                     "s" : [ {
                        "s" : [ {
                           "r" : "544",
                           "s" : [ {
                              "r" : "545",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "545",
                                 "s" : [ {
                                    "r" : "546",
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
                        "r" : "553",
                        "value" : [ " ","sort ascending" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "558",
               "type" : "Query",
               "source" : [ {
                  "localId" : "544",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "545",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "546",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "547",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "548",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "549",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "550",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "551",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "552",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "sort" : {
                  "localId" : "553",
                  "by" : [ {
                     "localId" : "554",
                     "direction" : "ascending",
                     "type" : "ByDirection"
                  } ]
               }
            }
         }, {
            "localId" : "560",
            "name" : "sortWithDescendingKeyword",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "560",
                  "s" : [ {
                     "value" : [ "","define ","sortWithDescendingKeyword",": " ]
                  }, {
                     "r" : "577",
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
                                    "r" : "563",
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
                        "r" : "570",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "571",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     }, {
                        "r" : "572",
                        "value" : [ " ","sort descending" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "577",
               "type" : "Query",
               "source" : [ {
                  "localId" : "561",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "562",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "563",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "564",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "565",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "566",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "567",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "568",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }, {
                        "localId" : "569",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "570",
                  "expression" : {
                     "localId" : "571",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               },
               "sort" : {
                  "localId" : "572",
                  "by" : [ {
                     "localId" : "573",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "346",
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
                     "r" : "233",
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
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "214",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "215",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "216",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "217",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "218",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "219",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "220",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "221",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "222",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "223",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "224",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "225",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "226",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "227",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "228",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "229",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "230",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "231",
                  "expression" : {
                     "localId" : "232",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "235",
            "name" : "defaultStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","defaultStrings",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "s" : [ {
                           "r" : "236",
                           "s" : [ {
                              "r" : "237",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "237",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "238",
                                    "s" : [ {
                                       "value" : [ "'foo'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "239",
                                    "s" : [ {
                                       "value" : [ "'bar'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "240",
                                    "s" : [ {
                                       "value" : [ "'baz'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "241",
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
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "243",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "type" : "Query",
               "source" : [ {
                  "localId" : "236",
                  "alias" : "S",
                  "expression" : {
                     "localId" : "237",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "238",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "239",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "240",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "241",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "242",
                  "expression" : {
                     "localId" : "243",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "246",
            "name" : "defaultTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","defaultTuples",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "s" : [ {
                           "r" : "247",
                           "s" : [ {
                              "r" : "248",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "248",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "249",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "250",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "251",
                                          "value" : [ "b",":","2" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "252",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "253",
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "254",
                                          "value" : [ "b",": ","3" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "255",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "256",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "257",
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
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "259",
                           "s" : [ {
                              "value" : [ "T" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "type" : "Query",
               "source" : [ {
                  "localId" : "247",
                  "alias" : "T",
                  "expression" : {
                     "localId" : "248",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "249",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "250",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "251",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "252",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "253",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "254",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "255",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "256",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "257",
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
                  "localId" : "258",
                  "expression" : {
                     "localId" : "259",
                     "name" : "T",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "262",
            "name" : "distinctNumbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","distinctNumbers",": " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "s" : [ {
                           "r" : "263",
                           "s" : [ {
                              "r" : "264",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "264",
                                 "s" : [ {
                                    "r" : "265",
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
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "return distinct " ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "283",
               "type" : "Query",
               "source" : [ {
                  "localId" : "263",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "264",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "265",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "266",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "267",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "268",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "269",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "270",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "271",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "272",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "273",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "274",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "275",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "276",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "277",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "278",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "279",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "280",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "281",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "282",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "285",
            "name" : "distinctStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","distinctStrings",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "s" : [ {
                           "r" : "286",
                           "s" : [ {
                              "r" : "287",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "287",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "288",
                                    "s" : [ {
                                       "value" : [ "'foo'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "289",
                                    "s" : [ {
                                       "value" : [ "'bar'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "290",
                                    "s" : [ {
                                       "value" : [ "'baz'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "291",
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
                        "r" : "292",
                        "s" : [ {
                           "value" : [ "return distinct " ]
                        }, {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "type" : "Query",
               "source" : [ {
                  "localId" : "286",
                  "alias" : "S",
                  "expression" : {
                     "localId" : "287",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "288",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "289",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "290",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "291",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "292",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "293",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "296",
            "name" : "distinctTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","distinctTuples",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "s" : [ {
                           "r" : "297",
                           "s" : [ {
                              "r" : "298",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "298",
                                 "s" : [ {
                                    "value" : [ "{" ]
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
                                          "value" : [ "b",":","2" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "302",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "303",
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "304",
                                          "value" : [ "b",": ","3" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "305",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "306",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "307",
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
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "return distinct " ]
                        }, {
                           "r" : "309",
                           "s" : [ {
                              "value" : [ "T" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "310",
               "type" : "Query",
               "source" : [ {
                  "localId" : "297",
                  "alias" : "T",
                  "expression" : {
                     "localId" : "298",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "299",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "300",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "301",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "302",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "303",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "304",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "305",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "306",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "307",
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
                  "localId" : "308",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "309",
                     "name" : "T",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "312",
            "name" : "allNumbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","allNumbers",": " ]
                  }, {
                     "r" : "333",
                     "s" : [ {
                        "s" : [ {
                           "r" : "313",
                           "s" : [ {
                              "r" : "314",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "314",
                                 "s" : [ {
                                    "r" : "315",
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
                        "r" : "331",
                        "s" : [ {
                           "value" : [ "return all " ]
                        }, {
                           "r" : "332",
                           "s" : [ {
                              "value" : [ "N" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "333",
               "type" : "Query",
               "source" : [ {
                  "localId" : "313",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "314",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "315",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "316",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "317",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "318",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "319",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "320",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "321",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "322",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "323",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "324",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "325",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "326",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "327",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "328",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "329",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "330",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "331",
                  "distinct" : false,
                  "expression" : {
                     "localId" : "332",
                     "name" : "N",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "335",
            "name" : "allStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "335",
                  "s" : [ {
                     "value" : [ "","define ","allStrings",": " ]
                  }, {
                     "r" : "344",
                     "s" : [ {
                        "s" : [ {
                           "r" : "336",
                           "s" : [ {
                              "r" : "337",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "337",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "338",
                                    "s" : [ {
                                       "value" : [ "'foo'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "339",
                                    "s" : [ {
                                       "value" : [ "'bar'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "340",
                                    "s" : [ {
                                       "value" : [ "'baz'" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "341",
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
                        "r" : "342",
                        "s" : [ {
                           "value" : [ "return all " ]
                        }, {
                           "r" : "343",
                           "s" : [ {
                              "value" : [ "S" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "344",
               "type" : "Query",
               "source" : [ {
                  "localId" : "336",
                  "alias" : "S",
                  "expression" : {
                     "localId" : "337",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "338",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "339",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "340",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "341",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "342",
                  "distinct" : false,
                  "expression" : {
                     "localId" : "343",
                     "name" : "S",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "localId" : "346",
            "name" : "allTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "346",
                  "s" : [ {
                     "value" : [ "","define ","allTuples",": " ]
                  }, {
                     "r" : "360",
                     "s" : [ {
                        "s" : [ {
                           "r" : "347",
                           "s" : [ {
                              "r" : "348",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "348",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "349",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "350",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "351",
                                          "value" : [ "b",":","2" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "352",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "353",
                                          "value" : [ "a",": ","2" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "354",
                                          "value" : [ "b",": ","3" ]
                                       } ]
                                    }, {
                                       "value" : [ "}" ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "r" : "355",
                                    "s" : [ {
                                       "value" : [ "Tuple{" ]
                                    }, {
                                       "s" : [ {
                                          "r" : "356",
                                          "value" : [ "a",": ","1" ]
                                       } ]
                                    }, {
                                       "value" : [ ", " ]
                                    }, {
                                       "s" : [ {
                                          "r" : "357",
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
                        "r" : "358",
                        "s" : [ {
                           "value" : [ "return all " ]
                        }, {
                           "r" : "359",
                           "s" : [ {
                              "value" : [ "T" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "360",
               "type" : "Query",
               "source" : [ {
                  "localId" : "347",
                  "alias" : "T",
                  "expression" : {
                     "localId" : "348",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "349",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "350",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "351",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "352",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "353",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "354",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           }
                        } ]
                     }, {
                        "localId" : "355",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "356",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "357",
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
                  "localId" : "358",
                  "distinct" : false,
                  "expression" : {
                     "localId" : "359",
                     "name" : "T",
                     "type" : "AliasRef"
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "352",
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
                     "r" : "215",
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
            "expression" : {
               "localId" : "215",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
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
            "localId" : "217",
            "name" : "conditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","conditions",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "s" : [ {
                           "r" : "218",
                           "s" : [ {
                              "r" : "219",
                              "s" : [ {
                                 "r" : "219",
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
            "expression" : {
               "localId" : "220",
               "type" : "Query",
               "source" : [ {
                  "localId" : "218",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "219",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
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
            "localId" : "222",
            "name" : "firstEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","firstEncounter",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "s" : [ {
                              "r" : "223",
                              "s" : [ {
                                 "r" : "224",
                                 "s" : [ {
                                    "r" : "224",
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
               "localId" : "228",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "225",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "223",
                     "alias" : "E",
                     "expression" : {
                        "localId" : "224",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
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
            "localId" : "230",
            "name" : "firstCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","firstCondition",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "s" : [ {
                              "r" : "231",
                              "s" : [ {
                                 "r" : "232",
                                 "s" : [ {
                                    "r" : "232",
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
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "where " ]
                           }, {
                              "r" : "233",
                              "s" : [ {
                                 "r" : "235",
                                 "s" : [ {
                                    "r" : "234",
                                    "s" : [ {
                                       "value" : [ "C" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "235",
                                    "s" : [ {
                                       "value" : [ "id" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " ","="," " ]
                              }, {
                                 "r" : "236",
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
               "localId" : "240",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "237",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "231",
                     "alias" : "C",
                     "expression" : {
                        "localId" : "232",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "233",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "235",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "236",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
                     } ]
                  }
               }
            }
         }, {
            "localId" : "242",
            "name" : "singleAlias",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","singleAlias",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "s" : [ {
                           "r" : "243",
                           "s" : [ {
                              "r" : "244",
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
               "localId" : "245",
               "type" : "Query",
               "source" : [ {
                  "localId" : "243",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "244",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ]
            }
         }, {
            "localId" : "247",
            "name" : "singleAliasWhere",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWhere",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "s" : [ {
                           "r" : "248",
                           "s" : [ {
                              "r" : "249",
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
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "252",
                           "s" : [ {
                              "r" : "250",
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
               "localId" : "253",
               "type" : "Query",
               "source" : [ {
                  "localId" : "248",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "249",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "252",
                  "type" : "Not",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "251",
                     "type" : "IsNull",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "250",
                        "name" : "E",
                        "type" : "AliasRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "255",
            "name" : "singleAliasWhereToNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWhereToNull",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "s" : [ {
                           "r" : "256",
                           "s" : [ {
                              "r" : "257",
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
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "260",
                           "s" : [ {
                              "r" : "259",
                              "s" : [ {
                                 "r" : "258",
                                 "s" : [ {
                                    "value" : [ "E" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "259",
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
               "localId" : "261",
               "type" : "Query",
               "source" : [ {
                  "localId" : "256",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "257",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "where" : {
                  "localId" : "260",
                  "type" : "IsNull",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "259",
                     "path" : "period",
                     "scope" : "E",
                     "type" : "Property"
                  }
               }
            }
         }, {
            "localId" : "263",
            "name" : "singleAliases",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","singleAliases",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "264",
                           "s" : [ {
                              "r" : "265",
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
                           "r" : "266",
                           "s" : [ {
                              "r" : "267",
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
            "expression" : {
               "localId" : "272",
               "type" : "Query",
               "source" : [ {
                  "localId" : "264",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "265",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "266",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "267",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "268",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "269",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "270",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "271",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "274",
            "name" : "singleAliasesAndList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasesAndList",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from " ]
                        }, {
                           "r" : "275",
                           "s" : [ {
                              "r" : "276",
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
                           "r" : "277",
                           "s" : [ {
                              "r" : "278",
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
                           "r" : "279",
                           "s" : [ {
                              "r" : "280",
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
            "expression" : {
               "localId" : "286",
               "type" : "Query",
               "source" : [ {
                  "localId" : "275",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "276",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "277",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "278",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "279",
                  "alias" : "Con",
                  "expression" : {
                     "localId" : "280",
                     "name" : "conditions",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "281",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "282",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "E",
                        "value" : {
                           "localId" : "283",
                           "name" : "E",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "C",
                        "value" : {
                           "localId" : "284",
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "Con",
                        "value" : {
                           "localId" : "285",
                           "name" : "Con",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "288",
            "name" : "singleAliasWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWith",":  " ]
                  }, {
                     "r" : "298",
                     "s" : [ {
                        "s" : [ {
                           "r" : "289",
                           "s" : [ {
                              "r" : "290",
                              "s" : [ {
                                 "r" : "290",
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
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "with " ]
                        }, {
                           "r" : "291",
                           "s" : [ {
                              "r" : "292",
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
                                 "value" : [ "'http://cqframework.org/3/2'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "298",
               "type" : "Query",
               "source" : [ {
                  "localId" : "289",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "290",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ {
                  "localId" : "297",
                  "alias" : "C",
                  "type" : "With",
                  "expression" : {
                     "localId" : "292",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "293",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "295",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "296",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "300",
            "name" : "singleAliasWithOut",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithOut",":  " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "s" : [ {
                           "r" : "301",
                           "s" : [ {
                              "r" : "302",
                              "s" : [ {
                                 "r" : "302",
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
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "303",
                           "s" : [ {
                              "r" : "304",
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
                           "r" : "305",
                           "s" : [ {
                              "r" : "307",
                              "s" : [ {
                                 "r" : "306",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "307",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "308",
                              "s" : [ {
                                 "value" : [ "'http://cqframework.org/3'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "310",
               "type" : "Query",
               "source" : [ {
                  "localId" : "301",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "302",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
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
                  "expression" : {
                     "localId" : "304",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "305",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "307",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "308",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "312",
            "name" : "singleAliasWithEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithEmpty",":  " ]
                  }, {
                     "r" : "322",
                     "s" : [ {
                        "s" : [ {
                           "r" : "313",
                           "s" : [ {
                              "r" : "314",
                              "s" : [ {
                                 "r" : "314",
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
                           "value" : [ "with " ]
                        }, {
                           "r" : "315",
                           "s" : [ {
                              "r" : "316",
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
                           "r" : "317",
                           "s" : [ {
                              "r" : "319",
                              "s" : [ {
                                 "r" : "318",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "319",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "320",
                              "s" : [ {
                                 "value" : [ "'http://cqframework.org/3'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "322",
               "type" : "Query",
               "source" : [ {
                  "localId" : "313",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "314",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ {
                  "localId" : "321",
                  "alias" : "C",
                  "type" : "With",
                  "expression" : {
                     "localId" : "316",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "317",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "319",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "320",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "324",
            "name" : "singleAliasWithOutEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "324",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasWithOutEmpty",":  " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "s" : [ {
                           "r" : "325",
                           "s" : [ {
                              "r" : "326",
                              "s" : [ {
                                 "r" : "326",
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
                        "r" : "333",
                        "s" : [ {
                           "value" : [ "without " ]
                        }, {
                           "r" : "327",
                           "s" : [ {
                              "r" : "328",
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
                           "r" : "329",
                           "s" : [ {
                              "r" : "331",
                              "s" : [ {
                                 "r" : "330",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "331",
                                 "s" : [ {
                                    "value" : [ "id" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "332",
                              "s" : [ {
                                 "value" : [ "'http://cqframework.org/3/2'" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "334",
               "type" : "Query",
               "source" : [ {
                  "localId" : "325",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "326",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ {
                  "localId" : "333",
                  "alias" : "C",
                  "type" : "Without",
                  "expression" : {
                     "localId" : "328",
                     "name" : "firstCondition",
                     "type" : "ExpressionRef"
                  },
                  "suchThat" : {
                     "localId" : "329",
                     "type" : "Equal",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "331",
                        "path" : "id",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "localId" : "332",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://cqframework.org/3/2",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "336",
            "name" : "asNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "r" : "337",
                     "value" : [ "","define ","asNull",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "337",
               "type" : "Null"
            }
         }, {
            "localId" : "339",
            "name" : "nullQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "339",
                  "s" : [ {
                     "value" : [ "","define ","nullQuery",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "s" : [ {
                           "r" : "340",
                           "s" : [ {
                              "r" : "341",
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
               "localId" : "342",
               "type" : "Query",
               "source" : [ {
                  "localId" : "340",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "341",
                     "name" : "asNull",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ]
            }
         }, {
            "localId" : "344",
            "name" : "singleAliasReturnTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "344",
                  "s" : [ {
                     "value" : [ "//define singleAliasWith: firstEncounter E with [Condition] C\n//                         such that C.id = 'http://cqframework.org/3/2'\n//define singleAliasWithNull: firstEncounter E with conditions C\n//                        such that C.id is null\n","define ","singleAliasReturnTuple",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "s" : [ {
                           "r" : "345",
                           "s" : [ {
                              "r" : "346",
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
                        "r" : "347",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "348",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "349",
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
            "expression" : {
               "localId" : "350",
               "type" : "Query",
               "source" : [ {
                  "localId" : "345",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "346",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "347",
                  "expression" : {
                     "localId" : "348",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "349",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "352",
            "name" : "singleAliasReturnList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "352",
                  "s" : [ {
                     "value" : [ "","define ","singleAliasReturnList",": " ]
                  }, {
                     "r" : "361",
                     "s" : [ {
                        "s" : [ {
                           "r" : "353",
                           "s" : [ {
                              "r" : "354",
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
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "356",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "357",
                              "s" : [ {
                                 "value" : [ "'foo'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "358",
                              "s" : [ {
                                 "value" : [ "'bar'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "359",
                              "s" : [ {
                                 "value" : [ "'baz'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "360",
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
            "expression" : {
               "localId" : "361",
               "type" : "Query",
               "source" : [ {
                  "localId" : "353",
                  "alias" : "E",
                  "expression" : {
                     "localId" : "354",
                     "name" : "firstEncounter",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "355",
                  "expression" : {
                     "localId" : "356",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "357",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "358",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     }, {
                        "localId" : "359",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "baz",
                        "type" : "Literal"
                     }, {
                        "localId" : "360",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "353",
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
                     "r" : "231",
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
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "aggregate ","T"," : " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "r" : "228",
                              "s" : [ {
                                 "value" : [ "Coalesce","(" ]
                              }, {
                                 "r" : "224",
                                 "s" : [ {
                                    "value" : [ "T" ]
                                 } ]
                              }, {
                                 "r" : "225",
                                 "value" : [ ", ","1",")" ]
                              } ]
                           }, {
                              "value" : [ " * " ]
                           }, {
                              "r" : "229",
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
               "localId" : "231",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "R",
                  "expression" : {
                     "localId" : "214",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "215",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "216",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "217",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "218",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "219",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "aggregate" : {
                  "localId" : "220",
                  "identifier" : "T",
                  "expression" : {
                     "localId" : "223",
                     "type" : "Multiply",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "230",
                        "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "228",
                           "type" : "Coalesce",
                           "signature" : [ ],
                           "operand" : [ {
                              "localId" : "224",
                              "name" : "T",
                              "type" : "QueryLetRef"
                           }, {
                              "localId" : "225",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           } ]
                        }
                     }, {
                        "localId" : "229",
                        "name" : "R",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "221",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "233",
            "name" : "encounterPeriods",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","encounterPeriods",":\n  " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "s" : [ {
                           "r" : "234",
                           "s" : [ {
                              "r" : "235",
                              "s" : [ {
                                 "r" : "235",
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
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "r" : "237",
                              "s" : [ {
                                 "value" : [ "e" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "238",
                              "s" : [ {
                                 "value" : [ "period" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "type" : "Query",
               "source" : [ {
                  "localId" : "234",
                  "alias" : "e",
                  "expression" : {
                     "localId" : "235",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "236",
                  "expression" : {
                     "localId" : "238",
                     "path" : "period",
                     "scope" : "e",
                     "type" : "Property"
                  }
               }
            }
         }, {
            "localId" : "241",
            "name" : "expressionStartingAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","expressionStartingAggregation",":\n  " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "s" : [ {
                           "r" : "242",
                           "s" : [ {
                              "r" : "243",
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
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "aggregate ","R"," " ]
                        }, {
                           "r" : "245",
                           "s" : [ {
                              "value" : [ "starting (" ]
                           }, {
                              "r" : "245",
                              "s" : [ {
                                 "r" : "246",
                                 "value" : [ "List{}"," as " ]
                              }, {
                                 "r" : "247",
                                 "s" : [ {
                                    "value" : [ "List<" ]
                                 }, {
                                    "r" : "248",
                                    "s" : [ {
                                       "value" : [ "Interval<" ]
                                    }, {
                                       "r" : "249",
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
                           "r" : "285",
                           "s" : [ {
                              "r" : "255",
                              "s" : [ {
                                 "value" : [ "R" ]
                              } ]
                           }, {
                              "value" : [ " union " ]
                           }, {
                              "r" : "256",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "256",
                                 "s" : [ {
                                    "value" : [ "{\n      " ]
                                 }, {
                                    "r" : "284",
                                    "s" : [ {
                                       "s" : [ {
                                          "r" : "257",
                                          "s" : [ {
                                             "r" : "258",
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
                                          "r" : "259",
                                          "s" : [ {
                                             "value" : [ "S",": " ]
                                          }, {
                                             "r" : "276",
                                             "s" : [ {
                                                "value" : [ "Max","(" ]
                                             }, {
                                                "r" : "260",
                                                "s" : [ {
                                                   "value" : [ "{ " ]
                                                }, {
                                                   "r" : "261",
                                                   "s" : [ {
                                                      "r" : "262",
                                                      "s" : [ {
                                                         "value" : [ "end of " ]
                                                      }, {
                                                         "r" : "266",
                                                         "s" : [ {
                                                            "value" : [ "Last","(" ]
                                                         }, {
                                                            "r" : "263",
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
                                                      "r" : "267",
                                                      "s" : [ {
                                                         "value" : [ "1 ","day" ]
                                                      } ]
                                                   } ]
                                                }, {
                                                   "value" : [ ", " ]
                                                }, {
                                                   "r" : "273",
                                                   "s" : [ {
                                                      "r" : "268",
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
                                          "r" : "277",
                                          "s" : [ {
                                             "value" : [ "E",": " ]
                                          }, {
                                             "r" : "278",
                                             "s" : [ {
                                                "value" : [ "start of " ]
                                             }, {
                                                "r" : "279",
                                                "s" : [ {
                                                   "value" : [ "X" ]
                                                } ]
                                             } ]
                                          } ]
                                       } ]
                                    }, {
                                       "value" : [ "\n        " ]
                                    }, {
                                       "r" : "280",
                                       "s" : [ {
                                          "value" : [ "return " ]
                                       }, {
                                          "r" : "283",
                                          "s" : [ {
                                             "value" : [ "Interval[" ]
                                          }, {
                                             "r" : "281",
                                             "s" : [ {
                                                "value" : [ "S" ]
                                             } ]
                                          }, {
                                             "value" : [ ", " ]
                                          }, {
                                             "r" : "282",
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
            "expression" : {
               "localId" : "286",
               "type" : "Query",
               "source" : [ {
                  "localId" : "242",
                  "alias" : "M",
                  "expression" : {
                     "localId" : "243",
                     "name" : "encounterPeriods",
                     "type" : "ExpressionRef"
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "aggregate" : {
                  "localId" : "244",
                  "identifier" : "R",
                  "expression" : {
                     "localId" : "285",
                     "type" : "Union",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "255",
                        "name" : "R",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "256",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "284",
                           "type" : "Query",
                           "source" : [ {
                              "localId" : "257",
                              "alias" : "X",
                              "expression" : {
                                 "localId" : "258",
                                 "name" : "M",
                                 "type" : "AliasRef"
                              }
                           } ],
                           "let" : [ {
                              "localId" : "259",
                              "identifier" : "S",
                              "expression" : {
                                 "localId" : "276",
                                 "type" : "Max",
                                 "signature" : [ ],
                                 "source" : {
                                    "localId" : "260",
                                    "type" : "List",
                                    "element" : [ {
                                       "localId" : "261",
                                       "type" : "Add",
                                       "signature" : [ ],
                                       "operand" : [ {
                                          "localId" : "262",
                                          "type" : "End",
                                          "signature" : [ ],
                                          "operand" : {
                                             "localId" : "266",
                                             "type" : "Last",
                                             "signature" : [ ],
                                             "source" : {
                                                "localId" : "263",
                                                "name" : "R",
                                                "type" : "QueryLetRef"
                                             }
                                          }
                                       }, {
                                          "localId" : "267",
                                          "value" : 1,
                                          "unit" : "day",
                                          "type" : "Quantity"
                                       } ]
                                    }, {
                                       "localId" : "273",
                                       "type" : "DateTime",
                                       "signature" : [ ],
                                       "year" : {
                                          "localId" : "268",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "1970",
                                          "type" : "Literal"
                                       },
                                       "month" : {
                                          "localId" : "269",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "01",
                                          "type" : "Literal"
                                       },
                                       "day" : {
                                          "localId" : "270",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "01",
                                          "type" : "Literal"
                                       }
                                    } ]
                                 }
                              }
                           }, {
                              "localId" : "277",
                              "identifier" : "E",
                              "expression" : {
                                 "localId" : "278",
                                 "type" : "Start",
                                 "signature" : [ ],
                                 "operand" : {
                                    "localId" : "279",
                                    "name" : "X",
                                    "type" : "AliasRef"
                                 }
                              }
                           } ],
                           "relationship" : [ ],
                           "return" : {
                              "localId" : "280",
                              "expression" : {
                                 "localId" : "283",
                                 "lowClosed" : true,
                                 "highClosed" : true,
                                 "type" : "Interval",
                                 "low" : {
                                    "localId" : "281",
                                    "name" : "S",
                                    "type" : "QueryLetRef"
                                 },
                                 "high" : {
                                    "localId" : "282",
                                    "name" : "E",
                                    "type" : "QueryLetRef"
                                 }
                              }
                           }
                        } ]
                     } ]
                  },
                  "starting" : {
                     "localId" : "245",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "246",
                        "type" : "List",
                        "element" : [ ]
                     },
                     "asTypeSpecifier" : {
                        "localId" : "247",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "248",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "249",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "288",
            "name" : "literalStartingAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","literalStartingAggregation",":\n  " ]
                  }, {
                     "r" : "312",
                     "s" : [ {
                        "s" : [ {
                           "r" : "289",
                           "s" : [ {
                              "r" : "290",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "290",
                                 "s" : [ {
                                    "r" : "291",
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
                        "r" : "301",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","str"," " ]
                        }, {
                           "r" : "302",
                           "s" : [ {
                              "value" : [ "starting " ]
                           }, {
                              "r" : "302",
                              "s" : [ {
                                 "value" : [ "'Start'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "r" : "306",
                              "s" : [ {
                                 "value" : [ "str" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "310",
                              "s" : [ {
                                 "value" : [ "ToString","(" ]
                              }, {
                                 "r" : "307",
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
               "localId" : "312",
               "type" : "Query",
               "source" : [ {
                  "localId" : "289",
                  "alias" : "Num",
                  "expression" : {
                     "localId" : "290",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "291",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "292",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "293",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "294",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "295",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "296",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "297",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "298",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "299",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "300",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "aggregate" : {
                  "localId" : "301",
                  "identifier" : "str",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "311",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "306",
                        "name" : "str",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "310",
                        "type" : "ToString",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "307",
                           "name" : "Num",
                           "type" : "AliasRef"
                        }
                     } ]
                  },
                  "starting" : {
                     "localId" : "302",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Start",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "314",
            "name" : "quantityStartingAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","quantityStartingAggregation",":\n " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "s" : [ {
                           "r" : "315",
                           "s" : [ {
                              "r" : "316",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "316",
                                 "s" : [ {
                                    "value" : [ "{" ]
                                 }, {
                                    "r" : "317",
                                    "s" : [ {
                                       "value" : [ "1 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "318",
                                    "s" : [ {
                                       "value" : [ "2 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "319",
                                    "s" : [ {
                                       "value" : [ "3 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "320",
                                    "s" : [ {
                                       "value" : [ "4 ","'ml'" ]
                                    } ]
                                 }, {
                                    "value" : [ "," ]
                                 }, {
                                    "r" : "321",
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
                        "r" : "322",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","Sum"," " ]
                        }, {
                           "r" : "323",
                           "s" : [ {
                              "value" : [ "starting " ]
                           }, {
                              "r" : "323",
                              "s" : [ {
                                 "value" : [ "0 ","'ml'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ": " ]
                        }, {
                           "r" : "326",
                           "s" : [ {
                              "r" : "327",
                              "s" : [ {
                                 "value" : [ "Sum" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "328",
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
               "localId" : "329",
               "type" : "Query",
               "source" : [ {
                  "localId" : "315",
                  "alias" : "Num",
                  "expression" : {
                     "localId" : "316",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "317",
                        "value" : 1,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "318",
                        "value" : 2,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "319",
                        "value" : 3,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "320",
                        "value" : 4,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }, {
                        "localId" : "321",
                        "value" : 5,
                        "unit" : "ml",
                        "type" : "Quantity"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "aggregate" : {
                  "localId" : "322",
                  "identifier" : "Sum",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "326",
                     "type" : "Add",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "327",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "328",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "323",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }
               }
            }
         }, {
            "localId" : "331",
            "name" : "allAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "331",
                  "s" : [ {
                     "value" : [ "","define ","allAggregation",":\n " ]
                  }, {
                     "r" : "351",
                     "s" : [ {
                        "s" : [ {
                           "r" : "332",
                           "s" : [ {
                              "r" : "333",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "333",
                                 "s" : [ {
                                    "r" : "334",
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
                        "r" : "344",
                        "s" : [ {
                           "value" : [ "aggregate all ","Sum"," " ]
                        }, {
                           "r" : "345",
                           "s" : [ {
                              "r" : "345",
                              "value" : [ "starting ","0" ]
                           } ]
                        }, {
                           "value" : [ ": " ]
                        }, {
                           "r" : "348",
                           "s" : [ {
                              "r" : "349",
                              "s" : [ {
                                 "value" : [ "Sum" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "350",
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
               "localId" : "351",
               "type" : "Query",
               "source" : [ {
                  "localId" : "332",
                  "alias" : "Num",
                  "expression" : {
                     "localId" : "333",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "334",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "335",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "336",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "337",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "338",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "339",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "340",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "341",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "342",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "343",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "aggregate" : {
                  "localId" : "344",
                  "identifier" : "Sum",
                  "distinct" : false,
                  "expression" : {
                     "localId" : "348",
                     "type" : "Add",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "349",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "350",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "345",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "353",
            "name" : "distinctAggregation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "353",
                  "s" : [ {
                     "value" : [ "","define ","distinctAggregation",":\n " ]
                  }, {
                     "r" : "373",
                     "s" : [ {
                        "s" : [ {
                           "r" : "354",
                           "s" : [ {
                              "r" : "355",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "355",
                                 "s" : [ {
                                    "r" : "356",
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
                        "r" : "366",
                        "s" : [ {
                           "value" : [ "aggregate distinct ","Sum"," " ]
                        }, {
                           "r" : "367",
                           "s" : [ {
                              "r" : "367",
                              "value" : [ "starting ","0" ]
                           } ]
                        }, {
                           "value" : [ ": " ]
                        }, {
                           "r" : "370",
                           "s" : [ {
                              "r" : "371",
                              "s" : [ {
                                 "value" : [ "Sum" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "372",
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
               "localId" : "373",
               "type" : "Query",
               "source" : [ {
                  "localId" : "354",
                  "alias" : "Num",
                  "expression" : {
                     "localId" : "355",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "356",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "357",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "358",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "359",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "360",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "361",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "362",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "363",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "364",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "365",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "aggregate" : {
                  "localId" : "366",
                  "identifier" : "Sum",
                  "distinct" : true,
                  "expression" : {
                     "localId" : "370",
                     "type" : "Add",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "371",
                        "name" : "Sum",
                        "type" : "QueryLetRef"
                     }, {
                        "localId" : "372",
                        "name" : "Num",
                        "type" : "AliasRef"
                     } ]
                  },
                  "starting" : {
                     "localId" : "367",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "270",
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
                     "r" : "226",
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
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "219",
                           "s" : [ {
                              "value" : [ "Tuple {\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "start",": " ]
                              }, {
                                 "r" : "220",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "222",
                                    "s" : [ {
                                       "r" : "221",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "222",
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
                                 "r" : "223",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "225",
                                    "s" : [ {
                                       "r" : "224",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "225",
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
            "expression" : {
               "localId" : "226",
               "type" : "Query",
               "source" : [ {
                  "localId" : "213",
                  "alias" : "X",
                  "expression" : {
                     "localId" : "214",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "215",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "216",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "217",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "218",
                  "expression" : {
                     "localId" : "219",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "start",
                        "value" : {
                           "localId" : "220",
                           "type" : "Start",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "222",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "end",
                        "value" : {
                           "localId" : "223",
                           "type" : "End",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "225",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property"
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "228",
            "name" : "NullObjectQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","NullObjectQuery",":\n  " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "s" : [ {
                           "r" : "229",
                           "s" : [ {
                              "r" : "230",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "230",
                                 "s" : [ {
                                    "r" : "231",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "232",
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
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "Tuple {\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "start",": " ]
                              }, {
                                 "r" : "235",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "237",
                                    "s" : [ {
                                       "r" : "236",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "237",
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
                                 "r" : "238",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "240",
                                    "s" : [ {
                                       "r" : "239",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "240",
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
            "expression" : {
               "localId" : "241",
               "type" : "Query",
               "source" : [ {
                  "localId" : "229",
                  "alias" : "X",
                  "expression" : {
                     "localId" : "230",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "231",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "232",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "233",
                  "expression" : {
                     "localId" : "234",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "start",
                        "value" : {
                           "localId" : "235",
                           "type" : "Start",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "237",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "end",
                        "value" : {
                           "localId" : "238",
                           "type" : "End",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "240",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property"
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "243",
            "name" : "AllNullMultiSourceQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","AllNullMultiSourceQuery",":\n  " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from\n    " ]
                        }, {
                           "r" : "244",
                           "s" : [ {
                              "r" : "245",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "245",
                                 "s" : [ {
                                    "r" : "246",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "247",
                                    "s" : [ {
                                       "value" : [ "List<" ]
                                    }, {
                                       "r" : "248",
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
                           "r" : "249",
                           "s" : [ {
                              "r" : "250",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "250",
                                 "s" : [ {
                                    "r" : "251",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "252",
                                    "s" : [ {
                                       "value" : [ "List<" ]
                                    }, {
                                       "r" : "253",
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
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "255",
                           "s" : [ {
                              "value" : [ "Tuple {\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "cStart",": " ]
                              }, {
                                 "r" : "256",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "258",
                                    "s" : [ {
                                       "r" : "257",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "258",
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
                                 "r" : "259",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "261",
                                    "s" : [ {
                                       "r" : "260",
                                       "s" : [ {
                                          "value" : [ "X" ]
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
                           }, {
                              "value" : [ ",\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "eStart",": " ]
                              }, {
                                 "r" : "262",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "264",
                                    "s" : [ {
                                       "r" : "263",
                                       "s" : [ {
                                          "value" : [ "Y" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "264",
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
                                 "r" : "265",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "267",
                                    "s" : [ {
                                       "r" : "266",
                                       "s" : [ {
                                          "value" : [ "Y" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "267",
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
            "expression" : {
               "localId" : "268",
               "type" : "Query",
               "source" : [ {
                  "localId" : "244",
                  "alias" : "X",
                  "expression" : {
                     "localId" : "245",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "246",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "247",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "248",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "localId" : "249",
                  "alias" : "Y",
                  "expression" : {
                     "localId" : "250",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "251",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "252",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "253",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "254",
                  "expression" : {
                     "localId" : "255",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "cStart",
                        "value" : {
                           "localId" : "256",
                           "type" : "Start",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "258",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "cEnd",
                        "value" : {
                           "localId" : "259",
                           "type" : "End",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "261",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "eStart",
                        "value" : {
                           "localId" : "262",
                           "type" : "Start",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "264",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "eEnd",
                        "value" : {
                           "localId" : "265",
                           "type" : "End",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "267",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property"
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "localId" : "270",
            "name" : "SomeNullMultiSourceQuery",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","SomeNullMultiSourceQuery",":\n  " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "s" : [ {
                           "value" : [ "from\n    " ]
                        }, {
                           "r" : "271",
                           "s" : [ {
                              "r" : "272",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "272",
                                 "s" : [ {
                                    "r" : "273",
                                    "value" : [ "null"," as " ]
                                 }, {
                                    "r" : "274",
                                    "s" : [ {
                                       "value" : [ "List<" ]
                                    }, {
                                       "r" : "275",
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
                           "r" : "276",
                           "s" : [ {
                              "r" : "277",
                              "s" : [ {
                                 "r" : "277",
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
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Tuple {\n      " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "cStart",": " ]
                              }, {
                                 "r" : "280",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "282",
                                    "s" : [ {
                                       "r" : "281",
                                       "s" : [ {
                                          "value" : [ "X" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "282",
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
                                 "r" : "283",
                                 "s" : [ {
                                    "value" : [ "end of " ]
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
                                 "value" : [ "eStart",": " ]
                              }, {
                                 "r" : "286",
                                 "s" : [ {
                                    "value" : [ "start of " ]
                                 }, {
                                    "r" : "288",
                                    "s" : [ {
                                       "r" : "287",
                                       "s" : [ {
                                          "value" : [ "Y" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "288",
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
                                 "r" : "289",
                                 "s" : [ {
                                    "value" : [ "end of " ]
                                 }, {
                                    "r" : "291",
                                    "s" : [ {
                                       "r" : "290",
                                       "s" : [ {
                                          "value" : [ "Y" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "291",
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
            "expression" : {
               "localId" : "292",
               "type" : "Query",
               "source" : [ {
                  "localId" : "271",
                  "alias" : "X",
                  "expression" : {
                     "localId" : "272",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "273",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "274",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "275",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "localId" : "276",
                  "alias" : "Y",
                  "expression" : {
                     "localId" : "277",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "278",
                  "expression" : {
                     "localId" : "279",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "cStart",
                        "value" : {
                           "localId" : "280",
                           "type" : "Start",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "282",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "cEnd",
                        "value" : {
                           "localId" : "283",
                           "type" : "End",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "285",
                              "path" : "period",
                              "scope" : "X",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "eStart",
                        "value" : {
                           "localId" : "286",
                           "type" : "Start",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "288",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "eEnd",
                        "value" : {
                           "localId" : "289",
                           "type" : "End",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "291",
                              "path" : "period",
                              "scope" : "Y",
                              "type" : "Property"
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

