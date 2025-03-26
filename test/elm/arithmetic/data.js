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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "337",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","AddMultiple",": " ]
                  }, {
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
                                          "s" : [ {
                                             "r" : "234",
                                             "s" : [ {
                                                "r" : "235",
                                                "value" : [ "1"," + ","2" ]
                                             } ]
                                          }, {
                                             "r" : "239",
                                             "value" : [ " + ","3" ]
                                          } ]
                                       }, {
                                          "r" : "242",
                                          "value" : [ " + ","4" ]
                                       } ]
                                    }, {
                                       "r" : "245",
                                       "value" : [ " + ","5" ]
                                    } ]
                                 }, {
                                    "r" : "248",
                                    "value" : [ " + ","6" ]
                                 } ]
                              }, {
                                 "r" : "251",
                                 "value" : [ " + ","7" ]
                              } ]
                           }, {
                              "r" : "254",
                              "value" : [ " + ","8" ]
                           } ]
                        }, {
                           "r" : "257",
                           "value" : [ " + ","9" ]
                        } ]
                     }, {
                        "r" : "260",
                        "value" : [ " + ","10" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Add",
                  "signature" : [ {
                     "localId" : "258",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "259",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "255",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "256",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "229",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Add",
                        "signature" : [ {
                           "localId" : "252",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "253",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "230",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "Add",
                           "signature" : [ {
                              "localId" : "249",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "250",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           } ],
                           "operand" : [ {
                              "localId" : "231",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "Add",
                              "signature" : [ {
                                 "localId" : "246",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "localId" : "247",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              } ],
                              "operand" : [ {
                                 "localId" : "232",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "Add",
                                 "signature" : [ {
                                    "localId" : "243",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }, {
                                    "localId" : "244",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 } ],
                                 "operand" : [ {
                                    "localId" : "233",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "Add",
                                    "signature" : [ {
                                       "localId" : "240",
                                       "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "localId" : "241",
                                       "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "type" : "NamedTypeSpecifier"
                                    } ],
                                    "operand" : [ {
                                       "localId" : "234",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "type" : "Add",
                                       "signature" : [ {
                                          "localId" : "237",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "238",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       } ],
                                       "operand" : [ {
                                          "localId" : "235",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "1",
                                          "type" : "Literal"
                                       }, {
                                          "localId" : "236",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "2",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "localId" : "239",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "3",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "242",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "4",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "localId" : "245",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "5",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "248",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "6",
                              "type" : "Literal"
                           } ]
                        }, {
                           "localId" : "251",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "7",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "254",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","AddVariables",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "AddTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","AddTime",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "Time","(","12",")" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "value" : [ "1 ","'hour'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "Time",
                  "signature" : [ {
                     "localId" : "278",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "hour" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "hour",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "283",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyZeroToTwelve",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "r" : "285",
                           "value" : [ "DateTime","(","2005",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "286",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "298",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "299",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "r" : "305",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "317",
                        "s" : [ {
                           "r" : "311",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "320",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "310",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "317",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "318",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "323",
                  "s" : [ {
                     "value" : [ "","define ","AddUncertainties",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "325",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "326",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "327",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "328",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "326",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "330",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddUncertaintyAndNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "330",
                  "s" : [ {
                     "value" : [ "","define ","AddUncertaintyAndNumber",": " ]
                  }, {
                     "r" : "331",
                     "s" : [ {
                        "r" : "332",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     }, {
                        "r" : "333",
                        "value" : [ " + ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "331",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "334",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "335",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "332",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "333",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "337",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddNumberAndUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "337",
                  "s" : [ {
                     "value" : [ "","define ","AddNumberAndUncertainty",": " ]
                  }, {
                     "r" : "338",
                     "s" : [ {
                        "r" : "339",
                        "value" : [ "10"," + " ]
                     }, {
                        "r" : "340",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "338",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "341",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "342",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "339",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "340",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "301",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","SubtractMultiple",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "r" : "228",
                           "s" : [ {
                              "r" : "229",
                              "value" : [ "100"," - ","50" ]
                           } ]
                        }, {
                           "r" : "233",
                           "value" : [ " - ","25" ]
                        } ]
                     }, {
                        "r" : "236",
                        "value" : [ " - ","10" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Subtract",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Subtract",
                     "signature" : [ {
                        "localId" : "231",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "229",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "100",
                        "type" : "Literal"
                     }, {
                        "localId" : "230",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "50",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","SubtractVariables",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
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
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyZeroToTwelve",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "DateTime","(","2005",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "257",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "250",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "274",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "287",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUncertainties",": " ]
                  }, {
                     "r" : "288",
                     "s" : [ {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "288",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
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
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractNumberFromUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","SubtractNumberFromUncertainty",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "r" : "297",
                        "value" : [ " - ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "301",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractUncertaintyFromNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUncertaintyFromNumber",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "r" : "303",
                        "value" : [ "10"," - " ]
                     }, {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "302",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "303",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "305",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyMultiple",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "r" : "228",
                           "s" : [ {
                              "r" : "229",
                              "s" : [ {
                                 "r" : "230",
                                 "value" : [ "1"," * ","2" ]
                              } ]
                           }, {
                              "r" : "234",
                              "value" : [ " * ","3" ]
                           } ]
                        }, {
                           "r" : "237",
                           "value" : [ " * ","4" ]
                        } ]
                     }, {
                        "r" : "240",
                        "value" : [ " * ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
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
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Multiply",
                  "signature" : [ {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "239",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Multiply",
                     "signature" : [ {
                        "localId" : "235",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "236",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "229",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Multiply",
                        "signature" : [ {
                           "localId" : "232",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "233",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "230",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "231",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "234",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyVariables",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyTwoToFourteen",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "r" : "253",
                           "value" : [ "DateTime","(","2005",", ","10",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "r" : "262",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "260",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "253",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "262",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
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
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "278",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "279",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUncertainties",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "r" : "293",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
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
                  "localId" : "293",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyTwoToFourteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "294",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "298",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyUncertaintyAndNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "298",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUncertaintyAndNumber",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     }, {
                        "r" : "301",
                        "value" : [ " * ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "302",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "303",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "300",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyTwoToFourteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "301",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyNumberAndUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyNumberAndUncertainty",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "r" : "307",
                        "value" : [ "10"," * " ]
                     }, {
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "306",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "309",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "350",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "100",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "4",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "223",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "226",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "227",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "TenDividedByFour",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","TenDividedByFour",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "233",
                        "value" : [ "10"," / ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "236",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "239",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "240",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","DivideMultiple",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "r" : "247",
                           "s" : [ {
                              "r" : "248",
                              "value" : [ "1000"," / ","4" ]
                           } ]
                        }, {
                           "r" : "258",
                           "value" : [ " / ","10" ]
                        } ]
                     }, {
                        "r" : "264",
                        "value" : [ " / ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "262",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "Divide",
                     "signature" : [ {
                        "localId" : "256",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "257",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "251",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "252",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "248",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1000",
                           "type" : "Literal"
                        }
                     }, {
                        "localId" : "254",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "255",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "249",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "260",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "261",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "258",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "266",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "264",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","DivideVariables",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "Hundred" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "Four" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "276",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "277",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "Hundred",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "279",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "Four",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "localId" : "284",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "284",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyTwoToFourteen",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "292",
                        "s" : [ {
                           "r" : "286",
                           "value" : [ "DateTime","(","2005",", ","10",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "r" : "295",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "302",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "292",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "286",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "300",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "295",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "310",
                        "s" : [ {
                           "r" : "306",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "318",
                        "s" : [ {
                           "r" : "312",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "305",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "322",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "310",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "311",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "320",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "324",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "324",
                  "s" : [ {
                     "value" : [ "","define ","DivideUncertainties",": " ]
                  }, {
                     "r" : "325",
                     "s" : [ {
                        "r" : "326",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "325",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "334",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "335",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "329",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "330",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "326",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "UncertaintySixToEighteen",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "332",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "333",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "327",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "UncertaintyTwoToFourteen",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "localId" : "337",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideUncertaintyByNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "337",
                  "s" : [ {
                     "value" : [ "","define ","DivideUncertaintyByNumber",": " ]
                  }, {
                     "r" : "338",
                     "s" : [ {
                        "r" : "339",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "r" : "340",
                        "value" : [ " / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "338",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "347",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "348",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "342",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "343",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "339",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "UncertaintySixToEighteen",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "345",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "346",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "340",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "350",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideNumberByUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "350",
                  "s" : [ {
                     "value" : [ "","define ","DivideNumberByUncertainty",": " ]
                  }, {
                     "r" : "351",
                     "s" : [ {
                        "r" : "352",
                        "value" : [ "36"," / " ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "351",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "361",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "355",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "356",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "352",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "36",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "358",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "359",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "353",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Negate",
               "signature" : [ {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "240",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
                        "r" : "223",
                        "s" : [ {
                           "r" : "224",
                           "value" : [ "15"," / ","3" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "235",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "222",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "215",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "216",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Multiply",
                        "signature" : [ {
                           "localId" : "219",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "220",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "217",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "218",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "227",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "228",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "224",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "230",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "231",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "225",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Parenthetical",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","Parenthetical",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "r" : "243",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "243",
                              "s" : [ {
                                 "r" : "244",
                                 "value" : [ "1"," + ","5" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ " * " ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "248",
                              "s" : [ {
                                 "r" : "249",
                                 "value" : [ "10"," - ","15" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " / ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "258",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Multiply",
                     "signature" : [ {
                        "localId" : "253",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "254",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "243",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Add",
                        "signature" : [ {
                           "localId" : "246",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "247",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "244",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "245",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "248",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Subtract",
                        "signature" : [ {
                           "localId" : "251",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "252",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "249",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        }, {
                           "localId" : "250",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "15",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "localId" : "260",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "216",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "MinValue"
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "MinValue"
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "MinValue"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "valueType" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "MinValue"
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "valueType" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "219",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "TruncatedDivide",
               "signature" : [ {
                  "localId" : "216",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "9"," div ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "TruncatedDivide",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "9",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Modulo",
               "signature" : [ {
                  "localId" : "216",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "220",
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
                     "r" : "217",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Ceiling","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Ceiling",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "Ceiling","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Ceiling",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "230",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "220",
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
                     "r" : "217",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Floor","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Floor",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "Floor","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Floor",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "230",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "220",
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
                     "r" : "217",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Truncate","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Truncate",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "Truncate","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Truncate",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "230",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "230",
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
                     "r" : "217",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Abs","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Abs",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Neg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Neg",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "value" : [ "Abs","(" ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "-","10" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Abs",
               "signature" : [ {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Zero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","Zero",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "231",
                        "value" : [ "Abs","(","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Abs",
               "signature" : [ {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "239",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
                     "r" : "217",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Round","(","4.56",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Round",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.56",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Up_percent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Up_percent",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "Round","(","4.56",",","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Round",
               "signature" : [ {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.56",
                  "type" : "Literal"
               },
               "precision" : {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Down",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","Down",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "Round","(","4.49",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Round",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.49",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "239",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Down_percent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","Down_percent",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "240",
                        "value" : [ "Round","(","4.43",",","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Round",
               "signature" : [ {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.43",
                  "type" : "Literal"
               },
               "precision" : {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
                     "r" : "220",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Ln","(","4",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Ln",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "222",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
                     "r" : "225",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Log","(","10",",","10000",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Log",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "227",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "230",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "360",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Rs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","Rs",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "218",
                        "value" : [ "successor of ","2.2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "2.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ofr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","ofr",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "223",
                        "value" : [ "successor of ","2147483647" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2147483647",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "y_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","y_date",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "DateTime","(","2015",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ym_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","ym_date",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "244",
                        "s" : [ {
                           "r" : "238",
                           "value" : [ "DateTime","(","2015",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "245",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "246",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymd_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","ymd_date",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "r" : "251",
                           "value" : [ "DateTime","(","2015",",","01",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "260",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "262",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "253",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdh_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","ymdh_date",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "r" : "267",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "278",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "281",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "285",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","ymdhm_date",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "r" : "286",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "298",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "299",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "300",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "301",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "302",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "303",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "286",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhms_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "307",
                  "s" : [ {
                     "value" : [ "","define ","ymdhms_date",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "322",
                        "s" : [ {
                           "r" : "308",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "329",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "330",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "322",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "324",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "325",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "326",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "327",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "308",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "309",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "310",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "332",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhmsm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","ymdhmsm_date",": " ]
                  }, {
                     "r" : "357",
                     "s" : [ {
                        "value" : [ "successor of  " ]
                     }, {
                        "r" : "349",
                        "s" : [ {
                           "r" : "333",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "357",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "358",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "350",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "351",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "352",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "353",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "354",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "355",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "356",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "333",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "334",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "338",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "339",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "360",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "max_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "360",
                  "s" : [ {
                     "value" : [ "","define ","max_date",": " ]
                  }, {
                     "r" : "385",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "377",
                        "s" : [ {
                           "r" : "361",
                           "value" : [ "DateTime","(","9999",",","12",",","31",",","23",",","59",",","59",",","999",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "385",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "386",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "377",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "378",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "379",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "380",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "381",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "382",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "383",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "384",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "361",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "362",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "363",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "31",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "364",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "362",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Rs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","Rs",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "218",
                        "value" : [ "predecessor of ","2.2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "2.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ufr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","ufr",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "r" : "224",
                           "value" : [ "-","2147483648" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2147483648",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "y_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","y_date",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "DateTime","(","2015",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "239",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ym_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","ym_date",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "r" : "240",
                           "value" : [ "DateTime","(","2015",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "248",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymd_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","ymd_date",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "r" : "253",
                           "value" : [ "DateTime","(","2015",",","01",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "262",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "253",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdh_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","ymdh_date",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "281",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "287",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","ymdhm_date",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "300",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "306",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "307",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "300",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "301",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "302",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "303",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "304",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "305",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "291",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhms_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","ymdhms_date",": " ]
                  }, {
                     "r" : "331",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "324",
                        "s" : [ {
                           "r" : "310",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "331",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "332",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "324",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "325",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "326",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "327",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "329",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "330",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "310",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "315",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhmsm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","ymdhmsm_date",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "351",
                        "s" : [ {
                           "r" : "335",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "359",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "351",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "352",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "353",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "354",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "355",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "356",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "357",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "358",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "338",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "339",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "340",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "362",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "min_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","min_date",": " ]
                  }, {
                     "r" : "387",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "379",
                        "s" : [ {
                           "r" : "363",
                           "value" : [ "DateTime","(","0001",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "387",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "388",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "379",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "380",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "381",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "382",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "383",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "384",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "385",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "363",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "364",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "368",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "369",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "386",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "value" : 10,
               "unit" : "days",
               "type" : "Quantity"
            }
         }, {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
                           "r" : "222",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "220",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "days",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Min",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","QL10Min"," : " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "Quantity","{" ]
                     }, {
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "value",": ","10" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "231",
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
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "229",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "230",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "227",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "min",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "Jan1_2000",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","Jan1_2000",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "234",
                        "value" : [ "DateTime","(","2000",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "DateTime",
               "signature" : [ {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "add_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","add_q_q"," : " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "add_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","add_d_q"," : " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "Jan1_2000" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "Jan1_2000",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "sub_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","sub_q_q"," : " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "sub_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","sub_d_q"," : " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "Jan1_2000" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "Jan1_2000",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "add_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","add_q_q_diff"," : " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "QL10Min" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "276",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "278",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Min",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "sub_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","sub_q_q_diff"," : " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "value" : [ "QL10Min" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "283",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "287",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Min",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "div_q_d",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","div_q_d"," : " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "r" : "292",
                        "value" : [ " / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "290",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "294",
                  "type" : "ToQuantity",
                  "signature" : [ {
                     "localId" : "295",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "div_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","div_q_q"," : " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "301",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "303",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "304",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "301",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "306",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "mul_q_d",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "306",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_d"," : " ]
                  }, {
                     "r" : "307",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "r" : "309",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "307",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "313",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "314",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "311",
                  "type" : "ToQuantity",
                  "signature" : [ {
                     "localId" : "312",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "309",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "mul_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "","define ","mul_d_q"," : " ]
                  }, {
                     "r" : "317",
                     "s" : [ {
                        "r" : "318",
                        "value" : [ "2"," * " ]
                     }, {
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "317",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "323",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "324",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "321",
                  "type" : "ToQuantity",
                  "signature" : [ {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "319",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "mul_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "326",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_q"," : " ]
                  }, {
                     "r" : "327",
                     "s" : [ {
                        "r" : "328",
                        "s" : [ {
                           "value" : [ "2 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "value" : [ "10 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "327",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "330",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "331",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "328",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 2,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "329",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 10,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "mul_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_q_diff"," : " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "r" : "335",
                        "s" : [ {
                           "value" : [ "2 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "10 ","'/d'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "334",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "337",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "338",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "335",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 2,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "336",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 10,
                  "unit" : "/d",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "340",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "neg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "340",
                  "s" : [ {
                     "value" : [ "","define ","neg"," : " ]
                  }, {
                     "r" : "341",
                     "s" : [ {
                        "value" : [ "- " ]
                     }, {
                        "r" : "342",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "341",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Negate",
               "signature" : [ {
                  "localId" : "343",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "342",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "345",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "abs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "345",
                  "s" : [ {
                     "value" : [ "","define ","abs"," : " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "value" : [ "Abs","(" ]
                     }, {
                        "r" : "346",
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
               "localId" : "350",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Abs",
               "signature" : [ {
                  "localId" : "351",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "346",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "neg",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "353",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MultiplyUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "353",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUcum",": " ]
                  }, {
                     "r" : "354",
                     "s" : [ {
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "355",
                           "s" : [ {
                              "r" : "356",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           }, {
                              "value" : [ " * " ]
                           }, {
                              "r" : "357",
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
                        "r" : "360",
                        "s" : [ {
                           "value" : [ "125000 ","'m2'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "354",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "361",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "362",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Multiply",
                  "signature" : [ {
                     "localId" : "358",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "359",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "356",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "357",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 25,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "360",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 125000,
                  "unit" : "m2",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DivideUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "364",
                  "s" : [ {
                     "value" : [ "","define ","DivideUcum",": " ]
                  }, {
                     "r" : "365",
                     "s" : [ {
                        "r" : "366",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "366",
                           "s" : [ {
                              "r" : "367",
                              "s" : [ {
                                 "value" : [ "20 ","'m2'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "368",
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
                        "r" : "371",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "365",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "372",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "373",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "366",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "369",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "370",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 20,
                     "unit" : "m2",
                     "type" : "Quantity"
                  }, {
                     "localId" : "368",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "371",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "375",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AddUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "375",
                  "s" : [ {
                     "value" : [ "","define ","AddUcum",": " ]
                  }, {
                     "r" : "376",
                     "s" : [ {
                        "r" : "377",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "377",
                           "s" : [ {
                              "r" : "378",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "379",
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
                        "r" : "382",
                        "s" : [ {
                           "value" : [ "5005 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "376",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "384",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "377",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Add",
                  "signature" : [ {
                     "localId" : "380",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "381",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "382",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5005,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "386",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SubtractUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "386",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUcum",": " ]
                  }, {
                     "r" : "387",
                     "s" : [ {
                        "r" : "388",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "388",
                           "s" : [ {
                              "r" : "389",
                              "s" : [ {
                                 "value" : [ "25 ","'km'" ]
                              } ]
                           }, {
                              "value" : [ " - " ]
                           }, {
                              "r" : "390",
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
                        "r" : "393",
                        "s" : [ {
                           "value" : [ "24995 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "387",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "394",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "395",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "388",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Subtract",
                  "signature" : [ {
                     "localId" : "391",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "392",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "389",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 25,
                     "unit" : "km",
                     "type" : "Quantity"
                  }, {
                     "localId" : "390",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "393",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "690",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAddUnderflow",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "222",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "-","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSubtractOverflow",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "r" : "235",
                           "value" : [ "-","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSubtractUnderflow",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "242",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "244",
                        "value" : [ " - ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMultiplyOverflow",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "252",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMultiplyUnderflow",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "258",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "r" : "261",
                           "value" : [ "-","2" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "262",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "IntegerDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideOverflow",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "268",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "r" : "270",
                           "value" : [ "(","0.5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "272",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "273",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "MaxValue"
                  }
               }, {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "IntegerDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideUnderflow",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "281",
                           "s" : [ {
                              "r" : "282",
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
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "287",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "288",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "285",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "MinValue"
                  }
               }, {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "282",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "290",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "IntegerDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideByZero",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "r" : "292",
                        "value" : [ "1"," / ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "295",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "298",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "299",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPowerOverflow",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "306",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "305",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "307",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "308",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "309",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "306",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "311",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPowerUnderflow",": " ]
                  }, {
                     "r" : "312",
                     "s" : [ {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "313",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "315",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "312",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "317",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "314",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "315",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "319",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSuccessorOverflow",": " ]
                  }, {
                     "r" : "322",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "321",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "320",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "322",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "323",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "321",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "325",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPredecessorUnderflow",": " ]
                  }, {
                     "r" : "328",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "326",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "328",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "329",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "331",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "331",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAddOverflow",": " ]
                  }, {
                     "r" : "332",
                     "s" : [ {
                        "r" : "334",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "333",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "335",
                        "value" : [ " + ","1.0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "332",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "336",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "337",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "334",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "335",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "339",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "339",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAddUnderflow",": " ]
                  }, {
                     "r" : "340",
                     "s" : [ {
                        "r" : "342",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "341",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "343",
                        "s" : [ {
                           "r" : "344",
                           "value" : [ "-","1.0" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "340",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "346",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "347",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "342",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "345",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "344",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "349",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSubtractOverflow",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "r" : "352",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "351",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "-","1.0" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "350",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "356",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "357",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "352",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "353",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "355",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "354",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "359",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "359",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSubtractUnderflow",": " ]
                  }, {
                     "r" : "360",
                     "s" : [ {
                        "r" : "362",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "361",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "363",
                        "value" : [ " - ","1.0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "360",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "364",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "365",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "362",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "363",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "367",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "367",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMultiplyOverflow",": " ]
                  }, {
                     "r" : "368",
                     "s" : [ {
                        "r" : "370",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "369",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "371",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "368",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "375",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "376",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "370",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "373",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "374",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "378",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "378",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMultiplyUnderflow",": " ]
                  }, {
                     "r" : "379",
                     "s" : [ {
                        "r" : "381",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "380",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "382",
                        "s" : [ {
                           "r" : "383",
                           "value" : [ "-","2" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "379",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "388",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "389",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "381",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "386",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "387",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "382",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Negate",
                     "signature" : [ {
                        "localId" : "384",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "383",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "391",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "391",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideOverflow",": " ]
                  }, {
                     "r" : "392",
                     "s" : [ {
                        "r" : "394",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "393",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "395",
                        "s" : [ {
                           "r" : "395",
                           "value" : [ "(","0.5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "392",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "396",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "397",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "394",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "395",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "399",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "399",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideUnderflow",": " ]
                  }, {
                     "r" : "400",
                     "s" : [ {
                        "r" : "402",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "401",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "403",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "403",
                           "s" : [ {
                              "r" : "404",
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
               "localId" : "400",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "406",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "407",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "402",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "403",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "404",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "409",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "409",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideByZero",": " ]
                  }, {
                     "r" : "410",
                     "s" : [ {
                        "r" : "411",
                        "value" : [ "1.0"," / ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "410",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "416",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "417",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "411",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               }, {
                  "localId" : "414",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "415",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "412",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "419",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "419",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPowerOverflow",": " ]
                  }, {
                     "r" : "420",
                     "s" : [ {
                        "r" : "422",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "422",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "421",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "423",
                        "value" : [ "^","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "420",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "427",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "428",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "422",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "425",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "426",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "423",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "430",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "430",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPowerUnderflow",": " ]
                  }, {
                     "r" : "431",
                     "s" : [ {
                        "r" : "433",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "433",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "432",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "434",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "431",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "438",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "439",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "436",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "437",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "434",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "441",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "441",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSuccessorOverflow",": " ]
                  }, {
                     "r" : "444",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "443",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "442",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "444",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "445",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "443",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "447",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "447",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPredecessorUnderflow",": " ]
                  }, {
                     "r" : "450",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "449",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "448",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "450",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "451",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "449",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "453",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "453",
                  "s" : [ {
                     "value" : [ "","define ","MaxQuantity",": " ]
                  }, {
                     "r" : "454",
                     "s" : [ {
                        "value" : [ "Quantity"," { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "value",": " ]
                        }, {
                           "r" : "457",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "456",
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
                           "r" : "458",
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
               "localId" : "454",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "MaxValue"
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "458",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "mm",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "460",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "460",
                  "s" : [ {
                     "value" : [ "","define ","MinQuantity",": " ]
                  }, {
                     "r" : "461",
                     "s" : [ {
                        "value" : [ "Quantity"," { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "value",": " ]
                        }, {
                           "r" : "464",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "463",
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
                           "r" : "465",
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
               "localId" : "461",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "464",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "MinValue"
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "465",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "mm",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "467",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "467",
                  "s" : [ {
                     "value" : [ "","define ","QuantityAddOverflow",": " ]
                  }, {
                     "r" : "468",
                     "s" : [ {
                        "r" : "469",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "470",
                        "s" : [ {
                           "value" : [ "1.0 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "468",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "472",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "469",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "470",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1.0,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "474",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "474",
                  "s" : [ {
                     "value" : [ "","define ","QuantityAddUnderflow",": " ]
                  }, {
                     "r" : "475",
                     "s" : [ {
                        "r" : "476",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "477",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "477",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "478",
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
               "localId" : "475",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "480",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "481",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "476",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "477",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "479",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "478",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1.0,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "483",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantitySubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "483",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySubtractOverflow",": " ]
                  }, {
                     "r" : "484",
                     "s" : [ {
                        "r" : "485",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "486",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "486",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "487",
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
               "localId" : "484",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "489",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "490",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "485",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "486",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "488",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "492",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantitySubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "492",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySubtractUnderflow",": " ]
                  }, {
                     "r" : "493",
                     "s" : [ {
                        "r" : "494",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "495",
                        "s" : [ {
                           "value" : [ "1 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "493",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "496",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "497",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "494",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "495",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "499",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "499",
                  "s" : [ {
                     "value" : [ "","define ","QuantityMultiplyOverflow",": " ]
                  }, {
                     "r" : "500",
                     "s" : [ {
                        "r" : "501",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "502",
                        "s" : [ {
                           "value" : [ "2 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "500",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "503",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "504",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "501",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "502",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 2,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "506",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "506",
                  "s" : [ {
                     "value" : [ "","define ","QuantityMultiplyUnderflow",": " ]
                  }, {
                     "r" : "507",
                     "s" : [ {
                        "r" : "508",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "509",
                        "s" : [ {
                           "value" : [ "2 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "507",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "510",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "511",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "508",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "509",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 2,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "513",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "513",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideOverflow",": " ]
                  }, {
                     "r" : "514",
                     "s" : [ {
                        "r" : "515",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "516",
                        "s" : [ {
                           "value" : [ "0.5 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "514",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "517",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "518",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "515",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "516",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 0.5,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "520",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "520",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideUnderflow",": " ]
                  }, {
                     "r" : "521",
                     "s" : [ {
                        "r" : "522",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "523",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "523",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "524",
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
               "localId" : "521",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "526",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "527",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "522",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "523",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "525",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "524",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.5,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "529",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "529",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideByZero",": " ]
                  }, {
                     "r" : "530",
                     "s" : [ {
                        "r" : "531",
                        "s" : [ {
                           "value" : [ "1.0 ","'mm'" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "532",
                        "s" : [ {
                           "value" : [ "0 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "530",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "533",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "534",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "531",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1.0,
                  "unit" : "mm",
                  "type" : "Quantity"
               }, {
                  "localId" : "532",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 0,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "536",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantitySuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "536",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySuccessorOverflow",": " ]
                  }, {
                     "r" : "538",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "537",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "538",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "539",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "537",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "541",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "541",
                  "s" : [ {
                     "value" : [ "","define ","QuantityPredecessorUnderflow",": " ]
                  }, {
                     "r" : "543",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "542",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "543",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "544",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "542",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "546",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "546",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAddOverflow",": " ]
                  }, {
                     "r" : "547",
                     "s" : [ {
                        "r" : "549",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "548",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "550",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "547",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "551",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "552",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "549",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }, {
                  "localId" : "550",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "554",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "554",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAddUnderflow",": " ]
                  }, {
                     "r" : "555",
                     "s" : [ {
                        "r" : "557",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "556",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "558",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "558",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "559",
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
               "localId" : "555",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "561",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "562",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "557",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }, {
                  "localId" : "558",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "560",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "559",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "564",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "564",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSubtractOverflow",": " ]
                  }, {
                     "r" : "565",
                     "s" : [ {
                        "r" : "567",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "566",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "568",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "568",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "569",
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
               "localId" : "565",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "571",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "572",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "567",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }, {
                  "localId" : "568",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "570",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "569",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "574",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "574",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSubtractUnderflow",": " ]
                  }, {
                     "r" : "575",
                     "s" : [ {
                        "r" : "577",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "576",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "578",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "575",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "579",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "580",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "577",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }, {
                  "localId" : "578",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "582",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "582",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSuccessorOverflow",": " ]
                  }, {
                     "r" : "585",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "584",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "583",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "585",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "586",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "584",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "588",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "588",
                  "s" : [ {
                     "value" : [ "","define ","DateTimePredecessorUnderflow",": " ]
                  }, {
                     "r" : "591",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "590",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "589",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "591",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "592",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "590",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "594",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "594",
                  "s" : [ {
                     "value" : [ "","define ","DateAddOverflow",": " ]
                  }, {
                     "r" : "595",
                     "s" : [ {
                        "r" : "597",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "596",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "598",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "595",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "599",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "600",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "597",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }, {
                  "localId" : "598",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "602",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "602",
                  "s" : [ {
                     "value" : [ "","define ","DateAddUnderflow",": " ]
                  }, {
                     "r" : "603",
                     "s" : [ {
                        "r" : "605",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "604",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "606",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "606",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "607",
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
               "localId" : "603",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "609",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "610",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "605",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }, {
                  "localId" : "606",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "608",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "607",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "612",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "612",
                  "s" : [ {
                     "value" : [ "","define ","DateSubtractOverflow",": " ]
                  }, {
                     "r" : "613",
                     "s" : [ {
                        "r" : "615",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "614",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "616",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "616",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "617",
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
               "localId" : "613",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "619",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "620",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "615",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }, {
                  "localId" : "616",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "618",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "617",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "622",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "622",
                  "s" : [ {
                     "value" : [ "","define ","DateSubtractUnderflow",": " ]
                  }, {
                     "r" : "623",
                     "s" : [ {
                        "r" : "625",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "624",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "626",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "623",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "627",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "628",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "625",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }, {
                  "localId" : "626",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "630",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "630",
                  "s" : [ {
                     "value" : [ "","define ","DateSuccessorOverflow",": " ]
                  }, {
                     "r" : "633",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "632",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "631",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "633",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "634",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "632",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "636",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DatePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "636",
                  "s" : [ {
                     "value" : [ "","define ","DatePredecessorUnderflow",": " ]
                  }, {
                     "r" : "639",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "638",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "637",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "639",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "640",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "638",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "642",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "642",
                  "s" : [ {
                     "value" : [ "","define ","TimeAddOverflow",": " ]
                  }, {
                     "r" : "643",
                     "s" : [ {
                        "r" : "645",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "644",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "646",
                        "s" : [ {
                           "value" : [ "1 ","second" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "643",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "647",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "648",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "645",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }, {
                  "localId" : "646",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "second",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "650",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "650",
                  "s" : [ {
                     "value" : [ "","define ","TimeAddUnderflow",": " ]
                  }, {
                     "r" : "651",
                     "s" : [ {
                        "r" : "653",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "652",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "654",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "654",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "655",
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
               "localId" : "651",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "657",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "658",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "653",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }, {
                  "localId" : "654",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "656",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "655",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "second",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "660",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "660",
                  "s" : [ {
                     "value" : [ "","define ","TimeSubtractOverflow",": " ]
                  }, {
                     "r" : "661",
                     "s" : [ {
                        "r" : "663",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "662",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "664",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "664",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "665",
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
               "localId" : "661",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "667",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "668",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "663",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }, {
                  "localId" : "664",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "666",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "665",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "second",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "670",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "670",
                  "s" : [ {
                     "value" : [ "","define ","TimeSubtractUnderflow",": " ]
                  }, {
                     "r" : "671",
                     "s" : [ {
                        "r" : "673",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "672",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "674",
                        "s" : [ {
                           "value" : [ "1 ","second" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "671",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "675",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "676",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "673",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }, {
                  "localId" : "674",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "second",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "678",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "678",
                  "s" : [ {
                     "value" : [ "","define ","TimeSuccessorOverflow",": " ]
                  }, {
                     "r" : "681",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "680",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "679",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "681",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "682",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "680",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "684",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "684",
                  "s" : [ {
                     "value" : [ "","define ","TimePredecessorUnderflow",": " ]
                  }, {
                     "r" : "687",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "686",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "685",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "687",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "688",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "686",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "690",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "ExpOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "690",
                  "s" : [ {
                     "value" : [ "","define ","ExpOverflow",": " ]
                  }, {
                     "r" : "696",
                     "s" : [ {
                        "value" : [ "Exp","(" ]
                     }, {
                        "r" : "692",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "691",
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
               "localId" : "696",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Exp",
               "signature" : [ {
                  "localId" : "697",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "692",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }
            }
         } ]
      }
   }
}

