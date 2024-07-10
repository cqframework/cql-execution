/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Equal
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AGtB_Int: 5 = 4
define AEqB_Int: 5 = 5
define ALtB_Int: 5 = 6
define EqTuples: Tuple{a: 1, b: Tuple{c: 1}} = Tuple{a: 1, b: Tuple{c: 1}}
define UneqTuples: Tuple{a: 1, b: Tuple{c: 1}} = Tuple{a: 1, b: Tuple{c: -1}}
define EqTuplesWithNullFields: Tuple{a: 'Hello', b: null} = Tuple{a: 'Hello', b: null}
define UneqTuplesWithNullFields: Tuple{a: 'Hello', b: null} = Tuple{a: 'Goodbye', b: null}
define UncertTuplesWithNullFieldOnOne: Tuple{a: 'Hello', b: null} = Tuple{a: 'Hello', b: 'null'}
define EqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) = DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0)
define UneqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) = DateTime(2000, 3, 15, 13, 30, 25, 201, +1.0)
define EqDateTimesTZ: DateTime(2000, 3, 15, 23, 30, 25, 200, +1.0) = DateTime(2000, 3, 16, 2, 30, 25, 200, +4.0)
define UneqDateTimesTZ: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) = DateTime(2000, 3, 15, 13, 30, 25, 200, +2.0)
define EqDateTimesNullMs: DateTime(2000, 3, 15, 13, 30, 25, 0) = DateTime(2000, 3, 15, 13, 30, 25)
define EqDateTimesNullOtherMs: DateTime(2000, 3, 15, 13, 30, 25) = DateTime(2000, 3, 15, 13, 30, 25, 0)
define EqDateTimesOnlyDate: DateTime(2000, 3, 15) = DateTime(2000, 3, 15)
define UneqDateTimesOnlyDate: DateTime(2000, 3, 14) = DateTime(2000, 3, 15)
define PossiblyEqDateTimesOnlyDateOnOne: DateTime(2000, 3, 13) = DateTime(2000, 3, 13, 13, 43, 32)
define UneqDateTimesOnlyDateOnOne: DateTime(2000, 4, 13, 12, 43, 32) = DateTime(2000, 3, 13)
define PossiblyEqualDateTimes: DateTime(2000, 3, 15) = DateTime(2000)
define ImpossiblyEqualDateTimes: DateTime(2000, 3, 15) = DateTime(2000, 4)
define DateAndDateTimeTrue: Date(2000, 3, 13) = DateTime(2000, 3, 13)
define DateAndDateTimeNotEqual: Date(2000, 3, 13) = DateTime(2000, 3, 12)
define DateAndDateTimeUncertainNull: Date(2000, 3, 13) = DateTime(2000, 3, 13, 2, 4, 23)
define DateTimeAndDateTrue: DateTime(2000, 3, 13) = Date(2000, 3, 13)
define DateTimeAndDateNotEqual: DateTime(2000, 3, 12) = Date(2000, 3, 13)
define DateTimeAndDateUncertainNull: DateTime(2000, 3, 13, 2, 4, 23) = Date(2000, 3, 13)
define AGtB_Quantity: 5 'm' = 4 'm'
define AEqB_Quantity: 5 'm' = 5 'm'
define ALtB_Quantity: 5 'm' = 6 'm'
define AGtB_Quantity_diff: 5 'm' = 5 'cm'
define AEqB_Quantity_diff: 5 'm' = 500 'cm'
define ALtB_Quantity_diff: 5 'm' = 5 'km'
define AGtB_Quantity_incompatible: 5 'Cel' = 4 'm'
define AEqB_Quantity_incompatible: 5 'Cel' = 5 'm'
define ALtB_Quantity_incompatible: 5 'Cel' = 40 'm'
define EqRatios: 10 'mg' : 2 'dL' = 15 'mg' : 3 'dL'
define UneqRatios: 10 'mg' : 2 'dL' = 15 'mg' : 4 'dL'
*/

