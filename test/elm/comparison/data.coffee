###
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
###

### Equal
library TestSnippet version '1'
using QUICK
context Patient
define AGtB_Int: 5 = 4
define AEqB_Int: 5 = 5
define ALtB_Int: 5 = 6
define EqTuples: Tuple{a: 1, b: Tuple{c: 1}} = Tuple{a: 1, b: Tuple{c: 1}}
define UneqTuples: Tuple{a: 1, b: Tuple{c: 1}} = Tuple{a: 1, b: Tuple{c: -1}}
define TupleA: Tuple{ Foo: null }
define TupleB: Tuple{ Bar: null }
define TupleDifferentKeys: TupleA = TupleB
define EqTuplesWithNullFields: Tuple{a: 'Hello', b: null} = Tuple{a: 'Hello', b: null}
define UneqTuplesWithNullFields: Tuple{a: 'Hello', b: null} = Tuple{a: 'Goodbye', b: null}
define UncertTuplesWithNullFieldOnOne: Tuple{a: 'Hello', b: null} = Tuple{a: 'Hello', b: 'null'}
define UncertTuplesWithDiffNullFields: Tuple{a: 'Hello', b: null} = Tuple{a: 'Hello', c: null}
define EqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) = DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0)
define UneqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) = DateTime(2000, 3, 15, 13, 30, 25, 201, +1.0)
define EqDateTimesTZ: DateTime(2000, 3, 15, 23, 30, 25, 200, +1.0) = DateTime(2000, 3, 16, 2, 30, 25, 200, +4.0)
define UneqDateTimesTZ: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) = DateTime(2000, 3, 15, 13, 30, 25, 200, +2.0)
define EqDateTimesOnlyDate: DateTime(2000, 3, 15) = DateTime(2000, 3, 15)
define UneqDateTimesOnlyDate: DateTime(2000, 3, 14) = DateTime(2000, 3, 15)
define PossiblyEqDateTimesOnlyDateOnOne: DateTime(2000, 3, 13) = DateTime(2000, 3, 13, 13, 43, 32)
define UneqDateTimesOnlyDateOnOne: DateTime(2000, 4, 13, 12, 43, 32) = DateTime(2000, 3, 13)
define PossiblyEqualDateTimes: DateTime(2000, 3, 15) = DateTime(2000)
define ImpossiblyEqualDateTimes: DateTime(2000, 3, 15) = DateTime(2000, 4)
define DateAndDateTimeNull: Date(2000, 3, 13) = DateTime(2000, 3, 13)
define DateAndDateTimeNotEqual: Date(2000, 3, 13) = DateTime(2000, 3, 12)
define DateAndDateTimeUncertainFalse: Date(2000, 3, 13) = DateTime(2000, 3, 13, 2, 4, 23)
define DateTimeAndDateNull: DateTime(2000, 3, 13) = Date(2000, 3, 13)
define DateTimeAndDateNotEqual: DateTime(2000, 3, 12) = Date(2000, 3, 13)
define DateTimeAndDateUncertainFalse: DateTime(2000, 3, 13, 2, 4, 23) = Date(2000, 3, 13)
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
###

