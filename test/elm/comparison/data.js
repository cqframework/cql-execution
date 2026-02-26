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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "1359",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Int", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "5", " ", "=", " ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Int", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "5", " ", "=", " ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Int", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "5", " ", "=", " ", "6" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "6",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "EqTuples", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "241",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "242",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "243",
                        "value" : [ "c", ": ", "1" ]
                      } ]
                    }, {
                      "value" : [ "}" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "254",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "255",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "256",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "257",
                        "value" : [ "c", ": ", "1" ]
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
          "type" : "Equal",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "268",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "269",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "270",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "271",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "272",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "273",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "274",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "275",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "276",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "277",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "278",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "279",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "280",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "281",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "240",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "247",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "248",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "250",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "251",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "252",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "253",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "241",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "242",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "244",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "245",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "246",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "243",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "254",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "261",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "262",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "264",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "265",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "266",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "267",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "255",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "256",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "258",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "259",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "260",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "257",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "284",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuples", ": " ]
            }, {
              "r" : "285",
              "s" : [ {
                "r" : "286",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "287",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "288",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "289",
                        "value" : [ "c", ": ", "1" ]
                      } ]
                    }, {
                      "value" : [ "}" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "300",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "301",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "302",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "value" : [ "c", ": " ]
                      }, {
                        "r" : "303",
                        "s" : [ {
                          "r" : "304",
                          "value" : [ "-", "1" ]
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
          "type" : "Equal",
          "localId" : "285",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "316",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "317",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "318",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "319",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "320",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "321",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "322",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "323",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "324",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "325",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "326",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "327",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "328",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "329",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "286",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "293",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "294",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "295",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "296",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "297",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "298",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "299",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "287",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "288",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "290",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "291",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "292",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "289",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "300",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "309",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "310",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "312",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "313",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "314",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "315",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "301",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "302",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "306",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "307",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "308",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Negate",
                    "localId" : "303",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ],
                    "signature" : [ {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "305",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    } ],
                    "operand" : {
                      "type" : "Literal",
                      "localId" : "304",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "332",
            "s" : [ {
              "value" : [ "", "define ", "EqTuplesWithNullFields", ": " ]
            }, {
              "r" : "333",
              "s" : [ {
                "r" : "334",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "343",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "333",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "352",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "353",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "354",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "355",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "356",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "357",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "358",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "359",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "360",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "361",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "334",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "338",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "339",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "341",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "342",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "335",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "337",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "343",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "347",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "348",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "349",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "350",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "351",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "344",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "346",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "364",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuplesWithNullFields", ": " ]
            }, {
              "r" : "365",
              "s" : [ {
                "r" : "366",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "375",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "365",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "384",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "385",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "386",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "387",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "388",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "389",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "390",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "391",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "392",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "393",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "366",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "370",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "371",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "372",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "373",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "374",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "367",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "369",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "375",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "379",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "380",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "381",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "382",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "376",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "378",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "396",
            "s" : [ {
              "value" : [ "", "define ", "UncertTuplesWithNullFieldOnOne", ": " ]
            }, {
              "r" : "397",
              "s" : [ {
                "r" : "398",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "407",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": " ]
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
          "type" : "Equal",
          "localId" : "397",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "417",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "418",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "419",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "420",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "421",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "422",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "423",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "424",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "425",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "426",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "398",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "402",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "403",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "404",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "405",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "406",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "399",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "401",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "407",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "412",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "413",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "414",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "415",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "416",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "408",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "410",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "null",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "429",
            "s" : [ {
              "value" : [ "", "define ", "UncertTuplesWithNullFieldOnFirstOne", ": " ]
            }, {
              "r" : "430",
              "s" : [ {
                "r" : "431",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "432",
                    "value" : [ "a", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
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
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "440",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": " ]
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
          "type" : "Equal",
          "localId" : "430",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "450",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "451",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "452",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "localId" : "453",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "454",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "455",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "456",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "457",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "localId" : "458",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "459",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "431",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "435",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "436",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "437",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "438",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "439",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Null",
                "localId" : "432",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "433",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "440",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "445",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "446",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "447",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "448",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "449",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "441",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "443",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "462",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuplesWithNullFieldOnOne", ": " ]
            }, {
              "r" : "463",
              "s" : [ {
                "r" : "464",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "473",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": " ]
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
          "type" : "Equal",
          "localId" : "463",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "483",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "484",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "485",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "486",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "487",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "488",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "489",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "490",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "491",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "492",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "464",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "468",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "469",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "470",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "471",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "472",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "465",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "467",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "473",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "478",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "479",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "480",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "481",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "482",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "474",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "476",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "null",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "495",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuplesWithNullFieldOnFirstOne", ": " ]
            }, {
              "r" : "496",
              "s" : [ {
                "r" : "497",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "498",
                    "value" : [ "a", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
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
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "506",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": " ]
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
          "type" : "Equal",
          "localId" : "496",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "516",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "517",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "518",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "localId" : "519",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "520",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "521",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "522",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "523",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "localId" : "524",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "525",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "497",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "501",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "502",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "503",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "504",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "505",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Null",
                "localId" : "498",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "499",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "506",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "511",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "512",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "513",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "514",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "515",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "507",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "null",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "509",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "528",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimes", ": " ]
            }, {
              "r" : "529",
              "s" : [ {
                "r" : "548",
                "s" : [ {
                  "r" : "530",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "537",
                  "s" : [ {
                    "r" : "537",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "575",
                "s" : [ {
                  "r" : "557",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "564",
                  "s" : [ {
                    "r" : "564",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "529",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "584",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "585",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "548",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "549",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "550",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "551",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "552",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "553",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "554",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "555",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "556",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "530",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "531",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "532",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "533",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "534",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "535",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "536",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "537",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "575",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "576",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "577",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "578",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "579",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "580",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "581",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "582",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "583",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "557",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "558",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "559",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "560",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "561",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "562",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "563",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "564",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "588",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimes", ": " ]
            }, {
              "r" : "589",
              "s" : [ {
                "r" : "608",
                "s" : [ {
                  "r" : "590",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "597",
                  "s" : [ {
                    "r" : "597",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "635",
                "s" : [ {
                  "r" : "617",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "201", ", " ]
                }, {
                  "r" : "624",
                  "s" : [ {
                    "r" : "624",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "589",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "644",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "645",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "608",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "609",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "610",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "611",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "612",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "613",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "614",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "615",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "616",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "590",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "591",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "592",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "593",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "594",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "595",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "596",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "597",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "635",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "636",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "637",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "638",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "639",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "640",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "641",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "642",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "643",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "617",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "618",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "619",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "620",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "621",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "622",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "623",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "201",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "624",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "648",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesTZ", ": " ]
            }, {
              "r" : "649",
              "s" : [ {
                "r" : "668",
                "s" : [ {
                  "r" : "650",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "23", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "657",
                  "s" : [ {
                    "r" : "657",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "695",
                "s" : [ {
                  "r" : "677",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "16", ", ", "2", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "684",
                  "s" : [ {
                    "r" : "684",
                    "value" : [ "+", "4.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "649",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "704",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "705",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "668",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "669",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "670",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "671",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "672",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "673",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "674",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "675",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "676",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "650",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "651",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "652",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "653",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "654",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "655",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "656",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "657",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "695",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "696",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "697",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "698",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "699",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "700",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "701",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "702",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "703",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "677",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "678",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "679",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "680",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "681",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "682",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "683",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "684",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.0",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "708",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesTZ", ": " ]
            }, {
              "r" : "709",
              "s" : [ {
                "r" : "728",
                "s" : [ {
                  "r" : "710",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "717",
                  "s" : [ {
                    "r" : "717",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "755",
                "s" : [ {
                  "r" : "737",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "744",
                  "s" : [ {
                    "r" : "744",
                    "value" : [ "+", "2.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "709",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "764",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "765",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "728",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "729",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "730",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "731",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "732",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "733",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "734",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "735",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "736",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "710",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "711",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "712",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "713",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "714",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "715",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "716",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "717",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "755",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "756",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "757",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "758",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "759",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "760",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "761",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "762",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "763",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "737",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "738",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "739",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "740",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "741",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "742",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "743",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "744",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.0",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "768",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullMs", ": " ]
            }, {
              "r" : "769",
              "s" : [ {
                "r" : "786",
                "s" : [ {
                  "r" : "770",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "808",
                "s" : [ {
                  "r" : "794",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "769",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "815",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "816",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "786",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "787",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "788",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "789",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "790",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "791",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "792",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "793",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "770",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "771",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "772",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "773",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "774",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "775",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "776",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "808",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "809",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "810",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "811",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "812",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "813",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "814",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "794",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "795",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "796",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "797",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "798",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "799",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "819",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullOtherMs", ": " ]
            }, {
              "r" : "820",
              "s" : [ {
                "r" : "835",
                "s" : [ {
                  "r" : "821",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "858",
                "s" : [ {
                  "r" : "842",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "820",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "866",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "867",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "835",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "836",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "837",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "838",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "839",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "840",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "841",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "821",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "822",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "823",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "824",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "825",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "826",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "858",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "859",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "860",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "861",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "862",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "863",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "864",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "865",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "842",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "843",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "844",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "845",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "846",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "847",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "848",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "870",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "871",
              "s" : [ {
                "r" : "880",
                "s" : [ {
                  "r" : "872",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "892",
                "s" : [ {
                  "r" : "884",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "871",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "896",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "897",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "880",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "881",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "882",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "883",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "872",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "873",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "874",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "892",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "893",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "894",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "895",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "884",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "885",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "886",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "900",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "901",
              "s" : [ {
                "r" : "910",
                "s" : [ {
                  "r" : "902",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "14", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "922",
                "s" : [ {
                  "r" : "914",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "901",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "926",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "927",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "910",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "911",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "912",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "913",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "902",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "903",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "904",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "922",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "923",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "924",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "925",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "914",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "915",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "916",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "930",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "931",
              "s" : [ {
                "r" : "940",
                "s" : [ {
                  "r" : "932",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "958",
                "s" : [ {
                  "r" : "944",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "13", ", ", "43", ", ", "32", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "931",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "965",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "966",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "940",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "941",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "942",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "943",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "932",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "933",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "934",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "958",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "959",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "960",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "961",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "962",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "963",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "964",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "944",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "945",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "946",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "947",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "948",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "43",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "949",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "32",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "969",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "970",
              "s" : [ {
                "r" : "985",
                "s" : [ {
                  "r" : "971",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ", ", "13", ", ", "12", ", ", "43", ", ", "32", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1000",
                "s" : [ {
                  "r" : "992",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "970",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1004",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1005",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "985",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "986",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "987",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "988",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "989",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "990",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "991",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "971",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "972",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "973",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "974",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "975",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "43",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "976",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "32",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1000",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1001",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1002",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1003",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "992",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "993",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "994",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1008",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "1009",
              "s" : [ {
                "r" : "1018",
                "s" : [ {
                  "r" : "1010",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1026",
                "s" : [ {
                  "r" : "1022",
                  "value" : [ "DateTime", "(", "2000", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1009",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1028",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1029",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1018",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1019",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1020",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1021",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1010",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1011",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1012",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1026",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1027",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1022",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1032",
            "s" : [ {
              "value" : [ "", "define ", "ImpossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "1033",
              "s" : [ {
                "r" : "1042",
                "s" : [ {
                  "r" : "1034",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1052",
                "s" : [ {
                  "r" : "1046",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1033",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1055",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1056",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1042",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1043",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1044",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1045",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1034",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1035",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1036",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1052",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1053",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1054",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1046",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1047",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1059",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeTrue", ": " ]
            }, {
              "r" : "1060",
              "s" : [ {
                "r" : "1069",
                "s" : [ {
                  "r" : "1061",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1081",
                "s" : [ {
                  "r" : "1073",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1060",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1088",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1089",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1086",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1087",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1069",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1070",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1071",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1072",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1061",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1062",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1063",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1081",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1082",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1083",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1084",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1073",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1074",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1075",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1092",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeNotEqual", ": " ]
            }, {
              "r" : "1093",
              "s" : [ {
                "r" : "1102",
                "s" : [ {
                  "r" : "1094",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1114",
                "s" : [ {
                  "r" : "1106",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1093",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1121",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1122",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1119",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1120",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1102",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1103",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1104",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1105",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1094",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1095",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1096",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1114",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1115",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1116",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1117",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1106",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1107",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1108",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1125",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeUncertainNull", ": " ]
            }, {
              "r" : "1126",
              "s" : [ {
                "r" : "1135",
                "s" : [ {
                  "r" : "1127",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1153",
                "s" : [ {
                  "r" : "1139",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1126",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1163",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1164",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1161",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1162",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1135",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1136",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1137",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1138",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1127",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1128",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1129",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1153",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1154",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1155",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1156",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1157",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1158",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1159",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1139",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1140",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1141",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1142",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1143",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1144",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1167",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateTrue", ": " ]
            }, {
              "r" : "1168",
              "s" : [ {
                "r" : "1177",
                "s" : [ {
                  "r" : "1169",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1189",
                "s" : [ {
                  "r" : "1181",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1168",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1196",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1197",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1177",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1178",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1179",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1180",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1169",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1170",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1171",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1194",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1195",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1189",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1190",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1191",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1192",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1181",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1182",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1183",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1200",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateNotEqual", ": " ]
            }, {
              "r" : "1201",
              "s" : [ {
                "r" : "1210",
                "s" : [ {
                  "r" : "1202",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1222",
                "s" : [ {
                  "r" : "1214",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1201",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1229",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1230",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1211",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1212",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1213",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1202",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1203",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1204",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1227",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1228",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1223",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1224",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1225",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1214",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1215",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1216",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1233",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateUncertainNull", ": " ]
            }, {
              "r" : "1234",
              "s" : [ {
                "r" : "1249",
                "s" : [ {
                  "r" : "1235",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1264",
                "s" : [ {
                  "r" : "1256",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1271",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1272",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1250",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1251",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1252",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1253",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1254",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1255",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1236",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1237",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1269",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1270",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1264",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1265",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1266",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1267",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1256",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1257",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1258",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1275",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
            }, {
              "r" : "1276",
              "s" : [ {
                "r" : "1277",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1278",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1276",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1279",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1280",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1283",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
            }, {
              "r" : "1284",
              "s" : [ {
                "r" : "1285",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1286",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1287",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1288",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1285",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1291",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
            }, {
              "r" : "1292",
              "s" : [ {
                "r" : "1293",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1294",
                "s" : [ {
                  "value" : [ "6 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1292",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1295",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1296",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1299",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "1300",
              "s" : [ {
                "r" : "1301",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1302",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1300",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1303",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1304",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1301",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1307",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "1308",
              "s" : [ {
                "r" : "1309",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1310",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1308",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1311",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1312",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1310",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1315",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "1316",
              "s" : [ {
                "r" : "1317",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1318",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1316",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1319",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1320",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1317",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1318",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1323",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1324",
              "s" : [ {
                "r" : "1325",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1326",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1324",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1327",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1328",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1325",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1331",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1332",
              "s" : [ {
                "r" : "1333",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1334",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1332",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1335",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1336",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1339",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1340",
              "s" : [ {
                "r" : "1341",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1342",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1340",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1343",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1344",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1342",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 40,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1347",
            "s" : [ {
              "value" : [ "", "define ", "EqRatios", ": " ]
            }, {
              "r" : "1348",
              "s" : [ {
                "r" : "1351",
                "s" : [ {
                  "r" : "1349",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "1350",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1354",
                "s" : [ {
                  "r" : "1352",
                  "s" : [ {
                    "value" : [ "15 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "1353",
                  "s" : [ {
                    "value" : [ "3 ", "'dL'" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1348",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1355",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1356",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Ratio",
            "localId" : "1351",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "1349",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "1350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dL",
              "annotation" : [ ]
            }
          }, {
            "type" : "Ratio",
            "localId" : "1354",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "1352",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 15,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "1353",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "dL",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1359",
            "s" : [ {
              "value" : [ "", "define ", "UneqRatios", ": " ]
            }, {
              "r" : "1360",
              "s" : [ {
                "r" : "1363",
                "s" : [ {
                  "r" : "1361",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "1362",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1366",
                "s" : [ {
                  "r" : "1364",
                  "s" : [ {
                    "value" : [ "15 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "1365",
                  "s" : [ {
                    "value" : [ "4 ", "'dL'" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1360",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1367",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1368",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Ratio",
            "localId" : "1363",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "1361",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "1362",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dL",
              "annotation" : [ ]
            }
          }, {
            "type" : "Ratio",
            "localId" : "1366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "1364",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 15,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "1365",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "dL",
              "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "1308",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Int", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "r" : "216",
                "value" : [ "5", " ", "!=", " ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "221",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
              "value" : "5",
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
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Int", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "r" : "226",
                "value" : [ "5", " ", "!=", " ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
              "localId" : "226",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Int", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "r" : "236",
                "value" : [ "5", " ", "!=", " ", "6" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "240",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "238",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "239",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "236",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "237",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "6",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "244",
            "s" : [ {
              "value" : [ "", "define ", "EqTuples", ": " ]
            }, {
              "r" : "288",
              "s" : [ {
                "r" : "246",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "247",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "248",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "249",
                        "value" : [ "c", ": ", "1" ]
                      } ]
                    }, {
                      "value" : [ "}" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "260",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "261",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "262",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "263",
                        "value" : [ "c", ": ", "1" ]
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
          "type" : "Not",
          "localId" : "288",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "289",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "274",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "275",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "276",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "277",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "278",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "279",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "280",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "281",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "282",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "284",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "285",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "286",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "287",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "246",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "253",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "254",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "255",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "256",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "257",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "258",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "259",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Tuple",
                  "localId" : "248",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "250",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "251",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "252",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "c",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "249",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }, {
              "type" : "Tuple",
              "localId" : "260",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "267",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "268",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "269",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "270",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "271",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "272",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "273",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Tuple",
                  "localId" : "262",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "264",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "265",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "266",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "c",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "263",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "292",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuples", ": " ]
            }, {
              "r" : "338",
              "s" : [ {
                "r" : "294",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "295",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "296",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "297",
                        "value" : [ "c", ": ", "1" ]
                      } ]
                    }, {
                      "value" : [ "}" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "308",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "309",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "310",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "value" : [ "c", ": " ]
                      }, {
                        "r" : "311",
                        "s" : [ {
                          "r" : "312",
                          "value" : [ "-", "1" ]
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
          "type" : "Not",
          "localId" : "338",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "339",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "324",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "325",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "327",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "328",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "329",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "330",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "331",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "332",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "333",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "334",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "335",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "336",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "337",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "294",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "301",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "302",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "303",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "304",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "305",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "306",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "307",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Tuple",
                  "localId" : "296",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "298",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "299",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "300",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "c",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "297",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                      "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                      "value" : "1",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }, {
              "type" : "Tuple",
              "localId" : "308",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "317",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "318",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "319",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "320",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "321",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "322",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "323",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Tuple",
                  "localId" : "310",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "314",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "315",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "316",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "c",
                    "value" : {
                      "type" : "Negate",
                      "localId" : "311",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ],
                      "signature" : [ {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "313",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      } ],
                      "operand" : {
                        "type" : "Literal",
                        "localId" : "312",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "342",
            "s" : [ {
              "value" : [ "", "define ", "EqTuplesWithNullFields", ": " ]
            }, {
              "r" : "372",
              "s" : [ {
                "r" : "344",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "353",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "372",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "373",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "343",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "362",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "363",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "364",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "365",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "366",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "367",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "368",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "369",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "370",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "371",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "344",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "348",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "349",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "350",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "351",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "352",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "345",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "347",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "Tuple",
              "localId" : "353",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "357",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "358",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "359",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "360",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "361",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "354",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "356",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "376",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuplesWithNullFields", ": " ]
            }, {
              "r" : "406",
              "s" : [ {
                "r" : "378",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "387",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "406",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "407",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "377",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "396",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "397",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "398",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "399",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "400",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "401",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "402",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "403",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "404",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "405",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "378",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "382",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "383",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "384",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "385",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "386",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "379",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "381",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "Tuple",
              "localId" : "387",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "391",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "392",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "393",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "394",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "395",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "388",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Goodbye",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "390",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "410",
            "s" : [ {
              "value" : [ "", "define ", "UncertTuplesWithNullFieldOnOne", ": " ]
            }, {
              "r" : "441",
              "s" : [ {
                "r" : "412",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "421",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": " ]
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
          "type" : "Not",
          "localId" : "441",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "442",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "411",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "431",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "432",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "433",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "434",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "435",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "436",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "437",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "438",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "439",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "440",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "412",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "416",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "417",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "418",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "419",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "420",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "413",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "Tuple",
              "localId" : "421",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "426",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "427",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "428",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "429",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "430",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "422",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Literal",
                  "localId" : "424",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "null",
                  "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "445",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimes", ": " ]
            }, {
              "r" : "503",
              "s" : [ {
                "r" : "465",
                "s" : [ {
                  "r" : "447",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "454",
                  "s" : [ {
                    "r" : "454",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "492",
                "s" : [ {
                  "r" : "474",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "481",
                  "s" : [ {
                    "r" : "481",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "503",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "504",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "446",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "501",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "502",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "465",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "466",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "467",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "468",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "469",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "470",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "471",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "472",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "473",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "447",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "448",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "449",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "450",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "451",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "452",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "453",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "454",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "492",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "493",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "494",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "495",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "496",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "497",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "498",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "499",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "500",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "474",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "475",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "476",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "477",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "478",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "479",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "480",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "481",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "507",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimes", ": " ]
            }, {
              "r" : "565",
              "s" : [ {
                "r" : "527",
                "s" : [ {
                  "r" : "509",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "516",
                  "s" : [ {
                    "r" : "516",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "554",
                "s" : [ {
                  "r" : "536",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "201", ", " ]
                }, {
                  "r" : "543",
                  "s" : [ {
                    "r" : "543",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "565",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "566",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "508",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "563",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "564",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "527",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "528",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "529",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "530",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "531",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "532",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "533",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "534",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "535",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "509",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "510",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "511",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "512",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "513",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "514",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "515",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "516",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "554",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "555",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "556",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "557",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "558",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "559",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "560",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "561",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "562",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "536",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "537",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "538",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "539",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "540",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "541",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "542",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "201",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "543",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "569",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesTZ", ": " ]
            }, {
              "r" : "627",
              "s" : [ {
                "r" : "589",
                "s" : [ {
                  "r" : "571",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "23", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "578",
                  "s" : [ {
                    "r" : "578",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "616",
                "s" : [ {
                  "r" : "598",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "16", ", ", "2", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "605",
                  "s" : [ {
                    "r" : "605",
                    "value" : [ "+", "4.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "627",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "628",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "570",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "625",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "626",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "589",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "590",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "591",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "592",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "593",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "594",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "595",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "596",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "597",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "571",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "572",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "573",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "574",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "23",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "575",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "576",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "577",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "578",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "616",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "617",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "618",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "619",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "620",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "621",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "622",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "623",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "624",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "598",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "599",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "600",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "16",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "601",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "602",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "603",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "604",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "605",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "4.0",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "631",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesTZ", ": " ]
            }, {
              "r" : "689",
              "s" : [ {
                "r" : "651",
                "s" : [ {
                  "r" : "633",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "640",
                  "s" : [ {
                    "r" : "640",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "678",
                "s" : [ {
                  "r" : "660",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "667",
                  "s" : [ {
                    "r" : "667",
                    "value" : [ "+", "2.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "689",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "690",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "632",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "687",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "688",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "651",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "652",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "653",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "654",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "655",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "656",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "657",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "658",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "659",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "633",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "634",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "635",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "636",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "637",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "638",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "639",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "640",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "678",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "679",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "680",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "681",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "682",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "683",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "684",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "685",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "686",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "660",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "661",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "662",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "663",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "664",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "665",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "666",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "667",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.0",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "693",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullMs", ": " ]
            }, {
              "r" : "742",
              "s" : [ {
                "r" : "711",
                "s" : [ {
                  "r" : "695",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "733",
                "s" : [ {
                  "r" : "719",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "742",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "743",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "694",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "740",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "741",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "711",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "712",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "713",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "714",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "715",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "716",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "717",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "718",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "695",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "696",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "697",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "698",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "699",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "700",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "701",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "733",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "734",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "735",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "736",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "737",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "738",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "739",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "719",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "720",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "721",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "722",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "723",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "724",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "746",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullOtherMs", ": " ]
            }, {
              "r" : "795",
              "s" : [ {
                "r" : "762",
                "s" : [ {
                  "r" : "748",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "785",
                "s" : [ {
                  "r" : "769",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "795",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "796",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "747",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "793",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "794",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "762",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "763",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "764",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "765",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "766",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "767",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "768",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "748",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "749",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "750",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "751",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "752",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "753",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "785",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "786",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "787",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "788",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "789",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "790",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "791",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "792",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "769",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "770",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "771",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "772",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "773",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "774",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "775",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "799",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "827",
              "s" : [ {
                "r" : "809",
                "s" : [ {
                  "r" : "801",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "821",
                "s" : [ {
                  "r" : "813",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "827",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "828",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "800",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "825",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "826",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "809",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "810",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "811",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "812",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "801",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "802",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "803",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "821",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "822",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "823",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "824",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "813",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "814",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "815",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "831",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "859",
              "s" : [ {
                "r" : "841",
                "s" : [ {
                  "r" : "833",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "14", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "853",
                "s" : [ {
                  "r" : "845",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "859",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "860",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "832",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "857",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "858",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "841",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "842",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "843",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "844",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "833",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "834",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "835",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "14",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "853",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "854",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "855",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "856",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "845",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "846",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "847",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "863",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "900",
              "s" : [ {
                "r" : "873",
                "s" : [ {
                  "r" : "865",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "891",
                "s" : [ {
                  "r" : "877",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "13", ", ", "43", ", ", "32", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "900",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "901",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "864",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "898",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "899",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "873",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "874",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "875",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "876",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "865",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "866",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "867",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "891",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "892",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "893",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "894",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "895",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "896",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "897",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "877",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "878",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "879",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "880",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "881",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "43",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "882",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "32",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "904",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "941",
              "s" : [ {
                "r" : "920",
                "s" : [ {
                  "r" : "906",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ", ", "13", ", ", "12", ", ", "43", ", ", "32", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "935",
                "s" : [ {
                  "r" : "927",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "941",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "942",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "905",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "939",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "940",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "920",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "921",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "922",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "923",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "924",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "925",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "926",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "906",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "907",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "908",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "909",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "910",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "43",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "911",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "32",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "935",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "936",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "937",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "938",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "927",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "928",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "929",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "945",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "967",
              "s" : [ {
                "r" : "955",
                "s" : [ {
                  "r" : "947",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "963",
                "s" : [ {
                  "r" : "959",
                  "value" : [ "DateTime", "(", "2000", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "967",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "968",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "946",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "965",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "966",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "955",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "956",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "957",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "958",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "947",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "948",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "949",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "963",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "964",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "959",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "971",
            "s" : [ {
              "value" : [ "", "define ", "ImpossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "996",
              "s" : [ {
                "r" : "981",
                "s" : [ {
                  "r" : "973",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "991",
                "s" : [ {
                  "r" : "985",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "996",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "997",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "972",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "994",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "995",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "981",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "982",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "983",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "984",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "973",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "974",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "975",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "991",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "992",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "993",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "985",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "986",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1000",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeFalse", ": " ]
            }, {
              "r" : "1031",
              "s" : [ {
                "r" : "1010",
                "s" : [ {
                  "r" : "1002",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1022",
                "s" : [ {
                  "r" : "1014",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1031",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1032",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1001",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1029",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1030",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDateTime",
              "localId" : "1027",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1028",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1010",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1011",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1012",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1013",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1002",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1003",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1004",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "DateTime",
              "localId" : "1022",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1023",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1024",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1025",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1014",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1015",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1016",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1035",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeNotEqual", ": " ]
            }, {
              "r" : "1066",
              "s" : [ {
                "r" : "1045",
                "s" : [ {
                  "r" : "1037",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1057",
                "s" : [ {
                  "r" : "1049",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1066",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1067",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1036",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1064",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1065",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDateTime",
              "localId" : "1062",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1063",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1045",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1046",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1047",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1048",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1037",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1038",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1039",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "DateTime",
              "localId" : "1057",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1058",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1059",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1060",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1049",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1050",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1051",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1070",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeUncertainTrue", ": " ]
            }, {
              "r" : "1110",
              "s" : [ {
                "r" : "1080",
                "s" : [ {
                  "r" : "1072",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1098",
                "s" : [ {
                  "r" : "1084",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1110",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1111",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1071",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1108",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1109",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDateTime",
              "localId" : "1106",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1107",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1080",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1081",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1082",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1083",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1072",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1073",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1074",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "DateTime",
              "localId" : "1098",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1099",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1100",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1101",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1102",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1103",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1104",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1084",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1085",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1086",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "1087",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "1088",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "1089",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "23",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1114",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateFalse", ": " ]
            }, {
              "r" : "1145",
              "s" : [ {
                "r" : "1124",
                "s" : [ {
                  "r" : "1116",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1136",
                "s" : [ {
                  "r" : "1128",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1145",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1146",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1115",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1143",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1144",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "1124",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1125",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1126",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1127",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1116",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1117",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1118",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDateTime",
              "localId" : "1141",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1142",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1136",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1137",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1138",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1139",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1128",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1129",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1130",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1149",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateNotEqual", ": " ]
            }, {
              "r" : "1180",
              "s" : [ {
                "r" : "1159",
                "s" : [ {
                  "r" : "1151",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1171",
                "s" : [ {
                  "r" : "1163",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1180",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1181",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1150",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1178",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1179",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "1159",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1160",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1161",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1162",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1151",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1152",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1153",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDateTime",
              "localId" : "1176",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1177",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1171",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1172",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1173",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1174",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1163",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1164",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1165",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1184",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateUncertainNull", ": " ]
            }, {
              "r" : "1224",
              "s" : [ {
                "r" : "1200",
                "s" : [ {
                  "r" : "1186",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1215",
                "s" : [ {
                  "r" : "1207",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1225",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1185",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1222",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1223",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "1200",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1201",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1202",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1203",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1204",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1205",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1206",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1186",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1187",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1188",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "1189",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "1190",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "1191",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "23",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDateTime",
              "localId" : "1220",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1221",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1215",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1216",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1207",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1208",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1209",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1228",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
            }, {
              "r" : "1234",
              "s" : [ {
                "r" : "1230",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1231",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1235",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1232",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1233",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1230",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1231",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "m",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1238",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
            }, {
              "r" : "1244",
              "s" : [ {
                "r" : "1240",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1241",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1244",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1245",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1239",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1242",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1243",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1248",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
            }, {
              "r" : "1254",
              "s" : [ {
                "r" : "1250",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1251",
                "s" : [ {
                  "value" : [ "6 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1254",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1255",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1252",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1253",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1250",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1251",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 6,
              "unit" : "m",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1258",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "1264",
              "s" : [ {
                "r" : "1260",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1261",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1264",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1265",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1262",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1263",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1260",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1261",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "cm",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1268",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "1274",
              "s" : [ {
                "r" : "1270",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1271",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1274",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1275",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1272",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1273",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1271",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 500,
              "unit" : "cm",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "1284",
              "s" : [ {
                "r" : "1280",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1281",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1285",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1282",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1283",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1280",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1281",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "km",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1288",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1294",
              "s" : [ {
                "r" : "1290",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1291",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1294",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1295",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1292",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1293",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1290",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "Cel",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "m",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1298",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1304",
              "s" : [ {
                "r" : "1300",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1301",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1304",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1305",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1302",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1303",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1300",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "Cel",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1301",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "1308",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1314",
              "s" : [ {
                "r" : "1310",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1311",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1314",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1315",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1312",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1313",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1310",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "Cel",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 40,
              "unit" : "m",
              "annotation" : [ ]
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
valueset "Unknown": '1.2.3.4.5.6.7.8.9'
valueset "UnknownSame": '1.2.3.4.5.6.7.8.9'
valueset "Known": '2.16.840.1.113883.3.560.100.1' version '20121025'
valueset "KnownSameCodes": '2.16.840.1.113883.3.560.100.1' version '20131025'
valueset "KnownDifferentCodes": '2.16.840.1.113883.3.560.100.1' version '20141025'
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
define SameVSIdAndVersion: "Unknown" ~ "UnknownSame"
define SameVSCodes: "Known" ~ "KnownSameCodes"
define DiffVSCodes: "Known" ~ "KnownDifferentCodes"
define UnresolvableDiffVS: "Known" ~ "Unknown"

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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 55,
      "startChar" : 37,
      "endLine" : 55,
      "endChar" : 42,
      "message" : "List-valued expression was demoted to a singleton.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 56,
      "startChar" : 26,
      "endLine" : 56,
      "endChar" : 31,
      "message" : "List-valued expression was demoted to a singleton.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "1805",
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "LOINC",
        "id" : "http://loinc.org",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"LOINC\"", ": ", "'http://loinc.org'" ]
            } ]
          }
        } ]
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "225",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Unknown",
        "id" : "1.2.3.4.5.6.7.8.9",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "225",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Unknown\"", ": ", "'1.2.3.4.5.6.7.8.9'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "227",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "UnknownSame",
        "id" : "1.2.3.4.5.6.7.8.9",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "227",
            "s" : [ {
              "value" : [ "", "valueset ", "\"UnknownSame\"", ": ", "'1.2.3.4.5.6.7.8.9'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "229",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Known",
        "id" : "2.16.840.1.113883.3.560.100.1",
        "version" : "20121025",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "229",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Known\"", ": ", "'2.16.840.1.113883.3.560.100.1'", " version ", "'20121025'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "231",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "KnownSameCodes",
        "id" : "2.16.840.1.113883.3.560.100.1",
        "version" : "20131025",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "valueset ", "\"KnownSameCodes\"", ": ", "'2.16.840.1.113883.3.560.100.1'", " version ", "'20131025'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "233",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "KnownDifferentCodes",
        "id" : "2.16.840.1.113883.3.560.100.1",
        "version" : "20141025",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "233",
            "s" : [ {
              "value" : [ "", "valueset ", "\"KnownDifferentCodes\"", ": ", "'2.16.840.1.113883.3.560.100.1'", " version ", "'20141025'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "code ", "\"Tobacco smoking status code\"", ": ", "'72166-2'", " from " ]
            }, {
              "r" : "211",
              "s" : [ {
                "value" : [ "\"LOINC\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Tobacco smoking status code'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "211",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "LOINC",
          "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "213",
            "s" : [ {
              "value" : [ "", "code ", "\"Tobacco smoking status code clone\"", ": ", "'72166-2'", " from " ]
            }, {
              "r" : "214",
              "s" : [ {
                "value" : [ "\"LOINC\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Tobacco smoking status code clone'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "214",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "LOINC",
          "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "code ", "\"Total Score [AUDIT-C] code\"", ": ", "'75626-2'", " from " ]
            }, {
              "r" : "217",
              "s" : [ {
                "value" : [ "\"LOINC\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Total Score [Audit-C] code'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "LOINC",
          "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "219",
            "s" : [ {
              "value" : [ "", "concept ", "\"Tobacco smoking status\"", ": { " ]
            }, {
              "r" : "220",
              "s" : [ {
                "value" : [ "\"Tobacco smoking status code\"" ]
              } ]
            }, {
              "value" : [ " } display ", "'Tobacco smoking status'" ]
            } ]
          }
        } ],
        "code" : [ {
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "Tobacco smoking status code",
          "annotation" : [ ]
        } ]
      }, {
        "localId" : "221",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "Tobacco smoking status clone",
        "display" : "Tobacco smoking status",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "221",
            "s" : [ {
              "value" : [ "", "concept ", "\"Tobacco smoking status clone\"", ": { " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "\"Tobacco smoking status code clone\"" ]
              } ]
            }, {
              "value" : [ " } display ", "'Tobacco smoking status'" ]
            } ]
          }
        } ],
        "code" : [ {
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "Tobacco smoking status code clone",
          "annotation" : [ ]
        } ]
      }, {
        "localId" : "223",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "Total Score [AUDIT-C]",
        "display" : "Total Score [Audit-C]",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "concept ", "\"Total Score [AUDIT-C]\"", ": { " ]
            }, {
              "r" : "224",
              "s" : [ {
                "value" : [ "\"Total Score [AUDIT-C] code\"" ]
              } ]
            }, {
              "value" : [ " } display ", "'Total Score [Audit-C]'" ]
            } ]
          }
        } ],
        "code" : [ {
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "Total Score [AUDIT-C] code",
          "annotation" : [ ]
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "238",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "236",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "237",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "235",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "241",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ANull_BDefined",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "241",
            "s" : [ {
              "value" : [ "", "define ", "ANull_BDefined", ": " ]
            }, {
              "r" : "242",
              "s" : [ {
                "r" : "243",
                "value" : [ "null", " ", "~", " ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "242",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "type" : "As",
            "localId" : "245",
            "asType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "243",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "250",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ADefined_BNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "ADefined_BNull", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "r" : "252",
                "value" : [ "5", " ", "~", " ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "255",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "256",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "254",
            "asType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "253",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "259",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ANull_BNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "259",
            "s" : [ {
              "value" : [ "", "define ", "ANull_BNull", ": " ]
            }, {
              "r" : "260",
              "s" : [ {
                "r" : "261",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "261",
                  "s" : [ {
                    "r" : "262",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "263",
                    "s" : [ {
                      "value" : [ "String" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "264",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "264",
                  "s" : [ {
                    "r" : "265",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "266",
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
          "type" : "Equivalent",
          "localId" : "260",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "268",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "262",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "263",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "As",
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "265",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "271",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ADefined_BDefined",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "271",
            "s" : [ {
              "value" : [ "", "define ", "ADefined_BDefined", ": " ]
            }, {
              "r" : "272",
              "s" : [ {
                "r" : "273",
                "value" : [ "3", " ", "~", " ", "3" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "272",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
          "operand" : [ {
            "type" : "Literal",
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "279",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "CaseInsensitiveStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "279",
            "s" : [ {
              "value" : [ "", "define ", "CaseInsensitiveStrings", ": " ]
            }, {
              "r" : "280",
              "s" : [ {
                "r" : "281",
                "s" : [ {
                  "value" : [ "'FOO'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "283",
                "s" : [ {
                  "value" : [ "'foo'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "280",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "285",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "286",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FOO",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "283",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "289",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceTabTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "289",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceTabTrue", ": " ]
            }, {
              "r" : "290",
              "s" : [ {
                "r" : "291",
                "s" : [ {
                  "value" : [ "'foo bar'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "293",
                "s" : [ {
                  "value" : [ "'foo\\tbar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "290",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "295",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "296",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\tbar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "299",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceTabReturnTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "299",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceTabReturnTrue", ": " ]
            }, {
              "r" : "300",
              "s" : [ {
                "r" : "301",
                "s" : [ {
                  "value" : [ "'foo\\tbar'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "303",
                "s" : [ {
                  "value" : [ "'foo\\nbar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "300",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "305",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "306",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "301",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\tbar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\nbar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "309",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceIncorrectSpaceFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "309",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceIncorrectSpaceFalse", ": " ]
            }, {
              "r" : "310",
              "s" : [ {
                "r" : "311",
                "s" : [ {
                  "value" : [ "'foo bar'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "'foo\\t\\tbar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "310",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "316",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\t\tbar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "319",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceIncorrectNumberTabsFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "319",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceIncorrectNumberTabsFalse", ": " ]
            }, {
              "r" : "320",
              "s" : [ {
                "r" : "321",
                "s" : [ {
                  "value" : [ "'foo\\t\\tbar'" ]
                } ]
              }, {
                "value" : [ " ", "~" ]
              }, {
                "r" : "323",
                "s" : [ {
                  "value" : [ "'foo\\tbar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "320",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "325",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "326",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\t\tbar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\tbar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "329",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceNoSpaceFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "329",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceNoSpaceFalse", ": " ]
            }, {
              "r" : "330",
              "s" : [ {
                "r" : "331",
                "s" : [ {
                  "value" : [ "'foo bar'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "333",
                "s" : [ {
                  "value" : [ "'foobar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "330",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "335",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "336",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "331",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foobar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "339",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqRatios",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "339",
            "s" : [ {
              "value" : [ "", "define ", "EqRatios", ": " ]
            }, {
              "r" : "340",
              "s" : [ {
                "r" : "343",
                "s" : [ {
                  "r" : "341",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "342",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "346",
                "s" : [ {
                  "r" : "344",
                  "s" : [ {
                    "value" : [ "15 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "345",
                  "s" : [ {
                    "value" : [ "3 ", "'dL'" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "340",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "347",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "348",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Ratio",
            "localId" : "343",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "341",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "342",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dL",
              "annotation" : [ ]
            }
          }, {
            "type" : "Ratio",
            "localId" : "346",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "344",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 15,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "345",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "dL",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "351",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqRatios",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "351",
            "s" : [ {
              "value" : [ "", "define ", "UneqRatios", ": " ]
            }, {
              "r" : "352",
              "s" : [ {
                "r" : "355",
                "s" : [ {
                  "r" : "353",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "354",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "358",
                "s" : [ {
                  "r" : "356",
                  "s" : [ {
                    "value" : [ "15 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "357",
                  "s" : [ {
                    "value" : [ "4 ", "'dL'" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "352",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "359",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "360",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Ratio",
            "localId" : "355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "353",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "354",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dL",
              "annotation" : [ ]
            }
          }, {
            "type" : "Ratio",
            "localId" : "358",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "356",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 15,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "357",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "dL",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "363",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqRatioTypes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "363",
            "s" : [ {
              "value" : [ "", "define ", "UneqRatioTypes", ": " ]
            }, {
              "r" : "364",
              "s" : [ {
                "r" : "367",
                "s" : [ {
                  "r" : "365",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "366",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "382",
                "s" : [ {
                  "r" : "368",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "364",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "391",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "392",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "393",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "394",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "ToList",
            "localId" : "389",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Ratio",
              "localId" : "367",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
              "annotation" : [ ],
              "numerator" : {
                "localId" : "365",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 10,
                "unit" : "mg",
                "annotation" : [ ]
              },
              "denominator" : {
                "localId" : "366",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 2,
                "unit" : "dL",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ToList",
            "localId" : "390",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "DateTime",
              "localId" : "382",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "385",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "386",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "387",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "388",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "368",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "369",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "370",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "371",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "372",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "373",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "23",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "397",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "397",
            "s" : [ {
              "value" : [ "// define EmptyTuples: { : } ~ { : } // TODO: We don't seem to support this format\n", "define ", "SameTuples", ": " ]
            }, {
              "r" : "398",
              "s" : [ {
                "r" : "399",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
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
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "402",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "409",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "410",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "412",
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
          "type" : "Equivalent",
          "localId" : "398",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "419",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "420",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "421",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "422",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "423",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "424",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "425",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "426",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "427",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "428",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "399",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "404",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "405",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "406",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "407",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "408",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "400",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "402",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "409",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "414",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "415",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "416",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "417",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "418",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "410",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "412",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "431",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameTuplesNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "431",
            "s" : [ {
              "value" : [ "", "define ", "SameTuplesNull", ": " ]
            }, {
              "r" : "432",
              "s" : [ {
                "r" : "433",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "434",
                    "value" : [ "a", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "438",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "439",
                    "value" : [ "a", " : ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "432",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "443",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "444",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "445",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "446",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "447",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "448",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "433",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "435",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "436",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "437",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Null",
                "localId" : "434",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "438",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "440",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "441",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "442",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Null",
                "localId" : "439",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "451",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "451",
            "s" : [ {
              "value" : [ "", "define ", "DifferentTuples", ": " ]
            }, {
              "r" : "452",
              "s" : [ {
                "r" : "453",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "454",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "456",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "463",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "464",
                    "s" : [ {
                      "value" : [ "'x'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "466",
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
          "type" : "Equivalent",
          "localId" : "452",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "473",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "474",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "475",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "476",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "477",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "478",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "479",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "480",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "481",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "482",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "453",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "458",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "459",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "460",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "461",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "462",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "454",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "456",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "463",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "468",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "469",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "470",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "471",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "472",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "464",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "x",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "466",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "485",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameNestedTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "485",
            "s" : [ {
              "value" : [ "", "define ", "SameNestedTuples", ": " ]
            }, {
              "r" : "486",
              "s" : [ {
                "r" : "487",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "488",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "490",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "value" : [ "c", ": " ]
                      }, {
                        "r" : "491",
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
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "503",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "504",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "506",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "value" : [ "c", ": " ]
                      }, {
                        "r" : "507",
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
          "type" : "Equivalent",
          "localId" : "486",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "519",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "520",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "521",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "522",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "523",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "524",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "525",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "526",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "527",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "528",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "529",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "530",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "531",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "532",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "487",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "496",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "497",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "498",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "499",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "500",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "501",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "502",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "488",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "490",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "493",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "494",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "495",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "491",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                    "value" : "c",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "503",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "512",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "513",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "514",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "515",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "516",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "517",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "518",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "504",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "506",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "509",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "510",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "511",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "507",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                    "value" : "c",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "535",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameNestedTuplesNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "535",
            "s" : [ {
              "value" : [ "", "define ", "SameNestedTuplesNull", ": " ]
            }, {
              "r" : "536",
              "s" : [ {
                "r" : "537",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "538",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "540",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "541",
                        "value" : [ "c", ": ", "null" ]
                      } ]
                    }, {
                      "value" : [ "}" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "552",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "553",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "555",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "556",
                        "value" : [ "c", ": ", "null" ]
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
          "type" : "Equivalent",
          "localId" : "536",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "567",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "568",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "569",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "570",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "571",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "572",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "573",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "574",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "575",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "576",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "577",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "578",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "579",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "580",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "537",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "545",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "546",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "547",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "548",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "549",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "550",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "551",
                      "name" : "{urn:hl7-org:elm-types:r1}Any",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "538",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "540",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "542",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "543",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "544",
                      "name" : "{urn:hl7-org:elm-types:r1}Any",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Null",
                    "localId" : "541",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "552",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "560",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "561",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "562",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "563",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "564",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "565",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "566",
                      "name" : "{urn:hl7-org:elm-types:r1}Any",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "553",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "555",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "557",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "558",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "559",
                      "name" : "{urn:hl7-org:elm-types:r1}Any",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Null",
                    "localId" : "556",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "583",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EmptyLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "583",
            "s" : [ {
              "value" : [ "", "define ", "EmptyLists", ": " ]
            }, {
              "r" : "584",
              "s" : [ {
                "r" : "585",
                "value" : [ "{ }", " ", "~", " ", "{ }" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "584",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "591",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "592",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "593",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "594",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "585",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "586",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "587",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          }, {
            "type" : "List",
            "localId" : "588",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "589",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "590",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          } ]
        }
      }, {
        "localId" : "597",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentTypesLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "597",
            "s" : [ {
              "value" : [ "", "define ", "DifferentTypesLists", ": " ]
            }, {
              "r" : "598",
              "s" : [ {
                "r" : "599",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "600",
                  "s" : [ {
                    "value" : [ "'1'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "602",
                  "s" : [ {
                    "value" : [ "'2'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "604",
                  "s" : [ {
                    "value" : [ "'3'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "608",
                "s" : [ {
                  "r" : "609",
                  "value" : [ "{", "1", ", ", "2", ", ", "3", "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "598",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "614",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "615",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "616",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "617",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "599",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "606",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "607",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "600",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "602",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "604",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "3",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "608",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "612",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "613",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "609",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "610",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "611",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "620",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentLengthLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "620",
            "s" : [ {
              "value" : [ "", "define ", "DifferentLengthLists", ": " ]
            }, {
              "r" : "621",
              "s" : [ {
                "r" : "622",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "623",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "627",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "628",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "630",
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
          "type" : "Equivalent",
          "localId" : "621",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "634",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "635",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "636",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "637",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "622",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "625",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "626",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "623",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "627",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "632",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "633",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "628",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "630",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "640",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentOrderLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "640",
            "s" : [ {
              "value" : [ "", "define ", "DifferentOrderLists", ": " ]
            }, {
              "r" : "641",
              "s" : [ {
                "r" : "642",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "643",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "645",
                  "s" : [ {
                    "value" : [ "'b'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "649",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "650",
                  "s" : [ {
                    "value" : [ "'b'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "652",
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
          "type" : "Equivalent",
          "localId" : "641",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "656",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "657",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "658",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "659",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "642",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "647",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "648",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "643",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "645",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "b",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "649",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "654",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "655",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "650",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "b",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "652",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "662",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "662",
            "s" : [ {
              "value" : [ "", "define ", "SameLists", ": " ]
            }, {
              "r" : "663",
              "s" : [ {
                "r" : "664",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "665",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "667",
                  "s" : [ {
                    "value" : [ "'b'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "669",
                  "s" : [ {
                    "value" : [ "'c'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "673",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "674",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "676",
                  "s" : [ {
                    "value" : [ "'b'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "678",
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
          "type" : "Equivalent",
          "localId" : "663",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "682",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "683",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "684",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "685",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "664",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "671",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "672",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "665",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "667",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "b",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "669",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "c",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "673",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "680",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "681",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "674",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "676",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "b",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "678",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "c",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "688",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameListsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "688",
            "s" : [ {
              "value" : [ "", "define ", "SameListsNull", ": " ]
            }, {
              "r" : "689",
              "s" : [ {
                "r" : "690",
                "s" : [ {
                  "r" : "691",
                  "value" : [ "{", "null", ", ", "null", ", ", "null", "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "696",
                "s" : [ {
                  "r" : "697",
                  "value" : [ "{", "null", ", ", "null", ", ", "null", "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "689",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "702",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "703",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "704",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "705",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "690",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "694",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "695",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Null",
              "localId" : "691",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "692",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "693",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "696",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "700",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "701",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Null",
              "localId" : "697",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "698",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "699",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "708",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameNestedLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "708",
            "s" : [ {
              "value" : [ "", "define ", "SameNestedLists", ": " ]
            }, {
              "r" : "709",
              "s" : [ {
                "r" : "710",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "711",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "712",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  }, {
                    "value" : [ "," ]
                  }, {
                    "r" : "714",
                    "s" : [ {
                      "value" : [ "'d'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "718",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "719",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "721",
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
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "728",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "729",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "730",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  }, {
                    "value" : [ "," ]
                  }, {
                    "r" : "732",
                    "s" : [ {
                      "value" : [ "'d'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "736",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "737",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "739",
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
          "type" : "Equivalent",
          "localId" : "709",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "746",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "747",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "748",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "749",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "750",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "751",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "710",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "725",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "726",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "727",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }
            },
            "element" : [ {
              "type" : "List",
              "localId" : "711",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "716",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "717",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "712",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "714",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "d",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "List",
              "localId" : "718",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "723",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "724",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "719",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "721",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c",
                "annotation" : [ ]
              } ]
            } ]
          }, {
            "type" : "List",
            "localId" : "728",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "743",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "744",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "745",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }
            },
            "element" : [ {
              "type" : "List",
              "localId" : "729",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "734",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "735",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "730",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "732",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "d",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "List",
              "localId" : "736",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "741",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "742",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "737",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "739",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c",
                "annotation" : [ ]
              } ]
            } ]
          } ]
        }
      }, {
        "localId" : "754",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameNestedListsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "754",
            "s" : [ {
              "value" : [ "", "define ", "SameNestedListsNull", ": " ]
            }, {
              "r" : "755",
              "s" : [ {
                "r" : "756",
                "s" : [ {
                  "r" : "757",
                  "value" : [ "{", "null", ", " ]
                }, {
                  "r" : "758",
                  "s" : [ {
                    "r" : "759",
                    "value" : [ "{", "null", ", ", "null", "}" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "769",
                "s" : [ {
                  "r" : "770",
                  "value" : [ "{", "null", ", " ]
                }, {
                  "r" : "771",
                  "s" : [ {
                    "r" : "772",
                    "value" : [ "{", "null", ", ", "null", "}" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "755",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "782",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "783",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "784",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "785",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "786",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "787",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "756",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "766",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "767",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "768",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "763",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "757",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "764",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "765",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "List",
              "localId" : "758",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "761",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "762",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Null",
                "localId" : "759",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }, {
                "type" : "Null",
                "localId" : "760",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              } ]
            } ]
          }, {
            "type" : "List",
            "localId" : "769",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "779",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "780",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "781",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "776",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "770",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "777",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "778",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "List",
              "localId" : "771",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "774",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "775",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Null",
                "localId" : "772",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }, {
                "type" : "Null",
                "localId" : "773",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              } ]
            } ]
          } ]
        }
      }, {
        "localId" : "790",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EmptyInterval",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "790",
            "s" : [ {
              "value" : [ "", "define ", "EmptyInterval", ": " ]
            }, {
              "r" : "791",
              "s" : [ {
                "r" : "794",
                "s" : [ {
                  "r" : "792",
                  "value" : [ "Interval(", "null", ", ", "null", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "799",
                "s" : [ {
                  "r" : "797",
                  "value" : [ "Interval(", "null", ", ", "null", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "791",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "802",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "803",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "804",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "805",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "794",
            "lowClosed" : false,
            "highClosed" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "795",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "796",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Null",
              "localId" : "792",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Null",
              "localId" : "793",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "799",
            "lowClosed" : false,
            "highClosed" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "800",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "801",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Null",
              "localId" : "797",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Null",
              "localId" : "798",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "808",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "IntervalDifferentPointTypes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "808",
            "s" : [ {
              "value" : [ "", "define ", "IntervalDifferentPointTypes", ":  " ]
            }, {
              "r" : "809",
              "s" : [ {
                "r" : "812",
                "s" : [ {
                  "r" : "810",
                  "value" : [ "Interval[", "1", ", ", "5", "]" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "819",
                "s" : [ {
                  "value" : [ "Interval[" ]
                }, {
                  "r" : "815",
                  "s" : [ {
                    "value" : [ "'1'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "817",
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
          "type" : "Equivalent",
          "localId" : "809",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "822",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "823",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "824",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "825",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "812",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "813",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "814",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "810",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "811",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "819",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "820",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "821",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "815",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "817",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "828",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "IntervalDifferentStarts",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "828",
            "s" : [ {
              "value" : [ "", "define ", "IntervalDifferentStarts", ": " ]
            }, {
              "r" : "829",
              "s" : [ {
                "r" : "832",
                "s" : [ {
                  "r" : "830",
                  "value" : [ "Interval[", "1", ",", "3", "]" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "837",
                "s" : [ {
                  "r" : "835",
                  "value" : [ "Interval[", "2", ",", "3", "]" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "829",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "840",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "841",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "842",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "843",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "832",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "833",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "834",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "830",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "831",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "837",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "838",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "839",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "835",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "836",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "846",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "IntervalDifferentEndings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "846",
            "s" : [ {
              "value" : [ "", "define ", "IntervalDifferentEndings", ": " ]
            }, {
              "r" : "847",
              "s" : [ {
                "r" : "850",
                "s" : [ {
                  "r" : "848",
                  "value" : [ "Interval[", "1", ",", "3", "]" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "855",
                "s" : [ {
                  "r" : "853",
                  "value" : [ "Interval[", "1", ",", "4", "]" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "847",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "858",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "859",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "860",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "861",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "850",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "851",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "852",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "848",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "849",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "855",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "856",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "857",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "853",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "854",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "864",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameIntervals",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "864",
            "s" : [ {
              "value" : [ "", "define ", "SameIntervals", ": " ]
            }, {
              "r" : "865",
              "s" : [ {
                "r" : "868",
                "s" : [ {
                  "r" : "866",
                  "value" : [ "Interval[", "1", ",", "3", "]" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "873",
                "s" : [ {
                  "r" : "871",
                  "value" : [ "Interval[", "1", ",", "3", "]" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "865",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "876",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "877",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "878",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "879",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "868",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "869",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "870",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "866",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "867",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "873",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "874",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "875",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "871",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "872",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "882",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TupleAndList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "882",
            "s" : [ {
              "value" : [ "", "define ", "TupleAndList", ": " ]
            }, {
              "r" : "883",
              "s" : [ {
                "r" : "884",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "885",
                    "s" : [ {
                      "value" : [ "'1'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "890",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "891",
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
          "type" : "Equivalent",
          "localId" : "883",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "902",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "903",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "904",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "905",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "906",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "907",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          } ],
          "operand" : [ {
            "type" : "ToList",
            "localId" : "896",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "ToList",
              "localId" : "895",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Tuple",
                "localId" : "884",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "887",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "888",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "889",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "885",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }, {
            "type" : "Query",
            "localId" : "897",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "898",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "890",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "893",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "894",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "891",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "899",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToList",
                "localId" : "901",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "900",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          } ]
        }
      }, {
        "localId" : "910",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ListAndTuple",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "910",
            "s" : [ {
              "value" : [ "", "define ", "ListAndTuple", ": " ]
            }, {
              "r" : "911",
              "s" : [ {
                "r" : "912",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "913",
                  "s" : [ {
                    "value" : [ "'1'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "917",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "918",
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
          "type" : "Equivalent",
          "localId" : "911",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "930",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "931",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "932",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "933",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "934",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "935",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          } ],
          "operand" : [ {
            "type" : "Query",
            "localId" : "923",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "924",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "912",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "915",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "916",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "913",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "925",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToList",
                "localId" : "927",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "926",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }, {
            "type" : "ToList",
            "localId" : "929",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "ToList",
              "localId" : "928",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Tuple",
                "localId" : "917",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "920",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "921",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "922",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "918",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                    "value" : "1",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          } ]
        }
      }, {
        "localId" : "938",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TupleAndNullList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "938",
            "s" : [ {
              "value" : [ "", "define ", "TupleAndNullList", ": " ]
            }, {
              "r" : "939",
              "s" : [ {
                "r" : "940",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "941",
                    "s" : [ {
                      "value" : [ "'1'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "946",
                "s" : [ {
                  "r" : "947",
                  "value" : [ "{", "null", "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "939",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "957",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "958",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "959",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "960",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "961",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "962",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "940",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "943",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "944",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "945",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "941",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "1",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "As",
            "localId" : "953",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "SingletonFrom",
              "localId" : "950",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "951",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "952",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ],
              "operand" : {
                "type" : "List",
                "localId" : "946",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "948",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "949",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Null",
                  "localId" : "947",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                } ]
              }
            },
            "asTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "954",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "955",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "956",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          } ]
        }
      }, {
        "localId" : "965",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullListAndTuple",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "965",
            "s" : [ {
              "value" : [ "", "define ", "NullListAndTuple", ": " ]
            }, {
              "r" : "966",
              "s" : [ {
                "r" : "967",
                "s" : [ {
                  "r" : "968",
                  "value" : [ "{", "null", "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "971",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "972",
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
          "type" : "Equivalent",
          "localId" : "966",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "984",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "985",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "986",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "987",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "988",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "989",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "980",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "SingletonFrom",
              "localId" : "977",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "978",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "979",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ],
              "operand" : {
                "type" : "List",
                "localId" : "967",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "969",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "970",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Null",
                  "localId" : "968",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                } ]
              }
            },
            "asTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "981",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "982",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "983",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          }, {
            "type" : "Tuple",
            "localId" : "971",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "974",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "975",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "976",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "972",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "1",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "992",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameCodeAndCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "992",
            "s" : [ {
              "value" : [ "", "define ", "SameCodeAndCode", ": " ]
            }, {
              "r" : "993",
              "s" : [ {
                "r" : "994",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "995",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code clone\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "993",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "996",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "997",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "CodeRef",
            "localId" : "994",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "annotation" : [ ]
          }, {
            "type" : "CodeRef",
            "localId" : "995",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code clone",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1000",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameCodeAndConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1000",
            "s" : [ {
              "value" : [ "", "define ", "SameCodeAndConcept", ": " ]
            }, {
              "r" : "1001",
              "s" : [ {
                "r" : "1002",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code clone\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1003",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1001",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1007",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1008",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToConcept",
            "localId" : "1005",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1006",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "1002",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Tobacco smoking status code clone",
              "annotation" : [ ]
            }
          }, {
            "type" : "ConceptRef",
            "localId" : "1003",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1011",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameConceptAndCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1011",
            "s" : [ {
              "value" : [ "", "define ", "SameConceptAndCode", ": " ]
            }, {
              "r" : "1012",
              "s" : [ {
                "r" : "1013",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1014",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code clone\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1012",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1018",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1019",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ConceptRef",
            "localId" : "1013",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          }, {
            "type" : "ToConcept",
            "localId" : "1016",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1017",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "1014",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Tobacco smoking status code clone",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1022",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameConceptAndConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1022",
            "s" : [ {
              "value" : [ "", "define ", "SameConceptAndConcept", ": " ]
            }, {
              "r" : "1023",
              "s" : [ {
                "r" : "1024",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1025",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status clone\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1023",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1026",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1027",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ConceptRef",
            "localId" : "1024",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          }, {
            "type" : "ConceptRef",
            "localId" : "1025",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status clone",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1030",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffCodeAndCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1030",
            "s" : [ {
              "value" : [ "", "define ", "DiffCodeAndCode", ": " ]
            }, {
              "r" : "1031",
              "s" : [ {
                "r" : "1032",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1033",
                "s" : [ {
                  "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1031",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1034",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1035",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "CodeRef",
            "localId" : "1032",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "annotation" : [ ]
          }, {
            "type" : "CodeRef",
            "localId" : "1033",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Total Score [AUDIT-C] code",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1038",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffCodeAndConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1038",
            "s" : [ {
              "value" : [ "", "define ", "DiffCodeAndConcept", ": " ]
            }, {
              "r" : "1039",
              "s" : [ {
                "r" : "1040",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code clone\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1041",
                "s" : [ {
                  "value" : [ "\"Total Score [AUDIT-C]\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1039",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1045",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1046",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToConcept",
            "localId" : "1043",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1044",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "1040",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Tobacco smoking status code clone",
              "annotation" : [ ]
            }
          }, {
            "type" : "ConceptRef",
            "localId" : "1041",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Total Score [AUDIT-C]",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1049",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffConceptAndCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1049",
            "s" : [ {
              "value" : [ "", "define ", "DiffConceptAndCode", ": " ]
            }, {
              "r" : "1050",
              "s" : [ {
                "r" : "1051",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1052",
                "s" : [ {
                  "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1050",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1056",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1057",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ConceptRef",
            "localId" : "1051",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          }, {
            "type" : "ToConcept",
            "localId" : "1054",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1055",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "1052",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Total Score [AUDIT-C] code",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1060",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffConceptAndConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1060",
            "s" : [ {
              "value" : [ "", "define ", "DiffConceptAndConcept", ": " ]
            }, {
              "r" : "1061",
              "s" : [ {
                "r" : "1062",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1063",
                "s" : [ {
                  "value" : [ "\"Total Score [AUDIT-C]\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1061",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1064",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1065",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ConceptRef",
            "localId" : "1062",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          }, {
            "type" : "ConceptRef",
            "localId" : "1063",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Total Score [AUDIT-C]",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1068",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameVSIdAndVersion",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1068",
            "s" : [ {
              "value" : [ "", "define ", "SameVSIdAndVersion", ": " ]
            }, {
              "r" : "1069",
              "s" : [ {
                "r" : "1070",
                "s" : [ {
                  "value" : [ "\"Unknown\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1071",
                "s" : [ {
                  "value" : [ "\"UnknownSame\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1069",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1072",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1073",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "1070",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Unknown",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "1071",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "UnknownSame",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1076",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameVSCodes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1076",
            "s" : [ {
              "value" : [ "", "define ", "SameVSCodes", ": " ]
            }, {
              "r" : "1077",
              "s" : [ {
                "r" : "1078",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1079",
                "s" : [ {
                  "value" : [ "\"KnownSameCodes\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1077",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1080",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1081",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "1078",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "1079",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "KnownSameCodes",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1084",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffVSCodes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1084",
            "s" : [ {
              "value" : [ "", "define ", "DiffVSCodes", ": " ]
            }, {
              "r" : "1085",
              "s" : [ {
                "r" : "1086",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1087",
                "s" : [ {
                  "value" : [ "\"KnownDifferentCodes\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1085",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1088",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1089",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "1086",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "1087",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "KnownDifferentCodes",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1092",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UnresolvableDiffVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1092",
            "s" : [ {
              "value" : [ "", "define ", "UnresolvableDiffVS", ": " ]
            }, {
              "r" : "1093",
              "s" : [ {
                "r" : "1094",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1095",
                "s" : [ {
                  "value" : [ "\"Unknown\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1093",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1096",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1097",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "1094",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "1095",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Unknown",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1100",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1100",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimes", ": " ]
            }, {
              "r" : "1101",
              "s" : [ {
                "r" : "1120",
                "s" : [ {
                  "r" : "1102",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1109",
                  "s" : [ {
                    "r" : "1109",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1147",
                "s" : [ {
                  "r" : "1129",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1136",
                  "s" : [ {
                    "r" : "1136",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1101",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1156",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1157",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1120",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1121",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1122",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1123",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1124",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1125",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1126",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1127",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1128",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1102",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1103",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1104",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1105",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1106",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1107",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1108",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1109",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1147",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1148",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1149",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1150",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1151",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1152",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1153",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1154",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1155",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1129",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1130",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1131",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1132",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1133",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1134",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1135",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1136",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1160",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1160",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimes", ": " ]
            }, {
              "r" : "1161",
              "s" : [ {
                "r" : "1180",
                "s" : [ {
                  "r" : "1162",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1169",
                  "s" : [ {
                    "r" : "1169",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1207",
                "s" : [ {
                  "r" : "1189",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "201", ", " ]
                }, {
                  "r" : "1196",
                  "s" : [ {
                    "r" : "1196",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1161",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1216",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1217",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1180",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1181",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1182",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1183",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1184",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1185",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1186",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1187",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1188",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1162",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1163",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1164",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1165",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1166",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1167",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1168",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1169",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1208",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1209",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1210",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1211",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1212",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1213",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1214",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1215",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1189",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1190",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1191",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1192",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1193",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1194",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1195",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "201",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1196",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesTZ",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1220",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesTZ", ": " ]
            }, {
              "r" : "1221",
              "s" : [ {
                "r" : "1240",
                "s" : [ {
                  "r" : "1222",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "23", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1229",
                  "s" : [ {
                    "r" : "1229",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1267",
                "s" : [ {
                  "r" : "1249",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "16", ", ", "2", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1256",
                  "s" : [ {
                    "r" : "1256",
                    "value" : [ "+", "4.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1276",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1277",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1241",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1242",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1243",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1244",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1245",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1246",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1247",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1248",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1223",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1226",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1229",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1268",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1269",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1270",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1271",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1272",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1273",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1274",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1275",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1249",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1250",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1251",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1252",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1253",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1254",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1256",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1280",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesTZ",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1280",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesTZ", ": " ]
            }, {
              "r" : "1281",
              "s" : [ {
                "r" : "1300",
                "s" : [ {
                  "r" : "1282",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1289",
                  "s" : [ {
                    "r" : "1289",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1327",
                "s" : [ {
                  "r" : "1309",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1316",
                  "s" : [ {
                    "r" : "1316",
                    "value" : [ "+", "2.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1281",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1336",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1337",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1300",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1301",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1302",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1303",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1304",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1305",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1306",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1307",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1308",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1282",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1283",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1284",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1286",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1287",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1289",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1327",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1328",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1329",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1330",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1331",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1332",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1333",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1334",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1335",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1309",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1310",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1312",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1313",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1314",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1315",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1316",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1340",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesNullMs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1340",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullMs", ": " ]
            }, {
              "r" : "1341",
              "s" : [ {
                "r" : "1358",
                "s" : [ {
                  "r" : "1342",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1380",
                "s" : [ {
                  "r" : "1366",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1341",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1387",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1388",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1358",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1359",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1360",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1361",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1362",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1363",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1364",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1365",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1342",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1343",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1344",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1345",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1346",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1347",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1348",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1380",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1381",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1382",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1383",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1384",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1385",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1386",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1366",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1367",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1368",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1369",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1370",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1371",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1391",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesNullOtherMs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1391",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullOtherMs", ": " ]
            }, {
              "r" : "1392",
              "s" : [ {
                "r" : "1407",
                "s" : [ {
                  "r" : "1393",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1430",
                "s" : [ {
                  "r" : "1414",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1392",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1438",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1439",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1407",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1408",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1409",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1410",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1411",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1412",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1413",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1393",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1394",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1395",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1396",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1397",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1398",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1430",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1431",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1432",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1433",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1434",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1435",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1436",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1437",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1414",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1415",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1416",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1417",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1418",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1419",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1420",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1442",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesOnlyDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1442",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "1443",
              "s" : [ {
                "r" : "1452",
                "s" : [ {
                  "r" : "1444",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1464",
                "s" : [ {
                  "r" : "1456",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1443",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1468",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1469",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1452",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1453",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1454",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1455",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1444",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1445",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1446",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1464",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1465",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1466",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1467",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1456",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1457",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1458",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1472",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesOnlyDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1472",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "1473",
              "s" : [ {
                "r" : "1482",
                "s" : [ {
                  "r" : "1474",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "14", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1494",
                "s" : [ {
                  "r" : "1486",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1473",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1498",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1499",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1482",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1483",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1484",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1485",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1474",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1475",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1476",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1494",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1495",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1496",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1497",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1486",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1487",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1488",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1502",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "PossiblyEqDateTimesOnlyDateOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1502",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "1503",
              "s" : [ {
                "r" : "1512",
                "s" : [ {
                  "r" : "1504",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1530",
                "s" : [ {
                  "r" : "1516",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "13", ", ", "43", ", ", "32", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1503",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1537",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1538",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1512",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1513",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1514",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1515",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1504",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1505",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1506",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1530",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1531",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1532",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1533",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1534",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1535",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1536",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1516",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1517",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1518",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1519",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1520",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "43",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1521",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "32",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1541",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesOnlyDateOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1541",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "1542",
              "s" : [ {
                "r" : "1557",
                "s" : [ {
                  "r" : "1543",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ", ", "13", ", ", "12", ", ", "43", ", ", "32", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1572",
                "s" : [ {
                  "r" : "1564",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1542",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1576",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1577",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1557",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1558",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1559",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1560",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1561",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1562",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1563",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1543",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1544",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1545",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1546",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1547",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "43",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1548",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "32",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1572",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1573",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1574",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1575",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1564",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1565",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1566",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1580",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "PossiblyEqualDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1580",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "1581",
              "s" : [ {
                "r" : "1590",
                "s" : [ {
                  "r" : "1582",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1598",
                "s" : [ {
                  "r" : "1594",
                  "value" : [ "DateTime", "(", "2000", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1581",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1600",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1601",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1590",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1591",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1592",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1593",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1582",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1583",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1584",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1598",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1599",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1594",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1604",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ImpossiblyEqualDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1604",
            "s" : [ {
              "value" : [ "", "define ", "ImpossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "1605",
              "s" : [ {
                "r" : "1614",
                "s" : [ {
                  "r" : "1606",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1624",
                "s" : [ {
                  "r" : "1618",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1605",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1627",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1628",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1614",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1615",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1616",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1617",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1606",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1607",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1608",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1624",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1625",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1626",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1618",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1619",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1631",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1631",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeTrue", ": " ]
            }, {
              "r" : "1632",
              "s" : [ {
                "r" : "1641",
                "s" : [ {
                  "r" : "1633",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1653",
                "s" : [ {
                  "r" : "1645",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1632",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1660",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1661",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1658",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1659",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1641",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1642",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1643",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1644",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1633",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1634",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1635",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1653",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1654",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1655",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1656",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1645",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1646",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1647",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1664",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeNotEqual",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1664",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeNotEqual", ": " ]
            }, {
              "r" : "1665",
              "s" : [ {
                "r" : "1674",
                "s" : [ {
                  "r" : "1666",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1686",
                "s" : [ {
                  "r" : "1678",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1665",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1693",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1694",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1691",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1692",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1674",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1675",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1676",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1677",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1666",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1667",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1668",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1686",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1687",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1688",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1689",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1678",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1679",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1680",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1697",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeUncertainFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1697",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeUncertainFalse", ": " ]
            }, {
              "r" : "1698",
              "s" : [ {
                "r" : "1707",
                "s" : [ {
                  "r" : "1699",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1725",
                "s" : [ {
                  "r" : "1711",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1698",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1735",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1736",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1733",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1734",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1707",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1708",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1709",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1710",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1699",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1700",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1701",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1725",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1726",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1727",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1728",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1729",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1730",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1731",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1711",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1712",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1713",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1714",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1715",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1716",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1739",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1739",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateTrue", ": " ]
            }, {
              "r" : "1740",
              "s" : [ {
                "r" : "1749",
                "s" : [ {
                  "r" : "1741",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1761",
                "s" : [ {
                  "r" : "1753",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1740",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1768",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1769",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1749",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1750",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1751",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1752",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1741",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1742",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1743",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1766",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1767",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1761",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1762",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1763",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1764",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1753",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1754",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1755",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "1772",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateNotEqual",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1772",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateNotEqual", ": " ]
            }, {
              "r" : "1773",
              "s" : [ {
                "r" : "1782",
                "s" : [ {
                  "r" : "1774",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1794",
                "s" : [ {
                  "r" : "1786",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1773",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1801",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1802",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1782",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1783",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1784",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1785",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1774",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1775",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1776",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1799",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1800",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1794",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1795",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1796",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1797",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1786",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1787",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1788",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "1805",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateUncertainFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1805",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateUncertainFalse", ": " ]
            }, {
              "r" : "1806",
              "s" : [ {
                "r" : "1821",
                "s" : [ {
                  "r" : "1807",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1836",
                "s" : [ {
                  "r" : "1828",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1806",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1843",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1844",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1821",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1822",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1823",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1824",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1825",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1826",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1827",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1807",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1808",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1809",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1810",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1811",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1812",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1841",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1842",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1836",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1837",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1838",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1839",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1828",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1829",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1830",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "302",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Int", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "5", " ", "<", " ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Int", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "5", " ", "<", " ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Int", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "5", " ", "<", " ", "6" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "6",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "241",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "249",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "257",
                "s" : [ {
                  "value" : [ "6 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "r" : "264",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "265",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "271",
              "s" : [ {
                "r" : "272",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "273",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "271",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "r" : "280",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "281",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "287",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "290",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "291",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "294",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "296",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "303",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "306",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "307",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 40,
            "unit" : "m",
            "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "302",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Int", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "5", " ", "<=", " ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Int", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "5", " ", "<=", " ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Int", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "5", " ", "<=", " ", "6" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "6",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "241",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "249",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "257",
                "s" : [ {
                  "value" : [ "6 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "r" : "264",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "265",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "271",
              "s" : [ {
                "r" : "272",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "273",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "271",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "r" : "280",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "281",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "287",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "290",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "291",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "294",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "296",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "303",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "306",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "307",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 40,
            "unit" : "m",
            "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "302",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Int", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "5", " ", ">", " ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Int", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "5", " ", ">", " ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Int", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "5", " ", ">", " ", "6" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "6",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "241",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "249",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "257",
                "s" : [ {
                  "value" : [ "6 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "r" : "264",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "265",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "271",
              "s" : [ {
                "r" : "272",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "273",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "271",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "r" : "280",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "281",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "287",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "290",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "291",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "294",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "296",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "303",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "306",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "307",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 40,
            "unit" : "m",
            "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "322",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Int", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "5", " ", ">=", " ", "4" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Int",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Int", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "5", " ", ">=", " ", "5" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "5",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Int", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "5", " ", ">=", " ", "6" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "6",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "241",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "249",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "257",
                "s" : [ {
                  "value" : [ "6 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "r" : "264",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "265",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "271",
              "s" : [ {
                "r" : "272",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "273",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "271",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "r" : "280",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "281",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "287",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "290",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "291",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "294",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "296",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "303",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "306",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "307",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 40,
            "unit" : "m",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "310",
            "s" : [ {
              "value" : [ "", "define ", "DivideUcum_incompatible", ": " ]
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
                      "value" : [ "100 ", "'[nmi_i]'" ]
                    } ]
                  }, {
                    "value" : [ " / " ]
                  }, {
                    "r" : "314",
                    "s" : [ {
                      "value" : [ "2 ", "'h'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "317",
                "s" : [ {
                  "value" : [ "49 ", "'mg/[lb_av]'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "311",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "type" : "Divide",
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "315",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "316",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "313",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 100,
              "unit" : "[nmi_i]",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "314",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "h",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Quantity",
            "localId" : "317",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 49,
            "unit" : "mg/[lb_av]",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "322",
            "s" : [ {
              "value" : [ "", "define ", "DivideUcum", ": " ]
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
                      "value" : [ "100 ", "'mg'" ]
                    } ]
                  }, {
                    "value" : [ " / " ]
                  }, {
                    "r" : "326",
                    "s" : [ {
                      "value" : [ "2 ", "'[lb_av]'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "49 ", "'mg/[lb_av]'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "323",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "330",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "331",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Divide",
            "localId" : "324",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "327",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "328",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "325",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 100,
              "unit" : "mg",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "326",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "[lb_av]",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Quantity",
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 49,
            "unit" : "mg/[lb_av]",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

