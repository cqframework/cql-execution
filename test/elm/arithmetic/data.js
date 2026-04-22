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
define OnePlusTwoLong: 1L + 2L
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "357",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "r" : "215",
              "value" : [ "", "define ", "Ten", ": ", "10" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "10",
          "annotation" : [ ]
        }
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Eleven",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "r" : "219",
              "value" : [ "", "define ", "Eleven", ": ", "11" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "11",
          "annotation" : [ ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "OnePlusTwo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "OnePlusTwo", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "1", " + ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "AddMultiple", ": " ]
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
                                "value" : [ "1", " + ", "2" ]
                              } ]
                            }, {
                              "r" : "244",
                              "value" : [ " + ", "3" ]
                            } ]
                          }, {
                            "r" : "247",
                            "value" : [ " + ", "4" ]
                          } ]
                        }, {
                          "r" : "250",
                          "value" : [ " + ", "5" ]
                        } ]
                      }, {
                        "r" : "253",
                        "value" : [ " + ", "6" ]
                      } ]
                    }, {
                      "r" : "256",
                      "value" : [ " + ", "7" ]
                    } ]
                  }, {
                    "r" : "259",
                    "value" : [ " + ", "8" ]
                  } ]
                }, {
                  "r" : "262",
                  "value" : [ " + ", "9" ]
                } ]
              }, {
                "r" : "265",
                "value" : [ " + ", "10" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Add",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "263",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "264",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Add",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "260",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "261",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Add",
                "localId" : "234",
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
                  "type" : "Add",
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "254",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }, {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "255",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  } ],
                  "operand" : [ {
                    "type" : "Add",
                    "localId" : "236",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ],
                    "signature" : [ {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "251",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }, {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "252",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    } ],
                    "operand" : [ {
                      "type" : "Add",
                      "localId" : "237",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ],
                      "signature" : [ {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "248",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }, {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "249",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      } ],
                      "operand" : [ {
                        "type" : "Add",
                        "localId" : "238",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ],
                        "signature" : [ {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "245",
                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                          "annotation" : [ ]
                        }, {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "246",
                          "name" : "{urn:hl7-org:elm-types:r1}Integer",
                          "annotation" : [ ]
                        } ],
                        "operand" : [ {
                          "type" : "Add",
                          "localId" : "239",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                          "annotation" : [ ],
                          "signature" : [ {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "242",
                            "name" : "{urn:hl7-org:elm-types:r1}Integer",
                            "annotation" : [ ]
                          }, {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "243",
                            "name" : "{urn:hl7-org:elm-types:r1}Integer",
                            "annotation" : [ ]
                          } ],
                          "operand" : [ {
                            "type" : "Literal",
                            "localId" : "240",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                            "value" : "1",
                            "annotation" : [ ]
                          }, {
                            "type" : "Literal",
                            "localId" : "241",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                            "value" : "2",
                            "annotation" : [ ]
                          } ]
                        }, {
                          "type" : "Literal",
                          "localId" : "244",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "3",
                          "annotation" : [ ]
                        } ]
                      }, {
                        "type" : "Literal",
                        "localId" : "247",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "annotation" : [ ]
                      } ]
                    }, {
                      "type" : "Literal",
                      "localId" : "250",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "5",
                      "annotation" : [ ]
                    } ]
                  }, {
                    "type" : "Literal",
                    "localId" : "253",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "6",
                    "annotation" : [ ]
                  } ]
                }, {
                  "type" : "Literal",
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "Literal",
                "localId" : "259",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "8",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "Literal",
              "localId" : "262",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "9",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Literal",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AddVariables", ": " ]
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
          "type" : "Add",
          "localId" : "271",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Ten",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Eleven",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "278",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "OnePlusTwoLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "OnePlusTwoLong", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "r" : "280",
                "value" : [ "1L", " + ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "286",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "AddTime",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AddTime", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "292",
                "s" : [ {
                  "r" : "288",
                  "value" : [ "Time", "(", "12", ")" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "294",
                "s" : [ {
                  "value" : [ "1 ", "'hour'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "287",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "295",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "296",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Time",
            "localId" : "292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "293",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "hour" : {
              "type" : "Literal",
              "localId" : "288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "Quantity",
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "hour",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "299",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintyZeroToTwelve",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "299",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintyZeroToTwelve", ": " ]
            }, {
              "r" : "300",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "307",
                "s" : [ {
                  "r" : "301",
                  "value" : [ "DateTime", "(", "2005", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "314",
                "s" : [ {
                  "r" : "310",
                  "value" : [ "DateTime", "(", "2006", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "300",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "316",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "317",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "308",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "309",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "301",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "302",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "315",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "310",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "320",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintySixToEighteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "320",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintySixToEighteen", ": " ]
            }, {
              "r" : "321",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "326",
                "s" : [ {
                  "r" : "322",
                  "value" : [ "DateTime", "(", "2005", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "334",
                "s" : [ {
                  "r" : "328",
                  "value" : [ "DateTime", "(", "2006", ", ", "7", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "321",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "337",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "338",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "327",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "322",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "335",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "336",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "328",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "329",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "7",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "341",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AddUncertainties",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "341",
            "s" : [ {
              "value" : [ "", "define ", "AddUncertainties", ": " ]
            }, {
              "r" : "342",
              "s" : [ {
                "r" : "343",
                "s" : [ {
                  "value" : [ "UncertaintyZeroToTwelve" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "344",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "342",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "345",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "346",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "343",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "344",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "349",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AddUncertaintyAndNumber",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "349",
            "s" : [ {
              "value" : [ "", "define ", "AddUncertaintyAndNumber", ": " ]
            }, {
              "r" : "350",
              "s" : [ {
                "r" : "351",
                "s" : [ {
                  "value" : [ "UncertaintyZeroToTwelve" ]
                } ]
              }, {
                "r" : "352",
                "value" : [ " + ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "350",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "353",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "354",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "351",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "352",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "357",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AddNumberAndUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "357",
            "s" : [ {
              "value" : [ "", "define ", "AddNumberAndUncertainty", ": " ]
            }, {
              "r" : "358",
              "s" : [ {
                "r" : "359",
                "value" : [ "10", " + " ]
              }, {
                "r" : "360",
                "s" : [ {
                  "value" : [ "UncertaintyZeroToTwelve" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "358",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "361",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "362",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "359",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "360",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "annotation" : [ ]
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
define FiveMinusTwoLong: 5L - 2L
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "320",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "r" : "215",
              "value" : [ "", "define ", "Ten", ": ", "10" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "10",
          "annotation" : [ ]
        }
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Eleven",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "r" : "219",
              "value" : [ "", "define ", "Eleven", ": ", "11" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "11",
          "annotation" : [ ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FiveMinusTwo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "FiveMinusTwo", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "5", " - ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "SubtractMultiple", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "s" : [ {
                  "r" : "233",
                  "s" : [ {
                    "r" : "234",
                    "value" : [ "100", " - ", "50" ]
                  } ]
                }, {
                  "r" : "238",
                  "value" : [ " - ", "25" ]
                } ]
              }, {
                "r" : "241",
                "value" : [ " - ", "10" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Subtract",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "239",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "240",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Subtract",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
              } ],
              "operand" : [ {
                "type" : "Literal",
                "localId" : "234",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "100",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "235",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "50",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "SubtractVariables", ": " ]
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
          "type" : "Subtract",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Eleven",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Ten",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "FiveMinusTwoLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "FiveMinusTwoLong", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "value" : [ "5L", " - ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "262",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintyZeroToTwelve",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintyZeroToTwelve", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "270",
                "s" : [ {
                  "r" : "264",
                  "value" : [ "DateTime", "(", "2005", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "277",
                "s" : [ {
                  "r" : "273",
                  "value" : [ "DateTime", "(", "2006", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
            "year" : {
              "type" : "Literal",
              "localId" : "264",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "265",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "278",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "283",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintySixToEighteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "283",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintySixToEighteen", ": " ]
            }, {
              "r" : "284",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "r" : "285",
                  "value" : [ "DateTime", "(", "2005", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "r" : "291",
                  "value" : [ "DateTime", "(", "2006", ", ", "7", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "300",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "301",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "290",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "298",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "299",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "292",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "7",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "304",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "SubtractUncertainties",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "304",
            "s" : [ {
              "value" : [ "", "define ", "SubtractUncertainties", ": " ]
            }, {
              "r" : "305",
              "s" : [ {
                "r" : "306",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "307",
                "s" : [ {
                  "value" : [ "UncertaintyZeroToTwelve" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "305",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "308",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "309",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "306",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "312",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "SubtractNumberFromUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "312",
            "s" : [ {
              "value" : [ "", "define ", "SubtractNumberFromUncertainty", ": " ]
            }, {
              "r" : "313",
              "s" : [ {
                "r" : "314",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              }, {
                "r" : "315",
                "value" : [ " - ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "313",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "316",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "317",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "315",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "320",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "SubtractUncertaintyFromNumber",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "320",
            "s" : [ {
              "value" : [ "", "define ", "SubtractUncertaintyFromNumber", ": " ]
            }, {
              "r" : "321",
              "s" : [ {
                "r" : "322",
                "value" : [ "10", " - " ]
              }, {
                "r" : "323",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "321",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "324",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "325",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "322",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
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
define FiveTimesTwoLong: 5 * 2
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "324",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "r" : "215",
              "value" : [ "", "define ", "Ten", ": ", "10" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "10",
          "annotation" : [ ]
        }
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Eleven",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "r" : "219",
              "value" : [ "", "define ", "Eleven", ": ", "11" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "11",
          "annotation" : [ ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FiveTimesTwo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "FiveTimesTwo", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "5", " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyMultiple", ": " ]
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
                      "value" : [ "1", " * ", "2" ]
                    } ]
                  }, {
                    "r" : "239",
                    "value" : [ " * ", "3" ]
                  } ]
                }, {
                  "r" : "242",
                  "value" : [ " * ", "4" ]
                } ]
              }, {
                "r" : "245",
                "value" : [ " * ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "246",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Multiply",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            } ],
            "operand" : [ {
              "type" : "Multiply",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "240",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "241",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Multiply",
                "localId" : "234",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ],
                "signature" : [ {
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
                "operand" : [ {
                  "type" : "Literal",
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "Literal",
                "localId" : "239",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "Literal",
              "localId" : "242",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            } ]
          }, {
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
        "name" : "MultiplyVariables",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyVariables", ": " ]
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
          "type" : "Multiply",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "254",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "255",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Eleven",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Ten",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "258",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FiveTimesTwoLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "258",
            "s" : [ {
              "value" : [ "", "define ", "FiveTimesTwoLong", ": " ]
            }, {
              "r" : "259",
              "s" : [ {
                "r" : "260",
                "value" : [ "5", " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "259",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "type" : "Literal",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "266",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintyTwoToFourteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "266",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintyTwoToFourteen", ": " ]
            }, {
              "r" : "267",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "274",
                "s" : [ {
                  "r" : "268",
                  "value" : [ "DateTime", "(", "2005", ", ", "10", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "281",
                "s" : [ {
                  "r" : "277",
                  "value" : [ "DateTime", "(", "2006", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "267",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
            "year" : {
              "type" : "Literal",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "269",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "282",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "277",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "287",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintySixToEighteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "287",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintySixToEighteen", ": " ]
            }, {
              "r" : "288",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "293",
                "s" : [ {
                  "r" : "289",
                  "value" : [ "DateTime", "(", "2005", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "301",
                "s" : [ {
                  "r" : "295",
                  "value" : [ "DateTime", "(", "2006", ", ", "7", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "288",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "304",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "305",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "289",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "301",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "302",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "303",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "295",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "296",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "7",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "308",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "MultiplyUncertainties",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "308",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyUncertainties", ": " ]
            }, {
              "r" : "309",
              "s" : [ {
                "r" : "310",
                "s" : [ {
                  "value" : [ "UncertaintyTwoToFourteen" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "311",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "309",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "312",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "313",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "310",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "316",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "MultiplyUncertaintyAndNumber",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "316",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyUncertaintyAndNumber", ": " ]
            }, {
              "r" : "317",
              "s" : [ {
                "r" : "318",
                "s" : [ {
                  "value" : [ "UncertaintyTwoToFourteen" ]
                } ]
              }, {
                "r" : "319",
                "value" : [ " * ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "317",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "320",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "321",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "318",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "324",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "MultiplyNumberAndUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "324",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyNumberAndUncertainty", ": " ]
            }, {
              "r" : "325",
              "s" : [ {
                "r" : "326",
                "value" : [ "10", " * " ]
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
          "type" : "Multiply",
          "localId" : "325",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "328",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "329",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "327",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "annotation" : [ ]
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
define TenDividedByTwoLong: 10 / 2
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "376",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "r" : "215",
              "value" : [ "", "define ", "Hundred", ": ", "100" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "100",
          "annotation" : [ ]
        }
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Four",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "r" : "219",
              "value" : [ "", "define ", "Four", ": ", "4" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "4",
          "annotation" : [ ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "TenDividedByTwo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "TenDividedByTwo", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "10", " / ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "232",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "233",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "227",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "230",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "231",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "236",
            "s" : [ {
              "value" : [ "", "define ", "TenDividedByFour", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "r" : "238",
                "value" : [ "10", " / ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "246",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "241",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "242",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "244",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "245",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "DivideMultiple", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "r" : "252",
                "s" : [ {
                  "r" : "253",
                  "s" : [ {
                    "r" : "254",
                    "value" : [ "1000", " / ", "4" ]
                  } ]
                }, {
                  "r" : "264",
                  "value" : [ " / ", "10" ]
                } ]
              }, {
                "r" : "270",
                "value" : [ " / ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Divide",
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "268",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "269",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Divide",
              "localId" : "253",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "262",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "263",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "ToDecimal",
                "localId" : "257",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "Literal",
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1000",
                  "annotation" : [ ]
                }
              }, {
                "type" : "ToDecimal",
                "localId" : "260",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "Literal",
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "ToDecimal",
              "localId" : "266",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "267",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "264",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "10",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "ToDecimal",
            "localId" : "272",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "273",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "DivideVariables", ": " ]
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
          "type" : "Divide",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "288",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "289",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "283",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "284",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "280",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "Hundred",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "286",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "287",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "281",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "Four",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "292",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "TenDividedByTwoLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "292",
            "s" : [ {
              "value" : [ "", "define ", "TenDividedByTwoLong", ": " ]
            }, {
              "r" : "293",
              "s" : [ {
                "r" : "294",
                "value" : [ "10", " / ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "293",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "302",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "303",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "297",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "298",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "300",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "301",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "295",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "306",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintyTwoToFourteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "306",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintyTwoToFourteen", ": " ]
            }, {
              "r" : "307",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "314",
                "s" : [ {
                  "r" : "308",
                  "value" : [ "DateTime", "(", "2005", ", ", "10", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "321",
                "s" : [ {
                  "r" : "317",
                  "value" : [ "DateTime", "(", "2006", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "307",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "323",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "324",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "315",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "316",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "308",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "309",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "322",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "317",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "327",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintySixToEighteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "327",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintySixToEighteen", ": " ]
            }, {
              "r" : "328",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "333",
                "s" : [ {
                  "r" : "329",
                  "value" : [ "DateTime", "(", "2005", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "341",
                "s" : [ {
                  "r" : "335",
                  "value" : [ "DateTime", "(", "2006", ", ", "7", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "328",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "344",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "345",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "334",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "329",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "342",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "343",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "335",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "336",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "7",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "348",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DivideUncertainties",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "348",
            "s" : [ {
              "value" : [ "", "define ", "DivideUncertainties", ": " ]
            }, {
              "r" : "349",
              "s" : [ {
                "r" : "350",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "351",
                "s" : [ {
                  "value" : [ "UncertaintyTwoToFourteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "349",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "358",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "359",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "353",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "354",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "UncertaintySixToEighteen",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "356",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "357",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "351",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "UncertaintyTwoToFourteen",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "362",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DivideUncertaintyByNumber",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "362",
            "s" : [ {
              "value" : [ "", "define ", "DivideUncertaintyByNumber", ": " ]
            }, {
              "r" : "363",
              "s" : [ {
                "r" : "364",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              }, {
                "r" : "365",
                "value" : [ " / ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "363",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "372",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "373",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "367",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "368",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "364",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "UncertaintySixToEighteen",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "370",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "371",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "365",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "376",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DivideNumberByUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "376",
            "s" : [ {
              "value" : [ "", "define ", "DivideNumberByUncertainty", ": " ]
            }, {
              "r" : "377",
              "s" : [ {
                "r" : "378",
                "value" : [ "36", " / " ]
              }, {
                "r" : "379",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "377",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "386",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "387",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "381",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "382",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "378",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "36",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "384",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "385",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "379",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "UncertaintySixToEighteen",
              "annotation" : [ ]
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
define NegativeOneLong: -1L
*/

module.exports['Negate'] = {
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
        "r" : "220",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "NegativeOne", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "-", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Negate",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "217",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "NegativeOneLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "NegativeOneLong", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "222",
                "value" : [ "-", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Negate",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "243",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Mixed", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "s" : [ {
                  "r" : "217",
                  "value" : [ "1", " + " ]
                }, {
                  "r" : "218",
                  "s" : [ {
                    "r" : "219",
                    "value" : [ "5", " * ", "10" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "225",
                "s" : [ {
                  "r" : "226",
                  "value" : [ "15", " / ", "3" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "237",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "238",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Add",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "223",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "224",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Literal",
                "localId" : "217",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Multiply",
                "localId" : "218",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "Literal",
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "annotation" : [ ]
                } ]
              } ]
            }
          }, {
            "type" : "Divide",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "235",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDecimal",
              "localId" : "229",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "230",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "226",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDecimal",
              "localId" : "232",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "233",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "227",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "Parenthetical", ": " ]
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
                      "value" : [ "1", " + ", "5" ]
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
                      "value" : [ "10", " - ", "15" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                } ]
              }, {
                "r" : "258",
                "value" : [ " / ", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "244",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "265",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "260",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "261",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Multiply",
              "localId" : "245",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "256",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "257",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Add",
                "localId" : "246",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "Literal",
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "Subtract",
                "localId" : "251",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "Literal",
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "annotation" : [ ]
                } ]
              } ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "263",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "264",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
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
define ThreeExpFourLong: 3L ^ 4L
*/

module.exports['Power'] = {
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
        "r" : "222",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Pow", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "3", " ^ ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeExpFourLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "ThreeExpFourLong", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "3L", " ^ ", "4L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "4",
            "annotation" : [ ]
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
define MinLong: minimum Long
define MinDecimal: minimum Decimal
define MinDateTime: minimum  DateTime
define MinTime: minimum Time
define MinWrongType: minimum Quantity
*/

module.exports['MinValue'] = {
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
        "r" : "239",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "MinInteger", ": " ]
            }, {
              "r" : "216",
              "s" : [ {
                "value" : [ "minimum", " " ]
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
          "type" : "MinValue",
          "localId" : "216",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ]
        }
      }, {
        "localId" : "219",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "MinLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "219",
            "s" : [ {
              "value" : [ "", "define ", "MinLong", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "minimum", " " ]
              }, {
                "r" : "220",
                "s" : [ {
                  "value" : [ "Long" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MinValue",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "valueType" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ]
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "MinDecimal",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "MinDecimal", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "minimum", " " ]
              }, {
                "r" : "225",
                "s" : [ {
                  "value" : [ "Decimal" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MinValue",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ]
        }
      }, {
        "localId" : "229",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "MinDateTime",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "229",
            "s" : [ {
              "value" : [ "", "define ", "MinDateTime", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "value" : [ "minimum", "  " ]
              }, {
                "r" : "230",
                "s" : [ {
                  "value" : [ "DateTime" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MinValue",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ]
        }
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "MinTime",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "MinTime", ": " ]
            }, {
              "r" : "236",
              "s" : [ {
                "value" : [ "minimum", " " ]
              }, {
                "r" : "235",
                "s" : [ {
                  "value" : [ "Time" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MinValue",
          "localId" : "236",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "valueType" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ]
        }
      }, {
        "localId" : "239",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "MinWrongType",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "239",
            "s" : [ {
              "value" : [ "", "define ", "MinWrongType", ": " ]
            }, {
              "r" : "241",
              "s" : [ {
                "value" : [ "minimum", " " ]
              }, {
                "r" : "240",
                "s" : [ {
                  "value" : [ "Quantity" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MinValue",
          "localId" : "241",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "valueType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ]
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
define MaxLong: maximum Long
define MaxDecimal: maximum Decimal
define MaxDateTime: maximum DateTime
define MaxTime: maximum Time
define MaxWrongType: maximum Quantity
*/

module.exports['MaxValue'] = {
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
        "r" : "239",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "MaxInteger", ": " ]
            }, {
              "r" : "216",
              "s" : [ {
                "value" : [ "maximum", " " ]
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
          "type" : "MaxValue",
          "localId" : "216",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ]
        }
      }, {
        "localId" : "219",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "MaxLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "219",
            "s" : [ {
              "value" : [ "", "define ", "MaxLong", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "maximum", " " ]
              }, {
                "r" : "220",
                "s" : [ {
                  "value" : [ "Long" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MaxValue",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "valueType" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ]
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "MaxDecimal",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "MaxDecimal", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "maximum", " " ]
              }, {
                "r" : "225",
                "s" : [ {
                  "value" : [ "Decimal" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MaxValue",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ]
        }
      }, {
        "localId" : "229",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "MaxDateTime",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "229",
            "s" : [ {
              "value" : [ "", "define ", "MaxDateTime", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "value" : [ "maximum", " " ]
              }, {
                "r" : "230",
                "s" : [ {
                  "value" : [ "DateTime" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MaxValue",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ]
        }
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "MaxTime",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "MaxTime", ": " ]
            }, {
              "r" : "236",
              "s" : [ {
                "value" : [ "maximum", " " ]
              }, {
                "r" : "235",
                "s" : [ {
                  "value" : [ "Time" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MaxValue",
          "localId" : "236",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "valueType" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ]
        }
      }, {
        "localId" : "239",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "MaxWrongType",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "239",
            "s" : [ {
              "value" : [ "", "define ", "MaxWrongType", ": " ]
            }, {
              "r" : "241",
              "s" : [ {
                "value" : [ "maximum", " " ]
              }, {
                "r" : "240",
                "s" : [ {
                  "value" : [ "Quantity" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "MaxValue",
          "localId" : "241",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "valueType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ]
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
define TenDivThreeLong: 10L div 3L
*/

module.exports['TruncatedDivide'] = {
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
        "r" : "230",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Trunc", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "10", " div ", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "TruncatedDivide",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "Even", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "9", " div ", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "TruncatedDivide",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "9",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "TenDivThreeLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "TenDivThreeLong", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "10L", " div ", "3L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "TruncatedDivide",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
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
define ThreeModTwoLong: 3L mod 2L
*/

module.exports['Modulo'] = {
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
        "r" : "222",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Mod", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "3", " mod ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Modulo",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeModTwoLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "ThreeModTwoLong", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "3L", " mod ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Modulo",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
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
define CeilTenLong: Ceiling(10L)
*/

module.exports['Ceiling'] = {
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
        "r" : "238",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Ceil", ": " ]
            }, {
              "r" : "219",
              "s" : [ {
                "r" : "215",
                "value" : [ "Ceiling", "(", "10.1", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Ceiling",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "10.1",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "Even", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "224",
                "value" : [ "Ceiling", "(", "10", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Ceiling",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDecimal",
            "localId" : "233",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "CeilTenLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "CeilTenLong", ": " ]
            }, {
              "r" : "246",
              "s" : [ {
                "r" : "239",
                "value" : [ "Ceiling", "(", "10L", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Ceiling",
          "localId" : "246",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDecimal",
            "localId" : "248",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "249",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
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
define FloorTenLong: Floor(10L)
*/

module.exports['Floor'] = {
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
        "r" : "238",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "flr", ": " ]
            }, {
              "r" : "219",
              "s" : [ {
                "r" : "215",
                "value" : [ "Floor", "(", "10.1", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Floor",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "10.1",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "Even", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "224",
                "value" : [ "Floor", "(", "10", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Floor",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDecimal",
            "localId" : "233",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FloorTenLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "FloorTenLong", ": " ]
            }, {
              "r" : "246",
              "s" : [ {
                "r" : "239",
                "value" : [ "Floor", "(", "10L", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Floor",
          "localId" : "246",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDecimal",
            "localId" : "248",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "249",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
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
define TruncTenLong: Truncate(10L)
*/

module.exports['Truncate'] = {
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
        "r" : "238",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Trunc", ": " ]
            }, {
              "r" : "219",
              "s" : [ {
                "r" : "215",
                "value" : [ "Truncate", "(", "10.1", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Truncate",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "10.1",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "Even", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "224",
                "value" : [ "Truncate", "(", "10", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Truncate",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDecimal",
            "localId" : "233",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "TruncTenLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "TruncTenLong", ": " ]
            }, {
              "r" : "246",
              "s" : [ {
                "r" : "239",
                "value" : [ "Truncate", "(", "10L", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Truncate",
          "localId" : "246",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDecimal",
            "localId" : "248",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "249",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
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
define AbsNegTenLong: Abs(-10L)
*/

module.exports['Abs'] = {
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
        "r" : "243",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Pos", ": " ]
            }, {
              "r" : "219",
              "s" : [ {
                "r" : "215",
                "value" : [ "Abs", "(", "10", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Abs",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "Neg", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "value" : [ "Abs", "(" ]
              }, {
                "r" : "224",
                "s" : [ {
                  "r" : "225",
                  "value" : [ "-", "10" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Abs",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Negate",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "226",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "Zero", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "235",
                "value" : [ "Abs", "(", "0", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Abs",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "243",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "AbsNegTenLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "AbsNegTenLong", ": " ]
            }, {
              "r" : "250",
              "s" : [ {
                "value" : [ "Abs", "(" ]
              }, {
                "r" : "244",
                "s" : [ {
                  "r" : "245",
                  "value" : [ "-", "10L" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Abs",
          "localId" : "250",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Negate",
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "246",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "245",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
            }
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "244",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Up", ": " ]
            }, {
              "r" : "219",
              "s" : [ {
                "r" : "215",
                "value" : [ "Round", "(", "4.56", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Round",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "4.56",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "Up_percent", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "r" : "224",
                "value" : [ "Round", "(", "4.56", ",", "1", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Round",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "232",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "4.56",
            "annotation" : [ ]
          },
          "precision" : {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "235",
            "s" : [ {
              "value" : [ "", "define ", "Down", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "r" : "236",
                "value" : [ "Round", "(", "4.49", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Round",
          "localId" : "240",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "4.49",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "244",
            "s" : [ {
              "value" : [ "", "define ", "Down_percent", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "r" : "245",
                "value" : [ "Round", "(", "4.43", ",", "1", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Round",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "4.43",
            "annotation" : [ ]
          },
          "precision" : {
            "type" : "Literal",
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
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
define LnFourLong: Ln(4L)
*/

module.exports['Ln'] = {
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
        "r" : "229",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "ln", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "r" : "215",
                "value" : [ "Ln", "(", "4", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Ln",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDecimal",
            "localId" : "224",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "225",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "215",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "229",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LnFourLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "229",
            "s" : [ {
              "value" : [ "", "define ", "LnFourLong", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "r" : "230",
                "value" : [ "Ln", "(", "4L", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Ln",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDecimal",
            "localId" : "239",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "240",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "230",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "4",
              "annotation" : [ ]
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
define logLong: Log(10L,10000L)
*/

module.exports['Log'] = {
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
        "r" : "238",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "log", ": " ]
            }, {
              "r" : "227",
              "s" : [ {
                "r" : "215",
                "value" : [ "Log", "(", "10", ",", "10000", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Log",
          "localId" : "227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "229",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "215",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "232",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10000",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "logLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "logLong", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "r" : "239",
                "value" : [ "Log", "(", "10L", ",", "10000L", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Log",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "253",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "254",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "256",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "257",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10000",
              "annotation" : [ ]
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
define Ls: successor of 2L
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "378",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Is", ": " ]
            }, {
              "r" : "216",
              "s" : [ {
                "r" : "215",
                "value" : [ "successor of ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "216",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "217",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "Ls",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "Ls", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "r" : "221",
                "value" : [ "successor of ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "Rs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Rs", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "r" : "227",
                "value" : [ "successor of ", "2.2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "229",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "2.2",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ofr",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "ofr", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "r" : "233",
                "value" : [ "successor of ", "2147483647" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2147483647",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "y_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "y_date", ": " ]
            }, {
              "r" : "245",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "243",
                "s" : [ {
                  "r" : "239",
                  "value" : [ "DateTime", "(", "2015", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "245",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "246",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "244",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "249",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ym_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "249",
            "s" : [ {
              "value" : [ "", "define ", "ym_date", ": " ]
            }, {
              "r" : "259",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "256",
                "s" : [ {
                  "r" : "250",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "259",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
            "year" : {
              "type" : "Literal",
              "localId" : "250",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "251",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "263",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymd_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "263",
            "s" : [ {
              "value" : [ "", "define ", "ymd_date", ": " ]
            }, {
              "r" : "276",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "272",
                "s" : [ {
                  "r" : "264",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "276",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "277",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "273",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "274",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "275",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "264",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "265",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "280",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymdh_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "280",
            "s" : [ {
              "value" : [ "", "define ", "ymdh_date", ": " ]
            }, {
              "r" : "296",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "291",
                "s" : [ {
                  "r" : "281",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "296",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "297",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "295",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "281",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "282",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "283",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "284",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "300",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymdhm_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "300",
            "s" : [ {
              "value" : [ "", "define ", "ymdhm_date", ": " ]
            }, {
              "r" : "319",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "r" : "301",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ",", "0", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "319",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "320",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "314",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "315",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "316",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "317",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "318",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "301",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "302",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "303",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "304",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "305",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "323",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymdhms_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "323",
            "s" : [ {
              "value" : [ "", "define ", "ymdhms_date", ": " ]
            }, {
              "r" : "345",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "338",
                "s" : [ {
                  "r" : "324",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ",", "0", ",", "0", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "345",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "346",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "338",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "339",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "340",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "341",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "342",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "343",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "344",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "324",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "325",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "326",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "327",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "328",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "329",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "349",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymdhmsm_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "349",
            "s" : [ {
              "value" : [ "", "define ", "ymdhmsm_date", ": " ]
            }, {
              "r" : "374",
              "s" : [ {
                "value" : [ "successor of  " ]
              }, {
                "r" : "366",
                "s" : [ {
                  "r" : "350",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ",", "0", ",", "0", ",", "0", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "374",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "375",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "367",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "368",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "369",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "370",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "371",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "372",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "373",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "351",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "352",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "353",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "354",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "355",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "356",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "378",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "max_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "378",
            "s" : [ {
              "value" : [ "", "define ", "max_date", ": " ]
            }, {
              "r" : "403",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "395",
                "s" : [ {
                  "r" : "379",
                  "value" : [ "DateTime", "(", "9999", ",", "12", ",", "31", ",", "23", ",", "59", ",", "59", ",", "999", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "403",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "404",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "395",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "396",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "397",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "398",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "399",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "400",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "401",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "402",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "379",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "9999",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "380",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "381",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "31",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "382",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "383",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "59",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "384",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "59",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "385",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "999",
              "annotation" : [ ]
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
define Ls: predecessor of 2L
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "380",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Is", ": " ]
            }, {
              "r" : "216",
              "s" : [ {
                "r" : "215",
                "value" : [ "predecessor of ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "216",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "217",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "Ls",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "Ls", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "r" : "221",
                "value" : [ "predecessor of ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "Rs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Rs", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "r" : "227",
                "value" : [ "predecessor of ", "2.2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "229",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "2.2",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ufr",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "ufr", ": " ]
            }, {
              "r" : "236",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "233",
                "s" : [ {
                  "r" : "234",
                  "value" : [ "-", "2147483648" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "236",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "237",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Negate",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "235",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2147483648",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "240",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "y_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "240",
            "s" : [ {
              "value" : [ "", "define ", "y_date", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "245",
                "s" : [ {
                  "r" : "241",
                  "value" : [ "DateTime", "(", "2015", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "248",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "246",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "251",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ym_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "251",
            "s" : [ {
              "value" : [ "", "define ", "ym_date", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "258",
                "s" : [ {
                  "r" : "252",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "259",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "260",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "252",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "253",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymd_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "ymd_date", ": " ]
            }, {
              "r" : "278",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "274",
                "s" : [ {
                  "r" : "266",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "278",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "277",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "282",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymdh_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "282",
            "s" : [ {
              "value" : [ "", "define ", "ymdh_date", ": " ]
            }, {
              "r" : "298",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "293",
                "s" : [ {
                  "r" : "283",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "298",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "295",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "296",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "297",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "283",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "284",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "286",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "302",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymdhm_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ymdhm_date", ": " ]
            }, {
              "r" : "321",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "315",
                "s" : [ {
                  "r" : "303",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ",", "0", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "321",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "315",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "316",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "317",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "318",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "319",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "320",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "303",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "304",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "305",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "306",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "307",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "325",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymdhms_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "325",
            "s" : [ {
              "value" : [ "", "define ", "ymdhms_date", ": " ]
            }, {
              "r" : "347",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "340",
                "s" : [ {
                  "r" : "326",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ",", "0", ",", "0", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "347",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "348",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "340",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "341",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "342",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "343",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "344",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "345",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "346",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "326",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "327",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "328",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "329",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "330",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "331",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "351",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "ymdhmsm_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "351",
            "s" : [ {
              "value" : [ "", "define ", "ymdhmsm_date", ": " ]
            }, {
              "r" : "376",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "368",
                "s" : [ {
                  "r" : "352",
                  "value" : [ "DateTime", "(", "2015", ",", "01", ",", "01", ",", "0", ",", "0", ",", "0", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "376",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "377",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "368",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "369",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "370",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "371",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "372",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "373",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "374",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "375",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "352",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2015",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "353",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "354",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "355",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "356",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "357",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "358",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "380",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "min_date",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "380",
            "s" : [ {
              "value" : [ "", "define ", "min_date", ": " ]
            }, {
              "r" : "405",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "397",
                "s" : [ {
                  "r" : "381",
                  "value" : [ "DateTime", "(", "0001", ",", "01", ",", "01", ",", "0", ",", "0", ",", "0", ",", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "405",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "406",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "DateTime",
            "localId" : "397",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "398",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "399",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "400",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "401",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "402",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "403",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "404",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "381",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0001",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "382",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "383",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "01",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "384",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "385",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "386",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "387",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "411",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "days_10", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "value" : [ "10 ", "days" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Quantity",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "value" : 10,
          "unit" : "days",
          "annotation" : [ ]
        }
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QL10Days",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "value" : [ "", "define ", "QL10Days", ": " ]
            }, {
              "r" : "219",
              "s" : [ {
                "value" : [ "Quantity", "{" ]
              }, {
                "s" : [ {
                  "r" : "221",
                  "value" : [ "value", ": ", "10" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "s" : [ {
                  "value" : [ "unit", ": " ]
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
          "type" : "Instance",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "element" : [ {
            "name" : "value",
            "value" : {
              "type" : "ToDecimal",
              "localId" : "223",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "224",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "221",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "10",
                "annotation" : [ ]
              }
            }
          }, {
            "name" : "unit",
            "value" : {
              "type" : "Literal",
              "localId" : "225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "days",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "229",
            "s" : [ {
              "value" : [ "", "define ", "QL10Min", " : " ]
            }, {
              "r" : "230",
              "s" : [ {
                "value" : [ "Quantity", "{" ]
              }, {
                "s" : [ {
                  "r" : "232",
                  "value" : [ "value", ": ", "10" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "s" : [ {
                  "value" : [ "unit", ": " ]
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
          "type" : "Instance",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "element" : [ {
            "name" : "value",
            "value" : {
              "type" : "ToDecimal",
              "localId" : "234",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "235",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "232",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "10",
                "annotation" : [ ]
              }
            }
          }, {
            "name" : "unit",
            "value" : {
              "type" : "Literal",
              "localId" : "236",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "min",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "240",
            "s" : [ {
              "value" : [ "", "define ", "Jan1_2000", ": " ]
            }, {
              "r" : "249",
              "s" : [ {
                "r" : "241",
                "value" : [ "DateTime", "(", "2000", ", ", "1", ", ", "1", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DateTime",
          "localId" : "249",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "year" : {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2000",
            "annotation" : [ ]
          },
          "month" : {
            "type" : "Literal",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          },
          "day" : {
            "type" : "Literal",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "255",
            "s" : [ {
              "value" : [ "", "define ", "add_q_q", " : " ]
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
          "type" : "Add",
          "localId" : "256",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Days",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "263",
            "s" : [ {
              "value" : [ "", "define ", "add_d_q", " : " ]
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
          "type" : "Add",
          "localId" : "264",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "268",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "Jan1_2000",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "271",
            "s" : [ {
              "value" : [ "", "define ", "sub_q_q", " : " ]
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
          "type" : "Subtract",
          "localId" : "272",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "276",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Days",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "279",
            "s" : [ {
              "value" : [ "", "define ", "sub_d_q", " : " ]
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
          "type" : "Subtract",
          "localId" : "280",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "Jan1_2000",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "287",
            "s" : [ {
              "value" : [ "", "define ", "add_q_q_diff", " : " ]
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
          "type" : "Add",
          "localId" : "288",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "291",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "292",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Days",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "290",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Min",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "295",
            "s" : [ {
              "value" : [ "", "define ", "sub_q_q_diff", " : " ]
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
          "type" : "Subtract",
          "localId" : "296",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "300",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Days",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "298",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Min",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "303",
            "s" : [ {
              "value" : [ "", "define ", "div_q_d", " : " ]
            }, {
              "r" : "304",
              "s" : [ {
                "r" : "305",
                "s" : [ {
                  "value" : [ "days_10" ]
                } ]
              }, {
                "r" : "306",
                "value" : [ " / ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "304",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "310",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "311",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "annotation" : [ ]
          }, {
            "type" : "ToQuantity",
            "localId" : "308",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "309",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "306",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "314",
            "s" : [ {
              "value" : [ "", "define ", "div_q_q", " : " ]
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
          "type" : "Divide",
          "localId" : "315",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "318",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "319",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "317",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Days",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "322",
            "s" : [ {
              "value" : [ "", "define ", "mul_q_d", " : " ]
            }, {
              "r" : "323",
              "s" : [ {
                "r" : "324",
                "s" : [ {
                  "value" : [ "days_10" ]
                } ]
              }, {
                "r" : "325",
                "value" : [ " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "323",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "329",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "330",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "324",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "annotation" : [ ]
          }, {
            "type" : "ToQuantity",
            "localId" : "327",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "328",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "325",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "333",
            "s" : [ {
              "value" : [ "", "define ", "mul_d_q", " : " ]
            }, {
              "r" : "334",
              "s" : [ {
                "r" : "335",
                "value" : [ "2", " * " ]
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
          "type" : "Multiply",
          "localId" : "334",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "340",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "341",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToQuantity",
            "localId" : "338",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "339",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "335",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          }, {
            "type" : "ExpressionRef",
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QL10Days",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "344",
            "s" : [ {
              "value" : [ "", "define ", "mul_q_q", " : " ]
            }, {
              "r" : "345",
              "s" : [ {
                "r" : "346",
                "s" : [ {
                  "value" : [ "2 ", "'m'" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "347",
                "s" : [ {
                  "value" : [ "10 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "345",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "348",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "349",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "346",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 2,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "347",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 10,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "352",
            "s" : [ {
              "value" : [ "", "define ", "mul_q_q_diff", " : " ]
            }, {
              "r" : "353",
              "s" : [ {
                "r" : "354",
                "s" : [ {
                  "value" : [ "2 ", "'m'" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "355",
                "s" : [ {
                  "value" : [ "10 ", "'/d'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "353",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "356",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "357",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "354",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 2,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 10,
            "unit" : "/d",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "360",
            "s" : [ {
              "value" : [ "", "define ", "neg", " : " ]
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
          "type" : "Negate",
          "localId" : "361",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "363",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "362",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "days_10",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "366",
            "s" : [ {
              "value" : [ "", "define ", "abs", " : " ]
            }, {
              "r" : "371",
              "s" : [ {
                "value" : [ "Abs", "(" ]
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
          "type" : "Abs",
          "localId" : "371",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "372",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "367",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "neg",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "375",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyUcum", ": " ]
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
                      "value" : [ "5 ", "'m'" ]
                    } ]
                  }, {
                    "value" : [ " * " ]
                  }, {
                    "r" : "379",
                    "s" : [ {
                      "value" : [ "25 ", "'km'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "382",
                "s" : [ {
                  "value" : [ "125000 ", "'m2'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "376",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "383",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "384",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Multiply",
            "localId" : "377",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "380",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "381",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "378",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "379",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 25,
              "unit" : "km",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Quantity",
            "localId" : "382",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 125000,
            "unit" : "m2",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "387",
            "s" : [ {
              "value" : [ "", "define ", "DivideUcum", ": " ]
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
                      "value" : [ "20 ", "'m2'" ]
                    } ]
                  }, {
                    "value" : [ " / " ]
                  }, {
                    "r" : "391",
                    "s" : [ {
                      "value" : [ "5 ", "'m'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "394",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "388",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "395",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "396",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Divide",
            "localId" : "389",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "392",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "393",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "390",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 20,
              "unit" : "m2",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "391",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Quantity",
            "localId" : "394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "399",
            "s" : [ {
              "value" : [ "", "define ", "AddUcum", ": " ]
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
                      "value" : [ "5 ", "'m'" ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "403",
                    "s" : [ {
                      "value" : [ "5 ", "'km'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "406",
                "s" : [ {
                  "value" : [ "5005 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "400",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "407",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "408",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Add",
            "localId" : "401",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "404",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "405",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "402",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "403",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "km",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Quantity",
            "localId" : "406",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5005,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "411",
            "s" : [ {
              "value" : [ "", "define ", "SubtractUcum", ": " ]
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
                      "value" : [ "25 ", "'km'" ]
                    } ]
                  }, {
                    "value" : [ " - " ]
                  }, {
                    "r" : "415",
                    "s" : [ {
                      "value" : [ "5 ", "'m'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "418",
                "s" : [ {
                  "value" : [ "24995 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "412",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "419",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "420",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Subtract",
            "localId" : "413",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "416",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "417",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "414",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 25,
              "unit" : "km",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "415",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Quantity",
            "localId" : "418",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 24995,
            "unit" : "m",
            "annotation" : [ ]
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
define IntegerAddNearOverflow: maximum Integer + 0
define IntegerAddNearUnderflow: minimum Integer + 0
define IntegerSubtractOverflow: maximum Integer - -1
define IntegerSubtractUnderflow: minimum Integer - 1
define IntegerSubtractNearOverflow: maximum Integer - 0
define IntegerSubtractNearUnderflow: minimum Integer - 0
define IntegerMultiplyOverflow: maximum Integer * 2
define IntegerMultiplyUnderflow: minimum Integer * 2
define IntegerMultiplyNearOverflow: maximum Integer * 1
define IntegerMultiplyNearUnderflow: minimum Integer * 1
define IntegerDivideOverflow: maximum Integer / 0.5
define IntegerDivideUnderflow: minimum Integer / 0.5
define IntegerDivideNearOverflow: maximum Integer / 1
define IntegerDivideNearUnderflow: minimum Integer / 1
define IntegerDivideByZero: 1 / 0
define IntegerPowerOverflow: (maximum Integer)^3
define IntegerPowerUnderflow: (minimum Integer)^3
define IntegerPowerNearOverflow: (maximum Integer)^1
define IntegerPowerNearUnderflow: (minimum Integer)^1
define IntegerSuccessorOverflow: successor of maximum Integer
define IntegerPredecessorUnderflow: predecessor of minimum Integer
define IntegerSuccessorNearOverflow: successor of (maximum Integer - 1)
define IntegerPredecessorNearUnderflow: predecessor of (minimum Integer + 1)

define LongAddOverflow: maximum Long + 1L
define LongAddUnderflow: minimum Long + -1L
define LongAddNearOverflow: maximum Long + 0L
define LongAddNearUnderflow: minimum Long + 0L
define LongSubtractOverflow: maximum Long - -1L
define LongSubtractUnderflow: minimum Long - 1L
define LongSubtractNearOverflow: maximum Long - 0L
define LongSubtractNearUnderflow: minimum Long - 0L
define LongMultiplyOverflow: maximum Long * 2L
define LongMultiplyUnderflow: minimum Long * 2L
define LongMultiplyNearOverflow: maximum Long * 1L
define LongMultiplyNearUnderflow: minimum Long * 1L
define LongDivideOverflow: maximum Long / 0.5
define LongDivideUnderflow: minimum Long / 0.5
define LongDivideNearOverflow: maximum Long / 1L
define LongDivideNearUnderflow: minimum Long / 1L
define LongDivideByZero: 1L / 0L
define LongPowerOverflow: (maximum Long)^3L
define LongPowerUnderflow: (minimum Long)^3L
define LongPowerNearOverflow: (maximum Long)^1L
define LongPowerNearUnderflow: (minimum Long)^1L
define LongSuccessorOverflow: successor of maximum Long
define LongPredecessorUnderflow: predecessor of minimum Long
define LongSuccessorNearOverflow: successor of (maximum Long - 1L)
define LongPredecessorNearUnderflow: predecessor of (minimum Long + 1L)

define DecimalAddOverflow: maximum Decimal + 1.0
define DecimalAddUnderflow: minimum Decimal + -1.0
define DecimalAddNearOverflow: maximum Decimal + 0.0
define DecimalAddNearUnderflow: minimum Decimal + 0.0
define DecimalSubtractOverflow: maximum Decimal - -1.0
define DecimalSubtractUnderflow: minimum Decimal - 1.0
define DecimalSubtractNearOverflow: maximum Decimal - 0.0
define DecimalSubtractNearUnderflow: minimum Decimal - 0.0
define DecimalMultiplyOverflow: maximum Decimal * 2
define DecimalMultiplyUnderflow: minimum Decimal * 2
define DecimalMultiplyNearOverflow: maximum Decimal * 1
define DecimalMultiplyNearUnderflow: minimum Decimal * 1
define DecimalDivideOverflow: maximum Decimal / 0.5
define DecimalDivideUnderflow: minimum Decimal / 0.5
define DecimalDivideNearOverflow: maximum Decimal / 1.0
define DecimalDivideNearUnderflow: minimum Decimal / 1.0
define DecimalDivideByZero: 1.0 / 0
define DecimalPowerOverflow: (maximum Decimal)^2
define DecimalPowerUnderflow: (minimum Decimal)^3
define DecimalPowerNearOverflow: (maximum Decimal)^1
define DecimalPowerNearUnderflow: (minimum Decimal)^1
define DecimalSuccessorOverflow: successor of maximum Decimal
define DecimalPredecessorUnderflow: predecessor of minimum Decimal
define DecimalSuccessorNearOverflow: successor of (maximum Decimal - 0.00000001)
define DecimalPredecessorNearUnderflow: predecessor of (minimum Decimal + 0.00000001)

define MaxQuantity: Quantity { value: maximum Decimal, unit: 'mm' }
define MinQuantity: Quantity { value: minimum Decimal, unit: 'mm' }
define QuantityAddOverflow: MaxQuantity + 1.0 'mm'
define QuantityAddUnderflow: MinQuantity + (-1.0 'mm')
define QuantityAddNearOverflow: MaxQuantity + 0.0 'mm'
define QuantityAddNearUnderflow: MinQuantity + 0.0 'mm'
define QuantitySubtractOverflow: MaxQuantity - (-1 'mm')
define QuantitySubtractUnderflow: MinQuantity - 1 'mm'
define QuantitySubtractNearOverflow: MaxQuantity - 0.0 'mm'
define QuantitySubtractNearUnderflow: MinQuantity - 0.0 'mm'
define QuantityMultiplyOverflow: MaxQuantity * 2 'mm'
define QuantityMultiplyUnderflow: MinQuantity * 2 'mm'
define QuantityMultiplyNearOverflow: MaxQuantity * 1 'mm'
define QuantityMultiplyNearUnderflow: MinQuantity * 1 'mm'
define QuantityDivideOverflow: MaxQuantity / 0.5 'mm'
define QuantityDivideUnderflow: MinQuantity / 0.5 'mm'
define QuantityDivideNearOverflow: MaxQuantity / 1 'mm'
define QuantityDivideNearUnderflow: MinQuantity / 1 'mm'
define QuantityDivideByZero: 1.0 'mm' / 0 'mm'
define QuantitySuccessorOverflow: successor of MaxQuantity
define QuantityPredecessorUnderflow: predecessor of MinQuantity
define QuantitySuccessorNearOverflow: successor of Quantity { value: maximum Decimal - 0.00000001, unit: 'mm' }
define QuantityPredecessorNearUnderflow: predecessor of Quantity { value: minimum Decimal + 0.00000001, unit: 'mm' }

define DateTimeAddOverflow: maximum DateTime + 1 day
define DateTimeAddUnderflow: minimum DateTime + (-1 day)
define DateTimeAddNearOverflow: maximum DateTime + 0 days
define DateTimeAddNearUnderflow: minimum DateTime + 0 days
define DateTimeSubtractOverflow: maximum DateTime - (-1 day)
define DateTimeSubtractUnderflow: minimum DateTime - 1 day
define DateTimeSubtractNearOverflow: maximum DateTime - 0 days
define DateTimeSubtractNearUnderflow: minimum DateTime - 0 days
define DateTimeSuccessorOverflow: successor of maximum DateTime
define DateTimePredecessorUnderflow: predecessor of minimum DateTime
define DateTimeSuccessorNearOverflow: successor of (maximum DateTime - 1 millisecond)
define DateTimePredecessorNearUnderflow: predecessor of (minimum DateTime + 1 millisecond)

define DateAddOverflow: maximum Date + 1 day
define DateAddUnderflow: minimum Date + (-1 day)
define DateAddNearOverflow: maximum Date + 0 days
define DateAddNearUnderflow: minimum Date + 0 days
define DateSubtractOverflow: maximum Date - (-1 day)
define DateSubtractUnderflow: minimum Date - 1 day
define DateSubtractNearOverflow: maximum Date - 0 days
define DateSubtractNearUnderflow: minimum Date - 0 days
define DateSuccessorOverflow: successor of maximum Date
define DatePredecessorUnderflow: predecessor of minimum Date
define DateSuccessorNearOverflow: successor of (maximum Date - 1 day)
define DatePredecessorNearUnderflow: predecessor of (minimum Date + 1 day)

define TimeAddOverflow: maximum Time + 1 second
define TimeAddUnderflow: minimum Time + (-1 second)
define TimeAddNearOverflow: maximum Time + 0 seconds
define TimeAddNearUnderflow: minimum Time + 0 seconds
define TimeSubtractOverflow: maximum Time - (-1 second)
define TimeSubtractUnderflow: minimum Time - 1 second
define TimeSubtractNearOverflow: maximum Time - 0 seconds
define TimeSubtractNearUnderflow: minimum Time - 0 seconds
define TimeSuccessorOverflow: successor of maximum Time
define TimePredecessorUnderflow: predecessor of minimum Time
define TimeSuccessorNearOverflow: successor of (maximum Time - 1 millisecond)
define TimePredecessorNearUnderflow: predecessor of (minimum Time + 1 millisecond)

define ExpOverflow: Exp(maximum Decimal)
*/

module.exports['OutOfBounds'] = {
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
        "r" : "1509",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "IntegerAddOverflow", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "216",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "218",
                "value" : [ " + ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
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
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "IntegerAddUnderflow", ": " ]
            }, {
              "r" : "224",
              "s" : [ {
                "r" : "226",
                "s" : [ {
                  "value" : [ "minimum", " " ]
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
                  "value" : [ "-", "1" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "224",
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
            "type" : "MinValue",
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "IntegerAddNearOverflow", ": " ]
            }, {
              "r" : "235",
              "s" : [ {
                "r" : "237",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "236",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "238",
                "value" : [ " + ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "235",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "243",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "IntegerAddNearUnderflow", ": " ]
            }, {
              "r" : "244",
              "s" : [ {
                "r" : "246",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "245",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "247",
                "value" : [ " + ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "244",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "248",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "249",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "252",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "252",
            "s" : [ {
              "value" : [ "", "define ", "IntegerSubtractOverflow", ": " ]
            }, {
              "r" : "253",
              "s" : [ {
                "r" : "255",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "254",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "256",
                "s" : [ {
                  "r" : "257",
                  "value" : [ "-", "1" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "253",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "258",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "257",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "263",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "263",
            "s" : [ {
              "value" : [ "", "define ", "IntegerSubtractUnderflow", ": " ]
            }, {
              "r" : "264",
              "s" : [ {
                "r" : "266",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "265",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "267",
                "value" : [ " - ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "264",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "268",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "269",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "272",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "272",
            "s" : [ {
              "value" : [ "", "define ", "IntegerSubtractNearOverflow", ": " ]
            }, {
              "r" : "273",
              "s" : [ {
                "r" : "275",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "274",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "276",
                "value" : [ " - ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "273",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "277",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "278",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "276",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "281",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "281",
            "s" : [ {
              "value" : [ "", "define ", "IntegerSubtractNearUnderflow", ": " ]
            }, {
              "r" : "282",
              "s" : [ {
                "r" : "284",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "283",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "285",
                "value" : [ " - ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "282",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "286",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "287",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "284",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "285",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "290",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerMultiplyOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "290",
            "s" : [ {
              "value" : [ "", "define ", "IntegerMultiplyOverflow", ": " ]
            }, {
              "r" : "291",
              "s" : [ {
                "r" : "293",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "292",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "294",
                "value" : [ " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "291",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "295",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "296",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "299",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerMultiplyUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "299",
            "s" : [ {
              "value" : [ "", "define ", "IntegerMultiplyUnderflow", ": " ]
            }, {
              "r" : "300",
              "s" : [ {
                "r" : "302",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "301",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "303",
                "value" : [ " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "300",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "304",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "305",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "308",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerMultiplyNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "308",
            "s" : [ {
              "value" : [ "", "define ", "IntegerMultiplyNearOverflow", ": " ]
            }, {
              "r" : "309",
              "s" : [ {
                "r" : "311",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "310",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "312",
                "value" : [ " * ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "309",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "313",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "314",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "317",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerMultiplyNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "317",
            "s" : [ {
              "value" : [ "", "define ", "IntegerMultiplyNearUnderflow", ": " ]
            }, {
              "r" : "318",
              "s" : [ {
                "r" : "320",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "319",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "321",
                "value" : [ " * ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "318",
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
            "type" : "MinValue",
            "localId" : "320",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "326",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "IntegerDivideOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "326",
            "s" : [ {
              "value" : [ "", "define ", "IntegerDivideOverflow", ": " ]
            }, {
              "r" : "327",
              "s" : [ {
                "r" : "329",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "328",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "330",
                "value" : [ " / ", "0.5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "327",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "334",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "335",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "332",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "333",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MaxValue",
              "localId" : "329",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "330",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "338",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "IntegerDivideUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "338",
            "s" : [ {
              "value" : [ "", "define ", "IntegerDivideUnderflow", ": " ]
            }, {
              "r" : "339",
              "s" : [ {
                "r" : "341",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "340",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "342",
                "value" : [ " / ", "0.5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "339",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "346",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "347",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "344",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "345",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MinValue",
              "localId" : "341",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "342",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "350",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "IntegerDivideNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "350",
            "s" : [ {
              "value" : [ "", "define ", "IntegerDivideNearOverflow", ": " ]
            }, {
              "r" : "351",
              "s" : [ {
                "r" : "353",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "352",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "354",
                "value" : [ " / ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "351",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "361",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "362",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "356",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "357",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MaxValue",
              "localId" : "353",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "359",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "360",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "354",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "365",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "IntegerDivideNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "365",
            "s" : [ {
              "value" : [ "", "define ", "IntegerDivideNearUnderflow", ": " ]
            }, {
              "r" : "366",
              "s" : [ {
                "r" : "368",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "367",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "369",
                "value" : [ " / ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "366",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "376",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "377",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "371",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "372",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MinValue",
              "localId" : "368",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "374",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "375",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "369",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "380",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "IntegerDivideByZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "380",
            "s" : [ {
              "value" : [ "", "define ", "IntegerDivideByZero", ": " ]
            }, {
              "r" : "381",
              "s" : [ {
                "r" : "382",
                "value" : [ "1", " / ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "381",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "390",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "391",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "385",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "386",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "382",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "388",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "389",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "383",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "394",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPowerOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "394",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPowerOverflow", ": " ]
            }, {
              "r" : "395",
              "s" : [ {
                "r" : "397",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "397",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "396",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "398",
                "value" : [ "^", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "395",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "399",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "400",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "397",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "398",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "403",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPowerUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "403",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPowerUnderflow", ": " ]
            }, {
              "r" : "404",
              "s" : [ {
                "r" : "406",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "406",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "405",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "407",
                "value" : [ "^", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "404",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "408",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "409",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "406",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "407",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "412",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPowerNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "412",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPowerNearOverflow", ": " ]
            }, {
              "r" : "413",
              "s" : [ {
                "r" : "415",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "415",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "414",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "416",
                "value" : [ "^", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "413",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "417",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "418",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "416",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "421",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPowerNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "421",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPowerNearUnderflow", ": " ]
            }, {
              "r" : "422",
              "s" : [ {
                "r" : "424",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "424",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "423",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "425",
                "value" : [ "^", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "422",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "426",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "427",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "425",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "430",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "430",
            "s" : [ {
              "value" : [ "", "define ", "IntegerSuccessorOverflow", ": " ]
            }, {
              "r" : "433",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "432",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "431",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "433",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "434",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "432",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "437",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "437",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPredecessorUnderflow", ": " ]
            }, {
              "r" : "440",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "439",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "438",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "440",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "441",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "439",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "444",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "444",
            "s" : [ {
              "value" : [ "", "define ", "IntegerSuccessorNearOverflow", ": " ]
            }, {
              "r" : "451",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "445",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "445",
                  "s" : [ {
                    "r" : "447",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "446",
                      "s" : [ {
                        "value" : [ "Integer" ]
                      } ]
                    } ]
                  }, {
                    "r" : "448",
                    "value" : [ " - ", "1" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "451",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "452",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "445",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "449",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "450",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "447",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "448",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "455",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "455",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPredecessorNearUnderflow", ": " ]
            }, {
              "r" : "462",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "456",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "456",
                  "s" : [ {
                    "r" : "458",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "457",
                      "s" : [ {
                        "value" : [ "Integer" ]
                      } ]
                    } ]
                  }, {
                    "r" : "459",
                    "value" : [ " + ", "1" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "462",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "463",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "456",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "460",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "461",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "458",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "459",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "466",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "466",
            "s" : [ {
              "value" : [ "", "define ", "LongAddOverflow", ": " ]
            }, {
              "r" : "467",
              "s" : [ {
                "r" : "469",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "468",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "470",
                "value" : [ " + ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "467",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "471",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "472",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "469",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "470",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "475",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "475",
            "s" : [ {
              "value" : [ "", "define ", "LongAddUnderflow", ": " ]
            }, {
              "r" : "476",
              "s" : [ {
                "r" : "478",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "477",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "479",
                "s" : [ {
                  "r" : "480",
                  "value" : [ "-", "1L" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "476",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "482",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "483",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "478",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "479",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "481",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "480",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "486",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "486",
            "s" : [ {
              "value" : [ "", "define ", "LongAddNearOverflow", ": " ]
            }, {
              "r" : "487",
              "s" : [ {
                "r" : "489",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "488",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "490",
                "value" : [ " + ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "487",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "491",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "492",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "489",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "490",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "495",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "495",
            "s" : [ {
              "value" : [ "", "define ", "LongAddNearUnderflow", ": " ]
            }, {
              "r" : "496",
              "s" : [ {
                "r" : "498",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "497",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "499",
                "value" : [ " + ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "496",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "500",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "501",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "498",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "499",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "504",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "504",
            "s" : [ {
              "value" : [ "", "define ", "LongSubtractOverflow", ": " ]
            }, {
              "r" : "505",
              "s" : [ {
                "r" : "507",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "506",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "508",
                "s" : [ {
                  "r" : "509",
                  "value" : [ "-", "1L" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "505",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "511",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "512",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "507",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "508",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "510",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "509",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "515",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "515",
            "s" : [ {
              "value" : [ "", "define ", "LongSubtractUnderflow", ": " ]
            }, {
              "r" : "516",
              "s" : [ {
                "r" : "518",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "517",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "519",
                "value" : [ " - ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "516",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "520",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "521",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "518",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "519",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "524",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "524",
            "s" : [ {
              "value" : [ "", "define ", "LongSubtractNearOverflow", ": " ]
            }, {
              "r" : "525",
              "s" : [ {
                "r" : "527",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "526",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "528",
                "value" : [ " - ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "525",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "529",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "530",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "527",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "528",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "533",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "533",
            "s" : [ {
              "value" : [ "", "define ", "LongSubtractNearUnderflow", ": " ]
            }, {
              "r" : "534",
              "s" : [ {
                "r" : "536",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "535",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "537",
                "value" : [ " - ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "534",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "538",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "539",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "536",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "537",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "542",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongMultiplyOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "542",
            "s" : [ {
              "value" : [ "", "define ", "LongMultiplyOverflow", ": " ]
            }, {
              "r" : "543",
              "s" : [ {
                "r" : "545",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "544",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "546",
                "value" : [ " * ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "543",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "547",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "548",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "545",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "546",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "551",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongMultiplyUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "551",
            "s" : [ {
              "value" : [ "", "define ", "LongMultiplyUnderflow", ": " ]
            }, {
              "r" : "552",
              "s" : [ {
                "r" : "554",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "553",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "555",
                "value" : [ " * ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "552",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "556",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "557",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "554",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "555",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "560",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongMultiplyNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "560",
            "s" : [ {
              "value" : [ "", "define ", "LongMultiplyNearOverflow", ": " ]
            }, {
              "r" : "561",
              "s" : [ {
                "r" : "563",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "562",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "564",
                "value" : [ " * ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "561",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "565",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "566",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "563",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "564",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "569",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongMultiplyNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "569",
            "s" : [ {
              "value" : [ "", "define ", "LongMultiplyNearUnderflow", ": " ]
            }, {
              "r" : "570",
              "s" : [ {
                "r" : "572",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "571",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "573",
                "value" : [ " * ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "570",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "574",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "575",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "572",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "573",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "578",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "578",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideOverflow", ": " ]
            }, {
              "r" : "579",
              "s" : [ {
                "r" : "581",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "580",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "582",
                "value" : [ " / ", "0.5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "579",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "586",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "587",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "584",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "585",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MaxValue",
              "localId" : "581",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "582",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "590",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "590",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideUnderflow", ": " ]
            }, {
              "r" : "591",
              "s" : [ {
                "r" : "593",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "592",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "594",
                "value" : [ " / ", "0.5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "591",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "598",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "599",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "596",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "597",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MinValue",
              "localId" : "593",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "594",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "602",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "602",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideNearOverflow", ": " ]
            }, {
              "r" : "603",
              "s" : [ {
                "r" : "605",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "604",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "606",
                "value" : [ " / ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "603",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "613",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "614",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "608",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "609",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MaxValue",
              "localId" : "605",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "611",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "612",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "606",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "617",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "617",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideNearUnderflow", ": " ]
            }, {
              "r" : "618",
              "s" : [ {
                "r" : "620",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "619",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "621",
                "value" : [ " / ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "618",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "628",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "629",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "623",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "624",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MinValue",
              "localId" : "620",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "626",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "627",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "621",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "632",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideByZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "632",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideByZero", ": " ]
            }, {
              "r" : "633",
              "s" : [ {
                "r" : "634",
                "value" : [ "1L", " / ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "633",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "642",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "643",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "637",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "638",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "634",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "640",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "641",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "635",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "646",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPowerOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "646",
            "s" : [ {
              "value" : [ "", "define ", "LongPowerOverflow", ": " ]
            }, {
              "r" : "647",
              "s" : [ {
                "r" : "649",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "649",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "648",
                    "s" : [ {
                      "value" : [ "Long" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "650",
                "value" : [ "^", "3L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "647",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "651",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "652",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "649",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "650",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "655",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPowerUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "655",
            "s" : [ {
              "value" : [ "", "define ", "LongPowerUnderflow", ": " ]
            }, {
              "r" : "656",
              "s" : [ {
                "r" : "658",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "658",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "657",
                    "s" : [ {
                      "value" : [ "Long" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "659",
                "value" : [ "^", "3L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "656",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "660",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "661",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "658",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "659",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "664",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPowerNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "664",
            "s" : [ {
              "value" : [ "", "define ", "LongPowerNearOverflow", ": " ]
            }, {
              "r" : "665",
              "s" : [ {
                "r" : "667",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "667",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "666",
                    "s" : [ {
                      "value" : [ "Long" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "668",
                "value" : [ "^", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "665",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "669",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "670",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "667",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "668",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "673",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPowerNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "673",
            "s" : [ {
              "value" : [ "", "define ", "LongPowerNearUnderflow", ": " ]
            }, {
              "r" : "674",
              "s" : [ {
                "r" : "676",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "676",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "675",
                    "s" : [ {
                      "value" : [ "Long" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "677",
                "value" : [ "^", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "674",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "678",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "679",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "676",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "677",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "682",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "682",
            "s" : [ {
              "value" : [ "", "define ", "LongSuccessorOverflow", ": " ]
            }, {
              "r" : "685",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "684",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "683",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "685",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "686",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "684",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "689",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "689",
            "s" : [ {
              "value" : [ "", "define ", "LongPredecessorUnderflow", ": " ]
            }, {
              "r" : "692",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "691",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "690",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "692",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "693",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "691",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "696",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "696",
            "s" : [ {
              "value" : [ "", "define ", "LongSuccessorNearOverflow", ": " ]
            }, {
              "r" : "703",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "697",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "697",
                  "s" : [ {
                    "r" : "699",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "698",
                      "s" : [ {
                        "value" : [ "Long" ]
                      } ]
                    } ]
                  }, {
                    "r" : "700",
                    "value" : [ " - ", "1L" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "703",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "704",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "697",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "701",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "702",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "699",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "700",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "707",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "707",
            "s" : [ {
              "value" : [ "", "define ", "LongPredecessorNearUnderflow", ": " ]
            }, {
              "r" : "714",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "708",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "708",
                  "s" : [ {
                    "r" : "710",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "709",
                      "s" : [ {
                        "value" : [ "Long" ]
                      } ]
                    } ]
                  }, {
                    "r" : "711",
                    "value" : [ " + ", "1L" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "714",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "715",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "708",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "712",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "713",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "710",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "711",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "718",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "718",
            "s" : [ {
              "value" : [ "", "define ", "DecimalAddOverflow", ": " ]
            }, {
              "r" : "719",
              "s" : [ {
                "r" : "721",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "720",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "722",
                "value" : [ " + ", "1.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "719",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "723",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "724",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "721",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "722",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "1.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "727",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "727",
            "s" : [ {
              "value" : [ "", "define ", "DecimalAddUnderflow", ": " ]
            }, {
              "r" : "728",
              "s" : [ {
                "r" : "730",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "729",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "731",
                "s" : [ {
                  "r" : "732",
                  "value" : [ "-", "1.0" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "728",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "734",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "735",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "730",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "731",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "733",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "732",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "738",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "738",
            "s" : [ {
              "value" : [ "", "define ", "DecimalAddNearOverflow", ": " ]
            }, {
              "r" : "739",
              "s" : [ {
                "r" : "741",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "740",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "742",
                "value" : [ " + ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "739",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "743",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "744",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "741",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "742",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "747",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "747",
            "s" : [ {
              "value" : [ "", "define ", "DecimalAddNearUnderflow", ": " ]
            }, {
              "r" : "748",
              "s" : [ {
                "r" : "750",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "749",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "751",
                "value" : [ " + ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "748",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "752",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "753",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "750",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "751",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "756",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "756",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSubtractOverflow", ": " ]
            }, {
              "r" : "757",
              "s" : [ {
                "r" : "759",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "758",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "760",
                "s" : [ {
                  "r" : "761",
                  "value" : [ "-", "1.0" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "757",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "763",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "764",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "759",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "760",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "762",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "761",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "767",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "767",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSubtractUnderflow", ": " ]
            }, {
              "r" : "768",
              "s" : [ {
                "r" : "770",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "769",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "771",
                "value" : [ " - ", "1.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "768",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "772",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "773",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "770",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "771",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "1.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "776",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "776",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSubtractNearOverflow", ": " ]
            }, {
              "r" : "777",
              "s" : [ {
                "r" : "779",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "778",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "780",
                "value" : [ " - ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "777",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "781",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "782",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "779",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "780",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "785",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "785",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSubtractNearUnderflow", ": " ]
            }, {
              "r" : "786",
              "s" : [ {
                "r" : "788",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "787",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "789",
                "value" : [ " - ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "786",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "790",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "791",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "788",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "789",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "794",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMultiplyOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "794",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMultiplyOverflow", ": " ]
            }, {
              "r" : "795",
              "s" : [ {
                "r" : "797",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "796",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "798",
                "value" : [ " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "795",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "802",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "803",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "797",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "800",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "801",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "798",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "806",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMultiplyUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "806",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMultiplyUnderflow", ": " ]
            }, {
              "r" : "807",
              "s" : [ {
                "r" : "809",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "808",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "810",
                "value" : [ " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "807",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "814",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "815",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "809",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "812",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "813",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "810",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "818",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMultiplyNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "818",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMultiplyNearOverflow", ": " ]
            }, {
              "r" : "819",
              "s" : [ {
                "r" : "821",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "820",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "822",
                "value" : [ " * ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "819",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "826",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "827",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "821",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "824",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "825",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "822",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "830",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMultiplyNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "830",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMultiplyNearUnderflow", ": " ]
            }, {
              "r" : "831",
              "s" : [ {
                "r" : "833",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "832",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "834",
                "value" : [ " * ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "831",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "838",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "839",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "833",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "836",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "837",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "834",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "842",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "842",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideOverflow", ": " ]
            }, {
              "r" : "843",
              "s" : [ {
                "r" : "845",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "844",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "846",
                "value" : [ " / ", "0.5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "843",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "847",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "848",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "845",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "846",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "851",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "851",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideUnderflow", ": " ]
            }, {
              "r" : "852",
              "s" : [ {
                "r" : "854",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "853",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "855",
                "value" : [ " / ", "0.5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "852",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "856",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "857",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "854",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "855",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "860",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "860",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideNearOverflow", ": " ]
            }, {
              "r" : "861",
              "s" : [ {
                "r" : "863",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "862",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "864",
                "value" : [ " / ", "1.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "861",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "865",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "866",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "863",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "864",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "1.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "869",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "869",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideNearUnderflow", ": " ]
            }, {
              "r" : "870",
              "s" : [ {
                "r" : "872",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "871",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "873",
                "value" : [ " / ", "1.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "870",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "874",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "875",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "872",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "873",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "1.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "878",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideByZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "878",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideByZero", ": " ]
            }, {
              "r" : "879",
              "s" : [ {
                "r" : "880",
                "value" : [ "1.0", " / ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "879",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "885",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "886",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "880",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "1.0",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "883",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "884",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "881",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "889",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPowerOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "889",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPowerOverflow", ": " ]
            }, {
              "r" : "890",
              "s" : [ {
                "r" : "892",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "892",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "891",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "893",
                "value" : [ "^", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "890",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "897",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "898",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "892",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "895",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "896",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "893",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "901",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPowerUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "901",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPowerUnderflow", ": " ]
            }, {
              "r" : "902",
              "s" : [ {
                "r" : "904",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "904",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "903",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "905",
                "value" : [ "^", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "902",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "909",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "910",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "904",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "907",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "908",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "905",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "913",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPowerNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "913",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPowerNearOverflow", ": " ]
            }, {
              "r" : "914",
              "s" : [ {
                "r" : "916",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "916",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "915",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "917",
                "value" : [ "^", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "914",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "921",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "922",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "916",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "919",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "920",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "917",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "925",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPowerNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "925",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPowerNearUnderflow", ": " ]
            }, {
              "r" : "926",
              "s" : [ {
                "r" : "928",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "928",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "927",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "929",
                "value" : [ "^", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "926",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "933",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "934",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "928",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "931",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "932",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "929",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "937",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "937",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSuccessorOverflow", ": " ]
            }, {
              "r" : "940",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "939",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "938",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "940",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "941",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "939",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "944",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "944",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPredecessorUnderflow", ": " ]
            }, {
              "r" : "947",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "946",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "945",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "947",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "948",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "946",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "951",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "951",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSuccessorNearOverflow", ": " ]
            }, {
              "r" : "958",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "952",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "952",
                  "s" : [ {
                    "r" : "954",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "953",
                      "s" : [ {
                        "value" : [ "Decimal" ]
                      } ]
                    } ]
                  }, {
                    "r" : "955",
                    "value" : [ " - ", "0.00000001" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "958",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "959",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "952",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "956",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "957",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "954",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "955",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "0.00000001",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "962",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "962",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPredecessorNearUnderflow", ": " ]
            }, {
              "r" : "969",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "963",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "963",
                  "s" : [ {
                    "r" : "965",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "964",
                      "s" : [ {
                        "value" : [ "Decimal" ]
                      } ]
                    } ]
                  }, {
                    "r" : "966",
                    "value" : [ " + ", "0.00000001" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "969",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "970",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "963",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "967",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "968",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "965",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "966",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "0.00000001",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "973",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "MaxQuantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "973",
            "s" : [ {
              "value" : [ "", "define ", "MaxQuantity", ": " ]
            }, {
              "r" : "974",
              "s" : [ {
                "value" : [ "Quantity", " { " ]
              }, {
                "s" : [ {
                  "value" : [ "value", ": " ]
                }, {
                  "r" : "977",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "976",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "s" : [ {
                  "value" : [ "unit", ": " ]
                }, {
                  "r" : "978",
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
          "type" : "Instance",
          "localId" : "974",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "element" : [ {
            "name" : "value",
            "value" : {
              "type" : "MaxValue",
              "localId" : "977",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          }, {
            "name" : "unit",
            "value" : {
              "type" : "Literal",
              "localId" : "978",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "mm",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "982",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "MinQuantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "982",
            "s" : [ {
              "value" : [ "", "define ", "MinQuantity", ": " ]
            }, {
              "r" : "983",
              "s" : [ {
                "value" : [ "Quantity", " { " ]
              }, {
                "s" : [ {
                  "value" : [ "value", ": " ]
                }, {
                  "r" : "986",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "985",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "s" : [ {
                  "value" : [ "unit", ": " ]
                }, {
                  "r" : "987",
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
          "type" : "Instance",
          "localId" : "983",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "element" : [ {
            "name" : "value",
            "value" : {
              "type" : "MinValue",
              "localId" : "986",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          }, {
            "name" : "unit",
            "value" : {
              "type" : "Literal",
              "localId" : "987",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "mm",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "991",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "991",
            "s" : [ {
              "value" : [ "", "define ", "QuantityAddOverflow", ": " ]
            }, {
              "r" : "992",
              "s" : [ {
                "r" : "993",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "994",
                "s" : [ {
                  "value" : [ "1.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "992",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "995",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "996",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "993",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "994",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "999",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "999",
            "s" : [ {
              "value" : [ "", "define ", "QuantityAddUnderflow", ": " ]
            }, {
              "r" : "1000",
              "s" : [ {
                "r" : "1001",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1002",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1002",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1003",
                    "s" : [ {
                      "value" : [ "1.0 ", "'mm'" ]
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
          "type" : "Add",
          "localId" : "1000",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1005",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1006",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1001",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1002",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1004",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1003",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1.0,
              "unit" : "mm",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1009",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1009",
            "s" : [ {
              "value" : [ "", "define ", "QuantityAddNearOverflow", ": " ]
            }, {
              "r" : "1010",
              "s" : [ {
                "r" : "1011",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1012",
                "s" : [ {
                  "value" : [ "0.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1010",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1013",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1014",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1011",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1012",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1017",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1017",
            "s" : [ {
              "value" : [ "", "define ", "QuantityAddNearUnderflow", ": " ]
            }, {
              "r" : "1018",
              "s" : [ {
                "r" : "1019",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1020",
                "s" : [ {
                  "value" : [ "0.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1018",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1021",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1022",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1019",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1020",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1025",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1025",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySubtractOverflow", ": " ]
            }, {
              "r" : "1026",
              "s" : [ {
                "r" : "1027",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1028",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1028",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1029",
                    "s" : [ {
                      "value" : [ "1 ", "'mm'" ]
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
          "type" : "Subtract",
          "localId" : "1026",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1031",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1032",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1027",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1028",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1030",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1029",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mm",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1035",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1035",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySubtractUnderflow", ": " ]
            }, {
              "r" : "1036",
              "s" : [ {
                "r" : "1037",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1038",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1036",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1039",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1040",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1037",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1038",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1043",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1043",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySubtractNearOverflow", ": " ]
            }, {
              "r" : "1044",
              "s" : [ {
                "r" : "1045",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1046",
                "s" : [ {
                  "value" : [ "0.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1044",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1047",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1048",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1045",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1046",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1051",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1051",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySubtractNearUnderflow", ": " ]
            }, {
              "r" : "1052",
              "s" : [ {
                "r" : "1053",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1054",
                "s" : [ {
                  "value" : [ "0.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1052",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1055",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1056",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1053",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1054",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1059",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityMultiplyOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1059",
            "s" : [ {
              "value" : [ "", "define ", "QuantityMultiplyOverflow", ": " ]
            }, {
              "r" : "1060",
              "s" : [ {
                "r" : "1061",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "1062",
                "s" : [ {
                  "value" : [ "2 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "1060",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1063",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1064",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1061",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1062",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 2,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1067",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityMultiplyUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1067",
            "s" : [ {
              "value" : [ "", "define ", "QuantityMultiplyUnderflow", ": " ]
            }, {
              "r" : "1068",
              "s" : [ {
                "r" : "1069",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "1070",
                "s" : [ {
                  "value" : [ "2 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "1068",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1071",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1072",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1069",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1070",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 2,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1075",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityMultiplyNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1075",
            "s" : [ {
              "value" : [ "", "define ", "QuantityMultiplyNearOverflow", ": " ]
            }, {
              "r" : "1076",
              "s" : [ {
                "r" : "1077",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "1078",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "1076",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1079",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1080",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1077",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1078",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1083",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityMultiplyNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1083",
            "s" : [ {
              "value" : [ "", "define ", "QuantityMultiplyNearUnderflow", ": " ]
            }, {
              "r" : "1084",
              "s" : [ {
                "r" : "1085",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "1086",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "1084",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1087",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1088",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1085",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1086",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1091",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1091",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideOverflow", ": " ]
            }, {
              "r" : "1092",
              "s" : [ {
                "r" : "1093",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1094",
                "s" : [ {
                  "value" : [ "0.5 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1092",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1095",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1096",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1093",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1094",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.5,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1099",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1099",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideUnderflow", ": " ]
            }, {
              "r" : "1100",
              "s" : [ {
                "r" : "1101",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1102",
                "s" : [ {
                  "value" : [ "0.5 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1100",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1103",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1104",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1101",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1102",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.5,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1107",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1107",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideNearOverflow", ": " ]
            }, {
              "r" : "1108",
              "s" : [ {
                "r" : "1109",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1110",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1108",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1111",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1112",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1109",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1110",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1115",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1115",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideNearUnderflow", ": " ]
            }, {
              "r" : "1116",
              "s" : [ {
                "r" : "1117",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1118",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1116",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1119",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1120",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1117",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1118",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1123",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideByZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1123",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideByZero", ": " ]
            }, {
              "r" : "1124",
              "s" : [ {
                "r" : "1125",
                "s" : [ {
                  "value" : [ "1.0 ", "'mm'" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1126",
                "s" : [ {
                  "value" : [ "0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1124",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1127",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1128",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1125",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1.0,
            "unit" : "mm",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1126",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1131",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1131",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySuccessorOverflow", ": " ]
            }, {
              "r" : "1133",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1132",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "1133",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1134",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "1132",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1137",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityPredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1137",
            "s" : [ {
              "value" : [ "", "define ", "QuantityPredecessorUnderflow", ": " ]
            }, {
              "r" : "1139",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1138",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "1139",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1140",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "1138",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1143",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1143",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySuccessorNearOverflow", ": " ]
            }, {
              "r" : "1154",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1144",
                "s" : [ {
                  "value" : [ "Quantity", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "value", ": " ]
                  }, {
                    "r" : "1146",
                    "s" : [ {
                      "r" : "1148",
                      "s" : [ {
                        "value" : [ "maximum", " " ]
                      }, {
                        "r" : "1147",
                        "s" : [ {
                          "value" : [ "Decimal" ]
                        } ]
                      } ]
                    }, {
                      "r" : "1149",
                      "value" : [ " - ", "0.00000001" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "unit", ": " ]
                  }, {
                    "r" : "1152",
                    "s" : [ {
                      "value" : [ "'mm'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "1154",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1155",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Instance",
            "localId" : "1144",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "element" : [ {
              "name" : "value",
              "value" : {
                "type" : "Subtract",
                "localId" : "1146",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1150",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1151",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "MaxValue",
                  "localId" : "1148",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "1149",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.00000001",
                  "annotation" : [ ]
                } ]
              }
            }, {
              "name" : "unit",
              "value" : {
                "type" : "Literal",
                "localId" : "1152",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "mm",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1158",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityPredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1158",
            "s" : [ {
              "value" : [ "", "define ", "QuantityPredecessorNearUnderflow", ": " ]
            }, {
              "r" : "1169",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1159",
                "s" : [ {
                  "value" : [ "Quantity", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "value", ": " ]
                  }, {
                    "r" : "1161",
                    "s" : [ {
                      "r" : "1163",
                      "s" : [ {
                        "value" : [ "minimum", " " ]
                      }, {
                        "r" : "1162",
                        "s" : [ {
                          "value" : [ "Decimal" ]
                        } ]
                      } ]
                    }, {
                      "r" : "1164",
                      "value" : [ " + ", "0.00000001" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "unit", ": " ]
                  }, {
                    "r" : "1167",
                    "s" : [ {
                      "value" : [ "'mm'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "1169",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1170",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Instance",
            "localId" : "1159",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "element" : [ {
              "name" : "value",
              "value" : {
                "type" : "Add",
                "localId" : "1161",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1165",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1166",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "MinValue",
                  "localId" : "1163",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "1164",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.00000001",
                  "annotation" : [ ]
                } ]
              }
            }, {
              "name" : "unit",
              "value" : {
                "type" : "Literal",
                "localId" : "1167",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "mm",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1173",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1173",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAddOverflow", ": " ]
            }, {
              "r" : "1174",
              "s" : [ {
                "r" : "1176",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1175",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1177",
                "s" : [ {
                  "value" : [ "1 ", "day" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1174",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1178",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1179",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1176",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1177",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "day",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1182",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1182",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAddUnderflow", ": " ]
            }, {
              "r" : "1183",
              "s" : [ {
                "r" : "1185",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1184",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1186",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1186",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1187",
                    "s" : [ {
                      "value" : [ "1 ", "day" ]
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
          "type" : "Add",
          "localId" : "1183",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1189",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1190",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1185",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1186",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1188",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1187",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1193",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1193",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAddNearOverflow", ": " ]
            }, {
              "r" : "1194",
              "s" : [ {
                "r" : "1196",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1195",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1197",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1194",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1198",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1199",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1196",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1197",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1202",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1202",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAddNearUnderflow", ": " ]
            }, {
              "r" : "1203",
              "s" : [ {
                "r" : "1205",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1204",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1206",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1203",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1207",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1208",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1205",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1206",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1211",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSubtractOverflow", ": " ]
            }, {
              "r" : "1212",
              "s" : [ {
                "r" : "1214",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1213",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1215",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1215",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1216",
                    "s" : [ {
                      "value" : [ "1 ", "day" ]
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
          "type" : "Subtract",
          "localId" : "1212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1218",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1219",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1214",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1217",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1222",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSubtractUnderflow", ": " ]
            }, {
              "r" : "1223",
              "s" : [ {
                "r" : "1225",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1224",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1226",
                "s" : [ {
                  "value" : [ "1 ", "day" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1227",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1228",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "day",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1231",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1231",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSubtractNearOverflow", ": " ]
            }, {
              "r" : "1232",
              "s" : [ {
                "r" : "1234",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1233",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1235",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1232",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1236",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1237",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1240",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1240",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSubtractNearUnderflow", ": " ]
            }, {
              "r" : "1241",
              "s" : [ {
                "r" : "1243",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1242",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1244",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1241",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1245",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1246",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1249",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1249",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSuccessorOverflow", ": " ]
            }, {
              "r" : "1252",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1251",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1250",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "1252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1253",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "1251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimePredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1256",
            "s" : [ {
              "value" : [ "", "define ", "DateTimePredecessorUnderflow", ": " ]
            }, {
              "r" : "1259",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1258",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1257",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "1259",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1260",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "1258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1263",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1263",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSuccessorNearOverflow", ": " ]
            }, {
              "r" : "1270",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1264",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1264",
                  "s" : [ {
                    "r" : "1266",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "1265",
                      "s" : [ {
                        "value" : [ "DateTime" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " - " ]
                  }, {
                    "r" : "1267",
                    "s" : [ {
                      "value" : [ "1 ", "millisecond" ]
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
          "type" : "Successor",
          "localId" : "1270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1271",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "1264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1268",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1269",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "1266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "millisecond",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimePredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1274",
            "s" : [ {
              "value" : [ "", "define ", "DateTimePredecessorNearUnderflow", ": " ]
            }, {
              "r" : "1281",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1275",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1275",
                  "s" : [ {
                    "r" : "1277",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "1276",
                      "s" : [ {
                        "value" : [ "DateTime" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "1278",
                    "s" : [ {
                      "value" : [ "1 ", "millisecond" ]
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
          "type" : "Predecessor",
          "localId" : "1281",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1282",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "1275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1279",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1280",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "1277",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1278",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "millisecond",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1285",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1285",
            "s" : [ {
              "value" : [ "", "define ", "DateAddOverflow", ": " ]
            }, {
              "r" : "1286",
              "s" : [ {
                "r" : "1288",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1287",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1289",
                "s" : [ {
                  "value" : [ "1 ", "day" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1286",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1290",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1291",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "day",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1294",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1294",
            "s" : [ {
              "value" : [ "", "define ", "DateAddUnderflow", ": " ]
            }, {
              "r" : "1295",
              "s" : [ {
                "r" : "1297",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1296",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1298",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1298",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1299",
                    "s" : [ {
                      "value" : [ "1 ", "day" ]
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
          "type" : "Add",
          "localId" : "1295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1301",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1302",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1298",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1300",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1299",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1305",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1305",
            "s" : [ {
              "value" : [ "", "define ", "DateAddNearOverflow", ": " ]
            }, {
              "r" : "1306",
              "s" : [ {
                "r" : "1308",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1307",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1309",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1306",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1310",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1311",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1308",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1314",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1314",
            "s" : [ {
              "value" : [ "", "define ", "DateAddNearUnderflow", ": " ]
            }, {
              "r" : "1315",
              "s" : [ {
                "r" : "1317",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1316",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1318",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1315",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1319",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1320",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1317",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1318",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1323",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1323",
            "s" : [ {
              "value" : [ "", "define ", "DateSubtractOverflow", ": " ]
            }, {
              "r" : "1324",
              "s" : [ {
                "r" : "1326",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1325",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1327",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1327",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1328",
                    "s" : [ {
                      "value" : [ "1 ", "day" ]
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
          "type" : "Subtract",
          "localId" : "1324",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1330",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1331",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1327",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1329",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1328",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1334",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1334",
            "s" : [ {
              "value" : [ "", "define ", "DateSubtractUnderflow", ": " ]
            }, {
              "r" : "1335",
              "s" : [ {
                "r" : "1337",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1336",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1338",
                "s" : [ {
                  "value" : [ "1 ", "day" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1335",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1339",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1340",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1337",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1338",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "day",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1343",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1343",
            "s" : [ {
              "value" : [ "", "define ", "DateSubtractNearOverflow", ": " ]
            }, {
              "r" : "1344",
              "s" : [ {
                "r" : "1346",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1345",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1347",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1344",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1348",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1349",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1346",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1347",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1352",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1352",
            "s" : [ {
              "value" : [ "", "define ", "DateSubtractNearUnderflow", ": " ]
            }, {
              "r" : "1353",
              "s" : [ {
                "r" : "1355",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1354",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1356",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1353",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1357",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1358",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1356",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1361",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1361",
            "s" : [ {
              "value" : [ "", "define ", "DateSuccessorOverflow", ": " ]
            }, {
              "r" : "1364",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1363",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1362",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "1364",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1365",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "1363",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1368",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DatePredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1368",
            "s" : [ {
              "value" : [ "", "define ", "DatePredecessorUnderflow", ": " ]
            }, {
              "r" : "1371",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1370",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1369",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "1371",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1372",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "1370",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1375",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1375",
            "s" : [ {
              "value" : [ "", "define ", "DateSuccessorNearOverflow", ": " ]
            }, {
              "r" : "1382",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1376",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1376",
                  "s" : [ {
                    "r" : "1378",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "1377",
                      "s" : [ {
                        "value" : [ "Date" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " - " ]
                  }, {
                    "r" : "1379",
                    "s" : [ {
                      "value" : [ "1 ", "day" ]
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
          "type" : "Successor",
          "localId" : "1382",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1383",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "1376",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1380",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1381",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "1378",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "valueType" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1379",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1386",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DatePredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1386",
            "s" : [ {
              "value" : [ "", "define ", "DatePredecessorNearUnderflow", ": " ]
            }, {
              "r" : "1393",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1387",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1387",
                  "s" : [ {
                    "r" : "1389",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "1388",
                      "s" : [ {
                        "value" : [ "Date" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "1390",
                    "s" : [ {
                      "value" : [ "1 ", "day" ]
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
          "type" : "Predecessor",
          "localId" : "1393",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1394",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "1387",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1391",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1392",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "1389",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "valueType" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1390",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1397",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1397",
            "s" : [ {
              "value" : [ "", "define ", "TimeAddOverflow", ": " ]
            }, {
              "r" : "1398",
              "s" : [ {
                "r" : "1400",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1399",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1401",
                "s" : [ {
                  "value" : [ "1 ", "second" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1398",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1402",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1403",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1400",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1401",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "second",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1406",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1406",
            "s" : [ {
              "value" : [ "", "define ", "TimeAddUnderflow", ": " ]
            }, {
              "r" : "1407",
              "s" : [ {
                "r" : "1409",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1408",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1410",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1410",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1411",
                    "s" : [ {
                      "value" : [ "1 ", "second" ]
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
          "type" : "Add",
          "localId" : "1407",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1413",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1414",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1409",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1410",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1412",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1411",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "second",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1417",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1417",
            "s" : [ {
              "value" : [ "", "define ", "TimeAddNearOverflow", ": " ]
            }, {
              "r" : "1418",
              "s" : [ {
                "r" : "1420",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1419",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1421",
                "s" : [ {
                  "value" : [ "0 ", "seconds" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1418",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1422",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1423",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1420",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1421",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "seconds",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1426",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1426",
            "s" : [ {
              "value" : [ "", "define ", "TimeAddNearUnderflow", ": " ]
            }, {
              "r" : "1427",
              "s" : [ {
                "r" : "1429",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1428",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1430",
                "s" : [ {
                  "value" : [ "0 ", "seconds" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1427",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1431",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1432",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1429",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1430",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "seconds",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1435",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1435",
            "s" : [ {
              "value" : [ "", "define ", "TimeSubtractOverflow", ": " ]
            }, {
              "r" : "1436",
              "s" : [ {
                "r" : "1438",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1437",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1439",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1439",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1440",
                    "s" : [ {
                      "value" : [ "1 ", "second" ]
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
          "type" : "Subtract",
          "localId" : "1436",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1442",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1443",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1438",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1439",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1441",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1440",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "second",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1446",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1446",
            "s" : [ {
              "value" : [ "", "define ", "TimeSubtractUnderflow", ": " ]
            }, {
              "r" : "1447",
              "s" : [ {
                "r" : "1449",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1448",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1450",
                "s" : [ {
                  "value" : [ "1 ", "second" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1447",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1451",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1452",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1449",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1450",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "second",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1455",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1455",
            "s" : [ {
              "value" : [ "", "define ", "TimeSubtractNearOverflow", ": " ]
            }, {
              "r" : "1456",
              "s" : [ {
                "r" : "1458",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1457",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1459",
                "s" : [ {
                  "value" : [ "0 ", "seconds" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1456",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1460",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1461",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1458",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1459",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "seconds",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1464",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1464",
            "s" : [ {
              "value" : [ "", "define ", "TimeSubtractNearUnderflow", ": " ]
            }, {
              "r" : "1465",
              "s" : [ {
                "r" : "1467",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1466",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1468",
                "s" : [ {
                  "value" : [ "0 ", "seconds" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1465",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1469",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1470",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1467",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1468",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "seconds",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1473",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1473",
            "s" : [ {
              "value" : [ "", "define ", "TimeSuccessorOverflow", ": " ]
            }, {
              "r" : "1476",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1475",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1474",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "1476",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1477",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "1475",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1480",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimePredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1480",
            "s" : [ {
              "value" : [ "", "define ", "TimePredecessorUnderflow", ": " ]
            }, {
              "r" : "1483",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1482",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1481",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
          "localId" : "1483",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1484",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "1482",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1487",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1487",
            "s" : [ {
              "value" : [ "", "define ", "TimeSuccessorNearOverflow", ": " ]
            }, {
              "r" : "1494",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1488",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1488",
                  "s" : [ {
                    "r" : "1490",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "1489",
                      "s" : [ {
                        "value" : [ "Time" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " - " ]
                  }, {
                    "r" : "1491",
                    "s" : [ {
                      "value" : [ "1 ", "millisecond" ]
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
          "type" : "Successor",
          "localId" : "1494",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1495",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "1488",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1492",
              "name" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1493",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "1490",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "valueType" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1491",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "millisecond",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1498",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimePredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1498",
            "s" : [ {
              "value" : [ "", "define ", "TimePredecessorNearUnderflow", ": " ]
            }, {
              "r" : "1505",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1499",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1499",
                  "s" : [ {
                    "r" : "1501",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "1500",
                      "s" : [ {
                        "value" : [ "Time" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "1502",
                    "s" : [ {
                      "value" : [ "1 ", "millisecond" ]
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
          "type" : "Predecessor",
          "localId" : "1505",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1506",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "1499",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1503",
              "name" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1504",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "1501",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "valueType" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1502",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "millisecond",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1509",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "ExpOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1509",
            "s" : [ {
              "value" : [ "", "define ", "ExpOverflow", ": " ]
            }, {
              "r" : "1515",
              "s" : [ {
                "value" : [ "Exp", "(" ]
              }, {
                "r" : "1511",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1510",
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
          "type" : "Exp",
          "localId" : "1515",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1516",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "1511",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

