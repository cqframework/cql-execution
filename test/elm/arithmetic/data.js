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
define OnePlusTwoMixed: 1 + 2L
define OnePlusTwoReverseMixed: 1L + 2
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
        "r" : "379",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "OnePlusTwoMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "OnePlusTwoMixed", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "value" : [ "1", " + ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "287",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "293",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "294",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToLong",
            "localId" : "291",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "292",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "297",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "OnePlusTwoReverseMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "297",
            "s" : [ {
              "value" : [ "", "define ", "OnePlusTwoReverseMixed", ": " ]
            }, {
              "r" : "298",
              "s" : [ {
                "r" : "299",
                "value" : [ "1L", " + ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "298",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "304",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "305",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "ToLong",
            "localId" : "302",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "303",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "300",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "308",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "AddTime",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "308",
            "s" : [ {
              "value" : [ "", "define ", "AddTime", ": " ]
            }, {
              "r" : "309",
              "s" : [ {
                "r" : "314",
                "s" : [ {
                  "r" : "310",
                  "value" : [ "Time", "(", "12", ")" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "316",
                "s" : [ {
                  "value" : [ "1 ", "'hour'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "309",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "317",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "318",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Time",
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "315",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "hour" : {
              "type" : "Literal",
              "localId" : "310",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "Quantity",
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "hour",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "321",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintyZeroToTwelve",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "321",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintyZeroToTwelve", ": " ]
            }, {
              "r" : "322",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "r" : "323",
                  "value" : [ "DateTime", "(", "2005", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "336",
                "s" : [ {
                  "r" : "332",
                  "value" : [ "DateTime", "(", "2006", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "322",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "338",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "339",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "330",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "331",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "323",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "324",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "337",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "332",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "342",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintySixToEighteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "342",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintySixToEighteen", ": " ]
            }, {
              "r" : "343",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "348",
                "s" : [ {
                  "r" : "344",
                  "value" : [ "DateTime", "(", "2005", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "356",
                "s" : [ {
                  "r" : "350",
                  "value" : [ "DateTime", "(", "2006", ", ", "7", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "343",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "359",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "360",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "348",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "349",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "344",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "356",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "357",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "358",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "351",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "7",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "363",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AddUncertainties",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "363",
            "s" : [ {
              "value" : [ "", "define ", "AddUncertainties", ": " ]
            }, {
              "r" : "364",
              "s" : [ {
                "r" : "365",
                "s" : [ {
                  "value" : [ "UncertaintyZeroToTwelve" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "366",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "364",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "365",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "371",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AddUncertaintyAndNumber",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "371",
            "s" : [ {
              "value" : [ "", "define ", "AddUncertaintyAndNumber", ": " ]
            }, {
              "r" : "372",
              "s" : [ {
                "r" : "373",
                "s" : [ {
                  "value" : [ "UncertaintyZeroToTwelve" ]
                } ]
              }, {
                "r" : "374",
                "value" : [ " + ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "372",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "375",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "376",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "373",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "374",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "379",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AddNumberAndUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "379",
            "s" : [ {
              "value" : [ "", "define ", "AddNumberAndUncertainty", ": " ]
            }, {
              "r" : "380",
              "s" : [ {
                "r" : "381",
                "value" : [ "10", " + " ]
              }, {
                "r" : "382",
                "s" : [ {
                  "value" : [ "UncertaintyZeroToTwelve" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "380",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "383",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "384",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "381",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "382",
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
define FiveMinusTwoMixed: 5 - 2L
define FiveMinusTwoReverseMixed: 5L - 2
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
        "r" : "342",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "FiveMinusTwoMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "FiveMinusTwoMixed", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "r" : "264",
                "value" : [ "5", " - ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "269",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "270",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToLong",
            "localId" : "267",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "268",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "264",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "273",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "FiveMinusTwoReverseMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "273",
            "s" : [ {
              "value" : [ "", "define ", "FiveMinusTwoReverseMixed", ": " ]
            }, {
              "r" : "274",
              "s" : [ {
                "r" : "275",
                "value" : [ "5L", " - ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "274",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "281",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "ToLong",
            "localId" : "278",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "279",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "284",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintyZeroToTwelve",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "284",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintyZeroToTwelve", ": " ]
            }, {
              "r" : "285",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "292",
                "s" : [ {
                  "r" : "286",
                  "value" : [ "DateTime", "(", "2005", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "299",
                "s" : [ {
                  "r" : "295",
                  "value" : [ "DateTime", "(", "2006", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "285",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "301",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "302",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "293",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "286",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "287",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "300",
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
            }
          } ]
        }
      }, {
        "localId" : "305",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintySixToEighteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "305",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintySixToEighteen", ": " ]
            }, {
              "r" : "306",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "311",
                "s" : [ {
                  "r" : "307",
                  "value" : [ "DateTime", "(", "2005", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "319",
                "s" : [ {
                  "r" : "313",
                  "value" : [ "DateTime", "(", "2006", ", ", "7", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "306",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "323",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "312",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "307",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
            "year" : {
              "type" : "Literal",
              "localId" : "313",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "314",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "7",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "326",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "SubtractUncertainties",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "326",
            "s" : [ {
              "value" : [ "", "define ", "SubtractUncertainties", ": " ]
            }, {
              "r" : "327",
              "s" : [ {
                "r" : "328",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "UncertaintyZeroToTwelve" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "327",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "330",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "331",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyZeroToTwelve",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "334",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "SubtractNumberFromUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "334",
            "s" : [ {
              "value" : [ "", "define ", "SubtractNumberFromUncertainty", ": " ]
            }, {
              "r" : "335",
              "s" : [ {
                "r" : "336",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              }, {
                "r" : "337",
                "value" : [ " - ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "335",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "338",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "339",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "337",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "342",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "SubtractUncertaintyFromNumber",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "342",
            "s" : [ {
              "value" : [ "", "define ", "SubtractUncertaintyFromNumber", ": " ]
            }, {
              "r" : "343",
              "s" : [ {
                "r" : "344",
                "value" : [ "10", " - " ]
              }, {
                "r" : "345",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "343",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "346",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "347",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "344",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "345",
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
define FiveTimesTwoLong: 5L * 2L
define FiveTimesTwoMixed: 5 * 2L
define FiveTimesTwoReverseMixed: 5L * 2
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
        "r" : "346",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
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
                "value" : [ "5L", " * ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "259",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "263",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "266",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "FiveTimesTwoMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "266",
            "s" : [ {
              "value" : [ "", "define ", "FiveTimesTwoMixed", ": " ]
            }, {
              "r" : "267",
              "s" : [ {
                "r" : "268",
                "value" : [ "5", " * ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "267",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "273",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToLong",
            "localId" : "271",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "272",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "277",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "FiveTimesTwoReverseMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "277",
            "s" : [ {
              "value" : [ "", "define ", "FiveTimesTwoReverseMixed", ": " ]
            }, {
              "r" : "278",
              "s" : [ {
                "r" : "279",
                "value" : [ "5L", " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "278",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "285",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "ToLong",
            "localId" : "282",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "283",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "280",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "288",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintyTwoToFourteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "288",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintyTwoToFourteen", ": " ]
            }, {
              "r" : "289",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "296",
                "s" : [ {
                  "r" : "290",
                  "value" : [ "DateTime", "(", "2005", ", ", "10", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "303",
                "s" : [ {
                  "r" : "299",
                  "value" : [ "DateTime", "(", "2006", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "289",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "305",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "306",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "297",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "298",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "290",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "304",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "299",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "309",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintySixToEighteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "309",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintySixToEighteen", ": " ]
            }, {
              "r" : "310",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "315",
                "s" : [ {
                  "r" : "311",
                  "value" : [ "DateTime", "(", "2005", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "323",
                "s" : [ {
                  "r" : "317",
                  "value" : [ "DateTime", "(", "2006", ", ", "7", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "310",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "326",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "327",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "315",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "316",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
            "year" : {
              "type" : "Literal",
              "localId" : "317",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "318",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "7",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "330",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "MultiplyUncertainties",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "330",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyUncertainties", ": " ]
            }, {
              "r" : "331",
              "s" : [ {
                "r" : "332",
                "s" : [ {
                  "value" : [ "UncertaintyTwoToFourteen" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "333",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "331",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "334",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "335",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "332",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "338",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "MultiplyUncertaintyAndNumber",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "338",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyUncertaintyAndNumber", ": " ]
            }, {
              "r" : "339",
              "s" : [ {
                "r" : "340",
                "s" : [ {
                  "value" : [ "UncertaintyTwoToFourteen" ]
                } ]
              }, {
                "r" : "341",
                "value" : [ " * ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "339",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "340",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintyTwoToFourteen",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "346",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "MultiplyNumberAndUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "346",
            "s" : [ {
              "value" : [ "", "define ", "MultiplyNumberAndUncertainty", ": " ]
            }, {
              "r" : "347",
              "s" : [ {
                "r" : "348",
                "value" : [ "10", " * " ]
              }, {
                "r" : "349",
                "s" : [ {
                  "value" : [ "UncertaintyTwoToFourteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "347",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "350",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "351",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "348",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "349",
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
define TenDividedByTwoLong: 10L / 2L
define TenDividedByTwoMixed: 10 / 2L
define TenDividedByTwoReverseMixed: 10L / 2
define TenDividedByFourLong: 10L / 4L
define TenDividedByFourMixed: 10 / 4L
define TenDividedByFourReverseMixed: 10L / 4
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
        "r" : "446",
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
                "value" : [ "10L", " / ", "2L" ]
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
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
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
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "295",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "306",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "TenDividedByTwoMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "306",
            "s" : [ {
              "value" : [ "", "define ", "TenDividedByTwoMixed", ": " ]
            }, {
              "r" : "307",
              "s" : [ {
                "r" : "308",
                "value" : [ "10", " / ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "307",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "316",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "317",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "311",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "312",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "308",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "314",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "315",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "309",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "320",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "TenDividedByTwoReverseMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "320",
            "s" : [ {
              "value" : [ "", "define ", "TenDividedByTwoReverseMixed", ": " ]
            }, {
              "r" : "321",
              "s" : [ {
                "r" : "322",
                "value" : [ "10L", " / ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "321",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "330",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "331",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "325",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "326",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "322",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "328",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "329",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "323",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "334",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "TenDividedByFourLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "334",
            "s" : [ {
              "value" : [ "", "define ", "TenDividedByFourLong", ": " ]
            }, {
              "r" : "335",
              "s" : [ {
                "r" : "336",
                "value" : [ "10L", " / ", "4L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "335",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "344",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "345",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "339",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "340",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "336",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "342",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "343",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "337",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "4",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "348",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "TenDividedByFourMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "348",
            "s" : [ {
              "value" : [ "", "define ", "TenDividedByFourMixed", ": " ]
            }, {
              "r" : "349",
              "s" : [ {
                "r" : "350",
                "value" : [ "10", " / ", "4L" ]
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
              "type" : "Literal",
              "localId" : "350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "356",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "357",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "351",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "4",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "362",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "TenDividedByFourReverseMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "362",
            "s" : [ {
              "value" : [ "", "define ", "TenDividedByFourReverseMixed", ": " ]
            }, {
              "r" : "363",
              "s" : [ {
                "r" : "364",
                "value" : [ "10L", " / ", "4" ]
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
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "364",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
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
              "value" : "4",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "376",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintyTwoToFourteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "376",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintyTwoToFourteen", ": " ]
            }, {
              "r" : "377",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "384",
                "s" : [ {
                  "r" : "378",
                  "value" : [ "DateTime", "(", "2005", ", ", "10", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "391",
                "s" : [ {
                  "r" : "387",
                  "value" : [ "DateTime", "(", "2006", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "377",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "393",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "394",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "384",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "385",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "386",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "378",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "379",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "391",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "392",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "387",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "397",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "UncertaintySixToEighteen",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "397",
            "s" : [ {
              "value" : [ "", "define ", "UncertaintySixToEighteen", ": " ]
            }, {
              "r" : "398",
              "s" : [ {
                "value" : [ "months between " ]
              }, {
                "r" : "403",
                "s" : [ {
                  "r" : "399",
                  "value" : [ "DateTime", "(", "2005", ")" ]
                } ]
              }, {
                "value" : [ " and " ]
              }, {
                "r" : "411",
                "s" : [ {
                  "r" : "405",
                  "value" : [ "DateTime", "(", "2006", ", ", "7", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "DurationBetween",
          "localId" : "398",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "414",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "415",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "403",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "404",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "399",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2005",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "411",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "412",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "413",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "405",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2006",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "406",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "7",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "418",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DivideUncertainties",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "418",
            "s" : [ {
              "value" : [ "", "define ", "DivideUncertainties", ": " ]
            }, {
              "r" : "419",
              "s" : [ {
                "r" : "420",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "421",
                "s" : [ {
                  "value" : [ "UncertaintyTwoToFourteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "419",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "428",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "429",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "423",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "424",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "420",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "UncertaintySixToEighteen",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "426",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "427",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "421",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "UncertaintyTwoToFourteen",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "432",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DivideUncertaintyByNumber",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "432",
            "s" : [ {
              "value" : [ "", "define ", "DivideUncertaintyByNumber", ": " ]
            }, {
              "r" : "433",
              "s" : [ {
                "r" : "434",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              }, {
                "r" : "435",
                "value" : [ " / ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "433",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "442",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "443",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "437",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "438",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "434",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "UncertaintySixToEighteen",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "440",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "441",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "435",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "446",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DivideNumberByUncertainty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "446",
            "s" : [ {
              "value" : [ "", "define ", "DivideNumberByUncertainty", ": " ]
            }, {
              "r" : "447",
              "s" : [ {
                "r" : "448",
                "value" : [ "36", " / " ]
              }, {
                "r" : "449",
                "s" : [ {
                  "value" : [ "UncertaintySixToEighteen" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "447",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "456",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "457",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "451",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "452",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "448",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "36",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "454",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "455",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "449",
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
define NegateMinInteger: -(minimum Integer)
define NegativeOneLong: -1L
define NegateMinLong: -(minimum Long)
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
        "r" : "233",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NegateMinInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "NegateMinInteger", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "-" ]
              }, {
                "r" : "223",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "223",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "222",
                    "s" : [ {
                      "value" : [ "Integer" ]
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
          "type" : "Negate",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "227",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "NegativeOneLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "227",
            "s" : [ {
              "value" : [ "", "define ", "NegativeOneLong", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "r" : "229",
                "value" : [ "-", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Negate",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "233",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "NegateMinLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "233",
            "s" : [ {
              "value" : [ "", "define ", "NegateMinLong", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "-" ]
              }, {
                "r" : "236",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "236",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "235",
                    "s" : [ {
                      "value" : [ "Long" ]
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
          "type" : "Negate",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "237",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
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
define NegPow: 10 ^ -1
define ThreeExpFourLong: 3L ^ 4L
define ThreeExpFourMixed: 3 ^ 4L
define ThreeExpFourReverseMixed: 3L ^ 4
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
        "r" : "251",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NegPow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "NegPow", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "10", " ^ " ]
              }, {
                "r" : "225",
                "s" : [ {
                  "r" : "226",
                  "value" : [ "-", "1" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "228",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "229",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "227",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "226",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeExpFourLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "ThreeExpFourLong", ": " ]
            }, {
              "r" : "233",
              "s" : [ {
                "r" : "234",
                "value" : [ "3L", " ^ ", "4L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "233",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "236",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "237",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "240",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeExpFourMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "240",
            "s" : [ {
              "value" : [ "", "define ", "ThreeExpFourMixed", ": " ]
            }, {
              "r" : "241",
              "s" : [ {
                "r" : "242",
                "value" : [ "3", " ^ ", "4L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "241",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "248",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToLong",
            "localId" : "245",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "246",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "242",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "251",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeExpFourReverseMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "251",
            "s" : [ {
              "value" : [ "", "define ", "ThreeExpFourReverseMixed", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "r" : "253",
                "value" : [ "3L", " ^ ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "252",
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
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "ToLong",
            "localId" : "256",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "257",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "254",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }
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
define TenDivThreeMixed: 10 div 3L
define TenDivThreeReverseMixed: 10L div 3
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
        "r" : "249",
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
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "TenDivThreeMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "TenDivThreeMixed", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "value" : [ "10", " div ", "3L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "TruncatedDivide",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "245",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "246",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToLong",
            "localId" : "243",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "244",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "249",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "TenDivThreeReverseMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "249",
            "s" : [ {
              "value" : [ "", "define ", "TenDivThreeReverseMixed", ": " ]
            }, {
              "r" : "250",
              "s" : [ {
                "r" : "251",
                "value" : [ "10L", " div ", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "TruncatedDivide",
          "localId" : "250",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "256",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "257",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "10",
            "annotation" : [ ]
          }, {
            "type" : "ToLong",
            "localId" : "254",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "255",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "252",
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

/* Modulo
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Mod: 3 mod 2
define ThreeModZero: 3 mod 0
define ThreeModTwoLong: 3L mod 2L
define ThreeModTwoMixed: 3 mod 2L
define ThreeModTwoReverseMixed: 3L mod 2
define ThreeModZeroLong: 3L mod 0L
define ThreeModZeroDecimal: 3.0 mod 0.0
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
        "r" : "268",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ThreeModZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "ThreeModZero", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "3", " mod ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Modulo",
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
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeModTwoLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "ThreeModTwoLong", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "3L", " mod ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Modulo",
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
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeModTwoMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "ThreeModTwoMixed", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "value" : [ "3", " mod ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Modulo",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "245",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "246",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToLong",
            "localId" : "243",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "244",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "249",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeModTwoReverseMixed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "249",
            "s" : [ {
              "value" : [ "", "define ", "ThreeModTwoReverseMixed", ": " ]
            }, {
              "r" : "250",
              "s" : [ {
                "r" : "251",
                "value" : [ "3L", " mod ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Modulo",
          "localId" : "250",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "256",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "257",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "ToLong",
            "localId" : "254",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "255",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "252",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "260",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "ThreeModZeroLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "260",
            "s" : [ {
              "value" : [ "", "define ", "ThreeModZeroLong", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "r" : "262",
                "value" : [ "3L", " mod ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Modulo",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "264",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "265",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "263",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "268",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "ThreeModZeroDecimal",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "268",
            "s" : [ {
              "value" : [ "", "define ", "ThreeModZeroDecimal", ": " ]
            }, {
              "r" : "269",
              "s" : [ {
                "r" : "270",
                "value" : [ "3.0", " mod ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Modulo",
          "localId" : "269",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "272",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "273",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "3.0",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
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
define AbsMinInteger: Abs(minimum Integer)
define AbsNegTenLong: Abs(-10L)
define AbsMinLong: Abs(minimum Long)
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
        "r" : "264",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AbsMinInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "AbsMinInteger", ": " ]
            }, {
              "r" : "249",
              "s" : [ {
                "value" : [ "Abs", "(" ]
              }, {
                "r" : "245",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "244",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Abs",
          "localId" : "249",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "253",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "AbsNegTenLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "253",
            "s" : [ {
              "value" : [ "", "define ", "AbsNegTenLong", ": " ]
            }, {
              "r" : "260",
              "s" : [ {
                "value" : [ "Abs", "(" ]
              }, {
                "r" : "254",
                "s" : [ {
                  "r" : "255",
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
          "localId" : "260",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "261",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Negate",
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "256",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "264",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "AbsMinLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "264",
            "s" : [ {
              "value" : [ "", "define ", "AbsMinLong", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "value" : [ "Abs", "(" ]
              }, {
                "r" : "266",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "265",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Abs",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
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
// NOTE: Integer division results in decimal, so it must overflow/underflow decimal
define IntegerDivideOverflow: maximum Integer / 0.00000000001
define IntegerDivideUnderflow: minimum Integer / 0.00000000001
define IntegerDivideNearOverflow: maximum Integer / 0.00000025
define IntegerDivideNearUnderflow: minimum Integer / 0.00000025
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
// NOTE: Long division results in decimal, so it must overflow/underflow decimal
define LongDivideOverflow: maximum Long / 0.05
define LongDivideUnderflow: minimum Long / 0.05
define LongDivideNearOverflow: maximum Long / 1024L
define LongDivideNearUnderflow: minimum Long / 1024L
define LongDivideByZero: 1L / 0L
define LongPowerOverflow: (maximum Long)^3L
define LongPowerUnderflow: (minimum Long)^3L
define LongPowerNearOverflow: (maximum Long)^1L
define LongPowerNearUnderflow: (minimum Long)^1L
define LongSuccessorOverflow: successor of maximum Long
define LongPredecessorUnderflow: predecessor of minimum Long
define LongSuccessorNearOverflow: successor of (maximum Long - 1L)
define LongPredecessorNearUnderflow: predecessor of (minimum Long + 1L)

// NOTE: Due to JS Number imprecision, we need to exceed min/max by 10000 for it to actually produce a different number
define DecimalAddOverflow: maximum Decimal + 10000.0
define DecimalAddUnderflow: minimum Decimal + -10000.0
define DecimalAddNearOverflow: maximum Decimal + 0.0
define DecimalAddNearUnderflow: minimum Decimal + 0.0
define DecimalSubtractOverflow: maximum Decimal - -10000.0
define DecimalSubtractUnderflow: minimum Decimal - 10000.0
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
// NOTE: Due to JS Number imprecision, we need to exceed min/max by 10000 for it to actually produce a different number
define QuantityAddOverflow: MaxQuantity + 10000.0 'mm'
define QuantityAddUnderflow: MinQuantity + (-10000.0 'mm')
define QuantityAddNearOverflow: MaxQuantity + 0.0 'mm'
define QuantityAddNearUnderflow: MinQuantity + 0.0 'mm'
define QuantitySubtractOverflow: MaxQuantity - (-10000 'mm')
define QuantitySubtractUnderflow: MinQuantity - 10000 'mm'
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
        "r" : "1503",
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
              "value" : [ "// NOTE: Integer division results in decimal, so it must overflow/underflow decimal\n", "define ", "IntegerDivideOverflow", ": " ]
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
                "value" : [ " / ", "0.00000000001" ]
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
            "value" : "0.00000000001",
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
                "value" : [ " / ", "0.00000000001" ]
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
            "value" : "0.00000000001",
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
                "value" : [ " / ", "0.00000025" ]
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
            "type" : "Literal",
            "localId" : "354",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.00000025",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "362",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "IntegerDivideNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "362",
            "s" : [ {
              "value" : [ "", "define ", "IntegerDivideNearUnderflow", ": " ]
            }, {
              "r" : "363",
              "s" : [ {
                "r" : "365",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "364",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                } ]
              }, {
                "r" : "366",
                "value" : [ " / ", "0.00000025" ]
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
            "localId" : "370",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "371",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "368",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "369",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MinValue",
              "localId" : "365",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.00000025",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "374",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "IntegerDivideByZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "374",
            "s" : [ {
              "value" : [ "", "define ", "IntegerDivideByZero", ": " ]
            }, {
              "r" : "375",
              "s" : [ {
                "r" : "376",
                "value" : [ "1", " / ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "375",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "384",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "385",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "379",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "380",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "376",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "382",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "383",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "377",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "388",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPowerOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "388",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPowerOverflow", ": " ]
            }, {
              "r" : "389",
              "s" : [ {
                "r" : "391",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "391",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "390",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "392",
                "value" : [ "^", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "389",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "393",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "394",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "391",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "392",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "397",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPowerUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "397",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPowerUnderflow", ": " ]
            }, {
              "r" : "398",
              "s" : [ {
                "r" : "400",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "400",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "399",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "401",
                "value" : [ "^", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "398",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "402",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "403",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "400",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "401",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "406",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPowerNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "406",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPowerNearOverflow", ": " ]
            }, {
              "r" : "407",
              "s" : [ {
                "r" : "409",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "409",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "408",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "410",
                "value" : [ "^", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "407",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "411",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "412",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "409",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "410",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "415",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPowerNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "415",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPowerNearUnderflow", ": " ]
            }, {
              "r" : "416",
              "s" : [ {
                "r" : "418",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "418",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "417",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "419",
                "value" : [ "^", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "416",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "420",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "421",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "418",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "419",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "424",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "424",
            "s" : [ {
              "value" : [ "", "define ", "IntegerSuccessorOverflow", ": " ]
            }, {
              "r" : "427",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "426",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "425",
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
          "localId" : "427",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "428",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "426",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "431",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "431",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPredecessorUnderflow", ": " ]
            }, {
              "r" : "434",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "433",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "432",
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
          "localId" : "434",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "435",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "433",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "438",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "438",
            "s" : [ {
              "value" : [ "", "define ", "IntegerSuccessorNearOverflow", ": " ]
            }, {
              "r" : "445",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "439",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "439",
                  "s" : [ {
                    "r" : "441",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "440",
                      "s" : [ {
                        "value" : [ "Integer" ]
                      } ]
                    } ]
                  }, {
                    "r" : "442",
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
          "localId" : "445",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "446",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "439",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "443",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "444",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "441",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "442",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "449",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerPredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "449",
            "s" : [ {
              "value" : [ "", "define ", "IntegerPredecessorNearUnderflow", ": " ]
            }, {
              "r" : "456",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "450",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "450",
                  "s" : [ {
                    "r" : "452",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "451",
                      "s" : [ {
                        "value" : [ "Integer" ]
                      } ]
                    } ]
                  }, {
                    "r" : "453",
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
          "localId" : "456",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "457",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "450",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "454",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "455",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "452",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "453",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "460",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "460",
            "s" : [ {
              "value" : [ "", "define ", "LongAddOverflow", ": " ]
            }, {
              "r" : "461",
              "s" : [ {
                "r" : "463",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "462",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "464",
                "value" : [ " + ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "461",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "465",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "466",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "463",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "464",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "469",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "469",
            "s" : [ {
              "value" : [ "", "define ", "LongAddUnderflow", ": " ]
            }, {
              "r" : "470",
              "s" : [ {
                "r" : "472",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "471",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "473",
                "s" : [ {
                  "r" : "474",
                  "value" : [ "-", "1L" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "470",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "476",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "477",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "472",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "473",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "475",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "474",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "480",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "480",
            "s" : [ {
              "value" : [ "", "define ", "LongAddNearOverflow", ": " ]
            }, {
              "r" : "481",
              "s" : [ {
                "r" : "483",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "482",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "484",
                "value" : [ " + ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "481",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "485",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "486",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "483",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "484",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "489",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "489",
            "s" : [ {
              "value" : [ "", "define ", "LongAddNearUnderflow", ": " ]
            }, {
              "r" : "490",
              "s" : [ {
                "r" : "492",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "491",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "493",
                "value" : [ " + ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "490",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "494",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "495",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "492",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "493",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "498",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "498",
            "s" : [ {
              "value" : [ "", "define ", "LongSubtractOverflow", ": " ]
            }, {
              "r" : "499",
              "s" : [ {
                "r" : "501",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "500",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "502",
                "s" : [ {
                  "r" : "503",
                  "value" : [ "-", "1L" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "499",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "505",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "506",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "501",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "502",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "504",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "503",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "509",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "509",
            "s" : [ {
              "value" : [ "", "define ", "LongSubtractUnderflow", ": " ]
            }, {
              "r" : "510",
              "s" : [ {
                "r" : "512",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "511",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "513",
                "value" : [ " - ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "510",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "514",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "515",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "512",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "513",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "518",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "518",
            "s" : [ {
              "value" : [ "", "define ", "LongSubtractNearOverflow", ": " ]
            }, {
              "r" : "519",
              "s" : [ {
                "r" : "521",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "520",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "522",
                "value" : [ " - ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "519",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "523",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "524",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "521",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "522",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "527",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "527",
            "s" : [ {
              "value" : [ "", "define ", "LongSubtractNearUnderflow", ": " ]
            }, {
              "r" : "528",
              "s" : [ {
                "r" : "530",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "529",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "531",
                "value" : [ " - ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "528",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "532",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "533",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "530",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "531",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "536",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongMultiplyOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "536",
            "s" : [ {
              "value" : [ "", "define ", "LongMultiplyOverflow", ": " ]
            }, {
              "r" : "537",
              "s" : [ {
                "r" : "539",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "538",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "540",
                "value" : [ " * ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "537",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "541",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "542",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "539",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "540",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "545",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongMultiplyUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "545",
            "s" : [ {
              "value" : [ "", "define ", "LongMultiplyUnderflow", ": " ]
            }, {
              "r" : "546",
              "s" : [ {
                "r" : "548",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "547",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "549",
                "value" : [ " * ", "2L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "546",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "550",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "551",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "548",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "549",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "554",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongMultiplyNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "554",
            "s" : [ {
              "value" : [ "", "define ", "LongMultiplyNearOverflow", ": " ]
            }, {
              "r" : "555",
              "s" : [ {
                "r" : "557",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "556",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "558",
                "value" : [ " * ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "555",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "559",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "560",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "557",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "558",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "563",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongMultiplyNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "563",
            "s" : [ {
              "value" : [ "", "define ", "LongMultiplyNearUnderflow", ": " ]
            }, {
              "r" : "564",
              "s" : [ {
                "r" : "566",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "565",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "567",
                "value" : [ " * ", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "564",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "568",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "569",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "566",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "567",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "572",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "572",
            "s" : [ {
              "value" : [ "// NOTE: Long division results in decimal, so it must overflow/underflow decimal\n", "define ", "LongDivideOverflow", ": " ]
            }, {
              "r" : "573",
              "s" : [ {
                "r" : "575",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "574",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "576",
                "value" : [ " / ", "0.05" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "573",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "580",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "581",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "578",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "579",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MaxValue",
              "localId" : "575",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "576",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.05",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "584",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "584",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideUnderflow", ": " ]
            }, {
              "r" : "585",
              "s" : [ {
                "r" : "587",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "586",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "588",
                "value" : [ " / ", "0.05" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "585",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "592",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "593",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "590",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "591",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MinValue",
              "localId" : "587",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "588",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.05",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "596",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "596",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideNearOverflow", ": " ]
            }, {
              "r" : "597",
              "s" : [ {
                "r" : "599",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "598",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "600",
                "value" : [ " / ", "1024L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "597",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "607",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "608",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "602",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "603",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MaxValue",
              "localId" : "599",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "605",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "606",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "600",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1024",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "611",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "611",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideNearUnderflow", ": " ]
            }, {
              "r" : "612",
              "s" : [ {
                "r" : "614",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "613",
                  "s" : [ {
                    "value" : [ "Long" ]
                  } ]
                } ]
              }, {
                "r" : "615",
                "value" : [ " / ", "1024L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "612",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "622",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "623",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "617",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "618",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "MinValue",
              "localId" : "614",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "620",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "621",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "615",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1024",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "626",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "LongDivideByZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "626",
            "s" : [ {
              "value" : [ "", "define ", "LongDivideByZero", ": " ]
            }, {
              "r" : "627",
              "s" : [ {
                "r" : "628",
                "value" : [ "1L", " / ", "0L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "627",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "636",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "637",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDecimal",
            "localId" : "631",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "632",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "628",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDecimal",
            "localId" : "634",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "635",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "629",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "640",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPowerOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "640",
            "s" : [ {
              "value" : [ "", "define ", "LongPowerOverflow", ": " ]
            }, {
              "r" : "641",
              "s" : [ {
                "r" : "643",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "643",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "642",
                    "s" : [ {
                      "value" : [ "Long" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "644",
                "value" : [ "^", "3L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "641",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "645",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "646",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "643",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "644",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "649",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPowerUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "649",
            "s" : [ {
              "value" : [ "", "define ", "LongPowerUnderflow", ": " ]
            }, {
              "r" : "650",
              "s" : [ {
                "r" : "652",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "652",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "651",
                    "s" : [ {
                      "value" : [ "Long" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "653",
                "value" : [ "^", "3L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "650",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "654",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "655",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "652",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "653",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "658",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPowerNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "658",
            "s" : [ {
              "value" : [ "", "define ", "LongPowerNearOverflow", ": " ]
            }, {
              "r" : "659",
              "s" : [ {
                "r" : "661",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "661",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "660",
                    "s" : [ {
                      "value" : [ "Long" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "662",
                "value" : [ "^", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "659",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "663",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "664",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "661",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "662",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "667",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPowerNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "667",
            "s" : [ {
              "value" : [ "", "define ", "LongPowerNearUnderflow", ": " ]
            }, {
              "r" : "668",
              "s" : [ {
                "r" : "670",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "670",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "669",
                    "s" : [ {
                      "value" : [ "Long" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "671",
                "value" : [ "^", "1L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "668",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "672",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "673",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "670",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "671",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "676",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "676",
            "s" : [ {
              "value" : [ "", "define ", "LongSuccessorOverflow", ": " ]
            }, {
              "r" : "679",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "678",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "677",
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
          "localId" : "679",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "680",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "678",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "683",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "683",
            "s" : [ {
              "value" : [ "", "define ", "LongPredecessorUnderflow", ": " ]
            }, {
              "r" : "686",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "685",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "684",
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
          "localId" : "686",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "687",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "685",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "690",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "690",
            "s" : [ {
              "value" : [ "", "define ", "LongSuccessorNearOverflow", ": " ]
            }, {
              "r" : "697",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "691",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "691",
                  "s" : [ {
                    "r" : "693",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "692",
                      "s" : [ {
                        "value" : [ "Long" ]
                      } ]
                    } ]
                  }, {
                    "r" : "694",
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
          "localId" : "697",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "698",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "691",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "695",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "696",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "693",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "694",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "701",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
        "name" : "LongPredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "701",
            "s" : [ {
              "value" : [ "", "define ", "LongPredecessorNearUnderflow", ": " ]
            }, {
              "r" : "708",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "702",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "702",
                  "s" : [ {
                    "r" : "704",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "703",
                      "s" : [ {
                        "value" : [ "Long" ]
                      } ]
                    } ]
                  }, {
                    "r" : "705",
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
          "localId" : "708",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "709",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "702",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "706",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "707",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "704",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "705",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "712",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "712",
            "s" : [ {
              "value" : [ "// NOTE: Due to JS Number imprecision, we need to exceed min/max by 10000 for it to actually produce a different number\n", "define ", "DecimalAddOverflow", ": " ]
            }, {
              "r" : "713",
              "s" : [ {
                "r" : "715",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "714",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "716",
                "value" : [ " + ", "10000.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "713",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "717",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "718",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "715",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "716",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "10000.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "721",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "721",
            "s" : [ {
              "value" : [ "", "define ", "DecimalAddUnderflow", ": " ]
            }, {
              "r" : "722",
              "s" : [ {
                "r" : "724",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "723",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "725",
                "s" : [ {
                  "r" : "726",
                  "value" : [ "-", "10000.0" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "722",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "728",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "729",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "724",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "725",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "727",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "726",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "10000.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "732",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "732",
            "s" : [ {
              "value" : [ "", "define ", "DecimalAddNearOverflow", ": " ]
            }, {
              "r" : "733",
              "s" : [ {
                "r" : "735",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "734",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "736",
                "value" : [ " + ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "733",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "737",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "738",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "735",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "736",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "741",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "741",
            "s" : [ {
              "value" : [ "", "define ", "DecimalAddNearUnderflow", ": " ]
            }, {
              "r" : "742",
              "s" : [ {
                "r" : "744",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "743",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "745",
                "value" : [ " + ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "742",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "746",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "747",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "744",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "745",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "750",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "750",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSubtractOverflow", ": " ]
            }, {
              "r" : "751",
              "s" : [ {
                "r" : "753",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "752",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "754",
                "s" : [ {
                  "r" : "755",
                  "value" : [ "-", "10000.0" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "751",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "757",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "758",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "753",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "754",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "756",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "755",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "10000.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "761",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "761",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSubtractUnderflow", ": " ]
            }, {
              "r" : "762",
              "s" : [ {
                "r" : "764",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "763",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "765",
                "value" : [ " - ", "10000.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "762",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "766",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "767",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "764",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "765",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "10000.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "770",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "770",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSubtractNearOverflow", ": " ]
            }, {
              "r" : "771",
              "s" : [ {
                "r" : "773",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "772",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "774",
                "value" : [ " - ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "771",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "775",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "776",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "773",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "774",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "779",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "779",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSubtractNearUnderflow", ": " ]
            }, {
              "r" : "780",
              "s" : [ {
                "r" : "782",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "781",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "783",
                "value" : [ " - ", "0.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "780",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "784",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "785",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "782",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "783",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "788",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMultiplyOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "788",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMultiplyOverflow", ": " ]
            }, {
              "r" : "789",
              "s" : [ {
                "r" : "791",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "790",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "792",
                "value" : [ " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "789",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "796",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "797",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "791",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "794",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "795",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "792",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "800",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMultiplyUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "800",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMultiplyUnderflow", ": " ]
            }, {
              "r" : "801",
              "s" : [ {
                "r" : "803",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "802",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "804",
                "value" : [ " * ", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "801",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "808",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "809",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "803",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "806",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "807",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "804",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "812",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMultiplyNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "812",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMultiplyNearOverflow", ": " ]
            }, {
              "r" : "813",
              "s" : [ {
                "r" : "815",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "814",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "816",
                "value" : [ " * ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "813",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "820",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "821",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "815",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "818",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "819",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "816",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "824",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMultiplyNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "824",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMultiplyNearUnderflow", ": " ]
            }, {
              "r" : "825",
              "s" : [ {
                "r" : "827",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "826",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "828",
                "value" : [ " * ", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "825",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "832",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "833",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "827",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "830",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "831",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "828",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "836",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "836",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideOverflow", ": " ]
            }, {
              "r" : "837",
              "s" : [ {
                "r" : "839",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "838",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "840",
                "value" : [ " / ", "0.5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "837",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "841",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "842",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "839",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "840",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "845",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "845",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideUnderflow", ": " ]
            }, {
              "r" : "846",
              "s" : [ {
                "r" : "848",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "847",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "849",
                "value" : [ " / ", "0.5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "846",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "850",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "851",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "848",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "849",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "0.5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "854",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "854",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideNearOverflow", ": " ]
            }, {
              "r" : "855",
              "s" : [ {
                "r" : "857",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "856",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "858",
                "value" : [ " / ", "1.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "855",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "859",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "860",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "857",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "858",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "1.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "863",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "863",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideNearUnderflow", ": " ]
            }, {
              "r" : "864",
              "s" : [ {
                "r" : "866",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "865",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                } ]
              }, {
                "r" : "867",
                "value" : [ " / ", "1.0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "864",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "868",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "869",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "866",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "867",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "1.0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "872",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalDivideByZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "872",
            "s" : [ {
              "value" : [ "", "define ", "DecimalDivideByZero", ": " ]
            }, {
              "r" : "873",
              "s" : [ {
                "r" : "874",
                "value" : [ "1.0", " / ", "0" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "873",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "879",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "880",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "874",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "1.0",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "877",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "878",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "875",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "883",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPowerOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "883",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPowerOverflow", ": " ]
            }, {
              "r" : "884",
              "s" : [ {
                "r" : "886",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "886",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "885",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "887",
                "value" : [ "^", "2" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "884",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "891",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "892",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "886",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "889",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "890",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "887",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "895",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPowerUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "895",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPowerUnderflow", ": " ]
            }, {
              "r" : "896",
              "s" : [ {
                "r" : "898",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "898",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "897",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "899",
                "value" : [ "^", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "896",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "903",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "904",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "898",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "901",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "902",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "899",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "907",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPowerNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "907",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPowerNearOverflow", ": " ]
            }, {
              "r" : "908",
              "s" : [ {
                "r" : "910",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "910",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "909",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "911",
                "value" : [ "^", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "908",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "915",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "916",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "910",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "913",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "914",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "911",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "919",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPowerNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "919",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPowerNearUnderflow", ": " ]
            }, {
              "r" : "920",
              "s" : [ {
                "r" : "922",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "922",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "921",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "923",
                "value" : [ "^", "1" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Power",
          "localId" : "920",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "927",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "928",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "922",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "ToDecimal",
            "localId" : "925",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "926",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "923",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "931",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "931",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSuccessorOverflow", ": " ]
            }, {
              "r" : "934",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "933",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "932",
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
          "localId" : "934",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "935",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "933",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "938",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "938",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPredecessorUnderflow", ": " ]
            }, {
              "r" : "941",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "940",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "939",
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
          "localId" : "941",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "942",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "940",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "945",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "945",
            "s" : [ {
              "value" : [ "", "define ", "DecimalSuccessorNearOverflow", ": " ]
            }, {
              "r" : "952",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "946",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "946",
                  "s" : [ {
                    "r" : "948",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "947",
                      "s" : [ {
                        "value" : [ "Decimal" ]
                      } ]
                    } ]
                  }, {
                    "r" : "949",
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
          "localId" : "952",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "953",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "946",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "950",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "951",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "948",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "949",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "0.00000001",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "956",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalPredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "956",
            "s" : [ {
              "value" : [ "", "define ", "DecimalPredecessorNearUnderflow", ": " ]
            }, {
              "r" : "963",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "957",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "957",
                  "s" : [ {
                    "r" : "959",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "958",
                      "s" : [ {
                        "value" : [ "Decimal" ]
                      } ]
                    } ]
                  }, {
                    "r" : "960",
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
          "localId" : "963",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "964",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "957",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "961",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "962",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "959",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "960",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "0.00000001",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "967",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "MaxQuantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "967",
            "s" : [ {
              "value" : [ "", "define ", "MaxQuantity", ": " ]
            }, {
              "r" : "968",
              "s" : [ {
                "value" : [ "Quantity", " { " ]
              }, {
                "s" : [ {
                  "value" : [ "value", ": " ]
                }, {
                  "r" : "971",
                  "s" : [ {
                    "value" : [ "maximum", " " ]
                  }, {
                    "r" : "970",
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
                  "r" : "972",
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
          "localId" : "968",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "element" : [ {
            "name" : "value",
            "value" : {
              "type" : "MaxValue",
              "localId" : "971",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          }, {
            "name" : "unit",
            "value" : {
              "type" : "Literal",
              "localId" : "972",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "mm",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "976",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "MinQuantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "976",
            "s" : [ {
              "value" : [ "", "define ", "MinQuantity", ": " ]
            }, {
              "r" : "977",
              "s" : [ {
                "value" : [ "Quantity", " { " ]
              }, {
                "s" : [ {
                  "value" : [ "value", ": " ]
                }, {
                  "r" : "980",
                  "s" : [ {
                    "value" : [ "minimum", " " ]
                  }, {
                    "r" : "979",
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
                  "r" : "981",
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
          "localId" : "977",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "element" : [ {
            "name" : "value",
            "value" : {
              "type" : "MinValue",
              "localId" : "980",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          }, {
            "name" : "unit",
            "value" : {
              "type" : "Literal",
              "localId" : "981",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "mm",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "985",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "985",
            "s" : [ {
              "value" : [ "// NOTE: Due to JS Number imprecision, we need to exceed min/max by 10000 for it to actually produce a different number\n", "define ", "QuantityAddOverflow", ": " ]
            }, {
              "r" : "986",
              "s" : [ {
                "r" : "987",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "988",
                "s" : [ {
                  "value" : [ "10000.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "986",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "989",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "990",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "987",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "988",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 10000.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "993",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "993",
            "s" : [ {
              "value" : [ "", "define ", "QuantityAddUnderflow", ": " ]
            }, {
              "r" : "994",
              "s" : [ {
                "r" : "995",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "996",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "996",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "997",
                    "s" : [ {
                      "value" : [ "10000.0 ", "'mm'" ]
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
          "localId" : "994",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "999",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1000",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "995",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "996",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "998",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "997",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10000.0,
              "unit" : "mm",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1003",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1003",
            "s" : [ {
              "value" : [ "", "define ", "QuantityAddNearOverflow", ": " ]
            }, {
              "r" : "1004",
              "s" : [ {
                "r" : "1005",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1006",
                "s" : [ {
                  "value" : [ "0.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1004",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1007",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1008",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1005",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1006",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1011",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1011",
            "s" : [ {
              "value" : [ "", "define ", "QuantityAddNearUnderflow", ": " ]
            }, {
              "r" : "1012",
              "s" : [ {
                "r" : "1013",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1014",
                "s" : [ {
                  "value" : [ "0.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1012",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1015",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1016",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1013",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1014",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1019",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1019",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySubtractOverflow", ": " ]
            }, {
              "r" : "1020",
              "s" : [ {
                "r" : "1021",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1022",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1022",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1023",
                    "s" : [ {
                      "value" : [ "10000 ", "'mm'" ]
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
          "localId" : "1020",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1025",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1026",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1021",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1022",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1024",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1023",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10000,
              "unit" : "mm",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1029",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1029",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySubtractUnderflow", ": " ]
            }, {
              "r" : "1030",
              "s" : [ {
                "r" : "1031",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1032",
                "s" : [ {
                  "value" : [ "10000 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1030",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1033",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1034",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1031",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1032",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 10000,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1037",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1037",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySubtractNearOverflow", ": " ]
            }, {
              "r" : "1038",
              "s" : [ {
                "r" : "1039",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1040",
                "s" : [ {
                  "value" : [ "0.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1038",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1041",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1042",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1039",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1040",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1045",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1045",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySubtractNearUnderflow", ": " ]
            }, {
              "r" : "1046",
              "s" : [ {
                "r" : "1047",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1048",
                "s" : [ {
                  "value" : [ "0.0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1046",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1049",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1050",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1047",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1048",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1053",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityMultiplyOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1053",
            "s" : [ {
              "value" : [ "", "define ", "QuantityMultiplyOverflow", ": " ]
            }, {
              "r" : "1054",
              "s" : [ {
                "r" : "1055",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "1056",
                "s" : [ {
                  "value" : [ "2 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "1054",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1057",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1058",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1055",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1056",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 2,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1061",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityMultiplyUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1061",
            "s" : [ {
              "value" : [ "", "define ", "QuantityMultiplyUnderflow", ": " ]
            }, {
              "r" : "1062",
              "s" : [ {
                "r" : "1063",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "1064",
                "s" : [ {
                  "value" : [ "2 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "1062",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1065",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1066",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1063",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1064",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 2,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1069",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityMultiplyNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1069",
            "s" : [ {
              "value" : [ "", "define ", "QuantityMultiplyNearOverflow", ": " ]
            }, {
              "r" : "1070",
              "s" : [ {
                "r" : "1071",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "1072",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "1070",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1073",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1074",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1071",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1072",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1077",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityMultiplyNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1077",
            "s" : [ {
              "value" : [ "", "define ", "QuantityMultiplyNearUnderflow", ": " ]
            }, {
              "r" : "1078",
              "s" : [ {
                "r" : "1079",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " * " ]
              }, {
                "r" : "1080",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Multiply",
          "localId" : "1078",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1081",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1082",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1079",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1080",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1085",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1085",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideOverflow", ": " ]
            }, {
              "r" : "1086",
              "s" : [ {
                "r" : "1087",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1088",
                "s" : [ {
                  "value" : [ "0.5 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1086",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1089",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1090",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1087",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1088",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.5,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1093",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1093",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideUnderflow", ": " ]
            }, {
              "r" : "1094",
              "s" : [ {
                "r" : "1095",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1096",
                "s" : [ {
                  "value" : [ "0.5 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1094",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1097",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1098",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1095",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1096",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0.5,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1101",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1101",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideNearOverflow", ": " ]
            }, {
              "r" : "1102",
              "s" : [ {
                "r" : "1103",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1104",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1102",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1105",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1106",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1103",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1104",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1109",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1109",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideNearUnderflow", ": " ]
            }, {
              "r" : "1110",
              "s" : [ {
                "r" : "1111",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1112",
                "s" : [ {
                  "value" : [ "1 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1110",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1113",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1114",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "1111",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinQuantity",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1112",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1117",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityDivideByZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1117",
            "s" : [ {
              "value" : [ "", "define ", "QuantityDivideByZero", ": " ]
            }, {
              "r" : "1118",
              "s" : [ {
                "r" : "1119",
                "s" : [ {
                  "value" : [ "1.0 ", "'mm'" ]
                } ]
              }, {
                "value" : [ " / " ]
              }, {
                "r" : "1120",
                "s" : [ {
                  "value" : [ "0 ", "'mm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Divide",
          "localId" : "1118",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1121",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1122",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1119",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1.0,
            "unit" : "mm",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1120",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "mm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1125",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1125",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySuccessorOverflow", ": " ]
            }, {
              "r" : "1127",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1126",
                "s" : [ {
                  "value" : [ "MaxQuantity" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Successor",
          "localId" : "1127",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1128",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "1126",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxQuantity",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1131",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityPredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1131",
            "s" : [ {
              "value" : [ "", "define ", "QuantityPredecessorUnderflow", ": " ]
            }, {
              "r" : "1133",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1132",
                "s" : [ {
                  "value" : [ "MinQuantity" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Predecessor",
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
            "name" : "MinQuantity",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1137",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantitySuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1137",
            "s" : [ {
              "value" : [ "", "define ", "QuantitySuccessorNearOverflow", ": " ]
            }, {
              "r" : "1148",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1138",
                "s" : [ {
                  "value" : [ "Quantity", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "value", ": " ]
                  }, {
                    "r" : "1140",
                    "s" : [ {
                      "r" : "1142",
                      "s" : [ {
                        "value" : [ "maximum", " " ]
                      }, {
                        "r" : "1141",
                        "s" : [ {
                          "value" : [ "Decimal" ]
                        } ]
                      } ]
                    }, {
                      "r" : "1143",
                      "value" : [ " - ", "0.00000001" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "unit", ": " ]
                  }, {
                    "r" : "1146",
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
          "localId" : "1148",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1149",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Instance",
            "localId" : "1138",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "element" : [ {
              "name" : "value",
              "value" : {
                "type" : "Subtract",
                "localId" : "1140",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1144",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1145",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "MaxValue",
                  "localId" : "1142",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "1143",
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
                "localId" : "1146",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "mm",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1152",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityPredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1152",
            "s" : [ {
              "value" : [ "", "define ", "QuantityPredecessorNearUnderflow", ": " ]
            }, {
              "r" : "1163",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1153",
                "s" : [ {
                  "value" : [ "Quantity", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "value", ": " ]
                  }, {
                    "r" : "1155",
                    "s" : [ {
                      "r" : "1157",
                      "s" : [ {
                        "value" : [ "minimum", " " ]
                      }, {
                        "r" : "1156",
                        "s" : [ {
                          "value" : [ "Decimal" ]
                        } ]
                      } ]
                    }, {
                      "r" : "1158",
                      "value" : [ " + ", "0.00000001" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "unit", ": " ]
                  }, {
                    "r" : "1161",
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
          "localId" : "1163",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1164",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Instance",
            "localId" : "1153",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "element" : [ {
              "name" : "value",
              "value" : {
                "type" : "Add",
                "localId" : "1155",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1159",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1160",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "MinValue",
                  "localId" : "1157",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "1158",
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
                "localId" : "1161",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "mm",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1167",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1167",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAddOverflow", ": " ]
            }, {
              "r" : "1168",
              "s" : [ {
                "r" : "1170",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1169",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1171",
                "s" : [ {
                  "value" : [ "1 ", "day" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1168",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1172",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1173",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1170",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1171",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "day",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1176",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1176",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAddUnderflow", ": " ]
            }, {
              "r" : "1177",
              "s" : [ {
                "r" : "1179",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1178",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1180",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1180",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1181",
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
          "localId" : "1177",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1183",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1184",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1179",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1180",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1182",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1181",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1187",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1187",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAddNearOverflow", ": " ]
            }, {
              "r" : "1188",
              "s" : [ {
                "r" : "1190",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1189",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1191",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1188",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1192",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1193",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1190",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1191",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1196",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1196",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAddNearUnderflow", ": " ]
            }, {
              "r" : "1197",
              "s" : [ {
                "r" : "1199",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1198",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1200",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1197",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1201",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1202",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1199",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1200",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1205",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1205",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSubtractOverflow", ": " ]
            }, {
              "r" : "1206",
              "s" : [ {
                "r" : "1208",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1207",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1209",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1209",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1210",
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
          "localId" : "1206",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1212",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1213",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1211",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1210",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1216",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSubtractUnderflow", ": " ]
            }, {
              "r" : "1217",
              "s" : [ {
                "r" : "1219",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1218",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1220",
                "s" : [ {
                  "value" : [ "1 ", "day" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1221",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1222",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "day",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1225",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1225",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSubtractNearOverflow", ": " ]
            }, {
              "r" : "1226",
              "s" : [ {
                "r" : "1228",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1227",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1229",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1230",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1231",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1234",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSubtractNearUnderflow", ": " ]
            }, {
              "r" : "1235",
              "s" : [ {
                "r" : "1237",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1236",
                  "s" : [ {
                    "value" : [ "DateTime" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1238",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1235",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1239",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1240",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1243",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1243",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSuccessorOverflow", ": " ]
            }, {
              "r" : "1246",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1245",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1244",
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
          "localId" : "1246",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1247",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "1245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1250",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimePredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1250",
            "s" : [ {
              "value" : [ "", "define ", "DateTimePredecessorUnderflow", ": " ]
            }, {
              "r" : "1253",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1252",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1251",
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
          "localId" : "1253",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1254",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "1252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1257",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1257",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeSuccessorNearOverflow", ": " ]
            }, {
              "r" : "1264",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1258",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1258",
                  "s" : [ {
                    "r" : "1260",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "1259",
                      "s" : [ {
                        "value" : [ "DateTime" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " - " ]
                  }, {
                    "r" : "1261",
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
          "localId" : "1264",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1265",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "1258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1262",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1263",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "1260",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1261",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "millisecond",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1268",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimePredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1268",
            "s" : [ {
              "value" : [ "", "define ", "DateTimePredecessorNearUnderflow", ": " ]
            }, {
              "r" : "1275",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1269",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1269",
                  "s" : [ {
                    "r" : "1271",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "1270",
                      "s" : [ {
                        "value" : [ "DateTime" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "1272",
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
          "localId" : "1275",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1276",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "1269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1273",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1274",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "1271",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1272",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "millisecond",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1279",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1279",
            "s" : [ {
              "value" : [ "", "define ", "DateAddOverflow", ": " ]
            }, {
              "r" : "1280",
              "s" : [ {
                "r" : "1282",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1281",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1283",
                "s" : [ {
                  "value" : [ "1 ", "day" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1280",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1284",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1285",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1283",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "day",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1288",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1288",
            "s" : [ {
              "value" : [ "", "define ", "DateAddUnderflow", ": " ]
            }, {
              "r" : "1289",
              "s" : [ {
                "r" : "1291",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1290",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1292",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1292",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1293",
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
          "localId" : "1289",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1295",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1296",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1294",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1293",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1299",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1299",
            "s" : [ {
              "value" : [ "", "define ", "DateAddNearOverflow", ": " ]
            }, {
              "r" : "1300",
              "s" : [ {
                "r" : "1302",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1301",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1303",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1300",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1304",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1305",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1308",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1308",
            "s" : [ {
              "value" : [ "", "define ", "DateAddNearUnderflow", ": " ]
            }, {
              "r" : "1309",
              "s" : [ {
                "r" : "1311",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1310",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1312",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1309",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1313",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1314",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1317",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1317",
            "s" : [ {
              "value" : [ "", "define ", "DateSubtractOverflow", ": " ]
            }, {
              "r" : "1318",
              "s" : [ {
                "r" : "1320",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1319",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1321",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1321",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1322",
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
          "localId" : "1318",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1324",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1325",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1320",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1323",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1322",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1328",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1328",
            "s" : [ {
              "value" : [ "", "define ", "DateSubtractUnderflow", ": " ]
            }, {
              "r" : "1329",
              "s" : [ {
                "r" : "1331",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1330",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1332",
                "s" : [ {
                  "value" : [ "1 ", "day" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1329",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1333",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1334",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1331",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1332",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "day",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1337",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1337",
            "s" : [ {
              "value" : [ "", "define ", "DateSubtractNearOverflow", ": " ]
            }, {
              "r" : "1338",
              "s" : [ {
                "r" : "1340",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1339",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1341",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1338",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1342",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1343",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1340",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1346",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1346",
            "s" : [ {
              "value" : [ "", "define ", "DateSubtractNearUnderflow", ": " ]
            }, {
              "r" : "1347",
              "s" : [ {
                "r" : "1349",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1348",
                  "s" : [ {
                    "value" : [ "Date" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1350",
                "s" : [ {
                  "value" : [ "0 ", "days" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1347",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1351",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1352",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1350",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "days",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1355",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1355",
            "s" : [ {
              "value" : [ "", "define ", "DateSuccessorOverflow", ": " ]
            }, {
              "r" : "1358",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1357",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1356",
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
          "localId" : "1358",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1359",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "1357",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1362",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DatePredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1362",
            "s" : [ {
              "value" : [ "", "define ", "DatePredecessorUnderflow", ": " ]
            }, {
              "r" : "1365",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1364",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1363",
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
          "localId" : "1365",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1366",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "1364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "valueType" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1369",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1369",
            "s" : [ {
              "value" : [ "", "define ", "DateSuccessorNearOverflow", ": " ]
            }, {
              "r" : "1376",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1370",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1370",
                  "s" : [ {
                    "r" : "1372",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "1371",
                      "s" : [ {
                        "value" : [ "Date" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " - " ]
                  }, {
                    "r" : "1373",
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
          "localId" : "1376",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1377",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "1370",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1374",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1375",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "1372",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "valueType" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1373",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1380",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DatePredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1380",
            "s" : [ {
              "value" : [ "", "define ", "DatePredecessorNearUnderflow", ": " ]
            }, {
              "r" : "1387",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1381",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1381",
                  "s" : [ {
                    "r" : "1383",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "1382",
                      "s" : [ {
                        "value" : [ "Date" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "1384",
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
          "localId" : "1387",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1388",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "1381",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1385",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1386",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "1383",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "valueType" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1384",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "day",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1391",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeAddOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1391",
            "s" : [ {
              "value" : [ "", "define ", "TimeAddOverflow", ": " ]
            }, {
              "r" : "1392",
              "s" : [ {
                "r" : "1394",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1393",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1395",
                "s" : [ {
                  "value" : [ "1 ", "second" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1392",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1396",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1397",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1395",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "second",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1400",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeAddUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1400",
            "s" : [ {
              "value" : [ "", "define ", "TimeAddUnderflow", ": " ]
            }, {
              "r" : "1401",
              "s" : [ {
                "r" : "1403",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1402",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1404",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1404",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1405",
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
          "localId" : "1401",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1407",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1408",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1403",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1404",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1406",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1405",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "second",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1411",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeAddNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1411",
            "s" : [ {
              "value" : [ "", "define ", "TimeAddNearOverflow", ": " ]
            }, {
              "r" : "1412",
              "s" : [ {
                "r" : "1414",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1413",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1415",
                "s" : [ {
                  "value" : [ "0 ", "seconds" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1412",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1416",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1417",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1414",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "seconds",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1420",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeAddNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1420",
            "s" : [ {
              "value" : [ "", "define ", "TimeAddNearUnderflow", ": " ]
            }, {
              "r" : "1421",
              "s" : [ {
                "r" : "1423",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1422",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "1424",
                "s" : [ {
                  "value" : [ "0 ", "seconds" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "1421",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1425",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1426",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1423",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "seconds",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1429",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSubtractOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1429",
            "s" : [ {
              "value" : [ "", "define ", "TimeSubtractOverflow", ": " ]
            }, {
              "r" : "1430",
              "s" : [ {
                "r" : "1432",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1431",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1433",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1433",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "1434",
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
          "localId" : "1430",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1436",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1437",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1432",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Negate",
            "localId" : "1433",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1435",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Quantity",
              "localId" : "1434",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "second",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1440",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSubtractUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1440",
            "s" : [ {
              "value" : [ "", "define ", "TimeSubtractUnderflow", ": " ]
            }, {
              "r" : "1441",
              "s" : [ {
                "r" : "1443",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1442",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1444",
                "s" : [ {
                  "value" : [ "1 ", "second" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1441",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1445",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1446",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1443",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1444",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 1,
            "unit" : "second",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1449",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSubtractNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1449",
            "s" : [ {
              "value" : [ "", "define ", "TimeSubtractNearOverflow", ": " ]
            }, {
              "r" : "1450",
              "s" : [ {
                "r" : "1452",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1451",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1453",
                "s" : [ {
                  "value" : [ "0 ", "seconds" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1450",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1454",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1455",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MaxValue",
            "localId" : "1452",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1453",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "seconds",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1458",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSubtractNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1458",
            "s" : [ {
              "value" : [ "", "define ", "TimeSubtractNearUnderflow", ": " ]
            }, {
              "r" : "1459",
              "s" : [ {
                "r" : "1461",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1460",
                  "s" : [ {
                    "value" : [ "Time" ]
                  } ]
                } ]
              }, {
                "value" : [ " - " ]
              }, {
                "r" : "1462",
                "s" : [ {
                  "value" : [ "0 ", "seconds" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Subtract",
          "localId" : "1459",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1463",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1464",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "MinValue",
            "localId" : "1461",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1462",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 0,
            "unit" : "seconds",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1467",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSuccessorOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1467",
            "s" : [ {
              "value" : [ "", "define ", "TimeSuccessorOverflow", ": " ]
            }, {
              "r" : "1470",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1469",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1468",
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
          "localId" : "1470",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1471",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "1469",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1474",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimePredecessorUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1474",
            "s" : [ {
              "value" : [ "", "define ", "TimePredecessorUnderflow", ": " ]
            }, {
              "r" : "1477",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1476",
                "s" : [ {
                  "value" : [ "minimum", " " ]
                }, {
                  "r" : "1475",
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
          "localId" : "1477",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1478",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MinValue",
            "localId" : "1476",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "valueType" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "1481",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeSuccessorNearOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1481",
            "s" : [ {
              "value" : [ "", "define ", "TimeSuccessorNearOverflow", ": " ]
            }, {
              "r" : "1488",
              "s" : [ {
                "value" : [ "successor of " ]
              }, {
                "r" : "1482",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1482",
                  "s" : [ {
                    "r" : "1484",
                    "s" : [ {
                      "value" : [ "maximum", " " ]
                    }, {
                      "r" : "1483",
                      "s" : [ {
                        "value" : [ "Time" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " - " ]
                  }, {
                    "r" : "1485",
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
          "localId" : "1488",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1489",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Subtract",
            "localId" : "1482",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1486",
              "name" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1487",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MaxValue",
              "localId" : "1484",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "valueType" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1485",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "millisecond",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1492",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimePredecessorNearUnderflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1492",
            "s" : [ {
              "value" : [ "", "define ", "TimePredecessorNearUnderflow", ": " ]
            }, {
              "r" : "1499",
              "s" : [ {
                "value" : [ "predecessor of " ]
              }, {
                "r" : "1493",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "1493",
                  "s" : [ {
                    "r" : "1495",
                    "s" : [ {
                      "value" : [ "minimum", " " ]
                    }, {
                      "r" : "1494",
                      "s" : [ {
                        "value" : [ "Time" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "1496",
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
          "localId" : "1499",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1500",
            "name" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Add",
            "localId" : "1493",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1497",
              "name" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1498",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "MinValue",
              "localId" : "1495",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "valueType" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1496",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "millisecond",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1503",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "ExpOverflow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1503",
            "s" : [ {
              "value" : [ "", "define ", "ExpOverflow", ": " ]
            }, {
              "r" : "1509",
              "s" : [ {
                "value" : [ "Exp", "(" ]
              }, {
                "r" : "1505",
                "s" : [ {
                  "value" : [ "maximum", " " ]
                }, {
                  "r" : "1504",
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
          "localId" : "1509",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1510",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "MaxValue",
            "localId" : "1505",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

