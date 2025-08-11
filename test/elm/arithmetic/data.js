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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "349",
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
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "r" : "215",
                     "value" : [ "","define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "r" : "219",
                     "value" : [ "","define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "OnePlusTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","OnePlusTwo",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "1"," + ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","AddMultiple",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "s" : [ {
                              "r" : "234",
                              "s" : [ {
                                 "r" : "235",
                                 "s" : [ {
                                    "r" : "236",
                                    "s" : [ {
                                       "r" : "237",
                                       "s" : [ {
                                          "r" : "238",
                                          "s" : [ {
                                             "r" : "239",
                                             "s" : [ {
                                                "r" : "240",
                                                "value" : [ "1"," + ","2" ]
                                             } ]
                                          }, {
                                             "r" : "244",
                                             "value" : [ " + ","3" ]
                                          } ]
                                       }, {
                                          "r" : "247",
                                          "value" : [ " + ","4" ]
                                       } ]
                                    }, {
                                       "r" : "250",
                                       "value" : [ " + ","5" ]
                                    } ]
                                 }, {
                                    "r" : "253",
                                    "value" : [ " + ","6" ]
                                 } ]
                              }, {
                                 "r" : "256",
                                 "value" : [ " + ","7" ]
                              } ]
                           }, {
                              "r" : "259",
                              "value" : [ " + ","8" ]
                           } ]
                        }, {
                           "r" : "262",
                           "value" : [ " + ","9" ]
                        } ]
                     }, {
                        "r" : "265",
                        "value" : [ " + ","10" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Add",
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
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Add",
                     "signature" : [ {
                        "localId" : "260",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "261",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "234",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Add",
                        "signature" : [ {
                           "localId" : "257",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "258",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "235",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "Add",
                           "signature" : [ {
                              "localId" : "254",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "255",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           } ],
                           "operand" : [ {
                              "localId" : "236",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "Add",
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
                                 "localId" : "237",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "Add",
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
                                    "localId" : "238",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "Add",
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
                                       "localId" : "239",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "type" : "Add",
                                       "signature" : [ {
                                          "localId" : "242",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "243",
                                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "type" : "NamedTypeSpecifier"
                                       } ],
                                       "operand" : [ {
                                          "localId" : "240",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "1",
                                          "type" : "Literal"
                                       }, {
                                          "localId" : "241",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "2",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "localId" : "244",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "3",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "247",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "4",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "localId" : "250",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "5",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "253",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "6",
                              "type" : "Literal"
                           } ]
                        }, {
                           "localId" : "256",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "7",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "259",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "262",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","AddVariables",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
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
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "AddTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","AddTime",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "r" : "280",
                           "value" : [ "Time","(","12",")" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "1 ","'hour'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "287",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "288",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "Time",
                  "signature" : [ {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "hour" : {
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "hour",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyZeroToTwelve",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "r" : "293",
                           "value" : [ "DateTime","(","2005",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "306",
                        "s" : [ {
                           "r" : "302",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "308",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "309",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "300",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "301",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "306",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "307",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "318",
                        "s" : [ {
                           "r" : "314",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "326",
                        "s" : [ {
                           "r" : "320",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "329",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "330",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "326",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "327",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "321",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","AddUncertainties",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "r" : "335",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "334",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "337",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "338",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "335",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "336",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddUncertaintyAndNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "341",
                  "s" : [ {
                     "value" : [ "","define ","AddUncertaintyAndNumber",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "r" : "343",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     }, {
                        "r" : "344",
                        "value" : [ " + ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "342",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "345",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "346",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "344",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AddNumberAndUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "349",
                  "s" : [ {
                     "value" : [ "","define ","AddNumberAndUncertainty",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "r" : "351",
                        "value" : [ "10"," + " ]
                     }, {
                        "r" : "352",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "350",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "353",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "351",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "352",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "312",
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
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "r" : "215",
                     "value" : [ "","define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "r" : "219",
                     "value" : [ "","define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FiveMinusTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","FiveMinusTwo",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," - ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","SubtractMultiple",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "s" : [ {
                              "r" : "234",
                              "value" : [ "100"," - ","50" ]
                           } ]
                        }, {
                           "r" : "238",
                           "value" : [ " - ","25" ]
                        } ]
                     }, {
                        "r" : "241",
                        "value" : [ " - ","10" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Subtract",
                  "signature" : [ {
                     "localId" : "239",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "240",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Subtract",
                     "signature" : [ {
                        "localId" : "236",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "237",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "234",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "100",
                        "type" : "Literal"
                     }, {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "50",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","SubtractVariables",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyZeroToTwelve",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "256",
                           "value" : [ "DateTime","(","2005",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "r" : "265",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
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
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "269",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "265",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "r" : "277",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "r" : "283",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "276",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
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
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "290",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "291",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUncertainties",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "UncertaintyZeroToTwelve" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "298",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyZeroToTwelve",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractNumberFromUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","SubtractNumberFromUncertainty",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "r" : "307",
                        "value" : [ " - ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "305",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
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
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SubtractUncertaintyFromNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUncertaintyFromNumber",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "r" : "314",
                        "value" : [ "10"," - " ]
                     }, {
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
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
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "315",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "316",
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
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "r" : "215",
                     "value" : [ "","define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "r" : "219",
                     "value" : [ "","define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FiveTimesTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","FiveTimesTwo",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyMultiple",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "s" : [ {
                              "r" : "234",
                              "s" : [ {
                                 "r" : "235",
                                 "value" : [ "1"," * ","2" ]
                              } ]
                           }, {
                              "r" : "239",
                              "value" : [ " * ","3" ]
                           } ]
                        }, {
                           "r" : "242",
                           "value" : [ " * ","4" ]
                        } ]
                     }, {
                        "r" : "245",
                        "value" : [ " * ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
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
                  "type" : "Multiply",
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
                     "type" : "Multiply",
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
                        "type" : "Multiply",
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
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyVariables",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyTwoToFourteen",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "r" : "260",
                           "value" : [ "DateTime","(","2005",", ","10",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
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
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "260",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
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
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "r" : "281",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "293",
                        "s" : [ {
                           "r" : "287",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "281",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "293",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "295",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "300",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUncertainties",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "301",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "304",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyTwoToFourteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "303",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "308",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyUncertaintyAndNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "308",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUncertaintyAndNumber",": " ]
                  }, {
                     "r" : "309",
                     "s" : [ {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     }, {
                        "r" : "311",
                        "value" : [ " * ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "309",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "312",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "313",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "310",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintyTwoToFourteen",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "311",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MultiplyNumberAndUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyNumberAndUncertainty",": " ]
                  }, {
                     "r" : "317",
                     "s" : [ {
                        "r" : "318",
                        "value" : [ "10"," * " ]
                     }, {
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "317",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "320",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "319",
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
         "translatorVersion" : "3.27.0",
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
            "name" : "Hundred",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "r" : "215",
                     "value" : [ "","define ","Hundred",": ","100" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "100",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Four",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "r" : "219",
                     "value" : [ "","define ","Four",": ","4" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "4",
               "type" : "Literal"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "TenDividedByTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","TenDividedByTwo",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "10"," / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
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
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "TenDividedByFour",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","TenDividedByFour",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "238",
                        "value" : [ "10"," / ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "241",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "242",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "244",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "245",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","DivideMultiple",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "r" : "253",
                           "s" : [ {
                              "r" : "254",
                              "value" : [ "1000"," / ","4" ]
                           } ]
                        }, {
                           "r" : "264",
                           "value" : [ " / ","10" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " / ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
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
                  "localId" : "252",
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
                     "localId" : "253",
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
                           "localId" : "254",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1000",
                           "type" : "Literal"
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
                           "value" : "4",
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
                        "value" : "10",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "272",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "273",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","DivideVariables",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "Hundred" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "Four" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "288",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "Hundred",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "286",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "281",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "Four",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "localId" : "292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "292",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyTwoToFourteen",": " ]
                  }, {
                     "r" : "293",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "300",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "DateTime","(","2005",", ","10",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "r" : "303",
                           "value" : [ "DateTime","(","2006",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "293",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "309",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "295",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "308",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "303",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "313",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "319",
                        "s" : [ {
                           "r" : "315",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "327",
                        "s" : [ {
                           "r" : "321",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "314",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "330",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "331",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "319",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "320",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "315",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "329",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "321",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "322",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideUncertainties",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","DivideUncertainties",": " ]
                  }, {
                     "r" : "335",
                     "s" : [ {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "337",
                        "s" : [ {
                           "value" : [ "UncertaintyTwoToFourteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "335",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "344",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "345",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "339",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "340",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "UncertaintySixToEighteen",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "342",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "343",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "UncertaintyTwoToFourteen",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "localId" : "348",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideUncertaintyByNumber",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "348",
                  "s" : [ {
                     "value" : [ "","define ","DivideUncertaintyByNumber",": " ]
                  }, {
                     "r" : "349",
                     "s" : [ {
                        "r" : "350",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "r" : "351",
                        "value" : [ " / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "349",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "358",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "359",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "353",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "354",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "350",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "UncertaintySixToEighteen",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "356",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "357",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "351",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "362",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DivideNumberByUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","DivideNumberByUncertainty",": " ]
                  }, {
                     "r" : "363",
                     "s" : [ {
                        "r" : "364",
                        "value" : [ "36"," / " ]
                     }, {
                        "r" : "365",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "363",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "372",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "373",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "367",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "368",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "364",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "36",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "370",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "371",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "365",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NegativeOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NegativeOne",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "-","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Negate",
               "signature" : [ {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "216",
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
         "translatorVersion" : "3.27.0",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Mixed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Mixed",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "s" : [ {
                           "r" : "217",
                           "value" : [ "1"," + " ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "r" : "219",
                              "value" : [ "5"," * ","10" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "15"," / ","3" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "237",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Add",
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
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Multiply",
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
                           "localId" : "219",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "220",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "229",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "230",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "226",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "232",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "233",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "227",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Parenthetical",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","Parenthetical",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "r" : "245",
                        "s" : [ {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "246",
                              "s" : [ {
                                 "r" : "247",
                                 "value" : [ "1"," + ","5" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ " * " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "251",
                              "s" : [ {
                                 "r" : "252",
                                 "value" : [ "10"," - ","15" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        } ]
                     }, {
                        "r" : "258",
                        "value" : [ " / ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "260",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Multiply",
                     "signature" : [ {
                        "localId" : "256",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "257",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "246",
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
                           "localId" : "247",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "248",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "251",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "Subtract",
                        "signature" : [ {
                           "localId" : "254",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "255",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "252",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        }, {
                           "localId" : "253",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "15",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "localId" : "263",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "258",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Pow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Pow",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "3"," ^ ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "234",
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
            "name" : "MinInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","MinInteger",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "MinValue"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "MinDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","MinDecimal",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "MinValue"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "MinDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","MinDateTime",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "minimum","  " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "MinValue"
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "MinTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","MinTime",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "valueType" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "MinValue"
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinWrongType",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","MinWrongType",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "234",
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
            "name" : "MaxInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","MaxInteger",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "MaxDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","MaxDecimal",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "MaxDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","MaxDateTime",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "MaxTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","MaxTime",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "valueType" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxWrongType",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","MaxWrongType",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "222",
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
            "name" : "Trunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Trunc",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "10"," div ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "TruncatedDivide",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "9"," div ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "TruncatedDivide",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "9",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Mod",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Mod",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "3"," mod ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Modulo",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "223",
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
            "name" : "Ceil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Ceil",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Ceiling","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Ceiling",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "Ceiling","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Ceiling",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "233",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "224",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "223",
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
            "name" : "flr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","flr",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Floor","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Floor",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "Floor","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Floor",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "233",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "224",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "223",
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
            "name" : "Trunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Trunc",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Truncate","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Truncate",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Even",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "Truncate","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Truncate",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "233",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "224",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "234",
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
            "name" : "Pos",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Pos",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Abs","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Abs",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Neg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Neg",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "Abs","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "-","10" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Abs",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
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
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Zero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","Zero",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "235",
                        "value" : [ "Abs","(","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Abs",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "244",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Up",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Up",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Round","(","4.56",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Round",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.56",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Up_percent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Up_percent",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "Round","(","4.56",",","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Round",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.56",
                  "type" : "Literal"
               },
               "precision" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Down",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","Down",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "236",
                        "value" : [ "Round","(","4.49",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Round",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.49",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Down_percent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","Down_percent",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "245",
                        "value" : [ "Round","(","4.43",",","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Round",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.43",
                  "type" : "Literal"
               },
               "precision" : {
                  "localId" : "246",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "ln",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","ln",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Ln","(","4",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Ln",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "215",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "log",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","log",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Log","(","10",",","10000",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Log",
               "signature" : [ {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "229",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "232",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "216",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "372",
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
            "name" : "Is",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Is",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "successor of ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Rs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Rs",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "successor of ","2.2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "2.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ofr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","ofr",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "successor of ","2147483647" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2147483647",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "y_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","y_date",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "DateTime","(","2015",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ym_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","ym_date",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "DateTime","(","2015",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymd_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","ymd_date",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "DateTime","(","2015",",","01",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "269",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "260",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdh_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","ymdh_date",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "290",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
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
                  }, {
                     "localId" : "288",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "289",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "278",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","ymdhm_date",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "r" : "295",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "314",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "308",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "310",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "311",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "312",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "295",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "296",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "317",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhms_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","ymdhms_date",": " ]
                  }, {
                     "r" : "339",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "332",
                        "s" : [ {
                           "r" : "318",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "339",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "332",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "333",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "334",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "335",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "336",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "337",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "338",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "319",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "321",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "322",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "323",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "343",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhmsm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "343",
                  "s" : [ {
                     "value" : [ "","define ","ymdhmsm_date",": " ]
                  }, {
                     "r" : "368",
                     "s" : [ {
                        "value" : [ "successor of  " ]
                     }, {
                        "r" : "360",
                        "s" : [ {
                           "r" : "344",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "368",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "369",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "360",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "361",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "362",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "363",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "364",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "365",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "366",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "367",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "344",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "345",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "346",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "350",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "372",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "max_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "372",
                  "s" : [ {
                     "value" : [ "","define ","max_date",": " ]
                  }, {
                     "r" : "397",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "389",
                        "s" : [ {
                           "r" : "373",
                           "value" : [ "DateTime","(","9999",",","12",",","31",",","23",",","59",",","59",",","999",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "397",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "398",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "389",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "390",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "391",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "392",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "393",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "394",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "395",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "396",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "373",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "374",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "375",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "31",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "376",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "379",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "374",
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
            "name" : "Is",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Is",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "predecessor of ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Rs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Rs",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "predecessor of ","2.2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "2.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ufr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","ufr",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "-","2147483648" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2147483648",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "y_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","y_date",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "235",
                           "value" : [ "DateTime","(","2015",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "239",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "240",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ym_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","ym_date",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "r" : "246",
                           "value" : [ "DateTime","(","2015",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymd_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","ymd_date",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "r" : "260",
                           "value" : [ "DateTime","(","2015",",","01",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "269",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "271",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "260",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "262",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "276",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdh_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","ymdh_date",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "287",
                        "s" : [ {
                           "r" : "277",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "287",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "288",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "289",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "290",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "291",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "278",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "279",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","ymdhm_date",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "r" : "297",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "310",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "311",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "312",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "313",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "314",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhms_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "319",
                  "s" : [ {
                     "value" : [ "","define ","ymdhms_date",": " ]
                  }, {
                     "r" : "341",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "334",
                        "s" : [ {
                           "r" : "320",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "341",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "342",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "334",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "335",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "336",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "337",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "338",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "339",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "340",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "321",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "322",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "323",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "324",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "325",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "345",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ymdhmsm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "345",
                  "s" : [ {
                     "value" : [ "","define ","ymdhmsm_date",": " ]
                  }, {
                     "r" : "370",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "362",
                        "s" : [ {
                           "r" : "346",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "370",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "371",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "362",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "363",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "364",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "365",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "366",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "367",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "368",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "369",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "346",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "350",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "351",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "352",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "374",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "min_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "374",
                  "s" : [ {
                     "value" : [ "","define ","min_date",": " ]
                  }, {
                     "r" : "399",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "391",
                        "s" : [ {
                           "r" : "375",
                           "value" : [ "DateTime","(","0001",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "399",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "400",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "391",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "392",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "393",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "394",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "395",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "396",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "397",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "398",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "375",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "376",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "380",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "381",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "411",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","days_10",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "10 ","days" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "value" : 10,
               "unit" : "days",
               "type" : "Quantity"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","QL10Days",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "Quantity","{" ]
                     }, {
                        "s" : [ {
                           "r" : "221",
                           "value" : [ "value",": ","10" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "225",
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
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "223",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "224",
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
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "days",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Min",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","QL10Min"," : " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "Quantity","{" ]
                     }, {
                        "s" : [ {
                           "r" : "232",
                           "value" : [ "value",": ","10" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "236",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "234",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "235",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "232",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "min",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "Jan1_2000",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","Jan1_2000",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "241",
                        "value" : [ "DateTime","(","2000",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "DateTime",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "add_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","add_q_q"," : " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "263",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "add_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","add_d_q"," : " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "Jan1_2000" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "Jan1_2000",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "sub_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","sub_q_q"," : " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "276",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "274",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "sub_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","sub_d_q"," : " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "Jan1_2000" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "Jan1_2000",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "287",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "add_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","add_q_q_diff"," : " ]
                  }, {
                     "r" : "288",
                     "s" : [ {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "QL10Min" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "288",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Min",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "295",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "sub_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","sub_q_q_diff"," : " ]
                  }, {
                     "r" : "296",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "QL10Min" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "296",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "298",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Min",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "div_q_d",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","div_q_d"," : " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "r" : "306",
                        "value" : [ " / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "308",
                  "type" : "ToQuantity",
                  "signature" : [ {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "div_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","div_q_q"," : " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "316",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "318",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "319",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "316",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "317",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "322",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "mul_q_d",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "322",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_d"," : " ]
                  }, {
                     "r" : "323",
                     "s" : [ {
                        "r" : "324",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "r" : "325",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "323",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "329",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "330",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "324",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "327",
                  "type" : "ToQuantity",
                  "signature" : [ {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "325",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "mul_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","mul_d_q"," : " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "r" : "335",
                        "value" : [ "2"," * " ]
                     }, {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
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
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "341",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "338",
                  "type" : "ToQuantity",
                  "signature" : [ {
                     "localId" : "339",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "336",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "344",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "mul_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "344",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_q"," : " ]
                  }, {
                     "r" : "345",
                     "s" : [ {
                        "r" : "346",
                        "s" : [ {
                           "value" : [ "2 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "347",
                        "s" : [ {
                           "value" : [ "10 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "345",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "348",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "349",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "346",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 2,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "347",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 10,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "352",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "mul_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "352",
                  "s" : [ {
                     "value" : [ "","define ","mul_q_q_diff"," : " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "r" : "354",
                        "s" : [ {
                           "value" : [ "2 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "10 ","'/d'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "356",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "357",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "354",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 2,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 10,
                  "unit" : "/d",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "360",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "neg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "360",
                  "s" : [ {
                     "value" : [ "","define ","neg"," : " ]
                  }, {
                     "r" : "361",
                     "s" : [ {
                        "value" : [ "- " ]
                     }, {
                        "r" : "362",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "361",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Negate",
               "signature" : [ {
                  "localId" : "363",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "362",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "abs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "366",
                  "s" : [ {
                     "value" : [ "","define ","abs"," : " ]
                  }, {
                     "r" : "371",
                     "s" : [ {
                        "value" : [ "Abs","(" ]
                     }, {
                        "r" : "367",
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
               "localId" : "371",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Abs",
               "signature" : [ {
                  "localId" : "372",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "367",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "neg",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "375",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MultiplyUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "375",
                  "s" : [ {
                     "value" : [ "","define ","MultiplyUcum",": " ]
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
                              "value" : [ " * " ]
                           }, {
                              "r" : "379",
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
                        "r" : "382",
                        "s" : [ {
                           "value" : [ "125000 ","'m2'" ]
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
                  "type" : "Multiply",
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
                     "value" : 25,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "382",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 125000,
                  "unit" : "m2",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "387",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DivideUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "387",
                  "s" : [ {
                     "value" : [ "","define ","DivideUcum",": " ]
                  }, {
                     "r" : "388",
                     "s" : [ {
                        "r" : "389",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "389",
                           "s" : [ {
                              "r" : "390",
                              "s" : [ {
                                 "value" : [ "20 ","'m2'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "391",
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
                        "r" : "394",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "388",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "395",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "396",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "389",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "392",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "393",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "390",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 20,
                     "unit" : "m2",
                     "type" : "Quantity"
                  }, {
                     "localId" : "391",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "394",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "399",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AddUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "399",
                  "s" : [ {
                     "value" : [ "","define ","AddUcum",": " ]
                  }, {
                     "r" : "400",
                     "s" : [ {
                        "r" : "401",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "401",
                           "s" : [ {
                              "r" : "402",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "403",
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
                        "r" : "406",
                        "s" : [ {
                           "value" : [ "5005 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "400",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "407",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "408",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "401",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Add",
                  "signature" : [ {
                     "localId" : "404",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "402",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "403",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "406",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5005,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "411",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SubtractUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "411",
                  "s" : [ {
                     "value" : [ "","define ","SubtractUcum",": " ]
                  }, {
                     "r" : "412",
                     "s" : [ {
                        "r" : "413",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "413",
                           "s" : [ {
                              "r" : "414",
                              "s" : [ {
                                 "value" : [ "25 ","'km'" ]
                              } ]
                           }, {
                              "value" : [ " - " ]
                           }, {
                              "r" : "415",
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
                        "r" : "418",
                        "s" : [ {
                           "value" : [ "24995 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "412",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "419",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "420",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "413",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Subtract",
                  "signature" : [ {
                     "localId" : "416",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "417",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "414",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 25,
                     "unit" : "km",
                     "type" : "Quantity"
                  }, {
                     "localId" : "415",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "418",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "751",
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
            "name" : "IntegerAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAddOverflow",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "218",
                        "value" : [ " + ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
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
                  "type" : "MaxValue"
               }, {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAddUnderflow",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "-","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSubtractOverflow",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "r" : "239",
                           "value" : [ "-","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
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
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "240",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSubtractUnderflow",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "249",
                        "value" : [ " - ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMultiplyOverflow",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "258",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "263",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMultiplyUnderflow",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "265",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "r" : "268",
                           "value" : [ "-","2" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "269",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "IntegerDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideOverflow",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "278",
                        "s" : [ {
                           "r" : "278",
                           "value" : [ "(","0.5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "275",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "280",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "281",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "MaxValue"
                  }
               }, {
                  "localId" : "278",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "IntegerDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideUnderflow",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "288",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "290",
                           "s" : [ {
                              "r" : "291",
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
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "294",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "295",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "MinValue"
                  }
               }, {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "291",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "300",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "IntegerDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","IntegerDivideByZero",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "r" : "302",
                        "value" : [ "1"," / ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "301",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "305",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "306",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "308",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "303",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPowerOverflow",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "316",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "318",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "319",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "320",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "317",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "323",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPowerUnderflow",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "326",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "326",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "325",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "327",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "328",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "329",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "326",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "332",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","IntegerSuccessorOverflow",": " ]
                  }, {
                     "r" : "335",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "334",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "333",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "335",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "336",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "334",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "339",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "339",
                  "s" : [ {
                     "value" : [ "","define ","IntegerPredecessorUnderflow",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "341",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "340",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "342",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "343",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "341",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "346",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "346",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAddOverflow",": " ]
                  }, {
                     "r" : "347",
                     "s" : [ {
                        "r" : "349",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "348",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "350",
                        "value" : [ " + ","1.0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "347",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "351",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "352",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "350",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "355",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAddUnderflow",": " ]
                  }, {
                     "r" : "356",
                     "s" : [ {
                        "r" : "358",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "357",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "359",
                        "s" : [ {
                           "r" : "360",
                           "value" : [ "-","1.0" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "356",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "362",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "363",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "358",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "359",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "361",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "360",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "366",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSubtractOverflow",": " ]
                  }, {
                     "r" : "367",
                     "s" : [ {
                        "r" : "369",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "368",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "370",
                        "s" : [ {
                           "r" : "371",
                           "value" : [ "-","1.0" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "367",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "373",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "374",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "369",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "370",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "372",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "377",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "377",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSubtractUnderflow",": " ]
                  }, {
                     "r" : "378",
                     "s" : [ {
                        "r" : "380",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "379",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "381",
                        "value" : [ " - ","1.0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "378",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "382",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "380",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "381",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "386",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "386",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMultiplyOverflow",": " ]
                  }, {
                     "r" : "387",
                     "s" : [ {
                        "r" : "389",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "388",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "390",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "387",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "394",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "395",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "389",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "392",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "393",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "390",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "398",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "398",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMultiplyUnderflow",": " ]
                  }, {
                     "r" : "399",
                     "s" : [ {
                        "r" : "401",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "400",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "402",
                        "s" : [ {
                           "r" : "403",
                           "value" : [ "-","2" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "399",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "408",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "409",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "401",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "406",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "407",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "402",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Negate",
                     "signature" : [ {
                        "localId" : "404",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "403",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "412",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "412",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideOverflow",": " ]
                  }, {
                     "r" : "413",
                     "s" : [ {
                        "r" : "415",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "414",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "416",
                        "s" : [ {
                           "r" : "416",
                           "value" : [ "(","0.5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "413",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "417",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "418",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "416",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "421",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "421",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideUnderflow",": " ]
                  }, {
                     "r" : "422",
                     "s" : [ {
                        "r" : "424",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "423",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "425",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "425",
                           "s" : [ {
                              "r" : "426",
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
               "localId" : "422",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "428",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "429",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "424",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "425",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "427",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "432",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "432",
                  "s" : [ {
                     "value" : [ "","define ","DecimalDivideByZero",": " ]
                  }, {
                     "r" : "433",
                     "s" : [ {
                        "r" : "434",
                        "value" : [ "1.0"," / ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "433",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "439",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "440",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "434",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               }, {
                  "localId" : "437",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "438",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "435",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "443",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "443",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPowerOverflow",": " ]
                  }, {
                     "r" : "444",
                     "s" : [ {
                        "r" : "446",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "446",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "445",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "447",
                        "value" : [ "^","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "444",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "451",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "452",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "446",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "449",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "450",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "447",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "455",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "455",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPowerUnderflow",": " ]
                  }, {
                     "r" : "456",
                     "s" : [ {
                        "r" : "458",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "458",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "457",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "459",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "456",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Power",
               "signature" : [ {
                  "localId" : "463",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "464",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "458",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "461",
                  "type" : "ToDecimal",
                  "signature" : [ {
                     "localId" : "462",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "459",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "467",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "467",
                  "s" : [ {
                     "value" : [ "","define ","DecimalSuccessorOverflow",": " ]
                  }, {
                     "r" : "470",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "469",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "468",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "470",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "469",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "474",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "474",
                  "s" : [ {
                     "value" : [ "","define ","DecimalPredecessorUnderflow",": " ]
                  }, {
                     "r" : "477",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "476",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "475",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "477",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "478",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "476",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "481",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "481",
                  "s" : [ {
                     "value" : [ "","define ","MaxQuantity",": " ]
                  }, {
                     "r" : "482",
                     "s" : [ {
                        "value" : [ "Quantity"," { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "value",": " ]
                        }, {
                           "r" : "485",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "484",
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
                           "r" : "486",
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
               "localId" : "482",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "485",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "MaxValue"
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "mm",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "490",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "490",
                  "s" : [ {
                     "value" : [ "","define ","MinQuantity",": " ]
                  }, {
                     "r" : "491",
                     "s" : [ {
                        "value" : [ "Quantity"," { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "value",": " ]
                        }, {
                           "r" : "494",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "493",
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
                           "r" : "495",
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
               "localId" : "491",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "localId" : "494",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "MinValue"
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "495",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "mm",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "499",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "499",
                  "s" : [ {
                     "value" : [ "","define ","QuantityAddOverflow",": " ]
                  }, {
                     "r" : "500",
                     "s" : [ {
                        "r" : "501",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "502",
                        "s" : [ {
                           "value" : [ "1.0 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "500",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Add",
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
                  "value" : 1.0,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "507",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "507",
                  "s" : [ {
                     "value" : [ "","define ","QuantityAddUnderflow",": " ]
                  }, {
                     "r" : "508",
                     "s" : [ {
                        "r" : "509",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "510",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "510",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "511",
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
               "localId" : "508",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "513",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "514",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "509",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "510",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "512",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "511",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1.0,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "517",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantitySubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "517",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySubtractOverflow",": " ]
                  }, {
                     "r" : "518",
                     "s" : [ {
                        "r" : "519",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "520",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "520",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "521",
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
               "localId" : "518",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "523",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "524",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "519",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "520",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "522",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "521",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "527",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantitySubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "527",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySubtractUnderflow",": " ]
                  }, {
                     "r" : "528",
                     "s" : [ {
                        "r" : "529",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "530",
                        "s" : [ {
                           "value" : [ "1 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "528",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "531",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "532",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "529",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "530",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "535",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "535",
                  "s" : [ {
                     "value" : [ "","define ","QuantityMultiplyOverflow",": " ]
                  }, {
                     "r" : "536",
                     "s" : [ {
                        "r" : "537",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "538",
                        "s" : [ {
                           "value" : [ "2 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "536",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "539",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "540",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "537",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "538",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 2,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "543",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "543",
                  "s" : [ {
                     "value" : [ "","define ","QuantityMultiplyUnderflow",": " ]
                  }, {
                     "r" : "544",
                     "s" : [ {
                        "r" : "545",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "546",
                        "s" : [ {
                           "value" : [ "2 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "544",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "547",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "548",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "545",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "546",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 2,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "551",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "551",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideOverflow",": " ]
                  }, {
                     "r" : "552",
                     "s" : [ {
                        "r" : "553",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "554",
                        "s" : [ {
                           "value" : [ "0.5 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "552",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "555",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "556",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "553",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "554",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 0.5,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "559",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "559",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideUnderflow",": " ]
                  }, {
                     "r" : "560",
                     "s" : [ {
                        "r" : "561",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "562",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "562",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "563",
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
               "localId" : "560",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "565",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "566",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "561",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "562",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "564",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "563",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.5,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "569",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "569",
                  "s" : [ {
                     "value" : [ "","define ","QuantityDivideByZero",": " ]
                  }, {
                     "r" : "570",
                     "s" : [ {
                        "r" : "571",
                        "s" : [ {
                           "value" : [ "1.0 ","'mm'" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "572",
                        "s" : [ {
                           "value" : [ "0 ","'mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "570",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Divide",
               "signature" : [ {
                  "localId" : "573",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "574",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "571",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1.0,
                  "unit" : "mm",
                  "type" : "Quantity"
               }, {
                  "localId" : "572",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 0,
                  "unit" : "mm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "577",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantitySuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "577",
                  "s" : [ {
                     "value" : [ "","define ","QuantitySuccessorOverflow",": " ]
                  }, {
                     "r" : "579",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "578",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "579",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "580",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "578",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MaxQuantity",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "583",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "583",
                  "s" : [ {
                     "value" : [ "","define ","QuantityPredecessorUnderflow",": " ]
                  }, {
                     "r" : "585",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "584",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "585",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "586",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "584",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "MinQuantity",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "589",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "589",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAddOverflow",": " ]
                  }, {
                     "r" : "590",
                     "s" : [ {
                        "r" : "592",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "591",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "593",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "590",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "594",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "595",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "592",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }, {
                  "localId" : "593",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "598",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "598",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAddUnderflow",": " ]
                  }, {
                     "r" : "599",
                     "s" : [ {
                        "r" : "601",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "600",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "602",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "602",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "603",
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
               "localId" : "599",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "605",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "606",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "601",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }, {
                  "localId" : "602",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "604",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "603",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "609",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "609",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSubtractOverflow",": " ]
                  }, {
                     "r" : "610",
                     "s" : [ {
                        "r" : "612",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "611",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "613",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "613",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "614",
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
               "localId" : "610",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "616",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "617",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "612",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }, {
                  "localId" : "613",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "615",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "614",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "620",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "620",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSubtractUnderflow",": " ]
                  }, {
                     "r" : "621",
                     "s" : [ {
                        "r" : "623",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "622",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "624",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "621",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "625",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "626",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "623",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }, {
                  "localId" : "624",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "629",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "629",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeSuccessorOverflow",": " ]
                  }, {
                     "r" : "632",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "631",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "630",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "632",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "633",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "631",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "636",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "636",
                  "s" : [ {
                     "value" : [ "","define ","DateTimePredecessorUnderflow",": " ]
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
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "639",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "640",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "638",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "643",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "643",
                  "s" : [ {
                     "value" : [ "","define ","DateAddOverflow",": " ]
                  }, {
                     "r" : "644",
                     "s" : [ {
                        "r" : "646",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "645",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "647",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "644",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "648",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "649",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "646",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }, {
                  "localId" : "647",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "652",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "652",
                  "s" : [ {
                     "value" : [ "","define ","DateAddUnderflow",": " ]
                  }, {
                     "r" : "653",
                     "s" : [ {
                        "r" : "655",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "654",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "656",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "656",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "657",
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
               "localId" : "653",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "659",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "660",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "655",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }, {
                  "localId" : "656",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "658",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "657",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "663",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "663",
                  "s" : [ {
                     "value" : [ "","define ","DateSubtractOverflow",": " ]
                  }, {
                     "r" : "664",
                     "s" : [ {
                        "r" : "666",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "665",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "667",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "667",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "668",
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
               "localId" : "664",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "670",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "671",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "666",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }, {
                  "localId" : "667",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "669",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "668",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "day",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "674",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "674",
                  "s" : [ {
                     "value" : [ "","define ","DateSubtractUnderflow",": " ]
                  }, {
                     "r" : "675",
                     "s" : [ {
                        "r" : "677",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "676",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "678",
                        "s" : [ {
                           "value" : [ "1 ","day" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "675",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "679",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "680",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "677",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }, {
                  "localId" : "678",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "day",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "683",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "683",
                  "s" : [ {
                     "value" : [ "","define ","DateSuccessorOverflow",": " ]
                  }, {
                     "r" : "686",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "685",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "684",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "686",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "687",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "685",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "690",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DatePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "690",
                  "s" : [ {
                     "value" : [ "","define ","DatePredecessorUnderflow",": " ]
                  }, {
                     "r" : "693",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "692",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "691",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "693",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "694",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "692",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "697",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "697",
                  "s" : [ {
                     "value" : [ "","define ","TimeAddOverflow",": " ]
                  }, {
                     "r" : "698",
                     "s" : [ {
                        "r" : "700",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "699",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "701",
                        "s" : [ {
                           "value" : [ "1 ","second" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "698",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "702",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "703",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "700",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }, {
                  "localId" : "701",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "second",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "706",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "706",
                  "s" : [ {
                     "value" : [ "","define ","TimeAddUnderflow",": " ]
                  }, {
                     "r" : "707",
                     "s" : [ {
                        "r" : "709",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "708",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "710",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "710",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "711",
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
               "localId" : "707",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "713",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "714",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "709",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }, {
                  "localId" : "710",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "712",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "711",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "second",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "717",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "717",
                  "s" : [ {
                     "value" : [ "","define ","TimeSubtractOverflow",": " ]
                  }, {
                     "r" : "718",
                     "s" : [ {
                        "r" : "720",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "719",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "721",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "721",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "722",
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
               "localId" : "718",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "724",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "725",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "720",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }, {
                  "localId" : "721",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "723",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "722",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "second",
                     "type" : "Quantity"
                  }
               } ]
            }
         }, {
            "localId" : "728",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "728",
                  "s" : [ {
                     "value" : [ "","define ","TimeSubtractUnderflow",": " ]
                  }, {
                     "r" : "729",
                     "s" : [ {
                        "r" : "731",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "730",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "732",
                        "s" : [ {
                           "value" : [ "1 ","second" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "729",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "733",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "734",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "731",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }, {
                  "localId" : "732",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 1,
                  "unit" : "second",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "737",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "737",
                  "s" : [ {
                     "value" : [ "","define ","TimeSuccessorOverflow",": " ]
                  }, {
                     "r" : "740",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "739",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "738",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "740",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Successor",
               "signature" : [ {
                  "localId" : "741",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "739",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "744",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "744",
                  "s" : [ {
                     "value" : [ "","define ","TimePredecessorUnderflow",": " ]
                  }, {
                     "r" : "747",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "746",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "745",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "747",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Predecessor",
               "signature" : [ {
                  "localId" : "748",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "746",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "751",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "ExpOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "751",
                  "s" : [ {
                     "value" : [ "","define ","ExpOverflow",": " ]
                  }, {
                     "r" : "757",
                     "s" : [ {
                        "value" : [ "Exp","(" ]
                     }, {
                        "r" : "753",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "752",
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
               "localId" : "757",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Exp",
               "signature" : [ {
                  "localId" : "758",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "753",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }
            }
         } ]
      }
   }
}