module.exports['Equal'] = {
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
            "r" : "676",
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
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "5"," ","="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "217",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "5"," ","="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ","="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "224",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "EqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","EqTuples",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "230",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "231",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "232",
                                    "value" : [ "c",": ","1" ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "234",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "235",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "236",
                                    "value" : [ "c",": ","1" ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "230",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "231",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "232",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "233",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "234",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "235",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "236",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "238",
            "name" : "UneqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuples",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "241",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "242",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "243",
                                    "value" : [ "c",": ","1" ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "245",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "246",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "247",
                                    "s" : [ {
                                       "r" : "248",
                                       "value" : [ "-","1" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "240",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "241",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "242",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "243",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "244",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "245",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "246",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "247",
                              "type" : "Negate",
                              "signature" : [ ],
                              "operand" : {
                                 "localId" : "248",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           }
                        } ]
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "250",
            "name" : "EqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","EqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "253",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "254",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "256",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "257",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "252",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "253",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "254",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "255",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "256",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "257",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "259",
            "name" : "UneqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "262",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "263",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "265",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "266",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "261",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "262",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "263",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "264",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "265",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Goodbye",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "266",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "268",
            "name" : "UncertTuplesWithNullFieldOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","UncertTuplesWithNullFieldOnOne",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "271",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "272",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "274",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "275",
                              "s" : [ {
                                 "value" : [ "'null'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "270",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "271",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "272",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "273",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "274",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "275",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "null",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "277",
            "name" : "EqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimes",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "289",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "r" : "286",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "300",
                        "s" : [ {
                           "r" : "290",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "r" : "297",
                              "value" : [ "+","1.0" ]
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
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "289",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "279",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "280",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "282",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "283",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "284",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "285",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "286",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "300",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "291",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "292",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "293",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "294",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "297",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "302",
            "name" : "UneqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimes",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "r" : "314",
                        "s" : [ {
                           "r" : "304",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "r" : "311",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "r" : "315",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","201",", " ]
                        }, {
                           "r" : "322",
                           "s" : [ {
                              "r" : "322",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "303",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "314",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "304",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "305",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "306",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "307",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "308",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "309",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "310",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "311",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "325",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "315",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "316",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "317",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "318",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "319",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "321",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "201",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "322",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "327",
            "name" : "EqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "327",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesTZ",": " ]
                  }, {
                     "r" : "328",
                     "s" : [ {
                        "r" : "339",
                        "s" : [ {
                           "r" : "329",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","23",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "336",
                           "s" : [ {
                              "r" : "336",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "350",
                        "s" : [ {
                           "r" : "340",
                           "value" : [ "DateTime","(","2000",", ","3",", ","16",", ","2",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "347",
                           "s" : [ {
                              "r" : "347",
                              "value" : [ "+","4.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "328",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "339",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "329",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "330",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "331",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "332",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "333",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "334",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "335",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "336",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "350",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "342",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "343",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "344",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "345",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "346",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "347",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "352",
            "name" : "UneqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "352",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesTZ",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "r" : "364",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "361",
                           "s" : [ {
                              "r" : "361",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "375",
                        "s" : [ {
                           "r" : "365",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "372",
                           "s" : [ {
                              "r" : "372",
                              "value" : [ "+","2.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "364",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "354",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "355",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "356",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "357",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "358",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "359",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "360",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "361",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "375",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "365",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "366",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "367",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "368",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "369",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "370",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "371",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "372",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "377",
            "name" : "EqDateTimesNullMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "377",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullMs",": " ]
                  }, {
                     "r" : "378",
                     "s" : [ {
                        "r" : "388",
                        "s" : [ {
                           "r" : "379",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "397",
                        "s" : [ {
                           "r" : "389",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "378",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "388",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "379",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "380",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "381",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "382",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "383",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "384",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "385",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "397",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "389",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "390",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "391",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "392",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "393",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "394",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "399",
            "name" : "EqDateTimesNullOtherMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "399",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullOtherMs",": " ]
                  }, {
                     "r" : "400",
                     "s" : [ {
                        "r" : "409",
                        "s" : [ {
                           "r" : "401",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "419",
                        "s" : [ {
                           "r" : "410",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "400",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "409",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "401",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "402",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "403",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "404",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "405",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "406",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "419",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "410",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "411",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "412",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "413",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "414",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "415",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "416",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "421",
            "name" : "EqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "421",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "422",
                     "s" : [ {
                        "r" : "428",
                        "s" : [ {
                           "r" : "423",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "434",
                        "s" : [ {
                           "r" : "429",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "422",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "428",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "423",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "424",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "425",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "434",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "429",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "430",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "431",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "436",
            "name" : "UneqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "436",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "437",
                     "s" : [ {
                        "r" : "443",
                        "s" : [ {
                           "r" : "438",
                           "value" : [ "DateTime","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "449",
                        "s" : [ {
                           "r" : "444",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "437",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "443",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "438",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "439",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "440",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "449",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "444",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "445",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "446",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "451",
            "name" : "PossiblyEqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "451",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "452",
                     "s" : [ {
                        "r" : "458",
                        "s" : [ {
                           "r" : "453",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "467",
                        "s" : [ {
                           "r" : "459",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","13",", ","43",", ","32",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "452",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "458",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "453",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "454",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "455",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "467",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "459",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "460",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "461",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "462",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "463",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "464",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "469",
            "name" : "UneqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "469",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "470",
                     "s" : [ {
                        "r" : "479",
                        "s" : [ {
                           "r" : "471",
                           "value" : [ "DateTime","(","2000",", ","4",", ","13",", ","12",", ","43",", ","32",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "485",
                        "s" : [ {
                           "r" : "480",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "470",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "479",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "471",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "472",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "473",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "474",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "475",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "476",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "485",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "480",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "481",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "482",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "487",
            "name" : "PossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "487",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "488",
                     "s" : [ {
                        "r" : "494",
                        "s" : [ {
                           "r" : "489",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "498",
                        "s" : [ {
                           "r" : "495",
                           "value" : [ "DateTime","(","2000",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "488",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "494",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "489",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "490",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "491",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "498",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "495",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "500",
            "name" : "ImpossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "500",
                  "s" : [ {
                     "value" : [ "","define ","ImpossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "501",
                     "s" : [ {
                        "r" : "507",
                        "s" : [ {
                           "r" : "502",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "512",
                        "s" : [ {
                           "r" : "508",
                           "value" : [ "DateTime","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "501",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "507",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "502",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "503",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "504",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "512",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "508",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "509",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "514",
            "name" : "DateAndDateTimeTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeTrue",": " ]
                  }, {
                     "r" : "515",
                     "s" : [ {
                        "r" : "521",
                        "s" : [ {
                           "r" : "516",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "527",
                        "s" : [ {
                           "r" : "522",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "515",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "529",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "521",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "516",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "517",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "518",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "527",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "522",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "523",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "524",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "531",
            "name" : "DateAndDateTimeNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "531",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeNotEqual",": " ]
                  }, {
                     "r" : "532",
                     "s" : [ {
                        "r" : "538",
                        "s" : [ {
                           "r" : "533",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "544",
                        "s" : [ {
                           "r" : "539",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "532",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "546",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "538",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "533",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "534",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "535",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "544",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "539",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "540",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "541",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "548",
            "name" : "DateAndDateTimeUncertainNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "548",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeUncertainNull",": " ]
                  }, {
                     "r" : "549",
                     "s" : [ {
                        "r" : "555",
                        "s" : [ {
                           "r" : "550",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "564",
                        "s" : [ {
                           "r" : "556",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "549",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "566",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "555",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "550",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "551",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "552",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "564",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "556",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "557",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "558",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "559",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "560",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "561",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "568",
            "name" : "DateTimeAndDateTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "568",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateTrue",": " ]
                  }, {
                     "r" : "569",
                     "s" : [ {
                        "r" : "575",
                        "s" : [ {
                           "r" : "570",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "581",
                        "s" : [ {
                           "r" : "576",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "569",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "575",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "570",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "571",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "572",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "583",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "581",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "576",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "577",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "578",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "585",
            "name" : "DateTimeAndDateNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "585",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateNotEqual",": " ]
                  }, {
                     "r" : "586",
                     "s" : [ {
                        "r" : "592",
                        "s" : [ {
                           "r" : "587",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "598",
                        "s" : [ {
                           "r" : "593",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "586",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "592",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "587",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "588",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "589",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "600",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "598",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "593",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "594",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "595",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "602",
            "name" : "DateTimeAndDateUncertainNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "602",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateUncertainNull",": " ]
                  }, {
                     "r" : "603",
                     "s" : [ {
                        "r" : "612",
                        "s" : [ {
                           "r" : "604",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "618",
                        "s" : [ {
                           "r" : "613",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "603",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "612",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "604",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "605",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "606",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "607",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "608",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "609",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "620",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "618",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "613",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "614",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "615",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "622",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "622",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "623",
                     "s" : [ {
                        "r" : "624",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "625",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "623",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "624",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "625",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "627",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "627",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "628",
                     "s" : [ {
                        "r" : "629",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "630",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "628",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "629",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "630",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "632",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "632",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "633",
                     "s" : [ {
                        "r" : "634",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "635",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "633",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "634",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "635",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "637",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "637",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "638",
                     "s" : [ {
                        "r" : "639",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "640",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "638",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "639",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "640",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "642",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "642",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "643",
                     "s" : [ {
                        "r" : "644",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "645",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "643",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "644",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "645",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "647",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "647",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "648",
                     "s" : [ {
                        "r" : "649",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "650",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "648",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "649",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "650",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "652",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "652",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "653",
                     "s" : [ {
                        "r" : "654",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "655",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "653",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "654",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "655",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "657",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "657",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "658",
                     "s" : [ {
                        "r" : "659",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "660",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "658",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "659",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "660",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "662",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "662",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "663",
                     "s" : [ {
                        "r" : "664",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "665",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "663",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "664",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "665",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "667",
            "name" : "EqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "667",
                  "s" : [ {
                     "value" : [ "","define ","EqRatios",": " ]
                  }, {
                     "r" : "668",
                     "s" : [ {
                        "r" : "671",
                        "s" : [ {
                           "r" : "669",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "670",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "674",
                        "s" : [ {
                           "r" : "672",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "673",
                           "s" : [ {
                              "value" : [ "3 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "668",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "671",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "669",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "670",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "674",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "672",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "673",
                     "value" : 3,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "676",
            "name" : "UneqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "676",
                  "s" : [ {
                     "value" : [ "","define ","UneqRatios",": " ]
                  }, {
                     "r" : "677",
                     "s" : [ {
                        "r" : "680",
                        "s" : [ {
                           "r" : "678",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "679",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "683",
                        "s" : [ {
                           "r" : "681",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "682",
                           "s" : [ {
                              "value" : [ "4 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "677",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "680",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "678",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "679",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "683",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "681",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "682",
                     "value" : 4,
                     "unit" : "dL"
                  }
               } ]
            }
         } ]
      }
   }
}

/* NotEqual
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AGtB_Int: 5 != 4
define AEqB_Int: 5 != 5
define ALtB_Int: 5 != 6
define EqTuples: Tuple{a: 1, b: Tuple{c: 1}} != Tuple{a: 1, b: Tuple{c: 1}}
define UneqTuples: Tuple{a: 1, b: Tuple{c: 1}} != Tuple{a: 1, b: Tuple{c: -1}}
define EqTuplesWithNullFields: Tuple{a: 'Hello', b: null} != Tuple{a: 'Hello', b: null}
define UneqTuplesWithNullFields: Tuple{a: 'Hello', b: null} != Tuple{a: 'Goodbye', b: null}
define UncertTuplesWithNullFieldOnOne: Tuple{a: 'Hello', b: null} != Tuple{a: 'Hello', b: 'null'}
define EqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) != DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0)
define UneqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) != DateTime(2000, 3, 15, 13, 30, 25, 201, +1.0)
define EqDateTimesTZ: DateTime(2000, 3, 15, 23, 30, 25, 200, +1.0) != DateTime(2000, 3, 16, 2, 30, 25, 200, +4.0)
define UneqDateTimesTZ: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) != DateTime(2000, 3, 15, 13, 30, 25, 200, +2.0)
define EqDateTimesNullMs: DateTime(2000, 3, 15, 13, 30, 25, 0) != DateTime(2000, 3, 15, 13, 30, 25)
define EqDateTimesNullOtherMs: DateTime(2000, 3, 15, 13, 30, 25) != DateTime(2000, 3, 15, 13, 30, 25, 0)
define EqDateTimesOnlyDate: DateTime(2000, 3, 15) != DateTime(2000, 3, 15)
define UneqDateTimesOnlyDate: DateTime(2000, 3, 14) != DateTime(2000, 3, 15)
define PossiblyEqDateTimesOnlyDateOnOne: DateTime(2000, 3, 13) != DateTime(2000, 3, 13, 13, 43, 32)
define UneqDateTimesOnlyDateOnOne: DateTime(2000, 4, 13, 12, 43, 32) != DateTime(2000, 3, 13)
define PossiblyEqualDateTimes: DateTime(2000, 3, 15) != DateTime(2000)
define ImpossiblyEqualDateTimes: DateTime(2000, 3, 15) != DateTime(2000, 4)
define DateAndDateTimeFalse: Date(2000, 3, 13) != DateTime(2000, 3, 13)
define DateAndDateTimeNotEqual: Date(2000, 3, 13) != DateTime(2000, 3, 12)
define DateAndDateTimeUncertainTrue: Date(2000, 3, 13) != DateTime(2000, 3, 13, 2, 4, 23)
define DateTimeAndDateFalse: DateTime(2000, 3, 13) != Date(2000, 3, 13)
define DateTimeAndDateNotEqual: DateTime(2000, 3, 12) != Date(2000, 3, 13)
define DateTimeAndDateUncertainNull: DateTime(2000, 3, 13, 2, 4, 23) != Date(2000, 3, 13)
define AGtB_Quantity: 5 'm' != 4 'm'
define AEqB_Quantity: 5 'm' != 5 'm'
define ALtB_Quantity: 5 'm' != 6 'm'
define AGtB_Quantity_diff: 5 'm' != 5 'cm'
define AEqB_Quantity_diff: 5 'm' != 500 'cm'
define ALtB_Quantity_diff: 5 'm' != 5 'km'
define AGtB_Quantity_incompatible: 5 'Cel' != 4 'm'
define AEqB_Quantity_incompatible: 5 'Cel' != 5 'm'
define ALtB_Quantity_incompatible: 5 'Cel' != 40 'm'
*/

module.exports['NotEqual'] = {
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
            "r" : "696",
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
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "5"," ","!="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "218",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "220",
                        "value" : [ "5"," ","!="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "224",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "5"," ","!="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "230",
            "name" : "EqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","EqTuples",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "233",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "234",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "235",
                                    "value" : [ "c",": ","1" ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "237",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "238",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "239",
                                    "value" : [ "c",": ","1" ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "232",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "233",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "234",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "235",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "236",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "237",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "238",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "239",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "242",
            "name" : "UneqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuples",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "245",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "246",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "247",
                                    "value" : [ "c",": ","1" ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "249",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "250",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "251",
                                    "s" : [ {
                                       "r" : "252",
                                       "value" : [ "-","1" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "244",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "245",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "246",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "247",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "248",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "249",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "250",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "251",
                                 "type" : "Negate",
                                 "signature" : [ ],
                                 "operand" : {
                                    "localId" : "252",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              }
                           } ]
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "255",
            "name" : "EqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","EqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "258",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "259",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "261",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "262",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "256",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "257",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "258",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "259",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "260",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "261",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "262",
                           "type" : "Null"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "265",
            "name" : "UneqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "268",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "269",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "271",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "272",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "266",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "267",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "268",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "269",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "270",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "271",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Goodbye",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "272",
                           "type" : "Null"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "275",
            "name" : "UncertTuplesWithNullFieldOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","UncertTuplesWithNullFieldOnOne",": " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "278",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "279",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "281",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "282",
                              "s" : [ {
                                 "value" : [ "'null'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "283",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "276",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "277",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "278",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "279",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "280",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "281",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "282",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "null",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "285",
            "name" : "EqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimes",": " ]
                  }, {
                     "r" : "309",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "r" : "287",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "294",
                           "s" : [ {
                              "r" : "294",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "308",
                        "s" : [ {
                           "r" : "298",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "r" : "305",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "309",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "286",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "297",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "287",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "288",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "289",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "290",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "291",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "292",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "293",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "294",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "308",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "298",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "299",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "300",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "301",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "302",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "303",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "304",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "305",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "311",
            "name" : "UneqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "311",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimes",": " ]
                  }, {
                     "r" : "335",
                     "s" : [ {
                        "r" : "323",
                        "s" : [ {
                           "r" : "313",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "320",
                           "s" : [ {
                              "r" : "320",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "334",
                        "s" : [ {
                           "r" : "324",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","201",", " ]
                        }, {
                           "r" : "331",
                           "s" : [ {
                              "r" : "331",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "335",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "312",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "323",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "313",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "314",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "315",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "316",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "317",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "318",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "319",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "320",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "334",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "324",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "325",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "326",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "327",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "328",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "329",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "330",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "201",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "331",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "337",
            "name" : "EqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "337",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesTZ",": " ]
                  }, {
                     "r" : "361",
                     "s" : [ {
                        "r" : "349",
                        "s" : [ {
                           "r" : "339",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","23",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "346",
                           "s" : [ {
                              "r" : "346",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "360",
                        "s" : [ {
                           "r" : "350",
                           "value" : [ "DateTime","(","2000",", ","3",", ","16",", ","2",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "357",
                           "s" : [ {
                              "r" : "357",
                              "value" : [ "+","4.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "361",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "338",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "349",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "339",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "340",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "341",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "342",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "343",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "344",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "345",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "346",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "360",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "350",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "351",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "352",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "16",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "353",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "354",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "355",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "356",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "357",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "4.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "363",
            "name" : "UneqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "363",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesTZ",": " ]
                  }, {
                     "r" : "387",
                     "s" : [ {
                        "r" : "375",
                        "s" : [ {
                           "r" : "365",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "372",
                           "s" : [ {
                              "r" : "372",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "386",
                        "s" : [ {
                           "r" : "376",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "383",
                           "s" : [ {
                              "r" : "383",
                              "value" : [ "+","2.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "387",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "364",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "375",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "365",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "366",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "367",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "368",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "369",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "370",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "371",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "372",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "386",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "376",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "377",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "378",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "379",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "380",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "381",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "382",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "383",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "389",
            "name" : "EqDateTimesNullMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "389",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullMs",": " ]
                  }, {
                     "r" : "410",
                     "s" : [ {
                        "r" : "400",
                        "s" : [ {
                           "r" : "391",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "409",
                        "s" : [ {
                           "r" : "401",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "410",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "390",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "400",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "391",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "392",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "393",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "394",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "395",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "396",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "397",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "409",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "401",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "402",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "403",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "404",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "405",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "406",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "412",
            "name" : "EqDateTimesNullOtherMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "412",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullOtherMs",": " ]
                  }, {
                     "r" : "433",
                     "s" : [ {
                        "r" : "422",
                        "s" : [ {
                           "r" : "414",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "432",
                        "s" : [ {
                           "r" : "423",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "433",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "413",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "422",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "414",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "415",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "416",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "417",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "418",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "419",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "432",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "423",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "424",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "425",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "426",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "427",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "428",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "429",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "435",
            "name" : "EqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "435",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "r" : "442",
                        "s" : [ {
                           "r" : "437",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "448",
                        "s" : [ {
                           "r" : "443",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "449",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "436",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "442",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "437",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "438",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "439",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "448",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "443",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "444",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "445",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "451",
            "name" : "UneqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "451",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "465",
                     "s" : [ {
                        "r" : "458",
                        "s" : [ {
                           "r" : "453",
                           "value" : [ "DateTime","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "464",
                        "s" : [ {
                           "r" : "459",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "465",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "452",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "458",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "453",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "454",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "455",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "14",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "464",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "459",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "460",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "461",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "467",
            "name" : "PossiblyEqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "467",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "484",
                     "s" : [ {
                        "r" : "474",
                        "s" : [ {
                           "r" : "469",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "483",
                        "s" : [ {
                           "r" : "475",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","13",", ","43",", ","32",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "484",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "468",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "474",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "469",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "470",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "471",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "483",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "475",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "476",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "477",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "478",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "479",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "43",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "480",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "32",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "486",
            "name" : "UneqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "486",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "503",
                     "s" : [ {
                        "r" : "496",
                        "s" : [ {
                           "r" : "488",
                           "value" : [ "DateTime","(","2000",", ","4",", ","13",", ","12",", ","43",", ","32",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "502",
                        "s" : [ {
                           "r" : "497",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "503",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "487",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "496",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "488",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "489",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "490",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "491",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "492",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "43",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "493",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "32",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "502",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "497",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "498",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "499",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "505",
            "name" : "PossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "505",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "517",
                     "s" : [ {
                        "r" : "512",
                        "s" : [ {
                           "r" : "507",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "516",
                        "s" : [ {
                           "r" : "513",
                           "value" : [ "DateTime","(","2000",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "517",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "506",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "512",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "507",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "508",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "509",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "516",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "513",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "519",
            "name" : "ImpossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "519",
                  "s" : [ {
                     "value" : [ "","define ","ImpossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "532",
                     "s" : [ {
                        "r" : "526",
                        "s" : [ {
                           "r" : "521",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "531",
                        "s" : [ {
                           "r" : "527",
                           "value" : [ "DateTime","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "532",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "520",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "526",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "521",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "522",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "523",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "531",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "527",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "528",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "534",
            "name" : "DateAndDateTimeFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "534",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeFalse",": " ]
                  }, {
                     "r" : "550",
                     "s" : [ {
                        "r" : "541",
                        "s" : [ {
                           "r" : "536",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "547",
                        "s" : [ {
                           "r" : "542",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "550",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "535",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "549",
                     "type" : "ToDateTime",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "541",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "536",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "537",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "538",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "547",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "542",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "543",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "544",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "552",
            "name" : "DateAndDateTimeNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "552",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeNotEqual",": " ]
                  }, {
                     "r" : "568",
                     "s" : [ {
                        "r" : "559",
                        "s" : [ {
                           "r" : "554",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "565",
                        "s" : [ {
                           "r" : "560",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "568",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "553",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "567",
                     "type" : "ToDateTime",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "559",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "554",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "555",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "556",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "565",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "560",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "561",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "562",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "570",
            "name" : "DateAndDateTimeUncertainTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "570",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeUncertainTrue",": " ]
                  }, {
                     "r" : "589",
                     "s" : [ {
                        "r" : "577",
                        "s" : [ {
                           "r" : "572",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "586",
                        "s" : [ {
                           "r" : "578",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "589",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "571",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "588",
                     "type" : "ToDateTime",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "577",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "572",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "573",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "574",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "586",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "578",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "579",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "580",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "581",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "582",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "583",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "591",
            "name" : "DateTimeAndDateFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "591",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateFalse",": " ]
                  }, {
                     "r" : "607",
                     "s" : [ {
                        "r" : "598",
                        "s" : [ {
                           "r" : "593",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "604",
                        "s" : [ {
                           "r" : "599",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "607",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "592",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "598",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "593",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "594",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "595",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "606",
                     "type" : "ToDateTime",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "604",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "599",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "600",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "601",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "609",
            "name" : "DateTimeAndDateNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "609",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateNotEqual",": " ]
                  }, {
                     "r" : "625",
                     "s" : [ {
                        "r" : "616",
                        "s" : [ {
                           "r" : "611",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "622",
                        "s" : [ {
                           "r" : "617",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "625",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "610",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "616",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "611",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "612",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "613",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "624",
                     "type" : "ToDateTime",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "622",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "617",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "618",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "619",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "627",
            "name" : "DateTimeAndDateUncertainNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "627",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateUncertainNull",": " ]
                  }, {
                     "r" : "646",
                     "s" : [ {
                        "r" : "637",
                        "s" : [ {
                           "r" : "629",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "643",
                        "s" : [ {
                           "r" : "638",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "646",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "628",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "637",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "629",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "630",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "631",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "632",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "633",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "634",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "645",
                     "type" : "ToDateTime",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "643",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "638",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "639",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "640",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "648",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "648",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "652",
                     "s" : [ {
                        "r" : "650",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "651",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "652",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "649",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "650",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "651",
                     "value" : 4,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "654",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "654",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "658",
                     "s" : [ {
                        "r" : "656",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "657",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "658",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "655",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "656",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "657",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "660",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "660",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "664",
                     "s" : [ {
                        "r" : "662",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "663",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "664",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "661",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "662",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "663",
                     "value" : 6,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "666",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "666",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "670",
                     "s" : [ {
                        "r" : "668",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "669",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "670",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "667",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "668",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "669",
                     "value" : 5,
                     "unit" : "cm",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "672",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "672",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "676",
                     "s" : [ {
                        "r" : "674",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "675",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "676",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "673",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "674",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "675",
                     "value" : 500,
                     "unit" : "cm",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "678",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "678",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "682",
                     "s" : [ {
                        "r" : "680",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "681",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "682",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "679",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "680",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "681",
                     "value" : 5,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "684",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "684",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "688",
                     "s" : [ {
                        "r" : "686",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "687",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "688",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "685",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "686",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "687",
                     "value" : 4,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "690",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "690",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "694",
                     "s" : [ {
                        "r" : "692",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "693",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "694",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "691",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "692",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "693",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "696",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "696",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "700",
                     "s" : [ {
                        "r" : "698",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "699",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "700",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "697",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "698",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "699",
                     "value" : 40,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* Equivalent
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status code'
code "Tobacco smoking status code clone": '72166-2' from "LOINC" display 'Tobacco smoking status code clone'
code "Total Score [AUDIT-C] code": '75626-2' from "LOINC" display 'Total Score [Audit-C] code'
concept "Tobacco smoking status": { "Tobacco smoking status code" } display 'Tobacco smoking status'
concept "Tobacco smoking status clone": { "Tobacco smoking status code clone" } display 'Tobacco smoking status'
concept "Total Score [AUDIT-C]": { "Total Score [AUDIT-C] code" } display 'Total Score [Audit-C]'
context Patient

define ANull_BDefined: null ~ 4
define ADefined_BNull: 5 ~ null
define ANull_BNull: (null as String) ~ (null as String)
define ADefined_BDefined: 3 ~ 3
define CaseInsensitiveStrings: 'FOO' ~ 'foo'
define WhiteSpaceTabTrue: 'foo bar' ~ 'foo\tbar'
define WhiteSpaceTabReturnTrue: 'foo\tbar' ~ 'foo\nbar'
define WhiteSpaceIncorrectSpaceFalse: 'foo bar' ~ 'foo\t\tbar'
define WhiteSpaceIncorrectNumberTabsFalse: 'foo\t\tbar' ~'foo\tbar'
define WhiteSpaceNoSpaceFalse: 'foo bar' ~ 'foobar'
define EqRatios: 10 'mg' : 2 'dL' ~ 15 'mg' : 3 'dL'
define UneqRatios: 10 'mg' : 2 'dL' ~ 15 'mg' : 4 'dL'
define UneqRatioTypes: 10 'mg' : 2 'dL' ~ DateTime(2000, 3, 13, 2, 4, 23)

// define EmptyTuples: { : } ~ { : } // TODO: We don't seem to support this format
define SameTuples: Tuple{a: 'a', b: 'b'} ~ Tuple{a: 'a', b: 'b'}
define SameTuplesNull: Tuple{a: null} ~ Tuple{a : null}
define DifferentTuples: Tuple{a: 'a', b: 'b'} ~ Tuple{a: 'x', b: 'b'}
define SameNestedTuples: Tuple{a: 'a', b: Tuple{c: 'c'}} ~ Tuple{a: 'a', b: Tuple{c: 'c'}}
define SameNestedTuplesNull: Tuple{a: 'a', b: Tuple{c: null}} ~ Tuple{a: 'a', b: Tuple{c: null}}

define EmptyLists: { } ~ { }
define DifferentTypesLists: {'1', '2', '3'} ~ {1, 2, 3}
define DifferentLengthLists: {'a'} ~ {'a', 'a'}
define DifferentOrderLists: {'a', 'b'} ~ {'b', 'a'}
define SameLists: {'a', 'b', 'c'} ~ {'a', 'b', 'c'}
define SameListsNull: {null, null, null} ~ {null, null, null}
define SameNestedLists: {{'a','d'}, {'b', 'c'}} ~ {{'a','d'}, {'b', 'c'}}
define SameNestedListsNull: {null, {null, null}} ~ {null, {null, null}}

define EmptyInterval: Interval(null, null) ~ Interval(null, null)
define IntervalDifferentPointTypes:  Interval[1, 5] ~ Interval['1', '5']
define IntervalDifferentStarts: Interval[1,3] ~ Interval[2,3]
define IntervalDifferentEndings: Interval[1,3] ~ Interval[1,4]
define SameIntervals: Interval[1,3] ~ Interval[1,3]

define TupleAndList: {a: '1'} ~ {'1'}
define ListAndTuple: {'1'} ~ {a: '1'}
define TupleAndNullList: {a: '1'} ~ {null}
define NullListAndTuple: {null} ~ {a: '1'}

define SameCodeAndCode: "Tobacco smoking status code" ~ "Tobacco smoking status code clone"
define SameCodeAndConcept: "Tobacco smoking status code clone" ~ "Tobacco smoking status"
define SameConceptAndCode: "Tobacco smoking status" ~ "Tobacco smoking status code clone"
define SameConceptAndConcept: "Tobacco smoking status" ~ "Tobacco smoking status clone"
define DiffCodeAndCode: "Tobacco smoking status code" ~ "Total Score [AUDIT-C] code"
define DiffCodeAndConcept: "Tobacco smoking status code clone" ~ "Total Score [AUDIT-C]"
define DiffConceptAndCode: "Tobacco smoking status" ~ "Total Score [AUDIT-C] code"
define DiffConceptAndConcept: "Tobacco smoking status" ~ "Total Score [AUDIT-C]"

define EqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) ~ DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0)
define UneqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) ~ DateTime(2000, 3, 15, 13, 30, 25, 201, +1.0)
define EqDateTimesTZ: DateTime(2000, 3, 15, 23, 30, 25, 200, +1.0) ~ DateTime(2000, 3, 16, 2, 30, 25, 200, +4.0)
define UneqDateTimesTZ: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) ~ DateTime(2000, 3, 15, 13, 30, 25, 200, +2.0)
define EqDateTimesNullMs: DateTime(2000, 3, 15, 13, 30, 25, 0) ~ DateTime(2000, 3, 15, 13, 30, 25)
define EqDateTimesNullOtherMs: DateTime(2000, 3, 15, 13, 30, 25) ~ DateTime(2000, 3, 15, 13, 30, 25, 0)
define EqDateTimesOnlyDate: DateTime(2000, 3, 15) ~ DateTime(2000, 3, 15)
define UneqDateTimesOnlyDate: DateTime(2000, 3, 14) ~ DateTime(2000, 3, 15)
define PossiblyEqDateTimesOnlyDateOnOne: DateTime(2000, 3, 13) ~ DateTime(2000, 3, 13, 13, 43, 32)
define UneqDateTimesOnlyDateOnOne: DateTime(2000, 4, 13, 12, 43, 32) ~ DateTime(2000, 3, 13)
define PossiblyEqualDateTimes: DateTime(2000, 3, 15) ~ DateTime(2000)
define ImpossiblyEqualDateTimes: DateTime(2000, 3, 15) ~ DateTime(2000, 4)
define DateAndDateTimeTrue: Date(2000, 3, 13) ~ DateTime(2000, 3, 13)
define DateAndDateTimeNotEqual: Date(2000, 3, 13) ~ DateTime(2000, 3, 12)
define DateAndDateTimeUncertainFalse: Date(2000, 3, 13) ~ DateTime(2000, 3, 13, 2, 4, 23)
define DateTimeAndDateTrue: DateTime(2000, 3, 13) ~ Date(2000, 3, 13)
define DateTimeAndDateNotEqual: DateTime(2000, 3, 12) ~ Date(2000, 3, 13)
define DateTimeAndDateUncertainFalse: DateTime(2000, 3, 13, 2, 4, 23) ~ Date(2000, 3, 13)
*/

module.exports['Equivalent'] = {
   "library" : {
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 50,
         "startChar" : 37,
         "endLine" : 50,
         "endChar" : 42,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 51,
         "startChar" : 26,
         "endLine" : 51,
         "endChar" : 31,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "924",
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "207",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status code",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status code'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "209",
               "name" : "LOINC"
            }
         }, {
            "localId" : "210",
            "name" : "Tobacco smoking status code clone",
            "id" : "72166-2",
            "display" : "Tobacco smoking status code clone",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code clone\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status code clone'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "211",
               "name" : "LOINC"
            }
         }, {
            "localId" : "212",
            "name" : "Total Score [AUDIT-C] code",
            "id" : "75626-2",
            "display" : "Total Score [Audit-C] code",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","code ","\"Total Score [AUDIT-C] code\"",": ","'75626-2'"," from " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Total Score [Audit-C] code'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "213",
               "name" : "LOINC"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Tobacco smoking status",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","concept ","\"Tobacco smoking status\"",": { " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "215",
               "name" : "Tobacco smoking status code"
            } ]
         }, {
            "localId" : "216",
            "name" : "Tobacco smoking status clone",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","concept ","\"Tobacco smoking status clone\"",": { " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code clone\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "217",
               "name" : "Tobacco smoking status code clone"
            } ]
         }, {
            "localId" : "218",
            "name" : "Total Score [AUDIT-C]",
            "display" : "Total Score [Audit-C]",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","concept ","\"Total Score [AUDIT-C]\"",": { " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Total Score [Audit-C]'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "219",
               "name" : "Total Score [AUDIT-C] code"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "223",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "221",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "222",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "220",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "225",
            "name" : "ANull_BDefined",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","ANull_BDefined",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "null"," ","~"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "227",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "231",
            "name" : "ADefined_BNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","ADefined_BNull",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "233",
                        "value" : [ "5"," ","~"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "235",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "234",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "237",
            "name" : "ANull_BNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","ANull_BNull",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "239",
                           "s" : [ {
                              "r" : "240",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "241",
                              "s" : [ {
                                 "value" : [ "String" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "242",
                           "s" : [ {
                              "r" : "243",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "244",
                              "s" : [ {
                                 "value" : [ "String" ]
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
               "localId" : "238",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "240",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "241",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "242",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "243",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "244",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "246",
            "name" : "ADefined_BDefined",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","ADefined_BDefined",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "248",
                        "value" : [ "3"," ","~"," ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "248",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "249",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "251",
            "name" : "CaseInsensitiveStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","CaseInsensitiveStrings",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "'FOO'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "253",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FOO",
                  "type" : "Literal"
               }, {
                  "localId" : "254",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "256",
            "name" : "WhiteSpaceTabTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceTabTrue",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "'foo bar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "'foo\\tbar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "258",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo bar",
                  "type" : "Literal"
               }, {
                  "localId" : "259",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\tbar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "261",
            "name" : "WhiteSpaceTabReturnTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceTabReturnTrue",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "'foo\\tbar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "'foo\\nbar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "263",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\tbar",
                  "type" : "Literal"
               }, {
                  "localId" : "264",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\nbar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "266",
            "name" : "WhiteSpaceIncorrectSpaceFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceIncorrectSpaceFalse",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "'foo bar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "value" : [ "'foo\\t\\tbar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "268",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo bar",
                  "type" : "Literal"
               }, {
                  "localId" : "269",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\t\tbar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "271",
            "name" : "WhiteSpaceIncorrectNumberTabsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceIncorrectNumberTabsFalse",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "'foo\\t\\tbar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~" ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "'foo\\tbar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "273",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\t\tbar",
                  "type" : "Literal"
               }, {
                  "localId" : "274",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\tbar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "276",
            "name" : "WhiteSpaceNoSpaceFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceNoSpaceFalse",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "'foo bar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "value" : [ "'foobar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "277",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo bar",
                  "type" : "Literal"
               }, {
                  "localId" : "279",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foobar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "281",
            "name" : "EqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","EqRatios",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "r" : "285",
                        "s" : [ {
                           "r" : "283",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "284",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "3 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "285",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "283",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "284",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "288",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "286",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "287",
                     "value" : 3,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "290",
            "name" : "UneqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","UneqRatios",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "r" : "294",
                        "s" : [ {
                           "r" : "292",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "297",
                        "s" : [ {
                           "r" : "295",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "value" : [ "4 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "291",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "294",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "292",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "293",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "297",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "295",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "296",
                     "value" : 4,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "299",
            "name" : "UneqRatioTypes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","UneqRatioTypes",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "303",
                        "s" : [ {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "302",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "312",
                        "s" : [ {
                           "r" : "304",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "313",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "303",
                     "type" : "Ratio",
                     "numerator" : {
                        "localId" : "301",
                        "value" : 10,
                        "unit" : "mg"
                     },
                     "denominator" : {
                        "localId" : "302",
                        "value" : 2,
                        "unit" : "dL"
                     }
                  }
               }, {
                  "localId" : "314",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "312",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "304",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "305",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "306",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "307",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "308",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "309",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "316",
            "name" : "SameTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "// define EmptyTuples: { : } ~ { : } // TODO: We don't seem to support this format\n","define ","SameTuples",": " ]
                  }, {
                     "r" : "317",
                     "s" : [ {
                        "r" : "318",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "319",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "320",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "321",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "322",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "323",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "317",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "318",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "319",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "320",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "321",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "322",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "323",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "325",
            "name" : "SameTuplesNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","SameTuplesNull",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "328",
                              "value" : [ "a",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "330",
                              "value" : [ "a"," : ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "327",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "328",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "329",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "330",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "332",
            "name" : "DifferentTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","DifferentTuples",": " ]
                  }, {
                     "r" : "333",
                     "s" : [ {
                        "r" : "334",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "335",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "336",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "337",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "338",
                              "s" : [ {
                                 "value" : [ "'x'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "339",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "333",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "334",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "335",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "336",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "337",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "338",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "x",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "339",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "341",
            "name" : "SameNestedTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "341",
                  "s" : [ {
                     "value" : [ "","define ","SameNestedTuples",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "r" : "343",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "344",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "345",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "346",
                                    "s" : [ {
                                       "value" : [ "'c'" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "347",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "348",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "349",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "350",
                                    "s" : [ {
                                       "value" : [ "'c'" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "342",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "343",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "344",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "345",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "346",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "c",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "347",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "348",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "349",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "350",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "c",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "352",
            "name" : "SameNestedTuplesNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "352",
                  "s" : [ {
                     "value" : [ "","define ","SameNestedTuplesNull",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "r" : "354",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "355",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "356",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "357",
                                    "value" : [ "c",": ","null" ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "358",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "359",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "360",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "361",
                                    "value" : [ "c",": ","null" ]
                                 } ]
                              }, {
                                 "value" : [ "}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "354",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "355",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "356",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "357",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "358",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "359",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "360",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "361",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "363",
            "name" : "EmptyLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "363",
                  "s" : [ {
                     "value" : [ "","define ","EmptyLists",": " ]
                  }, {
                     "r" : "364",
                     "s" : [ {
                        "r" : "365",
                        "value" : [ "{ }"," ","~"," ","{ }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "364",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "365",
                  "type" : "List",
                  "element" : [ ]
               }, {
                  "localId" : "366",
                  "type" : "List",
                  "element" : [ ]
               } ]
            }
         }, {
            "localId" : "368",
            "name" : "DifferentTypesLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "368",
                  "s" : [ {
                     "value" : [ "","define ","DifferentTypesLists",": " ]
                  }, {
                     "r" : "369",
                     "s" : [ {
                        "r" : "370",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "371",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "372",
                           "s" : [ {
                              "value" : [ "'2'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "373",
                           "s" : [ {
                              "value" : [ "'3'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "374",
                        "s" : [ {
                           "r" : "375",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "369",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "370",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "371",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "372",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "373",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "374",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "375",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "376",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "377",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "379",
            "name" : "DifferentLengthLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "379",
                  "s" : [ {
                     "value" : [ "","define ","DifferentLengthLists",": " ]
                  }, {
                     "r" : "380",
                     "s" : [ {
                        "r" : "381",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "382",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "383",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "384",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "385",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "380",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "381",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "382",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "383",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "384",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "385",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "387",
            "name" : "DifferentOrderLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "387",
                  "s" : [ {
                     "value" : [ "","define ","DifferentOrderLists",": " ]
                  }, {
                     "r" : "388",
                     "s" : [ {
                        "r" : "389",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "390",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "391",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "392",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "393",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "394",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "388",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "389",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "390",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "391",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "392",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "393",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "394",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "396",
            "name" : "SameLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "396",
                  "s" : [ {
                     "value" : [ "","define ","SameLists",": " ]
                  }, {
                     "r" : "397",
                     "s" : [ {
                        "r" : "398",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "399",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "400",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "401",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "402",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "403",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "404",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "405",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "397",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "398",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "399",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "400",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "401",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "402",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "403",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "404",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "405",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "407",
            "name" : "SameListsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "407",
                  "s" : [ {
                     "value" : [ "","define ","SameListsNull",": " ]
                  }, {
                     "r" : "408",
                     "s" : [ {
                        "r" : "409",
                        "s" : [ {
                           "r" : "410",
                           "value" : [ "{","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "413",
                        "s" : [ {
                           "r" : "414",
                           "value" : [ "{","null",", ","null",", ","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "408",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "409",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "410",
                     "type" : "Null"
                  }, {
                     "localId" : "411",
                     "type" : "Null"
                  }, {
                     "localId" : "412",
                     "type" : "Null"
                  } ]
               }, {
                  "localId" : "413",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "414",
                     "type" : "Null"
                  }, {
                     "localId" : "415",
                     "type" : "Null"
                  }, {
                     "localId" : "416",
                     "type" : "Null"
                  } ]
               } ]
            }
         }, {
            "localId" : "418",
            "name" : "SameNestedLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "418",
                  "s" : [ {
                     "value" : [ "","define ","SameNestedLists",": " ]
                  }, {
                     "r" : "419",
                     "s" : [ {
                        "r" : "420",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "421",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "422",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "423",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "424",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "425",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "426",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "427",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "428",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "429",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "430",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "431",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "432",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "433",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "419",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "420",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "421",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "422",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "423",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "424",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "425",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "426",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  } ]
               }, {
                  "localId" : "427",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "428",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "429",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "430",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "431",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "432",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "433",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "435",
            "name" : "SameNestedListsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "435",
                  "s" : [ {
                     "value" : [ "","define ","SameNestedListsNull",": " ]
                  }, {
                     "r" : "436",
                     "s" : [ {
                        "r" : "437",
                        "s" : [ {
                           "r" : "438",
                           "value" : [ "{","null",", " ]
                        }, {
                           "r" : "439",
                           "s" : [ {
                              "r" : "440",
                              "value" : [ "{","null",", ","null","}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "445",
                        "s" : [ {
                           "r" : "446",
                           "value" : [ "{","null",", " ]
                        }, {
                           "r" : "447",
                           "s" : [ {
                              "r" : "448",
                              "value" : [ "{","null",", ","null","}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "436",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "437",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "442",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "438",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "443",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "444",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "439",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "440",
                        "type" : "Null"
                     }, {
                        "localId" : "441",
                        "type" : "Null"
                     } ]
                  } ]
               }, {
                  "localId" : "445",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "450",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "446",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "451",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "452",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "447",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "448",
                        "type" : "Null"
                     }, {
                        "localId" : "449",
                        "type" : "Null"
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "454",
            "name" : "EmptyInterval",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "454",
                  "s" : [ {
                     "value" : [ "","define ","EmptyInterval",": " ]
                  }, {
                     "r" : "455",
                     "s" : [ {
                        "r" : "458",
                        "s" : [ {
                           "r" : "456",
                           "value" : [ "Interval(","null",", ","null",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "461",
                        "s" : [ {
                           "r" : "459",
                           "value" : [ "Interval(","null",", ","null",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "455",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "458",
                  "lowClosed" : false,
                  "highClosed" : false,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "456",
                     "type" : "Null"
                  },
                  "high" : {
                     "localId" : "457",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "461",
                  "lowClosed" : false,
                  "highClosed" : false,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "459",
                     "type" : "Null"
                  },
                  "high" : {
                     "localId" : "460",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "463",
            "name" : "IntervalDifferentPointTypes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "463",
                  "s" : [ {
                     "value" : [ "","define ","IntervalDifferentPointTypes",":  " ]
                  }, {
                     "r" : "464",
                     "s" : [ {
                        "r" : "467",
                        "s" : [ {
                           "r" : "465",
                           "value" : [ "Interval[","1",", ","5","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "470",
                        "s" : [ {
                           "value" : [ "Interval[" ]
                        }, {
                           "r" : "468",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "469",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ "]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "464",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "467",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "465",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "466",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "470",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "468",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "469",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "472",
            "name" : "IntervalDifferentStarts",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "472",
                  "s" : [ {
                     "value" : [ "","define ","IntervalDifferentStarts",": " ]
                  }, {
                     "r" : "473",
                     "s" : [ {
                        "r" : "476",
                        "s" : [ {
                           "r" : "474",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "479",
                        "s" : [ {
                           "r" : "477",
                           "value" : [ "Interval[","2",",","3","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "473",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "476",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "474",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "475",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "479",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "477",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "478",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "481",
            "name" : "IntervalDifferentEndings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "481",
                  "s" : [ {
                     "value" : [ "","define ","IntervalDifferentEndings",": " ]
                  }, {
                     "r" : "482",
                     "s" : [ {
                        "r" : "485",
                        "s" : [ {
                           "r" : "483",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "488",
                        "s" : [ {
                           "r" : "486",
                           "value" : [ "Interval[","1",",","4","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "482",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "485",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "483",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "484",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "488",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "486",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "487",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "490",
            "name" : "SameIntervals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "490",
                  "s" : [ {
                     "value" : [ "","define ","SameIntervals",": " ]
                  }, {
                     "r" : "491",
                     "s" : [ {
                        "r" : "494",
                        "s" : [ {
                           "r" : "492",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "497",
                        "s" : [ {
                           "r" : "495",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "491",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "494",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "492",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "493",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "497",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "495",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "496",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "499",
            "name" : "TupleAndList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "499",
                  "s" : [ {
                     "value" : [ "","define ","TupleAndList",": " ]
                  }, {
                     "r" : "500",
                     "s" : [ {
                        "r" : "501",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "502",
                              "s" : [ {
                                 "value" : [ "'1'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "503",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "504",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "500",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "506",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "505",
                     "type" : "ToList",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "501",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "502",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "507",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "508",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "503",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "504",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "509",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "511",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "510",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               } ]
            }
         }, {
            "localId" : "513",
            "name" : "ListAndTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "513",
                  "s" : [ {
                     "value" : [ "","define ","ListAndTuple",": " ]
                  }, {
                     "r" : "514",
                     "s" : [ {
                        "r" : "515",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "516",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "517",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "518",
                              "s" : [ {
                                 "value" : [ "'1'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "514",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "519",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "520",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "515",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "516",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "521",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "523",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "522",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }, {
                  "localId" : "525",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "524",
                     "type" : "ToList",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "517",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "518",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  }
               } ]
            }
         }, {
            "localId" : "527",
            "name" : "TupleAndNullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "527",
                  "s" : [ {
                     "value" : [ "","define ","TupleAndNullList",": " ]
                  }, {
                     "r" : "528",
                     "s" : [ {
                        "r" : "529",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "530",
                              "s" : [ {
                                 "value" : [ "'1'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "531",
                        "s" : [ {
                           "r" : "532",
                           "value" : [ "{","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "528",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "529",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "530",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "534",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "533",
                     "type" : "SingletonFrom",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "531",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "532",
                           "type" : "Null"
                        } ]
                     }
                  },
                  "asTypeSpecifier" : {
                     "localId" : "535",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "536",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "537",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "539",
            "name" : "NullListAndTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "539",
                  "s" : [ {
                     "value" : [ "","define ","NullListAndTuple",": " ]
                  }, {
                     "r" : "540",
                     "s" : [ {
                        "r" : "541",
                        "s" : [ {
                           "r" : "542",
                           "value" : [ "{","null","}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "543",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "544",
                              "s" : [ {
                                 "value" : [ "'1'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "540",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "546",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "545",
                     "type" : "SingletonFrom",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "541",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "542",
                           "type" : "Null"
                        } ]
                     }
                  },
                  "asTypeSpecifier" : {
                     "localId" : "547",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "548",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "549",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "543",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "544",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "551",
            "name" : "SameCodeAndCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "551",
                  "s" : [ {
                     "value" : [ "","define ","SameCodeAndCode",": " ]
                  }, {
                     "r" : "552",
                     "s" : [ {
                        "r" : "553",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "554",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code clone\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "552",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "553",
                  "name" : "Tobacco smoking status code",
                  "type" : "CodeRef"
               }, {
                  "localId" : "554",
                  "name" : "Tobacco smoking status code clone",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "localId" : "556",
            "name" : "SameCodeAndConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "556",
                  "s" : [ {
                     "value" : [ "","define ","SameCodeAndConcept",": " ]
                  }, {
                     "r" : "557",
                     "s" : [ {
                        "r" : "558",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code clone\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "559",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "557",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "561",
                  "type" : "ToConcept",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "558",
                     "name" : "Tobacco smoking status code clone",
                     "type" : "CodeRef"
                  }
               }, {
                  "localId" : "559",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               } ]
            }
         }, {
            "localId" : "563",
            "name" : "SameConceptAndCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "563",
                  "s" : [ {
                     "value" : [ "","define ","SameConceptAndCode",": " ]
                  }, {
                     "r" : "564",
                     "s" : [ {
                        "r" : "565",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "566",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code clone\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "564",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "565",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               }, {
                  "localId" : "568",
                  "type" : "ToConcept",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "566",
                     "name" : "Tobacco smoking status code clone",
                     "type" : "CodeRef"
                  }
               } ]
            }
         }, {
            "localId" : "570",
            "name" : "SameConceptAndConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "570",
                  "s" : [ {
                     "value" : [ "","define ","SameConceptAndConcept",": " ]
                  }, {
                     "r" : "571",
                     "s" : [ {
                        "r" : "572",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "573",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status clone\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "571",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "572",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               }, {
                  "localId" : "573",
                  "name" : "Tobacco smoking status clone",
                  "type" : "ConceptRef"
               } ]
            }
         }, {
            "localId" : "575",
            "name" : "DiffCodeAndCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "575",
                  "s" : [ {
                     "value" : [ "","define ","DiffCodeAndCode",": " ]
                  }, {
                     "r" : "576",
                     "s" : [ {
                        "r" : "577",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "578",
                        "s" : [ {
                           "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "576",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "577",
                  "name" : "Tobacco smoking status code",
                  "type" : "CodeRef"
               }, {
                  "localId" : "578",
                  "name" : "Total Score [AUDIT-C] code",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "localId" : "580",
            "name" : "DiffCodeAndConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "580",
                  "s" : [ {
                     "value" : [ "","define ","DiffCodeAndConcept",": " ]
                  }, {
                     "r" : "581",
                     "s" : [ {
                        "r" : "582",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code clone\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "583",
                        "s" : [ {
                           "value" : [ "\"Total Score [AUDIT-C]\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "581",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "585",
                  "type" : "ToConcept",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "582",
                     "name" : "Tobacco smoking status code clone",
                     "type" : "CodeRef"
                  }
               }, {
                  "localId" : "583",
                  "name" : "Total Score [AUDIT-C]",
                  "type" : "ConceptRef"
               } ]
            }
         }, {
            "localId" : "587",
            "name" : "DiffConceptAndCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "587",
                  "s" : [ {
                     "value" : [ "","define ","DiffConceptAndCode",": " ]
                  }, {
                     "r" : "588",
                     "s" : [ {
                        "r" : "589",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "590",
                        "s" : [ {
                           "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "588",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "589",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               }, {
                  "localId" : "592",
                  "type" : "ToConcept",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "590",
                     "name" : "Total Score [AUDIT-C] code",
                     "type" : "CodeRef"
                  }
               } ]
            }
         }, {
            "localId" : "594",
            "name" : "DiffConceptAndConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "594",
                  "s" : [ {
                     "value" : [ "","define ","DiffConceptAndConcept",": " ]
                  }, {
                     "r" : "595",
                     "s" : [ {
                        "r" : "596",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "597",
                        "s" : [ {
                           "value" : [ "\"Total Score [AUDIT-C]\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "595",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "596",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               }, {
                  "localId" : "597",
                  "name" : "Total Score [AUDIT-C]",
                  "type" : "ConceptRef"
               } ]
            }
         }, {
            "localId" : "599",
            "name" : "EqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "599",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimes",": " ]
                  }, {
                     "r" : "600",
                     "s" : [ {
                        "r" : "611",
                        "s" : [ {
                           "r" : "601",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "608",
                           "s" : [ {
                              "r" : "608",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "622",
                        "s" : [ {
                           "r" : "612",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "619",
                           "s" : [ {
                              "r" : "619",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "600",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "611",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "601",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "602",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "603",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "604",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "605",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "606",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "607",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "608",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "622",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "612",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "613",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "614",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "615",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "616",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "617",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "618",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "619",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "624",
            "name" : "UneqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "624",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimes",": " ]
                  }, {
                     "r" : "625",
                     "s" : [ {
                        "r" : "636",
                        "s" : [ {
                           "r" : "626",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "633",
                           "s" : [ {
                              "r" : "633",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "647",
                        "s" : [ {
                           "r" : "637",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","201",", " ]
                        }, {
                           "r" : "644",
                           "s" : [ {
                              "r" : "644",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "625",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "636",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "626",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "627",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "628",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "629",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "630",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "631",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "632",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "633",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "647",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "637",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "638",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "639",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "640",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "641",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "642",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "643",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "201",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "644",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "649",
            "name" : "EqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "649",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesTZ",": " ]
                  }, {
                     "r" : "650",
                     "s" : [ {
                        "r" : "661",
                        "s" : [ {
                           "r" : "651",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","23",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "658",
                           "s" : [ {
                              "r" : "658",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "672",
                        "s" : [ {
                           "r" : "662",
                           "value" : [ "DateTime","(","2000",", ","3",", ","16",", ","2",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "669",
                           "s" : [ {
                              "r" : "669",
                              "value" : [ "+","4.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "650",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "661",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "651",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "652",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "653",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "654",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "655",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "656",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "657",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "658",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "672",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "662",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "663",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "664",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "665",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "666",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "667",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "668",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "669",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "674",
            "name" : "UneqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "674",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesTZ",": " ]
                  }, {
                     "r" : "675",
                     "s" : [ {
                        "r" : "686",
                        "s" : [ {
                           "r" : "676",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "683",
                           "s" : [ {
                              "r" : "683",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "697",
                        "s" : [ {
                           "r" : "687",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "694",
                           "s" : [ {
                              "r" : "694",
                              "value" : [ "+","2.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "675",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "686",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "676",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "677",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "678",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "679",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "680",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "681",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "682",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "683",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "697",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "687",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "688",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "689",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "690",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "691",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "692",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "693",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "694",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "699",
            "name" : "EqDateTimesNullMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "699",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullMs",": " ]
                  }, {
                     "r" : "700",
                     "s" : [ {
                        "r" : "710",
                        "s" : [ {
                           "r" : "701",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "719",
                        "s" : [ {
                           "r" : "711",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "700",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "710",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "701",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "702",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "703",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "704",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "705",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "706",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "707",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "719",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "711",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "712",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "713",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "714",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "715",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "716",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "721",
            "name" : "EqDateTimesNullOtherMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "721",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullOtherMs",": " ]
                  }, {
                     "r" : "722",
                     "s" : [ {
                        "r" : "731",
                        "s" : [ {
                           "r" : "723",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "741",
                        "s" : [ {
                           "r" : "732",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "722",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "731",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "723",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "724",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "725",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "726",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "727",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "728",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "741",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "732",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "733",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "734",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "735",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "736",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "737",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "738",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "743",
            "name" : "EqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "743",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "744",
                     "s" : [ {
                        "r" : "750",
                        "s" : [ {
                           "r" : "745",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "756",
                        "s" : [ {
                           "r" : "751",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "744",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "750",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "745",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "746",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "747",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "756",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "751",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "752",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "753",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "758",
            "name" : "UneqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "758",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "759",
                     "s" : [ {
                        "r" : "765",
                        "s" : [ {
                           "r" : "760",
                           "value" : [ "DateTime","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "771",
                        "s" : [ {
                           "r" : "766",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "759",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "765",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "760",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "761",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "762",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "771",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "766",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "767",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "768",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "773",
            "name" : "PossiblyEqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "773",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "774",
                     "s" : [ {
                        "r" : "780",
                        "s" : [ {
                           "r" : "775",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "789",
                        "s" : [ {
                           "r" : "781",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","13",", ","43",", ","32",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "774",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "780",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "775",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "776",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "777",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "789",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "781",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "782",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "783",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "784",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "785",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "786",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "791",
            "name" : "UneqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "791",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "792",
                     "s" : [ {
                        "r" : "801",
                        "s" : [ {
                           "r" : "793",
                           "value" : [ "DateTime","(","2000",", ","4",", ","13",", ","12",", ","43",", ","32",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "807",
                        "s" : [ {
                           "r" : "802",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "792",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "801",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "793",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "794",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "795",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "796",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "797",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "798",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "807",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "802",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "803",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "804",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "809",
            "name" : "PossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "809",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "810",
                     "s" : [ {
                        "r" : "816",
                        "s" : [ {
                           "r" : "811",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "820",
                        "s" : [ {
                           "r" : "817",
                           "value" : [ "DateTime","(","2000",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "810",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "816",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "811",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "812",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "813",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "820",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "817",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "822",
            "name" : "ImpossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "822",
                  "s" : [ {
                     "value" : [ "","define ","ImpossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "823",
                     "s" : [ {
                        "r" : "829",
                        "s" : [ {
                           "r" : "824",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "834",
                        "s" : [ {
                           "r" : "830",
                           "value" : [ "DateTime","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "823",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "829",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "824",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "825",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "826",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "834",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "830",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "831",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "836",
            "name" : "DateAndDateTimeTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "836",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeTrue",": " ]
                  }, {
                     "r" : "837",
                     "s" : [ {
                        "r" : "843",
                        "s" : [ {
                           "r" : "838",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "849",
                        "s" : [ {
                           "r" : "844",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "837",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "851",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "843",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "838",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "839",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "840",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "849",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "844",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "845",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "846",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "853",
            "name" : "DateAndDateTimeNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "853",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeNotEqual",": " ]
                  }, {
                     "r" : "854",
                     "s" : [ {
                        "r" : "860",
                        "s" : [ {
                           "r" : "855",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "866",
                        "s" : [ {
                           "r" : "861",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "854",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "868",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "860",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "855",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "856",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "857",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "866",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "861",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "862",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "863",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "870",
            "name" : "DateAndDateTimeUncertainFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "870",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeUncertainFalse",": " ]
                  }, {
                     "r" : "871",
                     "s" : [ {
                        "r" : "877",
                        "s" : [ {
                           "r" : "872",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "886",
                        "s" : [ {
                           "r" : "878",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "871",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "888",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "877",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "872",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "873",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "874",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "886",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "878",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "879",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "880",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "881",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "882",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "883",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "890",
            "name" : "DateTimeAndDateTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "890",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateTrue",": " ]
                  }, {
                     "r" : "891",
                     "s" : [ {
                        "r" : "897",
                        "s" : [ {
                           "r" : "892",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "903",
                        "s" : [ {
                           "r" : "898",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "891",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "897",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "892",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "893",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "894",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "905",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "903",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "898",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "899",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "900",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "907",
            "name" : "DateTimeAndDateNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "907",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateNotEqual",": " ]
                  }, {
                     "r" : "908",
                     "s" : [ {
                        "r" : "914",
                        "s" : [ {
                           "r" : "909",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "920",
                        "s" : [ {
                           "r" : "915",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "908",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "914",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "909",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "910",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "911",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "922",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "920",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "915",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "916",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "917",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "924",
            "name" : "DateTimeAndDateUncertainFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "924",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateUncertainFalse",": " ]
                  }, {
                     "r" : "925",
                     "s" : [ {
                        "r" : "934",
                        "s" : [ {
                           "r" : "926",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "940",
                        "s" : [ {
                           "r" : "935",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "925",
               "type" : "Equivalent",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "934",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "926",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "927",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "928",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "929",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "930",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "931",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "942",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "940",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "935",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "936",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "937",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         } ]
      }
   }
}

/* Less
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AGtB_Int: 5 < 4
define AEqB_Int: 5 < 5
define ALtB_Int: 5 < 6
define AGtB_Quantity: 5 'm' < 4 'm'
define AEqB_Quantity: 5 'm' < 5 'm'
define ALtB_Quantity: 5 'm' < 6 'm'
define AGtB_Quantity_diff: 5 'm' < 5 'cm'
define AEqB_Quantity_diff: 5 'm' < 500 'cm'
define ALtB_Quantity_diff: 5 'm' < 5 'km'
define AGtB_Quantity_incompatible: 5 'Cel' < 4 'm'
define AEqB_Quantity_incompatible: 5 'Cel' < 5 'm'
define ALtB_Quantity_incompatible: 5 'Cel' < 40 'm'
*/

module.exports['Less'] = {
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
            "r" : "267",
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
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "5"," ","<"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "217",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "5"," ","<"," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ","<"," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "224",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "230",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "232",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "234",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "235",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "237",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "240",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "244",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "245",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "247",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "249",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "250",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "252",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "254",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "255",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "259",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "260",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "262",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "264",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "265",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "267",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "269",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "270",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

/* LessOrEqual
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AGtB_Int: 5 <= 4
define AEqB_Int: 5 <= 5
define ALtB_Int: 5 <= 6
define AGtB_Quantity: 5 'm' <= 4 'm'
define AEqB_Quantity: 5 'm' <= 5 'm'
define ALtB_Quantity: 5 'm' <= 6 'm'
define AGtB_Quantity_diff: 5 'm' <= 4 'm'
define AEqB_Quantity_diff: 5 'm' <= 500 'cm'
define ALtB_Quantity_diff: 5 'm' <= 5 'km'
define AGtB_Quantity_incompatible: 5 'Cel' <= 4 'm'
define AEqB_Quantity_incompatible: 5 'Cel' <= 5 'm'
define ALtB_Quantity_incompatible: 5 'Cel' <= 40 'm'
*/

module.exports['LessOrEqual'] = {
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
            "r" : "267",
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
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "5"," ","<="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "217",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "5"," ","<="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ","<="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "224",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "230",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "232",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "234",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "235",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "237",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "240",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "244",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "245",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "247",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "249",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "250",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "252",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "254",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "255",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "259",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "260",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "262",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "264",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "265",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "267",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "269",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "270",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

/* Greater
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AGtB_Int: 5 > 4
define AEqB_Int: 5 > 5
define ALtB_Int: 5 > 6
define AGtB_Quantity: 5 'm' > 4 'm'
define AEqB_Quantity: 5 'm' > 5 'm'
define ALtB_Quantity: 5 'm' > 6 'm'
define AGtB_Quantity_diff: 5 'm' > 5 'cm'
define AEqB_Quantity_diff: 5 'm' > 500 'cm'
define ALtB_Quantity_diff: 5 'm' > 5 'km'
define AGtB_Quantity_incompatible: 5 'Cel' > 4 'm'
define AEqB_Quantity_incompatible: 5 'Cel' > 5 'm'
define ALtB_Quantity_incompatible: 5 'Cel' > 40 'm'
*/

module.exports['Greater'] = {
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
            "r" : "267",
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
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "5"," ",">"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "217",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "5"," ",">"," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ",">"," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "224",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "230",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "232",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "234",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "235",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "237",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "240",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "244",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "245",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "247",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "249",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "250",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "252",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "254",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "255",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "259",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "260",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "262",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "264",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "265",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "267",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "269",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "270",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

/* GreaterOrEqual
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AGtB_Int: 5 >= 4
define AEqB_Int: 5 >= 5
define ALtB_Int: 5 >= 6
define AGtB_Quantity: 5 'm' >= 4 'm'
define AEqB_Quantity: 5 'm' >= 5 'm'
define ALtB_Quantity: 5 'm' >= 6 'm'
define AGtB_Quantity_diff: 5 'm' >= 5 'cm'
define AEqB_Quantity_diff: 5 'm' >= 500 'cm'
define ALtB_Quantity_diff: 5 'm' >= 5 'km'
define AGtB_Quantity_incompatible: 5 'Cel' >= 4 'm'
define AEqB_Quantity_incompatible: 5 'Cel' >= 5 'm'
define ALtB_Quantity_incompatible: 5 'Cel' >= 40 'm'
define DivideUcum_incompatible: (100 '[nmi_i]' / 2 'h') > 49 'mg/[lb_av]'
define DivideUcum: (100 'mg' / 2 '[lb_av]') > 49 'mg/[lb_av]'
*/

module.exports['GreaterOrEqual'] = {
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
            "r" : "279",
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
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "5"," ",">="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "217",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "5"," ",">="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ",">="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "224",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "230",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "232",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "234",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "235",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "237",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "240",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "244",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "245",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "247",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "249",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "250",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "252",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "254",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "255",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "259",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "260",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "262",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "264",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "265",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "267",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "269",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "270",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "272",
            "name" : "DivideUcum_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","DivideUcum_incompatible",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "274",
                           "s" : [ {
                              "r" : "275",
                              "s" : [ {
                                 "value" : [ "100 ","'[nmi_i]'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "276",
                              "s" : [ {
                                 "value" : [ "2 ","'h'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "49 ","'mg/[lb_av]'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "274",
                  "type" : "Divide",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "275",
                     "value" : 100,
                     "unit" : "[nmi_i]",
                     "type" : "Quantity"
                  }, {
                     "localId" : "276",
                     "value" : 2,
                     "unit" : "h",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "277",
                  "value" : 49,
                  "unit" : "mg/[lb_av]",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "279",
            "name" : "DivideUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","DivideUcum",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "281",
                           "s" : [ {
                              "r" : "282",
                              "s" : [ {
                                 "value" : [ "100 ","'mg'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "283",
                              "s" : [ {
                                 "value" : [ "2 ","'[lb_av]'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "49 ","'mg/[lb_av]'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "281",
                  "type" : "Divide",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "282",
                     "value" : 100,
                     "unit" : "mg",
                     "type" : "Quantity"
                  }, {
                     "localId" : "283",
                     "value" : 2,
                     "unit" : "[lb_av]",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "284",
                  "value" : 49,
                  "unit" : "mg/[lb_av]",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