module.exports['Equal'] = {
   "library" : {
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Int",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," ","="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Int",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," ","="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Int",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "5"," ","="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "23",
            "name" : "EqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "define ","EqTuples",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "14",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "16",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "15",
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
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "18",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "20",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "19",
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
               "localId" : "22",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "17",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "14",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "16",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "15",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "21",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "18",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "20",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "19",
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
            "localId" : "34",
            "name" : "UneqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "define ","UneqTuples",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "24",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "26",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "25",
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
                        "r" : "32",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "28",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "31",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "30",
                                    "s" : [ {
                                       "r" : "29",
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
               "localId" : "33",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "27",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "24",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "26",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "25",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "32",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "28",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "31",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "30",
                              "type" : "Negate",
                              "operand" : {
                                 "localId" : "29",
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
            "localId" : "37",
            "name" : "TupleA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "define ","TupleA",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "value" : [ "Tuple{ " ]
                     }, {
                        "s" : [ {
                           "r" : "35",
                           "value" : [ "Foo",": ","null" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "36",
               "type" : "Tuple",
               "element" : [ {
                  "name" : "Foo",
                  "value" : {
                     "localId" : "35",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "40",
            "name" : "TupleB",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "40",
                  "s" : [ {
                     "value" : [ "define ","TupleB",": " ]
                  }, {
                     "r" : "39",
                     "s" : [ {
                        "value" : [ "Tuple{ " ]
                     }, {
                        "s" : [ {
                           "r" : "38",
                           "value" : [ "Bar",": ","null" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "39",
               "type" : "Tuple",
               "element" : [ {
                  "name" : "Bar",
                  "value" : {
                     "localId" : "38",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "44",
            "name" : "TupleDifferentKeys",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "44",
                  "s" : [ {
                     "value" : [ "define ","TupleDifferentKeys",": " ]
                  }, {
                     "r" : "43",
                     "s" : [ {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "TupleA" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "TupleB" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "43",
               "type" : "Equal",
               "operand" : [ {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "41",
                     "name" : "TupleA",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "42",
                     "name" : "TupleB",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "localId" : "52",
            "name" : "EqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "define ","EqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "r" : "47",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "45",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "46",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "50",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "48",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "49",
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
               "localId" : "51",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "47",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "45",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "46",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "50",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "48",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "49",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "60",
            "name" : "UneqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "define ","UneqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "53",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "54",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "56",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "57",
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
               "localId" : "59",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "55",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "53",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "54",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "58",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "56",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Goodbye",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "57",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "68",
            "name" : "UncertTuplesWithNullFieldOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "68",
                  "s" : [ {
                     "value" : [ "define ","UncertTuplesWithNullFieldOnOne",": " ]
                  }, {
                     "r" : "67",
                     "s" : [ {
                        "r" : "63",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "61",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "62",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "66",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "64",
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
                              "r" : "65",
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
               "localId" : "67",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "63",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "61",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "62",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "66",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "64",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "65",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "null",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "76",
            "name" : "UncertTuplesWithDiffNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "76",
                  "s" : [ {
                     "value" : [ "define ","UncertTuplesWithDiffNullFields",": " ]
                  }, {
                     "r" : "75",
                     "s" : [ {
                        "r" : "71",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "69",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "70",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "74",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "72",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "73",
                              "value" : [ "c",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "75",
               "type" : "Equal",
               "operand" : [ {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "71",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "69",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "70",
                           "type" : "Null"
                        }
                     } ]
                  }
               }, {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "74",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "72",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "73",
                           "type" : "Null"
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "96",
            "name" : "EqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "96",
                  "s" : [ {
                     "value" : [ "define ","EqDateTimes",": " ]
                  }, {
                     "r" : "95",
                     "s" : [ {
                        "r" : "85",
                        "s" : [ {
                           "r" : "77",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "84",
                           "s" : [ {
                              "r" : "84",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "94",
                        "s" : [ {
                           "r" : "86",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "93",
                           "s" : [ {
                              "r" : "93",
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
               "localId" : "95",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "85",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "77",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "78",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "79",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "80",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "81",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "82",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "83",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "84",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "94",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "86",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "87",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "88",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "89",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "90",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "91",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "92",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "93",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "116",
            "name" : "UneqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "116",
                  "s" : [ {
                     "value" : [ "define ","UneqDateTimes",": " ]
                  }, {
                     "r" : "115",
                     "s" : [ {
                        "r" : "105",
                        "s" : [ {
                           "r" : "97",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "104",
                           "s" : [ {
                              "r" : "104",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "114",
                        "s" : [ {
                           "r" : "106",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","201",", " ]
                        }, {
                           "r" : "113",
                           "s" : [ {
                              "r" : "113",
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
               "localId" : "115",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "105",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "97",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "98",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "99",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "100",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "101",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "102",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "103",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "104",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "114",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "106",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "107",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "108",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "109",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "110",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "111",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "112",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "201",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "113",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "136",
            "name" : "EqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "136",
                  "s" : [ {
                     "value" : [ "define ","EqDateTimesTZ",": " ]
                  }, {
                     "r" : "135",
                     "s" : [ {
                        "r" : "125",
                        "s" : [ {
                           "r" : "117",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","23",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "124",
                           "s" : [ {
                              "r" : "124",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "134",
                        "s" : [ {
                           "r" : "126",
                           "value" : [ "DateTime","(","2000",", ","3",", ","16",", ","2",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "133",
                           "s" : [ {
                              "r" : "133",
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
               "localId" : "135",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "125",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "117",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "118",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "119",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "120",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "121",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "122",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "123",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "124",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "134",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "126",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "127",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "128",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "129",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "130",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "131",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "132",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "133",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "156",
            "name" : "UneqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "156",
                  "s" : [ {
                     "value" : [ "define ","UneqDateTimesTZ",": " ]
                  }, {
                     "r" : "155",
                     "s" : [ {
                        "r" : "145",
                        "s" : [ {
                           "r" : "137",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "144",
                           "s" : [ {
                              "r" : "144",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "154",
                        "s" : [ {
                           "r" : "146",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "153",
                           "s" : [ {
                              "r" : "153",
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
               "localId" : "155",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "145",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "137",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "138",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "139",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "140",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "141",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "142",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "143",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "144",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "154",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "146",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "147",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "148",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "149",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "150",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "151",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "152",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "153",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "166",
            "name" : "EqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "166",
                  "s" : [ {
                     "value" : [ "define ","EqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "165",
                     "s" : [ {
                        "r" : "160",
                        "s" : [ {
                           "r" : "157",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "164",
                        "s" : [ {
                           "r" : "161",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "165",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "160",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "157",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "158",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "159",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "164",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "161",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "162",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "163",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "176",
            "name" : "UneqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "176",
                  "s" : [ {
                     "value" : [ "define ","UneqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "175",
                     "s" : [ {
                        "r" : "170",
                        "s" : [ {
                           "r" : "167",
                           "value" : [ "DateTime","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "174",
                        "s" : [ {
                           "r" : "171",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "175",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "170",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "167",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "168",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "169",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "174",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "171",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "172",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "173",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "189",
            "name" : "PossiblyEqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "189",
                  "s" : [ {
                     "value" : [ "define ","PossiblyEqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "188",
                     "s" : [ {
                        "r" : "180",
                        "s" : [ {
                           "r" : "177",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "187",
                        "s" : [ {
                           "r" : "181",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","13",", ","43",", ","32",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "188",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "180",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "177",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "178",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "179",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "187",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "181",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "182",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "183",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "184",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "185",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "186",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "202",
            "name" : "UneqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "202",
                  "s" : [ {
                     "value" : [ "define ","UneqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "201",
                     "s" : [ {
                        "r" : "196",
                        "s" : [ {
                           "r" : "190",
                           "value" : [ "DateTime","(","2000",", ","4",", ","13",", ","12",", ","43",", ","32",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "200",
                        "s" : [ {
                           "r" : "197",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "201",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "196",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "190",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "191",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "192",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "193",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "194",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "43",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "195",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "32",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "200",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "197",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "198",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "199",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "210",
            "name" : "PossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "define ","PossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "r" : "206",
                        "s" : [ {
                           "r" : "203",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "208",
                        "s" : [ {
                           "r" : "207",
                           "value" : [ "DateTime","(","2000",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "209",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "206",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "203",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "204",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "205",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "208",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "207",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "219",
            "name" : "ImpossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "define ","ImpossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "r" : "211",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "DateTime","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "214",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "211",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "212",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "217",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "229",
            "name" : "DateAndDateTimeNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "define ","DateAndDateTimeNull",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "r" : "224",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Equal",
               "operand" : [ {
                  "type" : "ToDateTime",
                  "operand" : {
                     "localId" : "223",
                     "type" : "Date",
                     "year" : {
                        "localId" : "220",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "221",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "222",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "227",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "239",
            "name" : "DateAndDateTimeNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "define ","DateAndDateTimeNotEqual",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "Equal",
               "operand" : [ {
                  "type" : "ToDateTime",
                  "operand" : {
                     "localId" : "233",
                     "type" : "Date",
                     "year" : {
                        "localId" : "230",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "231",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "232",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "237",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "252",
            "name" : "DateAndDateTimeUncertainFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "define ","DateAndDateTimeUncertainFalse",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "r" : "240",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "type" : "Equal",
               "operand" : [ {
                  "type" : "ToDateTime",
                  "operand" : {
                     "localId" : "243",
                     "type" : "Date",
                     "year" : {
                        "localId" : "240",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "241",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "242",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "250",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "262",
            "name" : "DateTimeAndDateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "define ","DateTimeAndDateNull",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "r" : "253",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "256",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "255",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }
               }, {
                  "type" : "ToDateTime",
                  "operand" : {
                     "localId" : "260",
                     "type" : "Date",
                     "year" : {
                        "localId" : "257",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "258",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "259",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "272",
            "name" : "DateTimeAndDateNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "define ","DateTimeAndDateNotEqual",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "r" : "263",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "r" : "267",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "266",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               }, {
                  "type" : "ToDateTime",
                  "operand" : {
                     "localId" : "270",
                     "type" : "Date",
                     "year" : {
                        "localId" : "267",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "268",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "269",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "285",
            "name" : "DateTimeAndDateUncertainFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "define ","DateTimeAndDateUncertainFalse",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "r" : "280",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "279",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "276",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "277",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "278",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               }, {
                  "type" : "ToDateTime",
                  "operand" : {
                     "localId" : "283",
                     "type" : "Date",
                     "year" : {
                        "localId" : "280",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "281",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "282",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "289",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "288",
                     "s" : [ {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "288",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "286",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "287",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "293",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "290",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "291",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "297",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "297",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "296",
                     "s" : [ {
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "296",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "294",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "295",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "301",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "298",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "299",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "305",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "304",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "302",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "303",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "309",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "308",
                     "s" : [ {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "308",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "306",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "307",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "313",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "313",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "312",
                     "s" : [ {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "311",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "312",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "310",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "311",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "317",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "316",
                     "s" : [ {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "316",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "314",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "315",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "321",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "321",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "320",
                     "s" : [ {
                        "r" : "318",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "320",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "318",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "319",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "329",
            "name" : "EqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "329",
                  "s" : [ {
                     "value" : [ "define ","EqRatios",": " ]
                  }, {
                     "r" : "328",
                     "s" : [ {
                        "r" : "324",
                        "s" : [ {
                           "r" : "322",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "323",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "327",
                        "s" : [ {
                           "r" : "325",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "326",
                           "s" : [ {
                              "value" : [ "3 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "328",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "324",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "322",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "323",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "327",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "325",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "326",
                     "value" : 3,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "337",
            "name" : "UneqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "337",
                  "s" : [ {
                     "value" : [ "define ","UneqRatios",": " ]
                  }, {
                     "r" : "336",
                     "s" : [ {
                        "r" : "332",
                        "s" : [ {
                           "r" : "330",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "331",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "335",
                        "s" : [ {
                           "r" : "333",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "334",
                           "s" : [ {
                              "value" : [ "4 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "336",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "332",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "330",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "331",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "335",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "333",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "334",
                     "value" : 4,
                     "unit" : "dL"
                  }
               } ]
            }
         } ]
      }
   }
}

### NotEqual
library TestSnippet version '1'
using QUICK
context Patient
define AGtB_Int: 5 != 4
define AEqB_Int: 5 != 5
define ALtB_Int: 5 != 6
define EqTuples: Tuple{a: 1, b: Tuple{c: 1}} != Tuple{a: 1, b: Tuple{c: 1}}
define UneqTuples: Tuple{a: 1, b: Tuple{c: 1}} != Tuple{a: 1, b: Tuple{c: -1}}
define EqTuplesWithNullFields: Tuple{a: 'Hello', b: null} != Tuple{a: 'Hello', b: null}
define UneqTuplesWithNullFields: Tuple{a: 'Hello', b: null} != Tuple{a: 'Goodbye', b: null}
define UncertTuplesWithNullFieldOnOne: Tuple{a: 'Hello', b: null} != Tuple{a: 'Hello', b: 'null'}
define UncertTuplesWithDiffNullFields: Tuple{a: 'Hello', b: null} != Tuple{a: 'Hello', c: null}
define EqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) != DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0)
define UneqDateTimes: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) != DateTime(2000, 3, 15, 13, 30, 25, 201, +1.0)
define EqDateTimesTZ: DateTime(2000, 3, 15, 23, 30, 25, 200, +1.0) != DateTime(2000, 3, 16, 2, 30, 25, 200, +4.0)
define UneqDateTimesTZ: DateTime(2000, 3, 15, 13, 30, 25, 200, +1.0) != DateTime(2000, 3, 15, 13, 30, 25, 200, +2.0)
define EqDateTimesOnlyDate: DateTime(2000, 3, 15) != DateTime(2000, 3, 15)
define UneqDateTimesOnlyDate: DateTime(2000, 3, 14) != DateTime(2000, 3, 15)
define PossiblyEqDateTimesOnlyDateOnOne: DateTime(2000, 3, 13) != DateTime(2000, 3, 13, 13, 43, 32)
define UneqDateTimesOnlyDateOnOne: DateTime(2000, 4, 13, 12, 43, 32) != DateTime(2000, 3, 13)
define PossiblyEqualDateTimes: DateTime(2000, 3, 15) != DateTime(2000)
define ImpossiblyEqualDateTimes: DateTime(2000, 3, 15) != DateTime(2000, 4)
define DateAndDateTimeNull: Date(2000, 3, 13) != DateTime(2000, 3, 13)
define DateAndDateTimeNotEqual: Date(2000, 3, 13) != DateTime(2000, 3, 12)
define DateAndDateTimeUncertainTrue: Date(2000, 3, 13) != DateTime(2000, 3, 13, 2, 4, 23)
define DateTimeAndDateNull: DateTime(2000, 3, 13) != Date(2000, 3, 13)
define DateTimeAndDateNotEqual: DateTime(2000, 3, 12) != Date(2000, 3, 13)
define DateTimeAndDateUncertainTrue: DateTime(2000, 3, 13, 2, 4, 23) != Date(2000, 3, 13)
define AGtB_Quantity: 5 'm' != 4 'm'
define AEqB_Quantity: 5 'm' != 5 'm'
define ALtB_Quantity: 5 'm' != 6 'm'
define AGtB_Quantity_diff: 5 'm' != 5 'cm'
define AEqB_Quantity_diff: 5 'm' != 500 'cm'
define ALtB_Quantity_diff: 5 'm' != 5 'km'
define AGtB_Quantity_incompatible: 5 'Cel' != 4 'm'
define AEqB_Quantity_incompatible: 5 'Cel' != 5 'm'
define ALtB_Quantity_incompatible: 5 'Cel' != 40 'm'
###

module.exports['NotEqual'] = {
   "library" : {
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Int",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," ","!="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "9",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Int",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," ","!="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "13",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Int",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "5"," ","!="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "23",
            "name" : "EqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "define ","EqTuples",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "14",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "16",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "15",
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
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "18",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "20",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "19",
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
               "localId" : "22",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "17",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "14",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "16",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "15",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "21",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "18",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "20",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "19",
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
            "localId" : "34",
            "name" : "UneqTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "define ","UneqTuples",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "24",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "26",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "25",
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
                        "r" : "32",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "28",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "31",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "30",
                                    "s" : [ {
                                       "r" : "29",
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
               "localId" : "33",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "27",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "24",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "26",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "25",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "32",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "28",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "31",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "30",
                                 "type" : "Negate",
                                 "operand" : {
                                    "localId" : "29",
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
            "localId" : "42",
            "name" : "EqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "42",
                  "s" : [ {
                     "value" : [ "define ","EqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "41",
                     "s" : [ {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "35",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "36",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "38",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "39",
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
               "localId" : "41",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "37",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "35",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "36",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "40",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "38",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "39",
                           "type" : "Null"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "50",
            "name" : "UneqTuplesWithNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "50",
                  "s" : [ {
                     "value" : [ "define ","UneqTuplesWithNullFields",": " ]
                  }, {
                     "r" : "49",
                     "s" : [ {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "43",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "44",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "48",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "46",
                              "s" : [ {
                                 "value" : [ "'Goodbye'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "47",
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
               "localId" : "49",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "45",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "43",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "44",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "48",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "46",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Goodbye",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "47",
                           "type" : "Null"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "58",
            "name" : "UncertTuplesWithNullFieldOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "58",
                  "s" : [ {
                     "value" : [ "define ","UncertTuplesWithNullFieldOnOne",": " ]
                  }, {
                     "r" : "57",
                     "s" : [ {
                        "r" : "53",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "51",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "52",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "56",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "54",
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
                              "r" : "55",
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
               "localId" : "57",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "53",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "51",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "52",
                           "type" : "Null"
                        }
                     } ]
                  }, {
                     "localId" : "56",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "54",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hello",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "55",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "null",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "66",
            "name" : "UncertTuplesWithDiffNullFields",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "66",
                  "s" : [ {
                     "value" : [ "define ","UncertTuplesWithDiffNullFields",": " ]
                  }, {
                     "r" : "65",
                     "s" : [ {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "59",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "60",
                              "value" : [ "b",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "64",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "62",
                              "s" : [ {
                                 "value" : [ "'Hello'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "63",
                              "value" : [ "c",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "65",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "type" : "ToList",
                     "operand" : {
                        "localId" : "61",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "59",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Hello",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "60",
                              "type" : "Null"
                           }
                        } ]
                     }
                  }, {
                     "type" : "ToList",
                     "operand" : {
                        "localId" : "64",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "62",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Hello",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "c",
                           "value" : {
                              "localId" : "63",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ]
               }
            }
         }, {
            "localId" : "86",
            "name" : "EqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "86",
                  "s" : [ {
                     "value" : [ "define ","EqDateTimes",": " ]
                  }, {
                     "r" : "85",
                     "s" : [ {
                        "r" : "75",
                        "s" : [ {
                           "r" : "67",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "74",
                           "s" : [ {
                              "r" : "74",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "84",
                        "s" : [ {
                           "r" : "76",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "83",
                           "s" : [ {
                              "r" : "83",
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
               "localId" : "85",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "75",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "67",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "68",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "69",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "70",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "71",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "72",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "73",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "74",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "84",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "76",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "77",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "78",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "79",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "80",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "81",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "82",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "83",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "106",
            "name" : "UneqDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "106",
                  "s" : [ {
                     "value" : [ "define ","UneqDateTimes",": " ]
                  }, {
                     "r" : "105",
                     "s" : [ {
                        "r" : "95",
                        "s" : [ {
                           "r" : "87",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "94",
                           "s" : [ {
                              "r" : "94",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "104",
                        "s" : [ {
                           "r" : "96",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","201",", " ]
                        }, {
                           "r" : "103",
                           "s" : [ {
                              "r" : "103",
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
               "localId" : "105",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "95",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "87",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "88",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "89",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "90",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "91",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "92",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "93",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "94",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "104",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "96",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "97",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "98",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "99",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "100",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "101",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "102",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "201",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "103",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "126",
            "name" : "EqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "126",
                  "s" : [ {
                     "value" : [ "define ","EqDateTimesTZ",": " ]
                  }, {
                     "r" : "125",
                     "s" : [ {
                        "r" : "115",
                        "s" : [ {
                           "r" : "107",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","23",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "114",
                           "s" : [ {
                              "r" : "114",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "124",
                        "s" : [ {
                           "r" : "116",
                           "value" : [ "DateTime","(","2000",", ","3",", ","16",", ","2",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "123",
                           "s" : [ {
                              "r" : "123",
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
               "localId" : "125",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "115",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "107",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "108",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "109",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "110",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "111",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "112",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "113",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "114",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "124",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "116",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "117",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "118",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "16",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "119",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "120",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "121",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "122",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "123",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "4.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "146",
            "name" : "UneqDateTimesTZ",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "146",
                  "s" : [ {
                     "value" : [ "define ","UneqDateTimesTZ",": " ]
                  }, {
                     "r" : "145",
                     "s" : [ {
                        "r" : "135",
                        "s" : [ {
                           "r" : "127",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "134",
                           "s" : [ {
                              "r" : "134",
                              "value" : [ "+","1.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "144",
                        "s" : [ {
                           "r" : "136",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",", " ]
                        }, {
                           "r" : "143",
                           "s" : [ {
                              "r" : "143",
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
               "localId" : "145",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "135",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "127",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "128",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "129",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "130",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "131",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "132",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "133",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "134",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "144",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "136",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "137",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "138",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "139",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "140",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "141",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "25",
                        "type" : "Literal"
                     },
                     "millisecond" : {
                        "localId" : "142",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "200",
                        "type" : "Literal"
                     },
                     "timezoneOffset" : {
                        "localId" : "143",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "156",
            "name" : "EqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "156",
                  "s" : [ {
                     "value" : [ "define ","EqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "155",
                     "s" : [ {
                        "r" : "150",
                        "s" : [ {
                           "r" : "147",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "154",
                        "s" : [ {
                           "r" : "151",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "155",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "150",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "147",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "148",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "149",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "154",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "151",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "152",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "153",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "166",
            "name" : "UneqDateTimesOnlyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "166",
                  "s" : [ {
                     "value" : [ "define ","UneqDateTimesOnlyDate",": " ]
                  }, {
                     "r" : "165",
                     "s" : [ {
                        "r" : "160",
                        "s" : [ {
                           "r" : "157",
                           "value" : [ "DateTime","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "164",
                        "s" : [ {
                           "r" : "161",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "165",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "160",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "157",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "158",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "159",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "14",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "164",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "161",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "162",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "163",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "179",
            "name" : "PossiblyEqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "179",
                  "s" : [ {
                     "value" : [ "define ","PossiblyEqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "178",
                     "s" : [ {
                        "r" : "170",
                        "s" : [ {
                           "r" : "167",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "177",
                        "s" : [ {
                           "r" : "171",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","13",", ","43",", ","32",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "178",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "170",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "167",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "168",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "169",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "177",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "171",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "172",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "173",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "174",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "175",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "43",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "176",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "32",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "192",
            "name" : "UneqDateTimesOnlyDateOnOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "192",
                  "s" : [ {
                     "value" : [ "define ","UneqDateTimesOnlyDateOnOne",": " ]
                  }, {
                     "r" : "191",
                     "s" : [ {
                        "r" : "186",
                        "s" : [ {
                           "r" : "180",
                           "value" : [ "DateTime","(","2000",", ","4",", ","13",", ","12",", ","43",", ","32",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "190",
                        "s" : [ {
                           "r" : "187",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "191",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "186",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "180",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "181",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "182",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "183",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "184",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "43",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "185",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "32",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "190",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "187",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "188",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "189",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "200",
            "name" : "PossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "200",
                  "s" : [ {
                     "value" : [ "define ","PossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "199",
                     "s" : [ {
                        "r" : "196",
                        "s" : [ {
                           "r" : "193",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "198",
                        "s" : [ {
                           "r" : "197",
                           "value" : [ "DateTime","(","2000",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "199",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "196",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "193",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "194",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "195",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "198",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "197",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "209",
            "name" : "ImpossiblyEqualDateTimes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "define ","ImpossiblyEqualDateTimes",": " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "r" : "204",
                        "s" : [ {
                           "r" : "201",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "207",
                        "s" : [ {
                           "r" : "205",
                           "value" : [ "DateTime","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "208",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "204",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "201",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "202",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "203",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "207",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "205",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "206",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "219",
            "name" : "DateAndDateTimeNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "define ","DateAndDateTimeNull",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "210",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "type" : "ToDateTime",
                     "operand" : {
                        "localId" : "213",
                        "type" : "Date",
                        "year" : {
                           "localId" : "210",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "211",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "212",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "217",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "214",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "215",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "216",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "229",
            "name" : "DateAndDateTimeNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "define ","DateAndDateTimeNotEqual",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "r" : "224",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "type" : "ToDateTime",
                     "operand" : {
                        "localId" : "223",
                        "type" : "Date",
                        "year" : {
                           "localId" : "220",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "221",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "222",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "227",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "224",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "225",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "226",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "242",
            "name" : "DateAndDateTimeUncertainTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "define ","DateAndDateTimeUncertainTrue",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "type" : "ToDateTime",
                     "operand" : {
                        "localId" : "233",
                        "type" : "Date",
                        "year" : {
                           "localId" : "230",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "231",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "232",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  }, {
                     "localId" : "240",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "234",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "235",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "236",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "237",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "238",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "239",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "252",
            "name" : "DateTimeAndDateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "define ","DateTimeAndDateNull",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "r" : "243",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "r" : "247",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "246",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "243",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "244",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "245",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToDateTime",
                     "operand" : {
                        "localId" : "250",
                        "type" : "Date",
                        "year" : {
                           "localId" : "247",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "248",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "249",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "262",
            "name" : "DateTimeAndDateNotEqual",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "define ","DateTimeAndDateNotEqual",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "r" : "253",
                           "value" : [ "DateTime","(","2000",", ","3",", ","12",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "256",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "253",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "254",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "255",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToDateTime",
                     "operand" : {
                        "localId" : "260",
                        "type" : "Date",
                        "year" : {
                           "localId" : "257",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "258",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "259",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "275",
            "name" : "DateTimeAndDateUncertainTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "define ","DateTimeAndDateUncertainTrue",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "r" : "263",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "r" : "270",
                           "value" : [ "Date","(","2000",", ","3",", ","13",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "269",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "263",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "264",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "265",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "266",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "267",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "268",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToDateTime",
                     "operand" : {
                        "localId" : "273",
                        "type" : "Date",
                        "year" : {
                           "localId" : "270",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "271",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "272",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "13",
                           "type" : "Literal"
                        }
                     }
                  } ]
               }
            }
         }, {
            "localId" : "279",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "276",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "277",
                     "value" : 4,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "283",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "280",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "281",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "287",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "286",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "284",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "285",
                     "value" : 6,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "291",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "290",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "288",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "289",
                     "value" : 5,
                     "unit" : "cm",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "295",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "r" : "292",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "293",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "292",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "293",
                     "value" : 500,
                     "unit" : "cm",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "299",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "298",
                     "s" : [ {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "298",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "296",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "297",
                     "value" : 5,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "303",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "301",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "302",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "300",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "301",
                     "value" : 4,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "307",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "307",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "306",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "304",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "305",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "311",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "311",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "310",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "308",
                     "value" : 5,
                     "unit" : "Cel",
                     "type" : "Quantity"
                  }, {
                     "localId" : "309",
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

### Equivalent
library TestSnippet version '1'
using QUICK
context Patient
define ANull_BDefined: null ~ 4
define ADefined_BNull: 5 ~ null
define ANull_BNull: (null as String) ~ (null as String)
define ADefined_BDefined: 3 ~ 3
define CaseInsensitiveStrings: 'FOO' ~ 'foo'
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
###

module.exports['Equivalent'] = {
   "library" : {
      "annotation" : [ {
         "startLine" : 38,
         "startChar" : 37,
         "endLine" : 38,
         "endChar" : 42,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 39,
         "startChar" : 26,
         "endLine" : 39,
         "endChar" : 31,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "ANull_BDefined",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","ANull_BDefined",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "null"," ","~"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Equivalent",
               "operand" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "2",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "ADefined_BNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","ADefined_BNull",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," ","~"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "7",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "ANull_BNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "define ","ANull_BNull",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "r" : "10",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "11",
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
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "15",
                           "s" : [ {
                              "r" : "13",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "14",
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
               "localId" : "16",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "12",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "10",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "11",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "15",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "13",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "14",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "ADefined_BDefined",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","ADefined_BDefined",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "value" : [ "3"," ","~"," ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "19",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "CaseInsensitiveStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "define ","CaseInsensitiveStrings",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "'FOO'" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FOO",
                  "type" : "Literal"
               }, {
                  "localId" : "23",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "33",
            "name" : "EqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "define ","EqRatios",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "28",
                        "s" : [ {
                           "r" : "26",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "27",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "3 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "28",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "26",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "27",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "31",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "29",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "30",
                     "value" : 3,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "41",
            "name" : "UneqRatios",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "define ","UneqRatios",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "36",
                        "s" : [ {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "r" : "37",
                           "s" : [ {
                              "value" : [ "15 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "4 ","'dL'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "36",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "34",
                     "value" : 10,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "35",
                     "value" : 2,
                     "unit" : "dL"
                  }
               }, {
                  "localId" : "39",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "37",
                     "value" : 15,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "38",
                     "value" : 4,
                     "unit" : "dL"
                  }
               } ]
            }
         }, {
            "localId" : "53",
            "name" : "UneqRatioTypes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "53",
                  "s" : [ {
                     "value" : [ "define ","UneqRatioTypes",": " ]
                  }, {
                     "r" : "52",
                     "s" : [ {
                        "r" : "44",
                        "s" : [ {
                           "r" : "42",
                           "s" : [ {
                              "value" : [ "10 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ " : " ]
                        }, {
                           "r" : "43",
                           "s" : [ {
                              "value" : [ "2 ","'dL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "51",
                        "s" : [ {
                           "r" : "45",
                           "value" : [ "DateTime","(","2000",", ","3",", ","13",", ","2",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "52",
               "type" : "Equivalent",
               "operand" : [ {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "44",
                     "type" : "Ratio",
                     "numerator" : {
                        "localId" : "42",
                        "value" : 10,
                        "unit" : "mg"
                     },
                     "denominator" : {
                        "localId" : "43",
                        "value" : 2,
                        "unit" : "dL"
                     }
                  }
               }, {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "51",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "45",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2000",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "46",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "47",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "13",
                        "type" : "Literal"
                     },
                     "hour" : {
                        "localId" : "48",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "49",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "50",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "23",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "61",
            "name" : "SameTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "61",
                  "s" : [ {
                     "value" : [ "define ","SameTuples",": " ]
                  }, {
                     "r" : "60",
                     "s" : [ {
                        "r" : "56",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "54",
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
                              "r" : "55",
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
                        "r" : "59",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "57",
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
                              "r" : "58",
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
               "localId" : "60",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "56",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "54",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "55",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "59",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "57",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "58",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "67",
            "name" : "SameTuplesNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "67",
                  "s" : [ {
                     "value" : [ "define ","SameTuplesNull",": " ]
                  }, {
                     "r" : "66",
                     "s" : [ {
                        "r" : "63",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "62",
                              "value" : [ "a",": ","null" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "65",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "64",
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
               "localId" : "66",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "63",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "62",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "65",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "64",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "75",
            "name" : "DifferentTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "75",
                  "s" : [ {
                     "value" : [ "define ","DifferentTuples",": " ]
                  }, {
                     "r" : "74",
                     "s" : [ {
                        "r" : "70",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "68",
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
                              "r" : "69",
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
                        "r" : "73",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "71",
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
                              "r" : "72",
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
               "localId" : "74",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "70",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "68",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "69",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "73",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "71",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "x",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "72",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "85",
            "name" : "SameNestedTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "85",
                  "s" : [ {
                     "value" : [ "define ","SameNestedTuples",": " ]
                  }, {
                     "r" : "84",
                     "s" : [ {
                        "r" : "79",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "76",
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
                              "r" : "78",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "77",
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
                        "r" : "83",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "80",
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
                              "r" : "82",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "value" : [ "c",": " ]
                                 }, {
                                    "r" : "81",
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
               "localId" : "84",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "79",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "76",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "78",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "77",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "c",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "83",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "80",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "82",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "81",
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
            "localId" : "95",
            "name" : "SameNestedTuplesNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "95",
                  "s" : [ {
                     "value" : [ "define ","SameNestedTuplesNull",": " ]
                  }, {
                     "r" : "94",
                     "s" : [ {
                        "r" : "89",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "86",
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
                              "r" : "88",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "87",
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
                        "r" : "93",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "90",
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
                              "r" : "92",
                              "s" : [ {
                                 "value" : [ "Tuple{" ]
                              }, {
                                 "s" : [ {
                                    "r" : "91",
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
               "localId" : "94",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "89",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "86",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "88",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "87",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "localId" : "93",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "90",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "92",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "c",
                           "value" : {
                              "localId" : "91",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "99",
            "name" : "EmptyLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "99",
                  "s" : [ {
                     "value" : [ "define ","EmptyLists",": " ]
                  }, {
                     "r" : "98",
                     "s" : [ {
                        "r" : "96",
                        "value" : [ "{ }"," ","~"," ","{ }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "98",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "96",
                  "type" : "List"
               }, {
                  "localId" : "97",
                  "type" : "List"
               } ]
            }
         }, {
            "localId" : "109",
            "name" : "DifferentTypesLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "109",
                  "s" : [ {
                     "value" : [ "define ","DifferentTypesLists",": " ]
                  }, {
                     "r" : "108",
                     "s" : [ {
                        "r" : "103",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "100",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "101",
                           "s" : [ {
                              "value" : [ "'2'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "102",
                           "s" : [ {
                              "value" : [ "'3'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "107",
                        "s" : [ {
                           "r" : "104",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "108",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "103",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "100",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "101",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "102",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "107",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "104",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "105",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "106",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "116",
            "name" : "DifferentLengthLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "116",
                  "s" : [ {
                     "value" : [ "define ","DifferentLengthLists",": " ]
                  }, {
                     "r" : "115",
                     "s" : [ {
                        "r" : "111",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "110",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "114",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "112",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "113",
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
               "localId" : "115",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "111",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "110",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "114",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "112",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "113",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "124",
            "name" : "DifferentOrderLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "124",
                  "s" : [ {
                     "value" : [ "define ","DifferentOrderLists",": " ]
                  }, {
                     "r" : "123",
                     "s" : [ {
                        "r" : "119",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "117",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "118",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "122",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "120",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "121",
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
               "localId" : "123",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "119",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "117",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "118",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "122",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "120",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "121",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "134",
            "name" : "SameLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "134",
                  "s" : [ {
                     "value" : [ "define ","SameLists",": " ]
                  }, {
                     "r" : "133",
                     "s" : [ {
                        "r" : "128",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "125",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "126",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "127",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "132",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "129",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "130",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "131",
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
               "localId" : "133",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "128",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "125",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "126",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "127",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "132",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "129",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "130",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "131",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "144",
            "name" : "SameListsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "144",
                  "s" : [ {
                     "value" : [ "define ","SameListsNull",": " ]
                  }, {
                     "r" : "143",
                     "s" : [ {
                        "r" : "138",
                        "s" : [ {
                           "r" : "135",
                           "value" : [ "{","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "142",
                        "s" : [ {
                           "r" : "139",
                           "value" : [ "{","null",", ","null",", ","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "143",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "138",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "135",
                     "type" : "Null"
                  }, {
                     "localId" : "136",
                     "type" : "Null"
                  }, {
                     "localId" : "137",
                     "type" : "Null"
                  } ]
               }, {
                  "localId" : "142",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "139",
                     "type" : "Null"
                  }, {
                     "localId" : "140",
                     "type" : "Null"
                  }, {
                     "localId" : "141",
                     "type" : "Null"
                  } ]
               } ]
            }
         }, {
            "localId" : "160",
            "name" : "SameNestedLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "160",
                  "s" : [ {
                     "value" : [ "define ","SameNestedLists",": " ]
                  }, {
                     "r" : "159",
                     "s" : [ {
                        "r" : "151",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "147",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "145",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "146",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "150",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "148",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "149",
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
                        "r" : "158",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "154",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "152",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "153",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "157",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "155",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "156",
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
               "localId" : "159",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "151",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "147",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "145",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "146",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "150",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "148",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "149",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  } ]
               }, {
                  "localId" : "158",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "154",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "152",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "153",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "157",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "155",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "156",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "172",
            "name" : "SameNestedListsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "172",
                  "s" : [ {
                     "value" : [ "define ","SameNestedListsNull",": " ]
                  }, {
                     "r" : "171",
                     "s" : [ {
                        "r" : "165",
                        "s" : [ {
                           "r" : "161",
                           "value" : [ "{","null",", " ]
                        }, {
                           "r" : "164",
                           "s" : [ {
                              "r" : "162",
                              "value" : [ "{","null",", ","null","}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "170",
                        "s" : [ {
                           "r" : "166",
                           "value" : [ "{","null",", " ]
                        }, {
                           "r" : "169",
                           "s" : [ {
                              "r" : "167",
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
               "localId" : "171",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "165",
                  "type" : "List",
                  "element" : [ {
                     "type" : "As",
                     "operand" : {
                        "localId" : "161",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "164",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "162",
                        "type" : "Null"
                     }, {
                        "localId" : "163",
                        "type" : "Null"
                     } ]
                  } ]
               }, {
                  "localId" : "170",
                  "type" : "List",
                  "element" : [ {
                     "type" : "As",
                     "operand" : {
                        "localId" : "166",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "169",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "167",
                        "type" : "Null"
                     }, {
                        "localId" : "168",
                        "type" : "Null"
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "180",
            "name" : "EmptyInterval",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "180",
                  "s" : [ {
                     "value" : [ "define ","EmptyInterval",": " ]
                  }, {
                     "r" : "179",
                     "s" : [ {
                        "r" : "175",
                        "s" : [ {
                           "r" : "173",
                           "value" : [ "Interval(","null",", ","null",")" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "178",
                        "s" : [ {
                           "r" : "176",
                           "value" : [ "Interval(","null",", ","null",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "179",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "175",
                  "lowClosed" : false,
                  "highClosed" : false,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "173",
                     "type" : "Null"
                  },
                  "high" : {
                     "localId" : "174",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "178",
                  "lowClosed" : false,
                  "highClosed" : false,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "176",
                     "type" : "Null"
                  },
                  "high" : {
                     "localId" : "177",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "188",
            "name" : "IntervalDifferentPointTypes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "188",
                  "s" : [ {
                     "value" : [ "define ","IntervalDifferentPointTypes",":  " ]
                  }, {
                     "r" : "187",
                     "s" : [ {
                        "r" : "183",
                        "s" : [ {
                           "r" : "181",
                           "value" : [ "Interval[","1",", ","5","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "186",
                        "s" : [ {
                           "value" : [ "Interval[" ]
                        }, {
                           "r" : "184",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "185",
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
               "localId" : "187",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "183",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "181",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "182",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "186",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "184",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "185",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "196",
            "name" : "IntervalDifferentStarts",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "196",
                  "s" : [ {
                     "value" : [ "define ","IntervalDifferentStarts",": " ]
                  }, {
                     "r" : "195",
                     "s" : [ {
                        "r" : "191",
                        "s" : [ {
                           "r" : "189",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "194",
                        "s" : [ {
                           "r" : "192",
                           "value" : [ "Interval[","2",",","3","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "195",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "191",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "189",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "190",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "194",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "192",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "193",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "204",
            "name" : "IntervalDifferentEndings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "204",
                  "s" : [ {
                     "value" : [ "define ","IntervalDifferentEndings",": " ]
                  }, {
                     "r" : "203",
                     "s" : [ {
                        "r" : "199",
                        "s" : [ {
                           "r" : "197",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "202",
                        "s" : [ {
                           "r" : "200",
                           "value" : [ "Interval[","1",",","4","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "203",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "199",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "197",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "198",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "202",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "200",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "201",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "212",
            "name" : "SameIntervals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "define ","SameIntervals",": " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "r" : "207",
                        "s" : [ {
                           "r" : "205",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "210",
                        "s" : [ {
                           "r" : "208",
                           "value" : [ "Interval[","1",",","3","]" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "211",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "207",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "205",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "206",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "210",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "208",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "209",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "218",
            "name" : "TupleAndList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "define ","TupleAndList",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "213",
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
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "215",
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
               "localId" : "217",
               "type" : "Equivalent",
               "operand" : [ {
                  "type" : "ToList",
                  "operand" : {
                     "type" : "ToList",
                     "operand" : {
                        "localId" : "214",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "213",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  }
               }, {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "216",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "215",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToList",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               } ]
            }
         }, {
            "localId" : "224",
            "name" : "ListAndTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "define ","ListAndTuple",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "219",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "221",
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
               "localId" : "223",
               "type" : "Equivalent",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "220",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "219",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToList",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }, {
                  "type" : "ToList",
                  "operand" : {
                     "type" : "ToList",
                     "operand" : {
                        "localId" : "222",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "221",
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
            "localId" : "230",
            "name" : "TupleAndNullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "define ","TupleAndNullList",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "225",
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
                        "r" : "228",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "{","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "type" : "Equivalent",
               "operand" : [ {
                  "localId" : "226",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "225",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "type" : "As",
                  "operand" : {
                     "type" : "SingletonFrom",
                     "operand" : {
                        "localId" : "228",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "227",
                           "type" : "Null"
                        } ]
                     }
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "a",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "localId" : "236",
            "name" : "NullListAndTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "define ","NullListAndTuple",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "r" : "231",
                           "value" : [ "{","null","}" ]
                        } ]
                     }, {
                        "value" : [ " ","~"," " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "a",": " ]
                           }, {
                              "r" : "233",
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
               "localId" : "235",
               "type" : "Equivalent",
               "operand" : [ {
                  "type" : "As",
                  "operand" : {
                     "type" : "SingletonFrom",
                     "operand" : {
                        "localId" : "232",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "231",
                           "type" : "Null"
                        } ]
                     }
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "a",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "234",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "233",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         } ]
      }
   }
}

### Less
library TestSnippet version '1'
using QUICK
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
###

module.exports['Less'] = {
   "library" : {
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Int",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," ","<"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Int",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," ","<"," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Int",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "5"," ","<"," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "14",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "15",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "18",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "19",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "22",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "23",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "29",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "26",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "27",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "33",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "30",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "31",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "37",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "36",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "34",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "35",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "41",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "38",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "39",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "45",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "44",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "42",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "43",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "49",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<"," " ]
                     }, {
                        "r" : "47",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "48",
               "type" : "Less",
               "operand" : [ {
                  "localId" : "46",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "47",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

### LessOrEqual
library TestSnippet version '1'
using QUICK
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
###

module.exports['LessOrEqual'] = {
   "library" : {
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Int",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," ","<="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Int",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," ","<="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Int",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "5"," ","<="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "14",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "15",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "18",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "19",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "22",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "23",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "29",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "26",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "27",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "33",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "30",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "31",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "37",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "36",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "34",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "35",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "41",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "38",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "39",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "45",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "44",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "42",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "43",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "49",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ","<="," " ]
                     }, {
                        "r" : "47",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "48",
               "type" : "LessOrEqual",
               "operand" : [ {
                  "localId" : "46",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "47",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

### Greater
library TestSnippet version '1'
using QUICK
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
###

module.exports['Greater'] = {
   "library" : {
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Int",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," ",">"," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Int",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," ",">"," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Int",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "5"," ",">"," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "14",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "15",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "18",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "19",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "22",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "23",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "29",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "26",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "27",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "33",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "30",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "31",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "37",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "36",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "34",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "35",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "41",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "38",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "39",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "45",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "44",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "42",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "43",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "49",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">"," " ]
                     }, {
                        "r" : "47",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "48",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "46",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "47",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

### GreaterOrEqual
library TestSnippet version '1'
using QUICK
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
###

module.exports['GreaterOrEqual'] = {
   "library" : {
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "AGtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Int",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," ",">="," ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "AEqB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Int",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," ",">="," ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "ALtB_Int",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Int",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "5"," ",">="," ","6" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "AGtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "14",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "15",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "AEqB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "18",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "19",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "ALtB_Quantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "6 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "22",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "23",
                  "value" : 6,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "29",
            "name" : "AGtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_diff",": " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "5 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "26",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "27",
                  "value" : 5,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "33",
            "name" : "AEqB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_diff",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "500 ","'cm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "30",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "31",
                  "value" : 500,
                  "unit" : "cm",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "37",
            "name" : "ALtB_Quantity_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_diff",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "5 ","'km'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "36",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "34",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "35",
                  "value" : 5,
                  "unit" : "km",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "41",
            "name" : "AGtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "define ","AGtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "38",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "39",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "45",
            "name" : "AEqB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "define ","AEqB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "5 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "44",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "42",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "43",
                  "value" : 5,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "49",
            "name" : "ALtB_Quantity_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "define ","ALtB_Quantity_incompatible",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "5 ","'Cel'" ]
                        } ]
                     }, {
                        "value" : [ " ",">="," " ]
                     }, {
                        "r" : "47",
                        "s" : [ {
                           "value" : [ "40 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "48",
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "localId" : "46",
                  "value" : 5,
                  "unit" : "Cel",
                  "type" : "Quantity"
               }, {
                  "localId" : "47",
                  "value" : 40,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "55",
            "name" : "DivideUcum_incompatible",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "55",
                  "s" : [ {
                     "value" : [ "define ","DivideUcum_incompatible",": " ]
                  }, {
                     "r" : "54",
                     "s" : [ {
                        "r" : "52",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "52",
                           "s" : [ {
                              "r" : "50",
                              "s" : [ {
                                 "value" : [ "100 ","'[nmi_i]'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "51",
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
                        "r" : "53",
                        "s" : [ {
                           "value" : [ "49 ","'mg/[lb_av]'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "54",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "52",
                  "type" : "Divide",
                  "operand" : [ {
                     "localId" : "50",
                     "value" : 100,
                     "unit" : "[nmi_i]",
                     "type" : "Quantity"
                  }, {
                     "localId" : "51",
                     "value" : 2,
                     "unit" : "h",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "53",
                  "value" : 49,
                  "unit" : "mg/[lb_av]",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "61",
            "name" : "DivideUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "61",
                  "s" : [ {
                     "value" : [ "define ","DivideUcum",": " ]
                  }, {
                     "r" : "60",
                     "s" : [ {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "58",
                           "s" : [ {
                              "r" : "56",
                              "s" : [ {
                                 "value" : [ "100 ","'mg'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "57",
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
                        "r" : "59",
                        "s" : [ {
                           "value" : [ "49 ","'mg/[lb_av]'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "60",
               "type" : "Greater",
               "operand" : [ {
                  "localId" : "58",
                  "type" : "Divide",
                  "operand" : [ {
                     "localId" : "56",
                     "value" : 100,
                     "unit" : "mg",
                     "type" : "Quantity"
                  }, {
                     "localId" : "57",
                     "value" : 2,
                     "unit" : "[lb_av]",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "59",
                  "value" : 49,
                  "unit" : "mg/[lb_av]",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

