/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Add
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Ten: 10
define Eleven: 11
define OnePlusTwo: 1 + 2
define AddMultiple: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
define AddVariables: Ten + Eleven
define AddTime: Time(12) + 1 'hour'
define UncertaintyZeroToTwelve: months between DateTime(2005, 12) and DateTime(2006)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define AddUncertainties: UncertaintyZeroToTwelve + UncertaintySixToEighteen
define AddUncertaintyAndNumber: UncertaintyZeroToTwelve + 5
define AddNumberAndUncertainty: 10 + UncertaintyZeroToTwelve
*/

module.exports['Add'] = {
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
            "r" : "291",
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
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "r" : "213",
                     "value" : [ "","define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "r" : "216",
                     "value" : [ "","define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "name" : "OnePlusTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","OnePlusTwo",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "220",
                        "value" : [ "1"," + ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "223",
            "name" : "AddMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","AddMultiple",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "s" : [ {
                              "r" : "227",
                              "s" : [ {
                                 "r" : "228",
                                 "s" : [ {
                                    "r" : "229",
                                    "s" : [ {
                                       "r" : "230",
                                       "s" : [ {
                                          "r" : "231",
                                          "s" : [ {
                                             "r" : "232",
                                             "s" : [ {
                                                "r" : "233",
                                                "value" : [ "1"," + ","2" ]
                                             } ]
                                          }, {
                                             "r" : "235",
                                             "value" : [ " + ","3" ]
                                          } ]
                                       }, {
                                          "r" : "236",
                                          "value" : [ " + ","4" ]
                                       } ]
                                    }, {
                                       "r" : "237",
                                       "value" : [ " + ","5" ]
                                    } ]
                                 }, {
                                    "r" : "238",
                                    "value" : [ " + ","6" ]
                                 } ]
                              }, {
                                 "r" : "239",
                                 "value" : [ " + ","7" ]
                              } ]
                           }, {
                              "r" : "240",
                              "value" : [ " + ","8" ]
                           } ]
                        }, {
                           "r" : "241",
                           "value" : [ " + ","9" ]
                        } ]
                     }, {
                        "r" : "242",
                        "value" : [ " + ","10" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "225",
                  "type" : "Add",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "226",
                     "type" : "Add",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "227",
                        "type" : "Add",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "228",
                           "type" : "Add",
                           "signature" : [ ],
                           "operand" : [ {
                              "localId" : "229",
                              "type" : "Add",
                              "signature" : [ ],
                              "operand" : [ {
                                 "localId" : "230",
                                 "type" : "Add",
                                 "signature" : [ ],
                                 "operand" : [ {
                                    "localId" : "231",
                                    "type" : "Add",
                                    "signature" : [ ],
                                    "operand" : [ {
                                       "localId" : "232",
                                       "type" : "Add",
                                       "signature" : [ ],
                                       "operand" : [ {
                                          "localId" : "233",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "1",
                                          "type" : "Literal"
                                       }, {
                                          "localId" : "234",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "2",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "localId" : "235",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "3",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "236",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "4",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "localId" : "237",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "5",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "238",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "6",
                              "type" : "Literal"
                           } ]
                        }, {
                           "localId" : "239",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "7",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "240",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "242",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "AddVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","AddVariables",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "246",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "247",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "249",
            "name" : "AddTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","AddTime",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "r" : "251",
                           "value" : [ "Time","(","12",")" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "1 ","'hour'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "254",
                  "type" : "Time",
                  "signature" : [ ],
                  "hour" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "255",
                  "value" : 1,
                  "unit" : "hour",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "UncertaintyZeroToTwelve",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyZeroToTwelve",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "r" : "259",
                           "value" : [ "DateTime","(","2005",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "263",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "267",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "269",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "274",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "279",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "276",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "281",
            "name" : "AddUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","AddUncertainties",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "283",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "284",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "286",
            "name" : "AddUncertaintyAndNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","AddUncertaintyAndNumber",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     }, {
                        "r" : "289",
                        "value" : [ " + ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "288",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "289",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "291",
            "name" : "AddNumberAndUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "","define ","AddNumberAndUncertainty",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "r" : "293",
                        "value" : [ "10"," + " ]
                     }, {
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "293",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "294",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

/* Subtract
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Ten: 10
define Eleven: 11
define FiveMinusTwo: 5 - 2
define SubtractMultiple: 100 - 50 - 25 - 10
define SubtractVariables: Eleven - Ten
define UncertaintyZeroToTwelve: months between DateTime(2005, 12) and DateTime(2006)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define SubtractUncertainties: UncertaintySixToEighteen - UncertaintyZeroToTwelve
define SubtractNumberFromUncertainty: UncertaintySixToEighteen - 5
define SubtractUncertaintyFromNumber: 10 - UncertaintySixToEighteen
*/

module.exports['Subtract'] = {
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
            "r" : "271",
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
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "r" : "213",
                     "value" : [ "","define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "r" : "216",
                     "value" : [ "","define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "name" : "FiveMinusTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","FiveMinusTwo",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "220",
                        "value" : [ "5"," - ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "223",
            "name" : "SubtractMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","SubtractMultiple",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "s" : [ {
                              "r" : "227",
                              "value" : [ "100"," - ","50" ]
                           } ]
                        }, {
                           "r" : "229",
                           "value" : [ " - ","25" ]
                        } ]
                     }, {
                        "r" : "230",
                        "value" : [ " - ","10" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "225",
                  "type" : "Subtract",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "226",
                     "type" : "Subtract",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "227",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "100",
                        "type" : "Literal"
                     }, {
                        "localId" : "228",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "50",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "230",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "232",
            "name" : "SubtractVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","SubtractVariables",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "234",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "235",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "237",
            "name" : "UncertaintyZeroToTwelve",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyZeroToTwelve",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "r" : "239",
                           "value" : [ "DateTime","(","2005",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "243",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "239",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "247",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "249",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "r" : "251",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "r" : "255",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "254",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "259",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "255",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "256",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "261",
            "name" : "SubtractUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUncertainties",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "263",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "264",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "266",
            "name" : "SubtractNumberFromUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","SubtractNumberFromUncertainty",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "r" : "269",
                        "value" : [ " - ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "268",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "269",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "271",
            "name" : "SubtractUncertaintyFromNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUncertaintyFromNumber",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "273",
                        "value" : [ "10"," - " ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "273",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "274",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

/* Multiply
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Ten: 10
define Eleven: 11
define FiveTimesTwo: 5 * 2
define MultiplyMultiple: 1 * 2 * 3 * 4 * 5
define MultiplyVariables: Eleven * Ten
define UncertaintyTwoToFourteen: months between DateTime(2005, 10) and DateTime(2006)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define MultiplyUncertainties: UncertaintyTwoToFourteen * UncertaintySixToEighteen
define MultiplyUncertaintyAndNumber: UncertaintyTwoToFourteen * 5
define MultiplyNumberAndUncertainty: 10 * UncertaintyTwoToFourteen
*/

module.exports['Multiply'] = {
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
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "r" : "213",
                     "value" : [ "","define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "r" : "216",
                     "value" : [ "","define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "name" : "FiveTimesTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","FiveTimesTwo",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "220",
                        "value" : [ "5"," * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "223",
            "name" : "MultiplyMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyMultiple",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "s" : [ {
                              "r" : "227",
                              "s" : [ {
                                 "r" : "228",
                                 "value" : [ "1"," * ","2" ]
                              } ]
                           }, {
                              "r" : "230",
                              "value" : [ " * ","3" ]
                           } ]
                        }, {
                           "r" : "231",
                           "value" : [ " * ","4" ]
                        } ]
                     }, {
                        "r" : "232",
                        "value" : [ " * ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "225",
                  "type" : "Multiply",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "226",
                     "type" : "Multiply",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "227",
                        "type" : "Multiply",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "228",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "229",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "230",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "232",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "234",
            "name" : "MultiplyVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyVariables",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "236",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "237",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "239",
            "name" : "UncertaintyTwoToFourteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyTwoToFourteen",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "r" : "241",
                           "value" : [ "DateTime","(","2005",", ","10",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "r" : "246",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "245",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "249",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "251",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "r" : "253",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "256",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "261",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "257",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "263",
            "name" : "MultiplyUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUncertainties",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "265",
                  "name" : "UncertaintyTwoToFourteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "266",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "268",
            "name" : "MultiplyUncertaintyAndNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUncertaintyAndNumber",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     }, {
                        "r" : "271",
                        "value" : [ " * ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "270",
                  "name" : "UncertaintyTwoToFourteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "271",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "273",
            "name" : "MultiplyNumberAndUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "273",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyNumberAndUncertainty",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "275",
                        "value" : [ "10"," * " ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "275",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "276",
                  "name" : "UncertaintyTwoToFourteen",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

/* Divide
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Hundred: 100
define Four: 4
define TenDividedByTwo: 10 / 2
define TenDividedByFour: 10 / 4
define DivideMultiple: 1000 / 4 / 10 / 5
define DivideVariables: Hundred / Four
define UncertaintyTwoToFourteen: months between DateTime(2005, 10) and DateTime(2006)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define DivideUncertainties: UncertaintySixToEighteen / UncertaintyTwoToFourteen
define DivideUncertaintyByNumber: UncertaintySixToEighteen / 2
define DivideNumberByUncertainty: 36 / UncertaintySixToEighteen
*/

module.exports['Divide'] = {
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
            "r" : "304",
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
            "name" : "Hundred",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "r" : "213",
                     "value" : [ "","define ","Hundred",": ","100" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "100",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "name" : "Four",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "r" : "216",
                     "value" : [ "","define ","Four",": ","4" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "4",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "name" : "TenDividedByTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","TenDividedByTwo",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "220",
                        "value" : [ "10"," / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "223",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "225",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "TenDividedByFour",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","TenDividedByFour",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "value" : [ "10"," / ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "232",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "234",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "236",
            "name" : "DivideMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","DivideMultiple",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "238",
                        "s" : [ {
                           "r" : "239",
                           "s" : [ {
                              "r" : "240",
                              "value" : [ "1000"," / ","4" ]
                           } ]
                        }, {
                           "r" : "246",
                           "value" : [ " / ","10" ]
                        } ]
                     }, {
                        "r" : "249",
                        "value" : [ " / ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "238",
                  "type" : "Divide",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "239",
                     "type" : "Divide",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "243",
                        "type" : "ToDecimal",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "240",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1000",
                           "type" : "Literal"
                        }
                     }, {
                        "localId" : "245",
                        "type" : "ToDecimal",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "241",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "248",
                     "type" : "ToDecimal",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "246",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "251",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "253",
            "name" : "DivideVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","DivideVariables",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "Hundred" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "Four" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "254",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "258",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "255",
                     "name" : "Hundred",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "260",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "256",
                     "name" : "Four",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "localId" : "262",
            "name" : "UncertaintyTwoToFourteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyTwoToFourteen",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "DateTime","(","2005",", ","10",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "268",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "272",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "274",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "r" : "276",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "r" : "280",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "275",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "279",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "276",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "284",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "280",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "286",
            "name" : "DivideUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","DivideUncertainties",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "291",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "288",
                     "name" : "UncertaintySixToEighteen",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "293",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "289",
                     "name" : "UncertaintyTwoToFourteen",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "localId" : "295",
            "name" : "DivideUncertaintyByNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","DivideUncertaintyByNumber",": " ]
                  }, {
                     "r" : "296",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "r" : "298",
                        "value" : [ " / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "296",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "300",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "297",
                     "name" : "UncertaintySixToEighteen",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "302",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "298",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "304",
            "name" : "DivideNumberByUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","DivideNumberByUncertainty",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "r" : "306",
                        "value" : [ "36"," / " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "305",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "309",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "306",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "36",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "311",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "307",
                     "name" : "UncertaintySixToEighteen",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         } ]
      }
   }
}

/* Negate
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NegativeOne: -1
*/

module.exports['Negate'] = {
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
            "name" : "NegativeOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NegativeOne",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "-","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Negate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* MathPrecedence
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Mixed: 1 + 5 * 10 - 15 / 3
define Parenthetical: (1 + 5) * (10 - 15) / 3
*/

module.exports['MathPrecedence'] = {
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
            "r" : "229",
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
            "name" : "Mixed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Mixed",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "1"," + " ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "r" : "217",
                              "value" : [ "5"," * ","10" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "15"," / ","3" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "227",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "214",
                     "type" : "Add",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "215",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "216",
                        "type" : "Multiply",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "217",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "218",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "localId" : "219",
                  "type" : "Divide",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "223",
                     "type" : "ToDecimal",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "220",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "225",
                     "type" : "ToDecimal",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "221",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "229",
            "name" : "Parenthetical",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","Parenthetical",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "232",
                              "s" : [ {
                                 "r" : "233",
                                 "value" : [ "1"," + ","5" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ " * " ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "235",
                              "s" : [ {
                                 "r" : "236",
                                 "value" : [ "10"," - ","15" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        } ]
                     }, {
                        "r" : "238",
                        "value" : [ " / ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "240",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "231",
                     "type" : "Multiply",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "232",
                        "type" : "Add",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "233",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "234",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "235",
                        "type" : "Subtract",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "236",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        }, {
                           "localId" : "237",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "15",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "localId" : "242",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "238",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         } ]
      }
   }
}

/* Power
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Pow: 3 ^ 4
*/

module.exports['Power'] = {
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
            "name" : "Pow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Pow",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "3"," ^ ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Power",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

/* MinValue
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define MinInteger: minimum Integer
define MinDecimal: minimum Decimal
define MinDateTime: minimum  DateTime
define MinTime: minimum Time
define MinWrongType: minimum Quantity
*/

module.exports['MinValue'] = {
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
            "r" : "228",
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
            "name" : "MinInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","MinInteger",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "MinValue"
            }
         }, {
            "localId" : "216",
            "name" : "MinDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","MinDecimal",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "MinValue"
            }
         }, {
            "localId" : "220",
            "name" : "MinDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","MinDateTime",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "minimum","  " ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "MinValue"
            }
         }, {
            "localId" : "224",
            "name" : "MinTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","MinTime",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "valueType" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "MinValue"
            }
         }, {
            "localId" : "228",
            "name" : "MinWrongType",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","MinWrongType",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "valueType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "MinValue"
            }
         } ]
      }
   }
}

/* MaxValue
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define MaxInteger: maximum Integer
define MaxDecimal: maximum Decimal
define MaxDateTime: maximum DateTime
define MaxTime: maximum Time
define MaxWrongType: maximum Quantity
*/

module.exports['MaxValue'] = {
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
            "r" : "228",
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
            "name" : "MaxInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","MaxInteger",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "216",
            "name" : "MaxDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","MaxDecimal",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "220",
            "name" : "MaxDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","MaxDateTime",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "224",
            "name" : "MaxTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","MaxTime",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "valueType" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "228",
            "name" : "MaxWrongType",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","MaxWrongType",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "valueType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "MaxValue"
            }
         } ]
      }
   }
}

/* TruncatedDivide
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Trunc: 10 div 3
define Even: 9 div 3
*/

module.exports['TruncatedDivide'] = {
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
            "r" : "217",
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
            "name" : "Trunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Trunc",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "10"," div ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "TruncatedDivide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "217",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "9"," div ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "TruncatedDivide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "9",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

/* Modulo
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Mod: 3 mod 2
*/

module.exports['Modulo'] = {
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
            "name" : "Mod",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Mod",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "3"," mod ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Modulo",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

/* Ceiling
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Ceil: Ceiling(10.1)
define Even: Ceiling(10)
*/

module.exports['Ceiling'] = {
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
            "r" : "218",
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
            "name" : "Ceil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Ceil",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Ceiling","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "Ceiling",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "Ceiling","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "Ceiling",
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

/* Floor
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define flr: Floor(10.1)
define Even: Floor(10)
*/

module.exports['Floor'] = {
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
            "r" : "218",
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
            "name" : "flr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","flr",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Floor","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "Floor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "Floor","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "Floor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

/* Truncate
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Trunc: Truncate(10.1)
define Even: Truncate(10)
*/

module.exports['Truncate'] = {
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
            "r" : "218",
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
            "name" : "Trunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Trunc",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Truncate","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "Truncate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "Truncate","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "Truncate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

/* Abs
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Pos: Abs(10)
define Neg: Abs(-10)
define Zero: Abs(0)
*/

module.exports['Abs'] = {
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
            "r" : "225",
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
            "name" : "Pos",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Pos",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Abs","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "Abs",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "Neg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Neg",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "Abs","(" ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "-","10" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Abs",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "225",
            "name" : "Zero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","Zero",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "Abs","(","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "type" : "Abs",
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* Round
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Up: Round(4.56)
define Up_percent: Round(4.56,1)
define Down: Round(4.49)
define Down_percent: Round(4.43,1)
*/

module.exports['Round'] = {
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
            "r" : "231",
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
            "name" : "Up",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Up",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Round","(","4.56",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "Round",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.56",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "Up_percent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Up_percent",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "Round","(","4.56",",","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Round",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.56",
                  "type" : "Literal"
               },
               "precision" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "225",
            "name" : "Down",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","Down",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "Round","(","4.49",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "type" : "Round",
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.49",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "231",
            "name" : "Down_percent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","Down_percent",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "Round","(","4.43",",","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "type" : "Round",
               "signature" : [ ],
               "operand" : {
                  "localId" : "232",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.43",
                  "type" : "Literal"
               },
               "precision" : {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* Ln
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ln: Ln(4)
*/

module.exports['Ln'] = {
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
            "name" : "ln",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","ln",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Ln","(","4",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Ln",
               "signature" : [ ],
               "operand" : {
                  "localId" : "220",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

/* Log
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define log: Log(10,10000)
*/

module.exports['Log'] = {
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
            "name" : "log",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","log",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Log","(","10",",","10000",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "Log",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "223",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "225",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10000",
                     "type" : "Literal"
                  }
               } ]
            }
         } ]
      }
   }
}

/* Successor
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Is: successor of 2
define Rs: successor of 2.2
define ofr: successor of 2147483647
define y_date: successor of DateTime(2015)
define ym_date: successor of DateTime(2015,01)
define ymd_date: successor of DateTime(2015,01,01)
define ymdh_date: successor of DateTime(2015,01,01,0)
define ymdhm_date: successor of DateTime(2015,01,01,0,0)
define ymdhms_date: successor of DateTime(2015,01,01,0,0,0)
define ymdhmsm_date: successor of  DateTime(2015,01,01,0,0,0,0)
define max_date: successor of DateTime(9999,12,31,23,59,59,999)
*/

module.exports['Successor'] = {
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
            "r" : "294",
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
            "name" : "Is",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Is",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "successor of ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "216",
            "name" : "Rs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Rs",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "217",
                        "value" : [ "successor of ","2.2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "217",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "2.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "name" : "ofr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","ofr",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "successor of ","2147483647" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2147483647",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "y_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","y_date",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "DateTime","(","2015",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "228",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "231",
            "name" : "ym_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","ym_date",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "r" : "232",
                           "value" : [ "DateTime","(","2015",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "236",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "232",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "239",
            "name" : "ymd_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","ymd_date",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "r" : "240",
                           "value" : [ "DateTime","(","2015",",","01",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "245",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "248",
            "name" : "ymdh_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","ymdh_date",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "252",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "258",
            "name" : "ymdhm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","ymdhm_date",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "r" : "259",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "266",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "269",
            "name" : "ymdhms_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","ymdhms_date",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "278",
                        "s" : [ {
                           "r" : "270",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "278",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "272",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "281",
            "name" : "ymdhmsm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","ymdhmsm_date",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "value" : [ "successor of  " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "r" : "282",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "291",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "282",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "283",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "284",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "285",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "286",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "287",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "294",
            "name" : "max_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","max_date",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "304",
                        "s" : [ {
                           "r" : "295",
                           "value" : [ "DateTime","(","9999",",","12",",","31",",","23",",","59",",","59",",","999",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "305",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "304",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "297",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "31",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "298",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "299",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "300",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "301",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "999",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

/* Predecessor
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Is: predecessor of 2
define Rs: predecessor of 2.2
define ufr: predecessor of -2147483648
define y_date: predecessor of DateTime(2015)
define ym_date: predecessor of DateTime(2015,01)
define ymd_date: predecessor of DateTime(2015,01,01)
define ymdh_date: predecessor of DateTime(2015,01,01,0)
define ymdhm_date: predecessor of DateTime(2015,01,01,0,0)
define ymdhms_date: predecessor of DateTime(2015,01,01,0,0,0)
define ymdhmsm_date: predecessor of DateTime(2015,01,01,0,0,0,0)
define min_date: predecessor of DateTime(0001,01,01,0,0,0,0)
*/

module.exports['Predecessor'] = {
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
            "r" : "295",
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
            "name" : "Is",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Is",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "predecessor of ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "216",
            "name" : "Rs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Rs",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "217",
                        "value" : [ "predecessor of ","2.2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "217",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "2.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "name" : "ufr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","ufr",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "-","2147483648" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2147483648",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "225",
            "name" : "y_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","y_date",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "DateTime","(","2015",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "229",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "232",
            "name" : "ym_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","ym_date",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "DateTime","(","2015",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "240",
            "name" : "ymd_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","ymd_date",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "r" : "241",
                           "value" : [ "DateTime","(","2015",",","01",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "246",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "249",
            "name" : "ymdh_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","ymdh_date",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "r" : "250",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "256",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "252",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "259",
            "name" : "ymdhm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","ymdhm_date",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "r" : "260",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "267",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "270",
            "name" : "ymdhms_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","ymdhms_date",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "279",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "272",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "276",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "282",
            "name" : "ymdhmsm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","ymdhmsm_date",": " ]
                  }, {
                     "r" : "293",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "292",
                        "s" : [ {
                           "r" : "283",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "293",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "292",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "283",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "284",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "285",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "286",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "287",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "289",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "295",
            "name" : "min_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","min_date",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "r" : "296",
                           "value" : [ "DateTime","(","0001",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "306",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "305",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "297",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "298",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "299",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "300",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "301",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "302",
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

/* Quantity
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient

define days_10: 10 days
define QL10Days: Quantity{value: 10, unit: 'days'}
define QL10Min : Quantity{value: 10, unit: 'min' }
define Jan1_2000: DateTime(2000, 1, 1)
define add_q_q : days_10 + QL10Days
define add_d_q : Jan1_2000 + days_10
define sub_q_q : days_10 - QL10Days
define sub_d_q : Jan1_2000 - days_10
define add_q_q_diff : QL10Days + QL10Min
define sub_q_q_diff : QL10Days - QL10Min
define div_q_d : days_10 / 2
define div_q_q : days_10 / QL10Days
define mul_q_d : days_10 * 2
define mul_d_q : 2 * QL10Days
define mul_q_q : 2 'm' * 10 'm'
define mul_q_q_diff : 2 'm' * 10 '/d'
define neg : - days_10
define abs : Abs(neg)
define MultiplyUcum: (5 'm' * 25 'km') = 125000 'm2'
define DivideUcum: (20 'm2' / 5 'm') = 4 'm'
define AddUcum: (5 'm' + 5 'km') = 5005 'm'
define SubtractUcum: (25 'km' - 5 'm') = 24995 'm'
*/

module.exports['Quantity'] = {
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
            "r" : "336",
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
            "name" : "days_10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","days_10",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "10 ","days" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "value" : 10,
               "unit" : "days",
               "type" : "Quantity"
            }
         }, {
            "localId" : "215",
            "name" : "QL10Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "value" : [ "","define ","QL10Days",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "Quantity","{" ]
                     }, {
                        "s" : [ {
                           "r" : "218",
                           "value" : [ "value",": ","10" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "221",
                           "s" : [ {
                              "value" : [ "'days'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "220",
                     "type" : "ToDecimal",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "218",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "days",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "223",
            "name" : "QL10Min",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","QL10Min"," : " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "Quantity","{" ]
                     }, {
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "value",": ","10" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "'min'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "228",
                     "type" : "ToDecimal",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "226",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "min",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "231",
            "name" : "Jan1_2000",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","Jan1_2000",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "DateTime","(","2000",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "DateTime",
               "signature" : [ ],
               "year" : {
                  "localId" : "232",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "239",
            "name" : "add_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","add_q_q"," : " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "241",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "242",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "add_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","add_d_q"," : " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "Jan1_2000" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "246",
                  "name" : "Jan1_2000",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "247",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "249",
            "name" : "sub_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","sub_q_q"," : " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "251",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "252",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "254",
            "name" : "sub_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","sub_d_q"," : " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "Jan1_2000" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "256",
                  "name" : "Jan1_2000",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "257",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "259",
            "name" : "add_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","add_q_q_diff"," : " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "QL10Min" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "261",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "262",
                  "name" : "QL10Min",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "264",
            "name" : "sub_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","sub_q_q_diff"," : " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "QL10Min" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "266",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "267",
                  "name" : "QL10Min",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "269",
            "name" : "div_q_d",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","div_q_d"," : " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "r" : "272",
                        "value" : [ " / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "271",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "274",
                  "type" : "ToQuantity",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "272",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "276",
            "name" : "div_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","div_q_q"," : " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "277",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "279",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "281",
            "name" : "mul_q_d",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_d"," : " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "r" : "284",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "283",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "286",
                  "type" : "ToQuantity",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "284",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "288",
            "name" : "mul_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","mul_d_q"," : " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "r" : "290",
                        "value" : [ "2"," * " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "293",
                  "type" : "ToQuantity",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "291",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "295",
            "name" : "mul_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_q"," : " ]
                  }, {
                     "r" : "296",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "2 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "10 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "296",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "297",
                  "value" : 2,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "298",
                  "value" : 10,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "300",
            "name" : "mul_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_q_diff"," : " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "2 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "10 ","'/d'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "301",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "302",
                  "value" : 2,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "303",
                  "value" : 10,
                  "unit" : "/d",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "305",
            "name" : "neg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","neg"," : " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "value" : [ "- " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "306",
               "type" : "Negate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "307",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "309",
            "name" : "abs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","abs"," : " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "value" : [ "Abs","(" ]
                     }, {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "neg" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "type" : "Abs",
               "signature" : [ ],
               "operand" : {
                  "localId" : "310",
                  "name" : "neg",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "315",
            "name" : "MultiplyUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "315",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUcum",": " ]
                  }, {
                     "r" : "316",
                     "s" : [ {
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "r" : "318",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           }, {
                              "value" : [ " * " ]
                           }, {
                              "r" : "319",
                              "s" : [ {
                                 "value" : [ "25 ","'km'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "320",
                        "s" : [ {
                           "value" : [ "125000 ","'m2'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "316",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "317",
                  "type" : "Multiply",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "318",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "319",
                     "value" : 25,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "320",
                  "value" : 125000,
                  "unit" : "m2",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "322",
            "name" : "DivideUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "322",
                  "s" : [ {
                     "value" : [ "","define ","DivideUcum",": " ]
                  }, {
                     "r" : "323",
                     "s" : [ {
                        "r" : "324",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "324",
                           "s" : [ {
                              "r" : "325",
                              "s" : [ {
                                 "value" : [ "20 ","'m2'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "326",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "323",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "324",
                  "type" : "Divide",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "325",
                     "value" : 20,
                     "unit" : "m2",
                     "type" : "Quantity"
                  }, {
                     "localId" : "326",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "327",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "329",
            "name" : "AddUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "329",
                  "s" : [ {
                     "value" : [ "","define ","AddUcum",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "r" : "331",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "331",
                           "s" : [ {
                              "r" : "332",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "333",
                              "s" : [ {
                                 "value" : [ "5 ","'km'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "334",
                        "s" : [ {
                           "value" : [ "5005 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "330",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "331",
                  "type" : "Add",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "332",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "333",
                     "value" : 5,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "334",
                  "value" : 5005,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "336",
            "name" : "SubtractUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUcum",": " ]
                  }, {
                     "r" : "337",
                     "s" : [ {
                        "r" : "338",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "338",
                           "s" : [ {
                              "r" : "339",
                              "s" : [ {
                                 "value" : [ "25 ","'km'" ]
                              } ]
                           }, {
                              "value" : [ " - " ]
                           }, {
                              "r" : "340",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "341",
                        "s" : [ {
                           "value" : [ "24995 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "337",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "338",
                  "type" : "Subtract",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "339",
                     "value" : 25,
                     "unit" : "km",
                     "type" : "Quantity"
                  }, {
                     "localId" : "340",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "341",
                  "value" : 24995,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

/* OutOfBounds
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IntegerAddOverflow: maximum Integer + 1
define IntegerAddUnderflow: minimum Integer + -1
define IntegerSubtractOverflow: maximum Integer - -1
define IntegerSubtractUnderflow: minimum Integer - 1
define IntegerMultiplyOverflow: maximum Integer * 2
define IntegerMultiplyUnderflow: minimum Integer * -2
define IntegerDivideOverflow: maximum Integer / (0.5)
define IntegerDivideUnderflow: minimum Integer / (-0.5)
define IntegerDivideByZero: 1 / 0
define IntegerPowerOverflow: (maximum Integer)^3
define IntegerPowerUnderflow: (minimum Integer)^3
define IntegerSuccessorOverflow: successor of maximum Integer
define IntegerPredecessorUnderflow: predecessor of minimum Integer

define DecimalAddOverflow: maximum Decimal + 1.0
define DecimalAddUnderflow: minimum Decimal + -1.0
define DecimalSubtractOverflow: maximum Decimal - -1.0
define DecimalSubtractUnderflow: minimum Decimal - 1.0
define DecimalMultiplyOverflow: maximum Decimal * 2
define DecimalMultiplyUnderflow: minimum Decimal * -2
define DecimalDivideOverflow: maximum Decimal / (0.5)
define DecimalDivideUnderflow: minimum Decimal / (-0.5)
define DecimalDivideByZero: 1.0 / 0
define DecimalPowerOverflow: (maximum Decimal)^2
define DecimalPowerUnderflow: (minimum Decimal)^3
define DecimalSuccessorOverflow: successor of maximum Decimal
define DecimalPredecessorUnderflow: predecessor of minimum Decimal

define MaxQuantity: Quantity { value: maximum Decimal, unit: 'mm' }
define MinQuantity: Quantity { value: minimum Decimal, unit: 'mm' }
define QuantityAddOverflow: MaxQuantity + 1.0 'mm'
define QuantityAddUnderflow: MinQuantity + (-1.0 'mm')
define QuantitySubtractOverflow: MaxQuantity - (-1 'mm')
define QuantitySubtractUnderflow: MinQuantity - 1 'mm'
define QuantityMultiplyOverflow: MaxQuantity * 2 'mm'
define QuantityMultiplyUnderflow: MinQuantity * 2 'mm'
define QuantityDivideOverflow: MaxQuantity / 0.5 'mm'
define QuantityDivideUnderflow: MinQuantity / (-0.5 'mm')
define QuantityDivideByZero: 1.0 'mm' / 0 'mm'
define QuantitySuccessorOverflow: successor of MaxQuantity
define QuantityPredecessorUnderflow: predecessor of MinQuantity

define DateTimeAddOverflow: maximum DateTime + 1 day
define DateTimeAddUnderflow: minimum DateTime + (-1 day)
define DateTimeSubtractOverflow: maximum DateTime - (-1 day)
define DateTimeSubtractUnderflow: minimum DateTime - 1 day
define DateTimeSuccessorOverflow: successor of maximum DateTime
define DateTimePredecessorUnderflow: predecessor of minimum DateTime

define DateAddOverflow: maximum Date + 1 day
define DateAddUnderflow: minimum Date + (-1 day)
define DateSubtractOverflow: maximum Date - (-1 day)
define DateSubtractUnderflow: minimum Date - 1 day
define DateSuccessorOverflow: successor of maximum Date
define DatePredecessorUnderflow: predecessor of minimum Date

define TimeAddOverflow: maximum Time + 1 second
define TimeAddUnderflow: minimum Time + (-1 second)
define TimeSubtractOverflow: maximum Time - (-1 second)
define TimeSubtractUnderflow: minimum Time - 1 second
define TimeSuccessorOverflow: successor of maximum Time
define TimePredecessorUnderflow: predecessor of minimum Time

define ExpOverflow: Exp(maximum Decimal)
*/

module.exports['OutOfBounds'] = {
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
            "r" : "566",
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
            "name" : "IntegerAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAddOverflow",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "214",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "216",
                        "value" : [ " + ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "216",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "218",
            "name" : "IntegerAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAddUnderflow",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "220",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "r" : "223",
                           "value" : [ "-","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "222",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "225",
            "name" : "IntegerSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSubtractOverflow",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "-","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "229",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "232",
            "name" : "IntegerSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSubtractUnderflow",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "236",
                        "value" : [ " - ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "238",
            "name" : "IntegerMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMultiplyOverflow",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "240",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "242",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "241",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "242",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "IntegerMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMultiplyUnderflow",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "-","2" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "247",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "248",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "251",
            "name" : "IntegerDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideOverflow",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "253",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "r" : "255",
                           "value" : [ "(","0.5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "257",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "MaxValue"
                  }
               }, {
                  "localId" : "255",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "259",
            "name" : "IntegerDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideUnderflow",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "263",
                           "s" : [ {
                              "r" : "264",
                              "value" : [ "-","0.5" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "266",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "MinValue"
                  }
               }, {
                  "localId" : "263",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "268",
            "name" : "IntegerDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideByZero",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "270",
                        "value" : [ "1"," / ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "273",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "275",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "277",
            "name" : "IntegerPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPowerOverflow",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "280",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "279",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "281",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "type" : "Power",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "280",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "281",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "283",
            "name" : "IntegerPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPowerUnderflow",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "285",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "287",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "type" : "Power",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "286",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "287",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "289",
            "name" : "IntegerSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSuccessorOverflow",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "290",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "291",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "294",
            "name" : "IntegerPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPredecessorUnderflow",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "295",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "296",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "299",
            "name" : "DecimalAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAddOverflow",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "303",
                        "value" : [ " + ","1.0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "302",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "303",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "305",
            "name" : "DecimalAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAddUnderflow",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "307",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "r" : "310",
                           "value" : [ "-","1.0" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "306",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "308",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "309",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "310",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "312",
            "name" : "DecimalSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSubtractOverflow",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "316",
                        "s" : [ {
                           "r" : "317",
                           "value" : [ "-","1.0" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "315",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "316",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "317",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "319",
            "name" : "DecimalSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "319",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSubtractUnderflow",": " ]
                  }, {
                     "r" : "320",
                     "s" : [ {
                        "r" : "322",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "321",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "323",
                        "value" : [ " - ","1.0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "320",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "322",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "323",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "325",
            "name" : "DecimalMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMultiplyOverflow",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "r" : "328",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "327",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "329",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "328",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "331",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "329",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "333",
            "name" : "DecimalMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMultiplyUnderflow",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "335",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "337",
                        "s" : [ {
                           "r" : "338",
                           "value" : [ "-","2" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "334",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "336",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "340",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "337",
                     "type" : "Negate",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "338",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "342",
            "name" : "DecimalDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "342",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideOverflow",": " ]
                  }, {
                     "r" : "343",
                     "s" : [ {
                        "r" : "345",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "344",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "346",
                        "s" : [ {
                           "r" : "346",
                           "value" : [ "(","0.5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "343",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "345",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "346",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "348",
            "name" : "DecimalDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "348",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideUnderflow",": " ]
                  }, {
                     "r" : "349",
                     "s" : [ {
                        "r" : "351",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "350",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "352",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "352",
                           "s" : [ {
                              "r" : "353",
                              "value" : [ "-","0.5" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "349",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "351",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "352",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "353",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "355",
            "name" : "DecimalDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "355",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideByZero",": " ]
                  }, {
                     "r" : "356",
                     "s" : [ {
                        "r" : "357",
                        "value" : [ "1.0"," / ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "356",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "357",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               }, {
                  "localId" : "360",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "358",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "362",
            "name" : "DecimalPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPowerOverflow",": " ]
                  }, {
                     "r" : "363",
                     "s" : [ {
                        "r" : "365",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "365",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "364",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "366",
                        "value" : [ "^","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "363",
               "type" : "Power",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "365",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "368",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "366",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "370",
            "name" : "DecimalPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "370",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPowerUnderflow",": " ]
                  }, {
                     "r" : "371",
                     "s" : [ {
                        "r" : "373",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "373",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "372",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "374",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "371",
               "type" : "Power",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "373",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "376",
                  "type" : "ToDecimal",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "374",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "378",
            "name" : "DecimalSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "378",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSuccessorOverflow",": " ]
                  }, {
                     "r" : "381",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "380",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "379",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "381",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "380",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "383",
            "name" : "DecimalPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "383",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPredecessorUnderflow",": " ]
                  }, {
                     "r" : "386",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "385",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "384",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "386",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "385",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "388",
            "name" : "MaxQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "388",
                  "s" : [ {
                     "value" : [ "","define ","MaxQuantity",": " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "value" : [ "Quantity"," { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "value",": " ]
                        }, {
                           "r" : "392",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "391",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "393",
                           "s" : [ {
                              "value" : [ "'mm'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "389",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "392",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "MaxValue"
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "393",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "mm",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "395",
            "name" : "MinQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "395",
                  "s" : [ {
                     "value" : [ "","define ","MinQuantity",": " ]
                  }, {
                     "r" : "396",
                     "s" : [ {
                        "value" : [ "Quantity"," { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "value",": " ]
                        }, {
                           "r" : "399",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "398",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "400",
                           "s" : [ {
                              "value" : [ "'mm'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "396",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "399",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "MinValue"
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "400",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "mm",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "402",
            "name" : "QuantityAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "402",
                  "s" : [ {
                     "value" : [ "","define ","QuantityAddOverflow",": " ]
                  }, {
                     "r" : "403",
                     "s" : [ {
                        "r" : "404",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "405",
                        "s" : [ {
                           "value" : [ "1.0 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "403",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "404",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "405",
                  "value" : 1.0,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "407",
            "name" : "QuantityAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "407",
                  "s" : [ {
                     "value" : [ "","define ","QuantityAddUnderflow",": " ]
                  }, {
                     "r" : "408",
                     "s" : [ {
                        "r" : "409",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "410",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "410",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "411",
                              "s" : [ {
                                 "value" : [ "1.0 ","'mm'" ]
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
               "localId" : "408",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "409",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "410",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "411",
                     "value" : 1.0,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "413",
            "name" : "QuantitySubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "413",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySubtractOverflow",": " ]
                  }, {
                     "r" : "414",
                     "s" : [ {
                        "r" : "415",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "416",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "416",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "417",
                              "s" : [ {
                                 "value" : [ "1 ","'mm'" ]
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
               "localId" : "414",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "415",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "416",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "417",
                     "value" : 1,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "419",
            "name" : "QuantitySubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "419",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySubtractUnderflow",": " ]
                  }, {
                     "r" : "420",
                     "s" : [ {
                        "r" : "421",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "422",
                        "s" : [ {
                           "value" : [ "1 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "420",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "421",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "422",
                  "value" : 1,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "424",
            "name" : "QuantityMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","QuantityMultiplyOverflow",": " ]
                  }, {
                     "r" : "425",
                     "s" : [ {
                        "r" : "426",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "427",
                        "s" : [ {
                           "value" : [ "2 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "425",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "426",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "427",
                  "value" : 2,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "429",
            "name" : "QuantityMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "429",
                  "s" : [ {
                     "value" : [ "","define ","QuantityMultiplyUnderflow",": " ]
                  }, {
                     "r" : "430",
                     "s" : [ {
                        "r" : "431",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "432",
                        "s" : [ {
                           "value" : [ "2 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "430",
               "type" : "Multiply",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "431",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "432",
                  "value" : 2,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "434",
            "name" : "QuantityDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "434",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideOverflow",": " ]
                  }, {
                     "r" : "435",
                     "s" : [ {
                        "r" : "436",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "437",
                        "s" : [ {
                           "value" : [ "0.5 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "435",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "436",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "437",
                  "value" : 0.5,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "439",
            "name" : "QuantityDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "439",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideUnderflow",": " ]
                  }, {
                     "r" : "440",
                     "s" : [ {
                        "r" : "441",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "442",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "442",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "443",
                              "s" : [ {
                                 "value" : [ "0.5 ","'mm'" ]
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
               "localId" : "440",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "441",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "442",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "443",
                     "value" : 0.5,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "445",
            "name" : "QuantityDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "445",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideByZero",": " ]
                  }, {
                     "r" : "446",
                     "s" : [ {
                        "r" : "447",
                        "s" : [ {
                           "value" : [ "1.0 ","'mm'" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "448",
                        "s" : [ {
                           "value" : [ "0 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "446",
               "type" : "Divide",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "447",
                  "value" : 1.0,
                  "unit" : "mm",
                  "type" : "Quantity"
               }, {
                  "localId" : "448",
                  "value" : 0,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "450",
            "name" : "QuantitySuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "450",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySuccessorOverflow",": " ]
                  }, {
                     "r" : "452",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "451",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "452",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "451",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "454",
            "name" : "QuantityPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "454",
                  "s" : [ {
                     "value" : [ "","define ","QuantityPredecessorUnderflow",": " ]
                  }, {
                     "r" : "456",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "455",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "456",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "455",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "458",
            "name" : "DateTimeAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "458",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAddOverflow",": " ]
                  }, {
                     "r" : "459",
                     "s" : [ {
                        "r" : "461",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "460",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "462",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "459",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "461",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }, {
                  "localId" : "462",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "464",
            "name" : "DateTimeAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "464",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAddUnderflow",": " ]
                  }, {
                     "r" : "465",
                     "s" : [ {
                        "r" : "467",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "466",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "468",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "468",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "469",
                              "s" : [ {
                                 "value" : [ "1 ","day" ]
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
               "localId" : "465",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "467",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }, {
                  "localId" : "468",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "469",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "471",
            "name" : "DateTimeSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "471",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSubtractOverflow",": " ]
                  }, {
                     "r" : "472",
                     "s" : [ {
                        "r" : "474",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "473",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "475",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "475",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "476",
                              "s" : [ {
                                 "value" : [ "1 ","day" ]
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
               "localId" : "472",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "474",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }, {
                  "localId" : "475",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "476",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "478",
            "name" : "DateTimeSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "478",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSubtractUnderflow",": " ]
                  }, {
                     "r" : "479",
                     "s" : [ {
                        "r" : "481",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "480",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "482",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "479",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "481",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }, {
                  "localId" : "482",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "484",
            "name" : "DateTimeSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "484",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSuccessorOverflow",": " ]
                  }, {
                     "r" : "487",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "486",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "485",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "487",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "486",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "489",
            "name" : "DateTimePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "489",
                  "s" : [ {
                     "value" : [ "","define ","DateTimePredecessorUnderflow",": " ]
                  }, {
                     "r" : "492",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "491",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "490",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "492",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "491",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "494",
            "name" : "DateAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "494",
                  "s" : [ {
                     "value" : [ "","define ","DateAddOverflow",": " ]
                  }, {
                     "r" : "495",
                     "s" : [ {
                        "r" : "497",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "496",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "498",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "495",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "497",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }, {
                  "localId" : "498",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "500",
            "name" : "DateAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "500",
                  "s" : [ {
                     "value" : [ "","define ","DateAddUnderflow",": " ]
                  }, {
                     "r" : "501",
                     "s" : [ {
                        "r" : "503",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "502",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "504",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "504",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "505",
                              "s" : [ {
                                 "value" : [ "1 ","day" ]
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
               "localId" : "501",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "503",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }, {
                  "localId" : "504",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "505",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "507",
            "name" : "DateSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "507",
                  "s" : [ {
                     "value" : [ "","define ","DateSubtractOverflow",": " ]
                  }, {
                     "r" : "508",
                     "s" : [ {
                        "r" : "510",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "509",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "511",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "511",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "512",
                              "s" : [ {
                                 "value" : [ "1 ","day" ]
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
               "localId" : "508",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "510",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }, {
                  "localId" : "511",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "512",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "514",
            "name" : "DateSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","DateSubtractUnderflow",": " ]
                  }, {
                     "r" : "515",
                     "s" : [ {
                        "r" : "517",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "516",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "518",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "515",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "517",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }, {
                  "localId" : "518",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "520",
            "name" : "DateSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "520",
                  "s" : [ {
                     "value" : [ "","define ","DateSuccessorOverflow",": " ]
                  }, {
                     "r" : "523",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "522",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "521",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "523",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "522",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "525",
            "name" : "DatePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "525",
                  "s" : [ {
                     "value" : [ "","define ","DatePredecessorUnderflow",": " ]
                  }, {
                     "r" : "528",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "527",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "526",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "528",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "527",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "530",
            "name" : "TimeAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "530",
                  "s" : [ {
                     "value" : [ "","define ","TimeAddOverflow",": " ]
                  }, {
                     "r" : "531",
                     "s" : [ {
                        "r" : "533",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "532",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "534",
                        "s" : [ {
                           "value" : [ "1 ","second" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "531",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "533",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }, {
                  "localId" : "534",
                  "value" : 1,
                  "unit" : "second",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "536",
            "name" : "TimeAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "536",
                  "s" : [ {
                     "value" : [ "","define ","TimeAddUnderflow",": " ]
                  }, {
                     "r" : "537",
                     "s" : [ {
                        "r" : "539",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "538",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "540",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "540",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "541",
                              "s" : [ {
                                 "value" : [ "1 ","second" ]
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
               "localId" : "537",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "539",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }, {
                  "localId" : "540",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "541",
                     "value" : 1,
                     "unit" : "second",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "543",
            "name" : "TimeSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "543",
                  "s" : [ {
                     "value" : [ "","define ","TimeSubtractOverflow",": " ]
                  }, {
                     "r" : "544",
                     "s" : [ {
                        "r" : "546",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "545",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "547",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "547",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "548",
                              "s" : [ {
                                 "value" : [ "1 ","second" ]
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
               "localId" : "544",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "546",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }, {
                  "localId" : "547",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "548",
                     "value" : 1,
                     "unit" : "second",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "550",
            "name" : "TimeSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "550",
                  "s" : [ {
                     "value" : [ "","define ","TimeSubtractUnderflow",": " ]
                  }, {
                     "r" : "551",
                     "s" : [ {
                        "r" : "553",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "552",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "554",
                        "s" : [ {
                           "value" : [ "1 ","second" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "551",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "553",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }, {
                  "localId" : "554",
                  "value" : 1,
                  "unit" : "second",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "556",
            "name" : "TimeSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "556",
                  "s" : [ {
                     "value" : [ "","define ","TimeSuccessorOverflow",": " ]
                  }, {
                     "r" : "559",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "558",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "557",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "559",
               "type" : "Successor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "558",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "561",
            "name" : "TimePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "561",
                  "s" : [ {
                     "value" : [ "","define ","TimePredecessorUnderflow",": " ]
                  }, {
                     "r" : "564",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "563",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "562",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "564",
               "type" : "Predecessor",
               "signature" : [ ],
               "operand" : {
                  "localId" : "563",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "566",
            "name" : "ExpOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "566",
                  "s" : [ {
                     "value" : [ "","define ","ExpOverflow",": " ]
                  }, {
                     "r" : "571",
                     "s" : [ {
                        "value" : [ "Exp","(" ]
                     }, {
                        "r" : "568",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "567",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "571",
               "type" : "Exp",
               "signature" : [ ],
               "operand" : {
                  "localId" : "568",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }
            }
         } ]
      }
   }
}

