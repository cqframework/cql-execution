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
define UncertTuplesWithNullFieldOnFirstOne: Tuple{a: null, b: 'Goodbye'} = Tuple{a: 'Hello', b: 'Goodbye'}
define UneqTuplesWithNullFieldOnOne: Tuple{a: 'Hello', b: null} = Tuple{a: 'Goodbye', b: 'null'}
define UneqTuplesWithNullFieldOnFirstOne: Tuple{a: null, b: 'Hello'} = Tuple{a: 'null', b: 'Goodbye'}
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "1359",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "5"," ","="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
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
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ","="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
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
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "5"," ","="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
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
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","EqTuples",": " ]
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
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "255",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "256",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "257",
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
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "268",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "269",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "270",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "271",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "272",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "273",
                           "name" : "c",
                           "elementType" : {
                              "localId" : "274",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "275",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "276",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "277",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "278",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "279",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "280",
                           "name" : "c",
                           "elementType" : {
                              "localId" : "281",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "240",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "247",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "248",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "249",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "250",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "251",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "252",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "253",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "241",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "242",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "244",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "245",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "246",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "243",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "254",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "261",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "262",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "263",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "264",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "265",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "266",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "267",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "255",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "256",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "258",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "259",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "260",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "257",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "localId" : "284",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "284",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuples",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "287",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "288",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "289",
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
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "301",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "302",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "303",
                                    "s" : [ {
                                       "r" : "304",
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
               "localId" : "285",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "316",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "317",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "318",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "319",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "320",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "321",
                           "name" : "c",
                           "elementType" : {
                              "localId" : "322",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               }, {
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
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "328",
                           "name" : "c",
                           "elementType" : {
                              "localId" : "329",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "286",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "293",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "294",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "295",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "296",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "297",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "298",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "299",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "287",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "288",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "290",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "291",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "292",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "289",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "300",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "309",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "310",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "311",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "312",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "313",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "314",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "315",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "301",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "302",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "306",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "307",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "308",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "303",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "Negate",
                              "signature" : [ {
                                 "localId" : "305",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              } ],
                              "operand" : {
                                 "localId" : "304",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "localId" : "332",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","EqTuplesWithNullFields",": " ]
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
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "337",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "343",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "344",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "346",
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
               "localId" : "333",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "352",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "353",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "354",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "355",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "356",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "357",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "358",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "359",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "360",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "361",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "334",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "338",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "339",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "340",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "341",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "342",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "335",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "337",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "343",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "347",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "348",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "349",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "350",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "351",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "344",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "346",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "364",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "365",
                     "s" : [ {
                        "r" : "366",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "367",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "369",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "375",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "376",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "378",
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
               "localId" : "365",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "384",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "385",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "386",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "387",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "388",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "389",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "390",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "391",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "392",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "393",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "366",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "370",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "371",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "372",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "373",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "374",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "367",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "369",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "375",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "379",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "380",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "381",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "382",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "383",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "376",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Goodbye",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "378",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "396",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UncertTuplesWithNullFieldOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "396",
                  "s" : [ {
                     "value" : [ "","define ","UncertTuplesWithNullFieldOnOne",": " ]
                  }, {
                     "r" : "397",
                     "s" : [ {
                        "r" : "398",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "399",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "401",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "407",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "408",
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
                              "r" : "410",
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
               "localId" : "397",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "417",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "418",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "419",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "420",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "421",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "422",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "423",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "424",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "425",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "426",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "398",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "402",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "403",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "404",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "405",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "406",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "399",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "401",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "407",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "412",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "413",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "414",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "415",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "416",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "408",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "410",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "null",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "429",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UncertTuplesWithNullFieldOnFirstOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "429",
                  "s" : [ {
                     "value" : [ "","define ","UncertTuplesWithNullFieldOnFirstOne",": " ]
                  }, {
                     "r" : "430",
                     "s" : [ {
                        "r" : "431",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "432",
                              "value" : [ "a",": ","null" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "433",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "440",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "441",
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
                              "r" : "443",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
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
               "localId" : "430",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "450",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "451",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "452",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "453",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "454",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "455",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "456",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "457",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "458",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "459",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "431",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "435",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "436",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "437",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "438",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "439",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "432",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "433",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Goodbye",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "440",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "445",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "446",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "447",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "448",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "449",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "441",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "443",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Goodbye",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "462",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqTuplesWithNullFieldOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "462",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuplesWithNullFieldOnOne",": " ]
                  }, {
                     "r" : "463",
                     "s" : [ {
                        "r" : "464",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "465",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "467",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "473",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "474",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "476",
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
               "localId" : "463",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "483",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "484",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "485",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "486",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "487",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "488",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "489",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "490",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "491",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "492",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "464",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "468",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "469",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "470",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "471",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "472",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "465",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "467",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "473",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "478",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "479",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "480",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "481",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "482",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "474",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Goodbye",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "476",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "null",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "495",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqTuplesWithNullFieldOnFirstOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "495",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuplesWithNullFieldOnFirstOne",": " ]
                  }, {
                     "r" : "496",
                     "s" : [ {
                        "r" : "497",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "498",
                              "value" : [ "a",": ","null" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "499",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "506",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "507",
                              "s" : [ {
                                 "value" : [ "'null'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "509",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
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
               "localId" : "496",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "516",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "517",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "518",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "519",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "520",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "521",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "522",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "523",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "524",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "525",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "497",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "501",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "502",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "503",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "504",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "505",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "498",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "499",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "506",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "511",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "512",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "513",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "514",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "515",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "507",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "null",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "509",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Goodbye",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "528",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "528",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimes",": " ]
                  }, {
                     "r" : "529",
                     "s" : [ {
                        "r" : "548",
                        "s" : [ {
                           "r" : "530",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "537",
                           "s" : [ {
                              "r" : "537",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "575",
                        "s" : [ {
                           "r" : "557",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "564",
                           "s" : [ {
                              "r" : "564",
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
               "localId" : "529",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "584",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "585",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "548",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "549",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "550",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "551",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "552",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "553",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "554",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "555",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "556",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "530",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "531",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "532",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "533",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "534",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "535",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "536",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "537",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "575",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "576",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "577",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "578",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "579",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "580",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "581",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "582",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "583",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "557",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "558",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "559",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "560",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "561",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "562",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "563",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "564",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "588",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "588",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimes",": " ]
                  }, {
                     "r" : "589",
                     "s" : [ {
                        "r" : "608",
                        "s" : [ {
                           "r" : "590",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "597",
                           "s" : [ {
                              "r" : "597",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "635",
                        "s" : [ {
                           "r" : "617",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","201",", " ]
                        }, {
                           "r" : "624",
                           "s" : [ {
                              "r" : "624",
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
               "localId" : "589",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "644",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "645",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "608",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "609",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "610",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "611",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "612",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "613",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "614",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "615",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "616",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "590",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "591",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "592",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "593",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "594",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "595",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "596",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "597",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "635",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "636",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "637",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "638",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "639",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "640",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "641",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "642",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "643",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "617",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "618",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "619",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "620",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "621",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "622",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "623",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "201",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "624",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "648",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "648",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesTZ",": " ]
                  }, {
                     "r" : "649",
                     "s" : [ {
                        "r" : "668",
                        "s" : [ {
                           "r" : "650",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","23",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "657",
                           "s" : [ {
                              "r" : "657",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "695",
                        "s" : [ {
                           "r" : "677",
                           "value" : [ "DateTime","(","2000",", ","3",", ","16",", ","2",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "684",
                           "s" : [ {
                              "r" : "684",
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
               "localId" : "649",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "704",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "705",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "668",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "669",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "670",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "671",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "672",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "673",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "674",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "675",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "676",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "650",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "651",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "652",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "653",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "654",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "655",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "656",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "657",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "695",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "696",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "697",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "698",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "699",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "700",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "701",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "702",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "703",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "677",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "678",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "679",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "680",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "681",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "682",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "683",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "684",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "708",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "708",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesTZ",": " ]
                  }, {
                     "r" : "709",
                     "s" : [ {
                        "r" : "728",
                        "s" : [ {
                           "r" : "710",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "717",
                           "s" : [ {
                              "r" : "717",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "755",
                        "s" : [ {
                           "r" : "737",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "744",
                           "s" : [ {
                              "r" : "744",
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
               "localId" : "709",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "764",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "765",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "728",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "729",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "730",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "731",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "732",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "733",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "734",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "735",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "736",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "710",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "711",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "712",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "713",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "714",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "715",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "716",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "717",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "755",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "756",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "757",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "758",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "759",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "760",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "761",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "762",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "763",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "737",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "738",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "739",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "740",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "741",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "742",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "743",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "744",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "768",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesNullMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "768",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullMs",": " ]
                  }, {
                     "r" : "769",
                     "s" : [ {
                        "r" : "786",
                        "s" : [ {
                           "r" : "770",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "808",
                        "s" : [ {
                           "r" : "794",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "769",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "815",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "816",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "786",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "787",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "788",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "789",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "790",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "791",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "792",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "793",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "770",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "771",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "772",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "773",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "774",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "775",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "776",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "808",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "809",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "810",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "811",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "812",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "813",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "814",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "794",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "795",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "796",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "797",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "798",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "799",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "819",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesNullOtherMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "819",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullOtherMs",": " ]
                  }, {
                     "r" : "820",
                     "s" : [ {
                        "r" : "835",
                        "s" : [ {
                           "r" : "821",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "858",
                        "s" : [ {
                           "r" : "842",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "820",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "866",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "867",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "835",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "836",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "837",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "838",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "839",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "840",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "841",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "821",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "822",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "823",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "824",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "825",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "826",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "858",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "859",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "860",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "861",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "862",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "863",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "864",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "865",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "842",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "843",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "844",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "845",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "846",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "847",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "848",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "870",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "870",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "871",
                     "s" : [ {
                        "r" : "880",
                        "s" : [ {
                           "r" : "872",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "892",
                        "s" : [ {
                           "r" : "884",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "871",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "896",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "897",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "880",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "881",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "882",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "883",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "872",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "873",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "874",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "892",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "893",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "894",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "895",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "884",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "885",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "886",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "900",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "900",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "901",
                     "s" : [ {
                        "r" : "910",
                        "s" : [ {
                           "r" : "902",
                           "value" : [ "DateTime","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "922",
                        "s" : [ {
                           "r" : "914",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "901",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "926",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "927",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "910",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "911",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "912",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "913",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "902",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "903",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "904",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "922",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "923",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "924",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "925",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "914",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "915",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "916",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "930",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "PossiblyEqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "930",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "931",
                     "s" : [ {
                        "r" : "940",
                        "s" : [ {
                           "r" : "932",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "958",
                        "s" : [ {
                           "r" : "944",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","13",", ","43",", ","32",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "931",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "965",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "966",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "940",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "941",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "942",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "943",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "932",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "933",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "934",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "958",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "959",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "960",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "961",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "962",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "963",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "964",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "944",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "945",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "946",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "947",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "948",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "949",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "969",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "969",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "970",
                     "s" : [ {
                        "r" : "985",
                        "s" : [ {
                           "r" : "971",
                           "value" : [ "DateTime","(","2000",", ","4",", ","13",", ","12",", ","43",", ","32",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1000",
                        "s" : [ {
                           "r" : "992",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "970",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1004",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1005",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "985",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "986",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "987",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "988",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "989",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "990",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "991",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "971",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "972",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "973",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "974",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "975",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "976",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1000",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1001",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1002",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1003",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "992",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "993",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "994",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1008",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "PossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1008",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "1009",
                     "s" : [ {
                        "r" : "1018",
                        "s" : [ {
                           "r" : "1010",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1026",
                        "s" : [ {
                           "r" : "1022",
                           "value" : [ "DateTime","(","2000",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1009",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1028",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1029",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1018",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1019",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1020",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1021",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1010",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1011",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1012",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1026",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1027",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1022",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1032",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1032",
                  "s" : [ {
                     "value" : [ "","define ","ImpossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "1033",
                     "s" : [ {
                        "r" : "1042",
                        "s" : [ {
                           "r" : "1034",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1052",
                        "s" : [ {
                           "r" : "1046",
                           "value" : [ "DateTime","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1033",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1055",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1056",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1042",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1043",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1044",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1045",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1034",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1035",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1036",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1052",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1053",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1054",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1046",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1047",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1059",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1059",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeTrue",": " ]
                  }, {
                     "r" : "1060",
                     "s" : [ {
                        "r" : "1069",
                        "s" : [ {
                           "r" : "1061",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1081",
                        "s" : [ {
                           "r" : "1073",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1060",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1088",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1089",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1086",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1087",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1069",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1070",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1071",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1072",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1061",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1062",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1063",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "1081",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1082",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1083",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1084",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1073",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1074",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1075",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1092",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1092",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeNotEqual",": " ]
                  }, {
                     "r" : "1093",
                     "s" : [ {
                        "r" : "1102",
                        "s" : [ {
                           "r" : "1094",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1114",
                        "s" : [ {
                           "r" : "1106",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1093",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1121",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1122",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1119",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1120",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1102",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1103",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1104",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1105",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1094",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1095",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1096",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "1114",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1115",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1116",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1117",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1106",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1107",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1108",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1125",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeUncertainNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1125",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeUncertainNull",": " ]
                  }, {
                     "r" : "1126",
                     "s" : [ {
                        "r" : "1135",
                        "s" : [ {
                           "r" : "1127",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1153",
                        "s" : [ {
                           "r" : "1139",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1126",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1163",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1164",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1161",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1162",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1135",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1136",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1137",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1138",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1127",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1128",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1129",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "1153",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1154",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1155",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1156",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1157",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1158",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1159",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1139",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1140",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1141",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1142",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1143",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1144",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1167",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1167",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateTrue",": " ]
                  }, {
                     "r" : "1168",
                     "s" : [ {
                        "r" : "1177",
                        "s" : [ {
                           "r" : "1169",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1189",
                        "s" : [ {
                           "r" : "1181",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1168",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1196",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1197",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1177",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1178",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1179",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1180",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1169",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1170",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1171",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1194",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1195",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1189",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1190",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1191",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1192",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1181",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1182",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1183",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "1200",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1200",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateNotEqual",": " ]
                  }, {
                     "r" : "1201",
                     "s" : [ {
                        "r" : "1210",
                        "s" : [ {
                           "r" : "1202",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1222",
                        "s" : [ {
                           "r" : "1214",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1201",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1229",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1230",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1210",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1211",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1212",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1213",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1202",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1203",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1204",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1227",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1228",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1223",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1224",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1225",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1214",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1215",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1216",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "1233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateUncertainNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1233",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateUncertainNull",": " ]
                  }, {
                     "r" : "1234",
                     "s" : [ {
                        "r" : "1249",
                        "s" : [ {
                           "r" : "1235",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1264",
                        "s" : [ {
                           "r" : "1256",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1271",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1272",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1250",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1251",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1254",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1255",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1269",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1270",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1264",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1265",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1266",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1267",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1256",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1257",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1258",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "1275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1275",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "1276",
                     "s" : [ {
                        "r" : "1277",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1278",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1276",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1279",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1280",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "1278",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1283",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1283",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "1284",
                     "s" : [ {
                        "r" : "1285",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1286",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1287",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1288",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "1286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1291",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "1292",
                     "s" : [ {
                        "r" : "1293",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1294",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1292",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1295",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1296",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1293",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "1294",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1299",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "1300",
                     "s" : [ {
                        "r" : "1301",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1302",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1300",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1303",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1304",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1301",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "1302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1307",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "1308",
                     "s" : [ {
                        "r" : "1309",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1310",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1308",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1311",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1312",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "1310",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1315",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1315",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "1316",
                     "s" : [ {
                        "r" : "1317",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1318",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1316",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1319",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1320",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1317",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "1318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1323",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "1324",
                     "s" : [ {
                        "r" : "1325",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1326",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1327",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1328",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "1326",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1331",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1331",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "1332",
                     "s" : [ {
                        "r" : "1333",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1334",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1332",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1335",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1336",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1333",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "1334",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1339",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1339",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "1340",
                     "s" : [ {
                        "r" : "1341",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1342",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1340",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1343",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1344",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1341",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "1342",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "1347",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1347",
                  "s" : [ {
                     "value" : [ "","define ","EqRatios",": " ]
                  }, {
                     "r" : "1348",
                     "s" : [ {
                        "r" : "1351",
                        "s" : [ {
                           "r" : "1349",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "1350",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1354",
                        "s" : [ {
                           "r" : "1352",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "1353",
                           "s" : [ {
                              "value" : [ "3 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1348",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1355",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1356",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1351",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "1349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "1350",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "1354",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "1352",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "1353",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "1359",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1359",
                  "s" : [ {
                     "value" : [ "","define ","UneqRatios",": " ]
                  }, {
                     "r" : "1360",
                     "s" : [ {
                        "r" : "1363",
                        "s" : [ {
                           "r" : "1361",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "1362",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "1366",
                        "s" : [ {
                           "r" : "1364",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "1365",
                           "s" : [ {
                              "value" : [ "4 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1360",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "1367",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1368",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1363",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "1361",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "1362",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "1366",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "1364",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "1365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "1308",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "5"," ","!="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
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
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "5"," ","!="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "236",
                        "value" : [ "5"," ","!="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
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
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","EqTuples",": " ]
                  }, {
                     "r" : "288",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "247",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "248",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "249",
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
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "261",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "262",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "263",
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
               "localId" : "288",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "274",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "275",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "276",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "277",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "278",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "279",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "280",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "281",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "282",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "283",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "284",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "285",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "286",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "287",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  } ],
                  "operand" : [ {
                     "localId" : "246",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "253",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "254",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "255",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "256",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "257",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "258",
                                 "name" : "c",
                                 "elementType" : {
                                    "localId" : "259",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "247",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "248",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "250",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "251",
                                 "name" : "c",
                                 "elementType" : {
                                    "localId" : "252",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "249",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "260",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "267",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "268",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "269",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "270",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "271",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "272",
                                 "name" : "c",
                                 "elementType" : {
                                    "localId" : "273",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "261",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "262",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "264",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "265",
                                 "name" : "c",
                                 "elementType" : {
                                    "localId" : "266",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "263",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "localId" : "292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "292",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuples",": " ]
                  }, {
                     "r" : "338",
                     "s" : [ {
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "295",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "296",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "297",
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
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "309",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "310",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "311",
                                    "s" : [ {
                                       "r" : "312",
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
               "localId" : "338",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "339",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "293",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "324",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "325",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "326",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "327",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "328",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "329",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "330",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "331",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "332",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "333",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "334",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "335",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "336",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "337",
                                 "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  } ],
                  "operand" : [ {
                     "localId" : "294",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "301",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "302",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "303",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "304",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "305",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "306",
                                 "name" : "c",
                                 "elementType" : {
                                    "localId" : "307",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "295",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "296",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "298",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "299",
                                 "name" : "c",
                                 "elementType" : {
                                    "localId" : "300",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "297",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "308",
                     "type" : "Tuple",
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
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "322",
                                 "name" : "c",
                                 "elementType" : {
                                    "localId" : "323",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "309",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "310",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "314",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "315",
                                 "name" : "c",
                                 "elementType" : {
                                    "localId" : "316",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "311",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "type" : "Negate",
                                 "signature" : [ {
                                    "localId" : "313",
                                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "type" : "NamedTypeSpecifier"
                                 } ],
                                 "operand" : {
                                    "localId" : "312",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "localId" : "342",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "342",
                  "s" : [ {
                     "value" : [ "","define ","EqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "372",
                     "s" : [ {
                        "r" : "344",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "345",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "347",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "354",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "356",
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
               "localId" : "372",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "373",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "362",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "363",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "364",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "365",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "366",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "localId" : "367",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "368",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "369",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "370",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "371",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  } ],
                  "operand" : [ {
                     "localId" : "344",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "348",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "349",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "350",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "351",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "352",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "345",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "347",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "353",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "357",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "358",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "359",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "360",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "361",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "354",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "356",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "376",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "376",
                  "s" : [ {
                     "value" : [ "","define ","UneqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "406",
                     "s" : [ {
                        "r" : "378",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "379",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "381",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "387",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "388",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "390",
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
               "localId" : "406",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "407",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "377",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "396",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "397",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "398",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "399",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "400",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "localId" : "401",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "402",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "403",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "404",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "405",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  } ],
                  "operand" : [ {
                     "localId" : "378",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "382",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "383",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "384",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "385",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "386",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "379",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "381",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "387",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "391",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "392",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "393",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "394",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "395",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "388",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Goodbye",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "390",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "410",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UncertTuplesWithNullFieldOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "410",
                  "s" : [ {
                     "value" : [ "","define ","UncertTuplesWithNullFieldOnOne",": " ]
                  }, {
                     "r" : "441",
                     "s" : [ {
                        "r" : "412",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "413",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "415",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "421",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "422",
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
                              "r" : "424",
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
               "localId" : "441",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "442",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "411",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "431",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "432",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "433",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "434",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "435",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "localId" : "436",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "437",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "438",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "439",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "440",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  } ],
                  "operand" : [ {
                     "localId" : "412",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "416",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "417",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "418",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "419",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "420",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "413",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "415",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "421",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "426",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "427",
                           "name" : "a",
                           "elementType" : {
                              "localId" : "428",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "429",
                           "name" : "b",
                           "elementType" : {
                              "localId" : "430",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "422",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "424",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "null",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "445",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "445",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimes",": " ]
                  }, {
                     "r" : "503",
                     "s" : [ {
                        "r" : "465",
                        "s" : [ {
                           "r" : "447",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "454",
                           "s" : [ {
                              "r" : "454",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "492",
                        "s" : [ {
                           "r" : "474",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "481",
                           "s" : [ {
                              "r" : "481",
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
               "localId" : "503",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "504",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "446",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "501",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "502",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "465",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "466",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "467",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "468",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "469",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "470",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "471",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "472",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "473",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "447",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "448",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "449",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "450",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "451",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "452",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "453",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "454",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "492",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "493",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "494",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "495",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "496",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "497",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "498",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "499",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "500",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "474",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "475",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "476",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "477",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "478",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "479",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "480",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "481",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "507",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "507",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimes",": " ]
                  }, {
                     "r" : "565",
                     "s" : [ {
                        "r" : "527",
                        "s" : [ {
                           "r" : "509",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "516",
                           "s" : [ {
                              "r" : "516",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "554",
                        "s" : [ {
                           "r" : "536",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","201",", " ]
                        }, {
                           "r" : "543",
                           "s" : [ {
                              "r" : "543",
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
               "localId" : "565",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "566",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "508",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "563",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "564",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "527",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "528",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "529",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "530",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "531",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "532",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "533",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "534",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "535",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "509",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "510",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "511",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "512",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "513",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "514",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "515",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "516",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "554",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "555",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "556",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "557",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "558",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "559",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "560",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "561",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "562",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "536",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "537",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "538",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "539",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "540",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "541",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "542",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "201",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "543",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "569",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "569",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesTZ",": " ]
                  }, {
                     "r" : "627",
                     "s" : [ {
                        "r" : "589",
                        "s" : [ {
                           "r" : "571",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","23",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "578",
                           "s" : [ {
                              "r" : "578",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "616",
                        "s" : [ {
                           "r" : "598",
                           "value" : [ "DateTime","(","2000",", ","3",", ","16",", ","2",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "605",
                           "s" : [ {
                              "r" : "605",
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
               "localId" : "627",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "628",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "570",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "625",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "626",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "589",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "590",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "591",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "592",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "593",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "594",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "595",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "596",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "597",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "571",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "572",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "573",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "574",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "575",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "576",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "577",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "578",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "616",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "617",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "618",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "619",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "620",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "621",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "622",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "623",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "624",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "598",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "599",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "600",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "16",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "601",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "602",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "603",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "604",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "605",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "4.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "631",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "631",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesTZ",": " ]
                  }, {
                     "r" : "689",
                     "s" : [ {
                        "r" : "651",
                        "s" : [ {
                           "r" : "633",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "640",
                           "s" : [ {
                              "r" : "640",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "678",
                        "s" : [ {
                           "r" : "660",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "667",
                           "s" : [ {
                              "r" : "667",
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
               "localId" : "689",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "690",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "632",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "687",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "688",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "651",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "652",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "653",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "654",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "655",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "656",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "657",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "658",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "659",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "633",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "634",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "635",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "636",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "637",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "638",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "639",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "640",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "678",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "679",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "680",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "681",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "682",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "683",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "684",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "685",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "686",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "660",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "661",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "662",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "663",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "664",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "665",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "666",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "667",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "693",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesNullMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "693",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullMs",": " ]
                  }, {
                     "r" : "742",
                     "s" : [ {
                        "r" : "711",
                        "s" : [ {
                           "r" : "695",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "733",
                        "s" : [ {
                           "r" : "719",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "742",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "743",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "694",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "740",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "741",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "711",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "712",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "713",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "714",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "715",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "716",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "717",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "718",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "695",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "696",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "697",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "698",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "699",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "700",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "701",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "733",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "734",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "735",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "736",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "737",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "738",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "739",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "719",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "720",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "721",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "722",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "723",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "724",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "746",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesNullOtherMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "746",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullOtherMs",": " ]
                  }, {
                     "r" : "795",
                     "s" : [ {
                        "r" : "762",
                        "s" : [ {
                           "r" : "748",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "785",
                        "s" : [ {
                           "r" : "769",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "795",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "796",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "747",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "793",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "794",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "762",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "763",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "764",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "765",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "766",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "767",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "768",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "748",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "749",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "750",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "751",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "752",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "753",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "785",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "786",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "787",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "788",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "789",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "790",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "791",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "792",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "769",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "770",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "771",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "772",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "773",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "774",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "775",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "799",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "799",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "827",
                     "s" : [ {
                        "r" : "809",
                        "s" : [ {
                           "r" : "801",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "821",
                        "s" : [ {
                           "r" : "813",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "827",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "828",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "800",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "825",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "826",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "809",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "810",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "811",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "812",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "801",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "802",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "803",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "821",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "822",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "823",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "824",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "813",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "814",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "815",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "831",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "831",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "859",
                     "s" : [ {
                        "r" : "841",
                        "s" : [ {
                           "r" : "833",
                           "value" : [ "DateTime","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "853",
                        "s" : [ {
                           "r" : "845",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "859",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "860",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "832",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "857",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "858",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "841",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "842",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "843",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "844",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "833",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "834",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "835",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "14",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "853",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "854",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "855",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "856",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "845",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "846",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "847",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "863",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "PossiblyEqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "863",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "900",
                     "s" : [ {
                        "r" : "873",
                        "s" : [ {
                           "r" : "865",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "891",
                        "s" : [ {
                           "r" : "877",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","13",", ","43",", ","32",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "900",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "901",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "864",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "898",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "899",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "873",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "874",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "875",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "876",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "865",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "866",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "867",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "891",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "892",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "893",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "894",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "895",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "896",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "897",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "877",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "878",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "879",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "880",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "881",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "43",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "882",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "32",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "904",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "904",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "941",
                     "s" : [ {
                        "r" : "920",
                        "s" : [ {
                           "r" : "906",
                           "value" : [ "DateTime","(","2000",", ","4",", ","13",", ","12",", ","43",", ","32",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "935",
                        "s" : [ {
                           "r" : "927",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "941",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "942",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "905",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "939",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "940",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "920",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "921",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "922",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "923",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "924",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "925",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "926",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "906",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "907",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "908",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "909",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "910",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "43",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "911",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "32",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "935",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "936",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "937",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "938",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "927",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "928",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "929",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "945",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "PossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "945",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "967",
                     "s" : [ {
                        "r" : "955",
                        "s" : [ {
                           "r" : "947",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "963",
                        "s" : [ {
                           "r" : "959",
                           "value" : [ "DateTime","(","2000",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "967",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "968",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "946",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "965",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "966",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "955",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "956",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "957",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "958",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "947",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "948",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "949",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "963",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "964",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "959",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "971",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "971",
                  "s" : [ {
                     "value" : [ "","define ","ImpossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "996",
                     "s" : [ {
                        "r" : "981",
                        "s" : [ {
                           "r" : "973",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "991",
                        "s" : [ {
                           "r" : "985",
                           "value" : [ "DateTime","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "996",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "997",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "972",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "994",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "995",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "981",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "982",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "983",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "984",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "973",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "974",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "975",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "991",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "992",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "993",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "985",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "986",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "1000",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1000",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeFalse",": " ]
                  }, {
                     "r" : "1031",
                     "s" : [ {
                        "r" : "1010",
                        "s" : [ {
                           "r" : "1002",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1022",
                        "s" : [ {
                           "r" : "1014",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1031",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1032",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1001",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1029",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1030",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1027",
                     "type" : "ToDateTime",
                     "signature" : [ {
                        "localId" : "1028",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "1010",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ {
                           "localId" : "1011",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1012",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1013",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "year" : {
                           "localId" : "1002",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "1003",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "1004",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "1022",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "1023",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1024",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1025",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1014",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1015",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1016",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "1035",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1035",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeNotEqual",": " ]
                  }, {
                     "r" : "1066",
                     "s" : [ {
                        "r" : "1045",
                        "s" : [ {
                           "r" : "1037",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1057",
                        "s" : [ {
                           "r" : "1049",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1066",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1067",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1036",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1064",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1065",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1062",
                     "type" : "ToDateTime",
                     "signature" : [ {
                        "localId" : "1063",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "1045",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ {
                           "localId" : "1046",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1047",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1048",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "year" : {
                           "localId" : "1037",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "1038",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "1039",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "1057",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "1058",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1059",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1060",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1049",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1050",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1051",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "1070",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeUncertainTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1070",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeUncertainTrue",": " ]
                  }, {
                     "r" : "1110",
                     "s" : [ {
                        "r" : "1080",
                        "s" : [ {
                           "r" : "1072",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1098",
                        "s" : [ {
                           "r" : "1084",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1110",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1111",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1071",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1108",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1109",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1106",
                     "type" : "ToDateTime",
                     "signature" : [ {
                        "localId" : "1107",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "1080",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ {
                           "localId" : "1081",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1082",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1083",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "year" : {
                           "localId" : "1072",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "1073",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "1074",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "1098",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "1099",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1100",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1101",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1102",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1103",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1104",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1084",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1085",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1086",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "1087",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "1088",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "1089",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "1114",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1114",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateFalse",": " ]
                  }, {
                     "r" : "1145",
                     "s" : [ {
                        "r" : "1124",
                        "s" : [ {
                           "r" : "1116",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1136",
                        "s" : [ {
                           "r" : "1128",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1145",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1146",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1115",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1143",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1144",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1124",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "1125",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1126",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1127",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1116",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1117",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1118",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "1141",
                     "type" : "ToDateTime",
                     "signature" : [ {
                        "localId" : "1142",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "1136",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ {
                           "localId" : "1137",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1138",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1139",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "year" : {
                           "localId" : "1128",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "1129",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "1130",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "1149",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1149",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateNotEqual",": " ]
                  }, {
                     "r" : "1180",
                     "s" : [ {
                        "r" : "1159",
                        "s" : [ {
                           "r" : "1151",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1171",
                        "s" : [ {
                           "r" : "1163",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1180",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1181",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1150",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1178",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1179",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1159",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "1160",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1161",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1162",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1151",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1152",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1153",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "1176",
                     "type" : "ToDateTime",
                     "signature" : [ {
                        "localId" : "1177",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "1171",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ {
                           "localId" : "1172",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1173",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1174",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "year" : {
                           "localId" : "1163",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "1164",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "1165",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "1184",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateUncertainNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1184",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateUncertainNull",": " ]
                  }, {
                     "r" : "1224",
                     "s" : [ {
                        "r" : "1200",
                        "s" : [ {
                           "r" : "1186",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1215",
                        "s" : [ {
                           "r" : "1207",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1225",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1185",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1222",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1223",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1200",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "1201",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1202",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1203",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1204",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1205",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1206",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1186",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1187",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1188",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "1189",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "1190",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "1191",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "1220",
                     "type" : "ToDateTime",
                     "signature" : [ {
                        "localId" : "1221",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "1215",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ {
                           "localId" : "1216",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1217",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "1218",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "year" : {
                           "localId" : "1207",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "1208",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "1209",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "1228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1228",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "1234",
                     "s" : [ {
                        "r" : "1230",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1231",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1235",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1232",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1233",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "1238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1238",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "1244",
                     "s" : [ {
                        "r" : "1240",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1241",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1245",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1239",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1242",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1243",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "1248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1248",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "1254",
                     "s" : [ {
                        "r" : "1250",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1251",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1255",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1252",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1253",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1250",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 6,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "1258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1258",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "1264",
                     "s" : [ {
                        "r" : "1260",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1261",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1265",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1262",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1263",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1260",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "cm",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "1268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1268",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "1274",
                     "s" : [ {
                        "r" : "1270",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1271",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1274",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1275",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1269",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1272",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1273",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 500,
                     "unit" : "cm",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "1278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1278",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "1284",
                     "s" : [ {
                        "r" : "1280",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1281",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1285",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1282",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1283",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1281",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "1288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1288",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "1294",
                     "s" : [ {
                        "r" : "1290",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1291",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1294",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1295",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1292",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1293",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1291",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "1298",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1298",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "1304",
                     "s" : [ {
                        "r" : "1300",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1301",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1305",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1302",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1303",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "1308",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1308",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "1314",
                     "s" : [ {
                        "r" : "1310",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "1311",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1314",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "1315",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "1309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "1312",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1313",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "1310",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "1311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "r" : "1763",
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
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status code",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status code'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
         }, {
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code clone",
            "id" : "72166-2",
            "display" : "Tobacco smoking status code clone",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code clone\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status code clone'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Total Score [AUDIT-C] code",
            "id" : "75626-2",
            "display" : "Total Score [Audit-C] code",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","code ","\"Total Score [AUDIT-C] code\"",": ","'75626-2'"," from " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Total Score [Audit-C] code'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","concept ","\"Tobacco smoking status\"",": { " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Tobacco smoking status code"
            } ]
         }, {
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status clone",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","concept ","\"Tobacco smoking status clone\"",": { " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code clone\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Tobacco smoking status code clone"
            } ]
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Total Score [AUDIT-C]",
            "display" : "Total Score [Audit-C]",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","concept ","\"Total Score [AUDIT-C]\"",": { " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Total Score [Audit-C]'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Total Score [AUDIT-C] code"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "228",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "226",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "227",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ANull_BDefined",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","ANull_BDefined",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "233",
                        "value" : [ "null"," ","~"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
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
                  "localId" : "235",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ADefined_BNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","ADefined_BNull",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "242",
                        "value" : [ "5"," ","~"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
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
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "244",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ANull_BNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","ANull_BNull",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "r" : "252",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "253",
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
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "254",
                           "s" : [ {
                              "r" : "255",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "256",
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
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "253",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ADefined_BDefined",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","ADefined_BDefined",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "263",
                        "value" : [ "3"," ","~"," ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "CaseInsensitiveStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","CaseInsensitiveStrings",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "'FOO'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
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
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FOO",
                  "type" : "Literal"
               }, {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WhiteSpaceTabTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceTabTrue",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "'foo bar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "'foo\\tbar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
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
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo bar",
                  "type" : "Literal"
               }, {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\tbar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WhiteSpaceTabReturnTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceTabReturnTrue",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "'foo\\tbar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "293",
                        "s" : [ {
                           "value" : [ "'foo\\nbar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "290",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "295",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\tbar",
                  "type" : "Literal"
               }, {
                  "localId" : "293",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\nbar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WhiteSpaceIncorrectSpaceFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceIncorrectSpaceFalse",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "301",
                        "s" : [ {
                           "value" : [ "'foo bar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "'foo\\t\\tbar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "301",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo bar",
                  "type" : "Literal"
               }, {
                  "localId" : "303",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\t\tbar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WhiteSpaceIncorrectNumberTabsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceIncorrectNumberTabsFalse",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "r" : "311",
                        "s" : [ {
                           "value" : [ "'foo\\t\\tbar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~" ]
                     }, {
                        "r" : "313",
                        "s" : [ {
                           "value" : [ "'foo\\tbar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "310",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "315",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "311",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\t\tbar",
                  "type" : "Literal"
               }, {
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo\tbar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WhiteSpaceNoSpaceFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "319",
                  "s" : [ {
                     "value" : [ "","define ","WhiteSpaceNoSpaceFalse",": " ]
                  }, {
                     "r" : "320",
                     "s" : [ {
                        "r" : "321",
                        "s" : [ {
                           "value" : [ "'foo bar'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "323",
                        "s" : [ {
                           "value" : [ "'foobar'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "320",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "325",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "321",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo bar",
                  "type" : "Literal"
               }, {
                  "localId" : "323",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foobar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "329",
                  "s" : [ {
                     "value" : [ "","define ","EqRatios",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "r" : "333",
                        "s" : [ {
                           "r" : "331",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "332",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "336",
                        "s" : [ {
                           "r" : "334",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "335",
                           "s" : [ {
                              "value" : [ "3 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "330",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "337",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "338",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "333",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "331",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "332",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "336",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "334",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "341",
                  "s" : [ {
                     "value" : [ "","define ","UneqRatios",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "r" : "345",
                        "s" : [ {
                           "r" : "343",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "344",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "348",
                        "s" : [ {
                           "r" : "346",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "347",
                           "s" : [ {
                              "value" : [ "4 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "342",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "349",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "350",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "345",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "343",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "344",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "348",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "346",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "353",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqRatioTypes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "353",
                  "s" : [ {
                     "value" : [ "","define ","UneqRatioTypes",": " ]
                  }, {
                     "r" : "354",
                     "s" : [ {
                        "r" : "357",
                        "s" : [ {
                           "r" : "355",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "356",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "372",
                        "s" : [ {
                           "r" : "358",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "354",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "381",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "382",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "383",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "384",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "379",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "357",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                     "type" : "Ratio",
                     "numerator" : {
                        "localId" : "355",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 10,
                        "unit" : "mg"
                     },
                     "denominator" : {
                        "localId" : "356",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 2,
                        "unit" : "dL"
                     }
                  }
               }, {
                  "localId" : "380",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "373",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "374",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "375",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "376",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "377",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "378",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "358",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "359",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "360",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "361",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "362",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "363",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "387",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "387",
                  "s" : [ {
                     "value" : [ "// define EmptyTuples: { : } ~ { : } // TODO: We don't seem to support this format\n","define ","SameTuples",": " ]
                  }, {
                     "r" : "388",
                     "s" : [ {
                        "r" : "389",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "390",
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
                              "r" : "392",
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
                        "r" : "399",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "400",
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
                              "r" : "402",
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
               "localId" : "388",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "409",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "410",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "411",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "412",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "413",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "414",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "415",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "416",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "417",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "418",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "389",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "394",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "395",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "396",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "397",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "398",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "390",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "392",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "399",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "404",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "405",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "406",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "407",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "408",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "400",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "402",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "421",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameTuplesNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "421",
                  "s" : [ {
                     "value" : [ "","define ","SameTuplesNull",": " ]
                  }, {
                     "r" : "422",
                     "s" : [ {
                        "r" : "423",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "424",
                              "value" : [ "a",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "428",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "429",
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
               "localId" : "422",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "433",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "434",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "435",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "436",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "437",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "438",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "423",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "425",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "426",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "427",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "424",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "428",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "430",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "431",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "432",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "429",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "441",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DifferentTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "441",
                  "s" : [ {
                     "value" : [ "","define ","DifferentTuples",": " ]
                  }, {
                     "r" : "442",
                     "s" : [ {
                        "r" : "443",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "444",
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
                              "r" : "446",
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
                        "r" : "453",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "454",
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
                              "r" : "456",
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
               "localId" : "442",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "463",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "464",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "465",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "466",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "467",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "468",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "469",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "470",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "471",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "472",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "443",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "448",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "449",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "450",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "451",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "452",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "444",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "446",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "453",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "458",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "459",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "460",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "461",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "462",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "454",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "x",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "456",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "475",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameNestedTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "475",
                  "s" : [ {
                     "value" : [ "","define ","SameNestedTuples",": " ]
                  }, {
                     "r" : "476",
                     "s" : [ {
                        "r" : "477",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "478",
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
                              "r" : "480",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "481",
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
                        "r" : "493",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "494",
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
                              "r" : "496",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "497",
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
               "localId" : "476",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "509",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "510",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "511",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "512",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "513",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "514",
                           "name" : "c",
                           "elementType" : {
                              "localId" : "515",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "516",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "517",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "518",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "519",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "520",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "521",
                           "name" : "c",
                           "elementType" : {
                              "localId" : "522",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "477",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "486",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "487",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "488",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "489",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "490",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "491",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "492",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "478",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "480",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "483",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "484",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "485",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "481",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "c",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "493",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "502",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "503",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "504",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "505",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "506",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "507",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "508",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "494",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "496",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "499",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "500",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "501",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "497",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
            "localId" : "525",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameNestedTuplesNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "525",
                  "s" : [ {
                     "value" : [ "","define ","SameNestedTuplesNull",": " ]
                  }, {
                     "r" : "526",
                     "s" : [ {
                        "r" : "527",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "528",
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
                              "r" : "530",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "531",
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
                        "r" : "542",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "543",
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
                              "r" : "545",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "546",
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
               "localId" : "526",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "557",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "558",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "559",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "560",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "561",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "562",
                           "name" : "c",
                           "elementType" : {
                              "localId" : "563",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "564",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "565",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "566",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "567",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "568",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "569",
                           "name" : "c",
                           "elementType" : {
                              "localId" : "570",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "527",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
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
                     }, {
                        "localId" : "538",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "539",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "540",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "541",
                                 "name" : "{urn:hl7-org:elm-types:r1}Any",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "528",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "530",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "532",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "533",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "534",
                                 "name" : "{urn:hl7-org:elm-types:r1}Any",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "531",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "542",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "550",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "551",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "552",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "553",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "554",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "555",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "556",
                                 "name" : "{urn:hl7-org:elm-types:r1}Any",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "543",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "545",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "547",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "548",
                              "name" : "c",
                              "elementType" : {
                                 "localId" : "549",
                                 "name" : "{urn:hl7-org:elm-types:r1}Any",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "546",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "573",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EmptyLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "573",
                  "s" : [ {
                     "value" : [ "","define ","EmptyLists",": " ]
                  }, {
                     "r" : "574",
                     "s" : [ {
                        "r" : "575",
                        "value" : [ "{ }"," ","~"," ","{ }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "574",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "581",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "582",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "583",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "584",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "575",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "576",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "577",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ ]
               }, {
                  "localId" : "578",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "579",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "580",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ ]
               } ]
            }
         }, {
            "localId" : "587",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DifferentTypesLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "587",
                  "s" : [ {
                     "value" : [ "","define ","DifferentTypesLists",": " ]
                  }, {
                     "r" : "588",
                     "s" : [ {
                        "r" : "589",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "590",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "592",
                           "s" : [ {
                              "value" : [ "'2'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "594",
                           "s" : [ {
                              "value" : [ "'3'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "598",
                        "s" : [ {
                           "r" : "599",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "588",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "604",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "605",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "606",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "607",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "589",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "596",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "597",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "590",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "592",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "594",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "598",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "602",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "603",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "599",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "600",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "601",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "610",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DifferentLengthLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "610",
                  "s" : [ {
                     "value" : [ "","define ","DifferentLengthLists",": " ]
                  }, {
                     "r" : "611",
                     "s" : [ {
                        "r" : "612",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "613",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "617",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "618",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "620",
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
               "localId" : "611",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "624",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "625",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "626",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "627",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "612",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "615",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "616",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "613",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "617",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "622",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "623",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "618",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "620",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "630",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DifferentOrderLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "630",
                  "s" : [ {
                     "value" : [ "","define ","DifferentOrderLists",": " ]
                  }, {
                     "r" : "631",
                     "s" : [ {
                        "r" : "632",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "633",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "635",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "639",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "640",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "642",
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
               "localId" : "631",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "646",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "647",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "648",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "649",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "632",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "637",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "638",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "633",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "635",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "639",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "644",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "645",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "640",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "642",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "652",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "652",
                  "s" : [ {
                     "value" : [ "","define ","SameLists",": " ]
                  }, {
                     "r" : "653",
                     "s" : [ {
                        "r" : "654",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "655",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "657",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "659",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "663",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "664",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "666",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "668",
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
               "localId" : "653",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "672",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "673",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "674",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "675",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "654",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "661",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "662",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "655",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "657",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "659",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "663",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "670",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "671",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "664",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "666",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "668",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "678",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameListsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "678",
                  "s" : [ {
                     "value" : [ "","define ","SameListsNull",": " ]
                  }, {
                     "r" : "679",
                     "s" : [ {
                        "r" : "680",
                        "s" : [ {
                           "r" : "681",
                           "value" : [ "{","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "686",
                        "s" : [ {
                           "r" : "687",
                           "value" : [ "{","null",", ","null",", ","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "679",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "692",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "693",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "694",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "695",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "680",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "684",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "685",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "681",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "682",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "683",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  } ]
               }, {
                  "localId" : "686",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "690",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "691",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "687",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "688",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "689",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  } ]
               } ]
            }
         }, {
            "localId" : "698",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameNestedLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "698",
                  "s" : [ {
                     "value" : [ "","define ","SameNestedLists",": " ]
                  }, {
                     "r" : "699",
                     "s" : [ {
                        "r" : "700",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "701",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "702",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "704",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "708",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "709",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "711",
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
                        "r" : "718",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "719",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "720",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "722",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "726",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "727",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "729",
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
               "localId" : "699",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "736",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "737",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "738",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "739",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "740",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "741",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "operand" : [ {
                  "localId" : "700",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "715",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "716",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "717",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "element" : [ {
                     "localId" : "701",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "706",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "707",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "702",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "704",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "708",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "713",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "714",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "709",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "711",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  } ]
               }, {
                  "localId" : "718",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "733",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "734",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "735",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "element" : [ {
                     "localId" : "719",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "724",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "725",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "720",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "722",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "726",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "731",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "732",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "727",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "729",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "744",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameNestedListsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "744",
                  "s" : [ {
                     "value" : [ "","define ","SameNestedListsNull",": " ]
                  }, {
                     "r" : "745",
                     "s" : [ {
                        "r" : "746",
                        "s" : [ {
                           "r" : "747",
                           "value" : [ "{","null",", " ]
                        }, {
                           "r" : "748",
                           "s" : [ {
                              "r" : "749",
                              "value" : [ "{","null",", ","null","}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "759",
                        "s" : [ {
                           "r" : "760",
                           "value" : [ "{","null",", " ]
                        }, {
                           "r" : "761",
                           "s" : [ {
                              "r" : "762",
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
               "localId" : "745",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "772",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "773",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "774",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "775",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "776",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "777",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "operand" : [ {
                  "localId" : "746",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "756",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "757",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "758",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "element" : [ {
                     "localId" : "753",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "747",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "754",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "755",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "748",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "751",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "752",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "749",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }, {
                        "localId" : "750",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     } ]
                  } ]
               }, {
                  "localId" : "759",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "769",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "770",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "771",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  },
                  "element" : [ {
                     "localId" : "766",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "760",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "767",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "768",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "761",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "764",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "765",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "762",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }, {
                        "localId" : "763",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "780",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EmptyInterval",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "780",
                  "s" : [ {
                     "value" : [ "","define ","EmptyInterval",": " ]
                  }, {
                     "r" : "781",
                     "s" : [ {
                        "r" : "784",
                        "s" : [ {
                           "r" : "782",
                           "value" : [ "Interval(","null",", ","null",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "789",
                        "s" : [ {
                           "r" : "787",
                           "value" : [ "Interval(","null",", ","null",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "781",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "792",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "793",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "794",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "795",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "784",
                  "lowClosed" : false,
                  "highClosed" : false,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "785",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "786",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "782",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "high" : {
                     "localId" : "783",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "789",
                  "lowClosed" : false,
                  "highClosed" : false,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "790",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "791",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "787",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "high" : {
                     "localId" : "788",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "798",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IntervalDifferentPointTypes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "798",
                  "s" : [ {
                     "value" : [ "","define ","IntervalDifferentPointTypes",":  " ]
                  }, {
                     "r" : "799",
                     "s" : [ {
                        "r" : "802",
                        "s" : [ {
                           "r" : "800",
                           "value" : [ "Interval[","1",", ","5","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "809",
                        "s" : [ {
                           "value" : [ "Interval[" ]
                        }, {
                           "r" : "805",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "807",
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
               "localId" : "799",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "812",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "813",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "814",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "815",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "802",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "803",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "804",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "800",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "801",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "809",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "810",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "811",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "805",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "807",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "818",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IntervalDifferentStarts",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "818",
                  "s" : [ {
                     "value" : [ "","define ","IntervalDifferentStarts",": " ]
                  }, {
                     "r" : "819",
                     "s" : [ {
                        "r" : "822",
                        "s" : [ {
                           "r" : "820",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "827",
                        "s" : [ {
                           "r" : "825",
                           "value" : [ "Interval[","2",",","3","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "819",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "830",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "831",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "832",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "833",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "822",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "823",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "824",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "820",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "821",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "827",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "828",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "829",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "825",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "826",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "836",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IntervalDifferentEndings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "836",
                  "s" : [ {
                     "value" : [ "","define ","IntervalDifferentEndings",": " ]
                  }, {
                     "r" : "837",
                     "s" : [ {
                        "r" : "840",
                        "s" : [ {
                           "r" : "838",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "845",
                        "s" : [ {
                           "r" : "843",
                           "value" : [ "Interval[","1",",","4","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "837",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "848",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "849",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "850",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "851",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "840",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "841",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "842",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "838",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "839",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "845",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "846",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "847",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "843",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "844",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "854",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameIntervals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "854",
                  "s" : [ {
                     "value" : [ "","define ","SameIntervals",": " ]
                  }, {
                     "r" : "855",
                     "s" : [ {
                        "r" : "858",
                        "s" : [ {
                           "r" : "856",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "863",
                        "s" : [ {
                           "r" : "861",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "855",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "866",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "867",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "868",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "869",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "858",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "859",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "860",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "856",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "857",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "863",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "864",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "865",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "861",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "862",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "872",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TupleAndList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "872",
                  "s" : [ {
                     "value" : [ "","define ","TupleAndList",": " ]
                  }, {
                     "r" : "873",
                     "s" : [ {
                        "r" : "874",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "875",
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
                        "r" : "880",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "881",
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
               "localId" : "873",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "892",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "893",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "894",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "895",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "896",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "897",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "operand" : [ {
                  "localId" : "886",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "885",
                     "type" : "ToList",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "874",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "877",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "878",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "879",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "875",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "887",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "888",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "880",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "883",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "884",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "881",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "889",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "891",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "890",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               } ]
            }
         }, {
            "localId" : "900",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ListAndTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "900",
                  "s" : [ {
                     "value" : [ "","define ","ListAndTuple",": " ]
                  }, {
                     "r" : "901",
                     "s" : [ {
                        "r" : "902",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "903",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "907",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "908",
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
               "localId" : "901",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "920",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "921",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "922",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "923",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "924",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "925",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ],
               "operand" : [ {
                  "localId" : "913",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "914",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "902",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "905",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "906",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "903",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "915",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "917",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "916",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }, {
                  "localId" : "919",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "918",
                     "type" : "ToList",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "907",
                        "type" : "Tuple",
                        "resultTypeSpecifier" : {
                           "localId" : "910",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "911",
                              "name" : "a",
                              "elementType" : {
                                 "localId" : "912",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "908",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
            "localId" : "928",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TupleAndNullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "928",
                  "s" : [ {
                     "value" : [ "","define ","TupleAndNullList",": " ]
                  }, {
                     "r" : "929",
                     "s" : [ {
                        "r" : "930",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "931",
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
                        "r" : "936",
                        "s" : [ {
                           "r" : "937",
                           "value" : [ "{","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "929",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "947",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "948",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "949",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "950",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "951",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "952",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "930",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "933",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "934",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "935",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "931",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "943",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "940",
                     "type" : "SingletonFrom",
                     "signature" : [ {
                        "localId" : "941",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "942",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "operand" : {
                        "localId" : "936",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "938",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "939",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "937",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        } ]
                     }
                  },
                  "asTypeSpecifier" : {
                     "localId" : "944",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "945",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "946",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "955",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullListAndTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "955",
                  "s" : [ {
                     "value" : [ "","define ","NullListAndTuple",": " ]
                  }, {
                     "r" : "956",
                     "s" : [ {
                        "r" : "957",
                        "s" : [ {
                           "r" : "958",
                           "value" : [ "{","null","}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "961",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "962",
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
               "localId" : "956",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "974",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "975",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "976",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "977",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "978",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "979",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "970",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "967",
                     "type" : "SingletonFrom",
                     "signature" : [ {
                        "localId" : "968",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "969",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "operand" : {
                        "localId" : "957",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "959",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "960",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "958",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        } ]
                     }
                  },
                  "asTypeSpecifier" : {
                     "localId" : "971",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "972",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "973",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "961",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "964",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "965",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "966",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "962",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "982",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameCodeAndCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "982",
                  "s" : [ {
                     "value" : [ "","define ","SameCodeAndCode",": " ]
                  }, {
                     "r" : "983",
                     "s" : [ {
                        "r" : "984",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "985",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code clone\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "983",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "986",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "987",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "984",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "name" : "Tobacco smoking status code",
                  "type" : "CodeRef"
               }, {
                  "localId" : "985",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "name" : "Tobacco smoking status code clone",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "localId" : "990",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameCodeAndConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "990",
                  "s" : [ {
                     "value" : [ "","define ","SameCodeAndConcept",": " ]
                  }, {
                     "r" : "991",
                     "s" : [ {
                        "r" : "992",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code clone\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "993",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "991",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "997",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "998",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "995",
                  "type" : "ToConcept",
                  "signature" : [ {
                     "localId" : "996",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "992",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "Tobacco smoking status code clone",
                     "type" : "CodeRef"
                  }
               }, {
                  "localId" : "993",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               } ]
            }
         }, {
            "localId" : "1001",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameConceptAndCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1001",
                  "s" : [ {
                     "value" : [ "","define ","SameConceptAndCode",": " ]
                  }, {
                     "r" : "1002",
                     "s" : [ {
                        "r" : "1003",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1004",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code clone\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1002",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1008",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1009",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1003",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               }, {
                  "localId" : "1006",
                  "type" : "ToConcept",
                  "signature" : [ {
                     "localId" : "1007",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1004",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "Tobacco smoking status code clone",
                     "type" : "CodeRef"
                  }
               } ]
            }
         }, {
            "localId" : "1012",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameConceptAndConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1012",
                  "s" : [ {
                     "value" : [ "","define ","SameConceptAndConcept",": " ]
                  }, {
                     "r" : "1013",
                     "s" : [ {
                        "r" : "1014",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1015",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status clone\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1013",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1016",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1017",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1014",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               }, {
                  "localId" : "1015",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                  "name" : "Tobacco smoking status clone",
                  "type" : "ConceptRef"
               } ]
            }
         }, {
            "localId" : "1020",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DiffCodeAndCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1020",
                  "s" : [ {
                     "value" : [ "","define ","DiffCodeAndCode",": " ]
                  }, {
                     "r" : "1021",
                     "s" : [ {
                        "r" : "1022",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1023",
                        "s" : [ {
                           "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1021",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1024",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1025",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1022",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "name" : "Tobacco smoking status code",
                  "type" : "CodeRef"
               }, {
                  "localId" : "1023",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "name" : "Total Score [AUDIT-C] code",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "localId" : "1028",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DiffCodeAndConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1028",
                  "s" : [ {
                     "value" : [ "","define ","DiffCodeAndConcept",": " ]
                  }, {
                     "r" : "1029",
                     "s" : [ {
                        "r" : "1030",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status code clone\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1031",
                        "s" : [ {
                           "value" : [ "\"Total Score [AUDIT-C]\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1029",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1035",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1036",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1033",
                  "type" : "ToConcept",
                  "signature" : [ {
                     "localId" : "1034",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1030",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "Tobacco smoking status code clone",
                     "type" : "CodeRef"
                  }
               }, {
                  "localId" : "1031",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                  "name" : "Total Score [AUDIT-C]",
                  "type" : "ConceptRef"
               } ]
            }
         }, {
            "localId" : "1039",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DiffConceptAndCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1039",
                  "s" : [ {
                     "value" : [ "","define ","DiffConceptAndCode",": " ]
                  }, {
                     "r" : "1040",
                     "s" : [ {
                        "r" : "1041",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1042",
                        "s" : [ {
                           "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1040",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1046",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1047",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1041",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               }, {
                  "localId" : "1044",
                  "type" : "ToConcept",
                  "signature" : [ {
                     "localId" : "1045",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1042",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "Total Score [AUDIT-C] code",
                     "type" : "CodeRef"
                  }
               } ]
            }
         }, {
            "localId" : "1050",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DiffConceptAndConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1050",
                  "s" : [ {
                     "value" : [ "","define ","DiffConceptAndConcept",": " ]
                  }, {
                     "r" : "1051",
                     "s" : [ {
                        "r" : "1052",
                        "s" : [ {
                           "value" : [ "\"Tobacco smoking status\"" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1053",
                        "s" : [ {
                           "value" : [ "\"Total Score [AUDIT-C]\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1051",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1054",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1055",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1052",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                  "name" : "Tobacco smoking status",
                  "type" : "ConceptRef"
               }, {
                  "localId" : "1053",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                  "name" : "Total Score [AUDIT-C]",
                  "type" : "ConceptRef"
               } ]
            }
         }, {
            "localId" : "1058",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1058",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimes",": " ]
                  }, {
                     "r" : "1059",
                     "s" : [ {
                        "r" : "1078",
                        "s" : [ {
                           "r" : "1060",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "1067",
                           "s" : [ {
                              "r" : "1067",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1105",
                        "s" : [ {
                           "r" : "1087",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "1094",
                           "s" : [ {
                              "r" : "1094",
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
               "localId" : "1059",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1114",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1115",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1078",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1079",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1080",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1081",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1082",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1083",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1084",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1085",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1086",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1060",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1061",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1062",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1063",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1064",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1065",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1066",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "1067",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1105",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1106",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1107",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1108",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1109",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1110",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1111",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1112",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1113",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1087",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1088",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1089",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1090",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1091",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1092",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1093",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "1094",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1118",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1118",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimes",": " ]
                  }, {
                     "r" : "1119",
                     "s" : [ {
                        "r" : "1138",
                        "s" : [ {
                           "r" : "1120",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "1127",
                           "s" : [ {
                              "r" : "1127",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1165",
                        "s" : [ {
                           "r" : "1147",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","201",", " ]
                        }, {
                           "r" : "1154",
                           "s" : [ {
                              "r" : "1154",
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
               "localId" : "1119",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1174",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1175",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1138",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1139",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1140",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1141",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1142",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1143",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1144",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1145",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1146",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1120",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1121",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1122",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1123",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1124",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1125",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1126",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "1127",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1165",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1166",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1167",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1168",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1169",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1170",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1171",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1172",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1173",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1147",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1148",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1149",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1150",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1151",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1152",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1153",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "201",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "1154",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1178",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1178",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesTZ",": " ]
                  }, {
                     "r" : "1179",
                     "s" : [ {
                        "r" : "1198",
                        "s" : [ {
                           "r" : "1180",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","23",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "1187",
                           "s" : [ {
                              "r" : "1187",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1225",
                        "s" : [ {
                           "r" : "1207",
                           "value" : [ "DateTime","(","2000",", ","3",", ","16",", ","2",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "1214",
                           "s" : [ {
                              "r" : "1214",
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
               "localId" : "1179",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1234",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1235",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1198",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1199",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1200",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1201",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1202",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1203",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1204",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1205",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1206",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1180",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1181",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1182",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1183",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1184",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1185",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1186",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "1187",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1227",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1228",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1229",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1232",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1233",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1207",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1208",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1209",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1210",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1211",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1212",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "1214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1238",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesTZ",": " ]
                  }, {
                     "r" : "1239",
                     "s" : [ {
                        "r" : "1258",
                        "s" : [ {
                           "r" : "1240",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "1247",
                           "s" : [ {
                              "r" : "1247",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1285",
                        "s" : [ {
                           "r" : "1267",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "1274",
                           "s" : [ {
                              "r" : "1274",
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
               "localId" : "1239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1294",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1295",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1259",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1260",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1261",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1262",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1265",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1266",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "1247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1287",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1288",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1289",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1290",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1291",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1292",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1293",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "1274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1298",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesNullMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1298",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullMs",": " ]
                  }, {
                     "r" : "1299",
                     "s" : [ {
                        "r" : "1316",
                        "s" : [ {
                           "r" : "1300",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1338",
                        "s" : [ {
                           "r" : "1324",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1345",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1346",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1316",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1317",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1318",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1319",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1320",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1321",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1322",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1303",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1304",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1338",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1339",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1340",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1341",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1342",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1343",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1344",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1324",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1325",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1326",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1327",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1328",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesNullOtherMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1349",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesNullOtherMs",": " ]
                  }, {
                     "r" : "1350",
                     "s" : [ {
                        "r" : "1365",
                        "s" : [ {
                           "r" : "1351",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1388",
                        "s" : [ {
                           "r" : "1372",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1350",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1396",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1397",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1365",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1366",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1367",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1368",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1369",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1370",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1371",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1351",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1352",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1353",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1354",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1355",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1356",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1388",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1389",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1390",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1391",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1392",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1393",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1394",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1395",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1373",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1374",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1375",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1376",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "1378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1400",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1400",
                  "s" : [ {
                     "value" : [ "","define ","EqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "1401",
                     "s" : [ {
                        "r" : "1410",
                        "s" : [ {
                           "r" : "1402",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1422",
                        "s" : [ {
                           "r" : "1414",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1401",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1426",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1427",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1410",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1411",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1412",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1413",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1402",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1403",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1404",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1422",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1423",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1424",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1425",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1414",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1415",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1416",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1430",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1430",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "1431",
                     "s" : [ {
                        "r" : "1440",
                        "s" : [ {
                           "r" : "1432",
                           "value" : [ "DateTime","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1452",
                        "s" : [ {
                           "r" : "1444",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1431",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1456",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1457",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1440",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1441",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1442",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1443",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1432",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1433",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1434",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1452",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1453",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1454",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1455",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1444",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1445",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1446",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1460",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "PossiblyEqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1460",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "1461",
                     "s" : [ {
                        "r" : "1470",
                        "s" : [ {
                           "r" : "1462",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1488",
                        "s" : [ {
                           "r" : "1474",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","13",", ","43",", ","32",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1461",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1495",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1496",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1470",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1471",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1472",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1473",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1462",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1463",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1464",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1488",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1489",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1490",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1491",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1492",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1493",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1494",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1474",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1475",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1476",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1477",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1478",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1479",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1499",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UneqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1499",
                  "s" : [ {
                     "value" : [ "","define ","UneqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "1500",
                     "s" : [ {
                        "r" : "1515",
                        "s" : [ {
                           "r" : "1501",
                           "value" : [ "DateTime","(","2000",", ","4",", ","13",", ","12",", ","43",", ","32",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1530",
                        "s" : [ {
                           "r" : "1522",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1500",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1534",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1535",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1515",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1516",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1517",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1518",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1519",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1520",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1521",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1501",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1502",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1503",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1504",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1505",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1506",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1530",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1531",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1532",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1533",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1522",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1523",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1524",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1538",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "PossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1538",
                  "s" : [ {
                     "value" : [ "","define ","PossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "1539",
                     "s" : [ {
                        "r" : "1548",
                        "s" : [ {
                           "r" : "1540",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1556",
                        "s" : [ {
                           "r" : "1552",
                           "value" : [ "DateTime","(","2000",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1539",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1558",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1559",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1548",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1549",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1550",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1551",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1540",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1541",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1542",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1556",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1557",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1552",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1562",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1562",
                  "s" : [ {
                     "value" : [ "","define ","ImpossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "1563",
                     "s" : [ {
                        "r" : "1572",
                        "s" : [ {
                           "r" : "1564",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1582",
                        "s" : [ {
                           "r" : "1576",
                           "value" : [ "DateTime","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1563",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1585",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1586",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1572",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1573",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1574",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1575",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1564",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1565",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1566",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1582",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1583",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1584",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1576",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1577",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1589",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1589",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeTrue",": " ]
                  }, {
                     "r" : "1590",
                     "s" : [ {
                        "r" : "1599",
                        "s" : [ {
                           "r" : "1591",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1611",
                        "s" : [ {
                           "r" : "1603",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1590",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1618",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1619",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1616",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1617",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1599",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1600",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1601",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1602",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1591",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1592",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1593",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "1611",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1612",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1613",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1614",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1603",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1604",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1605",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1622",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1622",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeNotEqual",": " ]
                  }, {
                     "r" : "1623",
                     "s" : [ {
                        "r" : "1632",
                        "s" : [ {
                           "r" : "1624",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1644",
                        "s" : [ {
                           "r" : "1636",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1623",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1651",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1652",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1649",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1650",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1632",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1633",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1634",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1635",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1624",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1625",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1626",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "1644",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1645",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1646",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1647",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1636",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1637",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1638",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1655",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateAndDateTimeUncertainFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1655",
                  "s" : [ {
                     "value" : [ "","define ","DateAndDateTimeUncertainFalse",": " ]
                  }, {
                     "r" : "1656",
                     "s" : [ {
                        "r" : "1665",
                        "s" : [ {
                           "r" : "1657",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1683",
                        "s" : [ {
                           "r" : "1669",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1656",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1693",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1694",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1691",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1692",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1665",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1666",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1667",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1668",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1657",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1658",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1659",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "1683",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1684",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1685",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1686",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1687",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1688",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1689",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1669",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1670",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1671",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1672",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1673",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1674",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "1697",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1697",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateTrue",": " ]
                  }, {
                     "r" : "1698",
                     "s" : [ {
                        "r" : "1707",
                        "s" : [ {
                           "r" : "1699",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1719",
                        "s" : [ {
                           "r" : "1711",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1698",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1726",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1727",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1707",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1708",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1709",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1710",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1699",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1700",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1701",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1724",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1725",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1719",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1720",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1721",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1722",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1711",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1712",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1713",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "1730",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1730",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateNotEqual",": " ]
                  }, {
                     "r" : "1731",
                     "s" : [ {
                        "r" : "1740",
                        "s" : [ {
                           "r" : "1732",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1752",
                        "s" : [ {
                           "r" : "1744",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1731",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1759",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1760",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1740",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1741",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1742",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1743",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1732",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1733",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1734",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1757",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1758",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1752",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1753",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1754",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1755",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1744",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1745",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1746",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "1763",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DateTimeAndDateUncertainFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1763",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeAndDateUncertainFalse",": " ]
                  }, {
                     "r" : "1764",
                     "s" : [ {
                        "r" : "1779",
                        "s" : [ {
                           "r" : "1765",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "1794",
                        "s" : [ {
                           "r" : "1786",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "1764",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equivalent",
               "signature" : [ {
                  "localId" : "1801",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "1802",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "1779",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "1780",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1781",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1782",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1783",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1784",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "1785",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "1765",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "1766",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "1767",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "1768",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "1769",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "1770",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "1799",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "1800",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "1794",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "1795",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1796",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "1797",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "1786",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "1787",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "1788",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "302",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "5"," ","<"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
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
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ","<"," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
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
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "5"," ","<"," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
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
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "303",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "307",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "302",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "5"," ","<="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
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
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ","<="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
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
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "5"," ","<="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
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
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "303",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "307",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "302",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "5"," ",">"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ",">"," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "5"," ",">"," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "303",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "307",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "322",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Int",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "5"," ",">="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
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
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Int",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5"," ",">="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
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
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Int",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "5"," ",">="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
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
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "303",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "307",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "310",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DivideUcum_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "310",
                  "s" : [ {
                     "value" : [ "","define ","DivideUcum_incompatible",": " ]
                  }, {
                     "r" : "311",
                     "s" : [ {
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "312",
                           "s" : [ {
                              "r" : "313",
                              "s" : [ {
                                 "value" : [ "100 ","'[nmi_i]'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "314",
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
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "49 ","'mg/[lb_av]'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "311",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "localId" : "312",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "316",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 100,
                     "unit" : "[nmi_i]",
                     "type" : "Quantity"
                  }, {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "h",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "317",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 49,
                  "unit" : "mg/[lb_av]",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "322",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                                 "value" : [ "100 ","'mg'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "326",
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
                        "r" : "329",
                        "s" : [ {
                           "value" : [ "49 ","'mg/[lb_av]'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "323",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "localId" : "324",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "327",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "325",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 100,
                     "unit" : "mg",
                     "type" : "Quantity"
                  }, {
                     "localId" : "326",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "[lb_av]",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "329",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 49,
                  "unit" : "mg/[lb_av]",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

