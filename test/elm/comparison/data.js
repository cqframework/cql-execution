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
define AGtB_Long: 5L = 4L
define AEqB_Long: 5L = 5L
define ALtB_Long: 5L = 6L
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
        "r" : "1383",
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
        "name" : "AGtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Long", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "value" : [ "5L", " ", "=", " ", "4L" ]
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
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Long", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "value" : [ "5L", " ", "=", " ", "5L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Long", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "value" : [ "5L", " ", "=", " ", "6L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
            "value" : "6",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "262",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "EqTuples", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "r" : "264",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "265",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "266",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "267",
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
                "r" : "278",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "279",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "280",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "281",
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
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "292",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "293",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "294",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "295",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "296",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "297",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "298",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "299",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "300",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "301",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "302",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "303",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "304",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "305",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "264",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "272",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "274",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "275",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "276",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "277",
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
                "localId" : "265",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "266",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "268",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "269",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "270",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "267",
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
            "localId" : "278",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "285",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "286",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "287",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "288",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "289",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "290",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "291",
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
                "localId" : "279",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "280",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "282",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "283",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "284",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "281",
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
        "localId" : "308",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "308",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuples", ": " ]
            }, {
              "r" : "309",
              "s" : [ {
                "r" : "310",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "311",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "312",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "313",
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
                "r" : "324",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "325",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "326",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "value" : [ "c", ": " ]
                      }, {
                        "r" : "327",
                        "s" : [ {
                          "r" : "328",
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
          "localId" : "309",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "340",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "341",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "342",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "343",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "344",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "345",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "346",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
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
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "350",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "351",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "352",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "353",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "310",
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
                "localId" : "311",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "312",
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
                    "type" : "Literal",
                    "localId" : "313",
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
            "localId" : "324",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "333",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "334",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "335",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "336",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "337",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "338",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "339",
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
                "localId" : "325",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "326",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "330",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "331",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "332",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Negate",
                    "localId" : "327",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ],
                    "signature" : [ {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "329",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    } ],
                    "operand" : {
                      "type" : "Literal",
                      "localId" : "328",
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
        "localId" : "356",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqTuplesWithNullFields",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "356",
            "s" : [ {
              "value" : [ "", "define ", "EqTuplesWithNullFields", ": " ]
            }, {
              "r" : "357",
              "s" : [ {
                "r" : "358",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "359",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "361",
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "367",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "368",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "370",
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
          "localId" : "357",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "376",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "377",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "378",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "379",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "380",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "381",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "382",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "383",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "384",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "385",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "358",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
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
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "359",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "361",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "367",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "371",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "372",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "373",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "374",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "375",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "368",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "370",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "388",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqTuplesWithNullFields",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "388",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuplesWithNullFields", ": " ]
            }, {
              "r" : "389",
              "s" : [ {
                "r" : "390",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "391",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "393",
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "399",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "400",
                    "s" : [ {
                      "value" : [ "'Goodbye'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "402",
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
          "localId" : "389",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "408",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "409",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "410",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "411",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "412",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "413",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "414",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "415",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "416",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "417",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "390",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "394",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "395",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "396",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "397",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "398",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "391",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "393",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "399",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "403",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "404",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "405",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "406",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "407",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
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
                "value" : "Goodbye",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "402",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "420",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UncertTuplesWithNullFieldOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "420",
            "s" : [ {
              "value" : [ "", "define ", "UncertTuplesWithNullFieldOnOne", ": " ]
            }, {
              "r" : "421",
              "s" : [ {
                "r" : "422",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "423",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "425",
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "431",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "432",
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
                    "r" : "434",
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
          "localId" : "421",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "441",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "442",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "443",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "444",
              "name" : "b",
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
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "449",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "450",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "422",
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
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "423",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "425",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "431",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
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
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "432",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "434",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "null",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "453",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UncertTuplesWithNullFieldOnFirstOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "453",
            "s" : [ {
              "value" : [ "", "define ", "UncertTuplesWithNullFieldOnFirstOne", ": " ]
            }, {
              "r" : "454",
              "s" : [ {
                "r" : "455",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "456",
                    "value" : [ "a", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "457",
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
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "467",
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
          "localId" : "454",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "474",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "475",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "476",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "localId" : "477",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "478",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "479",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "480",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "481",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "localId" : "482",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "483",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "455",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "459",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "460",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "461",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "462",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "463",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Null",
                "localId" : "456",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "457",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "464",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "469",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "470",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "472",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "473",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
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
                "type" : "Literal",
                "localId" : "467",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "486",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqTuplesWithNullFieldOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "486",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuplesWithNullFieldOnOne", ": " ]
            }, {
              "r" : "487",
              "s" : [ {
                "r" : "488",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "489",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "491",
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "497",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "498",
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
                    "r" : "500",
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
          "localId" : "487",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "507",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "508",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "509",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "510",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "511",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
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
                "type" : "NamedTypeSpecifier",
                "localId" : "516",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "488",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "492",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "493",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "494",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "495",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "496",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "489",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Null",
                "localId" : "491",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "497",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "502",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "503",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "504",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "505",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "506",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "498",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "500",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "null",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "519",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqTuplesWithNullFieldOnFirstOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "519",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuplesWithNullFieldOnFirstOne", ": " ]
            }, {
              "r" : "520",
              "s" : [ {
                "r" : "521",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "522",
                    "value" : [ "a", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "523",
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
                "r" : "530",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "531",
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
                    "r" : "533",
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
          "localId" : "520",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "540",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "541",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "542",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "localId" : "543",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "544",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
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
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "localId" : "548",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "549",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "521",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "525",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "526",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "527",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "528",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "529",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Null",
                "localId" : "522",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "523",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "530",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "535",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "536",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "537",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "538",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "539",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "531",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "null",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "533",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Goodbye",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "552",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "552",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimes", ": " ]
            }, {
              "r" : "553",
              "s" : [ {
                "r" : "572",
                "s" : [ {
                  "r" : "554",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "561",
                  "s" : [ {
                    "r" : "561",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "599",
                "s" : [ {
                  "r" : "581",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "588",
                  "s" : [ {
                    "r" : "588",
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
          "localId" : "553",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "608",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "609",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "572",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "573",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "574",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "575",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "554",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "555",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "556",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "557",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "558",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "559",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "560",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "561",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "599",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "600",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "601",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "602",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "603",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "604",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "605",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "606",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "607",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "581",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "582",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "583",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "584",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "585",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "586",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "587",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "588",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "612",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "612",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimes", ": " ]
            }, {
              "r" : "613",
              "s" : [ {
                "r" : "632",
                "s" : [ {
                  "r" : "614",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "621",
                  "s" : [ {
                    "r" : "621",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "659",
                "s" : [ {
                  "r" : "641",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "201", ", " ]
                }, {
                  "r" : "648",
                  "s" : [ {
                    "r" : "648",
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
          "localId" : "613",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "668",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "669",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "632",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "633",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "634",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "635",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "614",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "615",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "616",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "617",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "618",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "619",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "620",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "621",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "659",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "660",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "661",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "662",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "663",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "664",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "665",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "666",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "667",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "641",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "642",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "643",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "644",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "645",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "646",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "647",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "201",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "648",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "672",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesTZ",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "672",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesTZ", ": " ]
            }, {
              "r" : "673",
              "s" : [ {
                "r" : "692",
                "s" : [ {
                  "r" : "674",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "23", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "681",
                  "s" : [ {
                    "r" : "681",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "719",
                "s" : [ {
                  "r" : "701",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "16", ", ", "2", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "708",
                  "s" : [ {
                    "r" : "708",
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
          "localId" : "673",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "728",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "729",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "692",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "693",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "694",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "695",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "674",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "675",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "676",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "677",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "678",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "679",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "680",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "681",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "719",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "720",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "721",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "722",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "723",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "724",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "725",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "726",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "727",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "701",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "702",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "703",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "704",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "705",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "706",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "707",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "708",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "732",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesTZ",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "732",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesTZ", ": " ]
            }, {
              "r" : "733",
              "s" : [ {
                "r" : "752",
                "s" : [ {
                  "r" : "734",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "741",
                  "s" : [ {
                    "r" : "741",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "779",
                "s" : [ {
                  "r" : "761",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "768",
                  "s" : [ {
                    "r" : "768",
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
          "localId" : "733",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "788",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "789",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "752",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "753",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "754",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "755",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "734",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "735",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "736",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "737",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "738",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "739",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "740",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "741",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "779",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "780",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "781",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "782",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "783",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "784",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "785",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "786",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "787",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "761",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "762",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "763",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "764",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "765",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "766",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "767",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "768",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "792",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesNullMs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "792",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullMs", ": " ]
            }, {
              "r" : "793",
              "s" : [ {
                "r" : "810",
                "s" : [ {
                  "r" : "794",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "832",
                "s" : [ {
                  "r" : "818",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "793",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "839",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "840",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "810",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
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
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "815",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "816",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "817",
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
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "800",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "832",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "833",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "834",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "835",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "818",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "819",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "820",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "821",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "822",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "823",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "843",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesNullOtherMs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "843",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullOtherMs", ": " ]
            }, {
              "r" : "844",
              "s" : [ {
                "r" : "859",
                "s" : [ {
                  "r" : "845",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "882",
                "s" : [ {
                  "r" : "866",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "844",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "890",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "891",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "859",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
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
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "848",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "849",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "850",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "882",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "883",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "884",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "885",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "886",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "887",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "888",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "889",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "866",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "867",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "868",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "869",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "870",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "871",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "872",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "894",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesOnlyDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "894",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "895",
              "s" : [ {
                "r" : "904",
                "s" : [ {
                  "r" : "896",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "916",
                "s" : [ {
                  "r" : "908",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "895",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "920",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "921",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "904",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "905",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "906",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "907",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "896",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "897",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "898",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "916",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "917",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "918",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "919",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "908",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "909",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "910",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "924",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesOnlyDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "924",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "925",
              "s" : [ {
                "r" : "934",
                "s" : [ {
                  "r" : "926",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "14", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "946",
                "s" : [ {
                  "r" : "938",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "925",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "950",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "951",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "934",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "935",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "936",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "937",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "926",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "927",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "928",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "946",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "947",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "948",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "949",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "938",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "939",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "940",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "954",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "PossiblyEqDateTimesOnlyDateOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "954",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "955",
              "s" : [ {
                "r" : "964",
                "s" : [ {
                  "r" : "956",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "982",
                "s" : [ {
                  "r" : "968",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "13", ", ", "43", ", ", "32", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "955",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "989",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "990",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "964",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "965",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "966",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "967",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "956",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "957",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "958",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "982",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "983",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "984",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "985",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "968",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "969",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "970",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "971",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "972",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "43",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "973",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "32",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "993",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesOnlyDateOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "993",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "994",
              "s" : [ {
                "r" : "1009",
                "s" : [ {
                  "r" : "995",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ", ", "13", ", ", "12", ", ", "43", ", ", "32", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1024",
                "s" : [ {
                  "r" : "1016",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "994",
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
            "localId" : "1009",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1010",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1014",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1015",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "995",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "996",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "997",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "998",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "999",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "43",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1000",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "32",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1024",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1025",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1026",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1027",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1016",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1017",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1018",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1032",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "PossiblyEqualDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1032",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqualDateTimes", ": " ]
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
                "r" : "1050",
                "s" : [ {
                  "r" : "1046",
                  "value" : [ "DateTime", "(", "2000", ")" ]
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
            "localId" : "1052",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1053",
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
            "localId" : "1050",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1051",
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
            }
          } ]
        }
      }, {
        "localId" : "1056",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ImpossiblyEqualDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1056",
            "s" : [ {
              "value" : [ "", "define ", "ImpossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "1057",
              "s" : [ {
                "r" : "1066",
                "s" : [ {
                  "r" : "1058",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1076",
                "s" : [ {
                  "r" : "1070",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1057",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1079",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1080",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1066",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1067",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1068",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1069",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1058",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1059",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1060",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1076",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1077",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1078",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1070",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1071",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1083",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1083",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeTrue", ": " ]
            }, {
              "r" : "1084",
              "s" : [ {
                "r" : "1093",
                "s" : [ {
                  "r" : "1085",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1105",
                "s" : [ {
                  "r" : "1097",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1084",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1112",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1113",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1110",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1111",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1093",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1094",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1095",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1096",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1085",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1086",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1087",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1105",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1106",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1107",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1108",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1097",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1098",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1099",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1116",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeNotEqual",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1116",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeNotEqual", ": " ]
            }, {
              "r" : "1117",
              "s" : [ {
                "r" : "1126",
                "s" : [ {
                  "r" : "1118",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1138",
                "s" : [ {
                  "r" : "1130",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1117",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1145",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1146",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1143",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1144",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1126",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1127",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1128",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1129",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1118",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1119",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1120",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1138",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1139",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1140",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1141",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1130",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1131",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1132",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1149",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeUncertainNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1149",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeUncertainNull", ": " ]
            }, {
              "r" : "1150",
              "s" : [ {
                "r" : "1159",
                "s" : [ {
                  "r" : "1151",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1177",
                "s" : [ {
                  "r" : "1163",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1150",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1187",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1188",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1185",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1186",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1159",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
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
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
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
            }, {
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
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1166",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1167",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1168",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1191",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1191",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateTrue", ": " ]
            }, {
              "r" : "1192",
              "s" : [ {
                "r" : "1201",
                "s" : [ {
                  "r" : "1193",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1213",
                "s" : [ {
                  "r" : "1205",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1192",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1220",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1221",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1201",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
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
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1193",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1194",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1195",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1218",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1219",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1213",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1214",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1215",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1216",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1205",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1206",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1207",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "1224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateNotEqual",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1224",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateNotEqual", ": " ]
            }, {
              "r" : "1225",
              "s" : [ {
                "r" : "1234",
                "s" : [ {
                  "r" : "1226",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1246",
                "s" : [ {
                  "r" : "1238",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1253",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1254",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1235",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1236",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1237",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1226",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1251",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1252",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1246",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1247",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1248",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1249",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1238",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1239",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1240",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "1257",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateUncertainNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1257",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateUncertainNull", ": " ]
            }, {
              "r" : "1258",
              "s" : [ {
                "r" : "1273",
                "s" : [ {
                  "r" : "1259",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1288",
                "s" : [ {
                  "r" : "1280",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1258",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1295",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1296",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1274",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1275",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1276",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1277",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1278",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1279",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1259",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1260",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1261",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1262",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1263",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1264",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1293",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1294",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1289",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1290",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1291",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1280",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1281",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1282",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "1299",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1299",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
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
                  "value" : [ "4 ", "'m'" ]
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
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1307",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1307",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
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
                  "value" : [ "5 ", "'m'" ]
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
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1315",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1315",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
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
                  "value" : [ "6 ", "'m'" ]
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
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1323",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1323",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "1324",
              "s" : [ {
                "r" : "1325",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1326",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1331",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1331",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "1332",
              "s" : [ {
                "r" : "1333",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1334",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1339",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1339",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "1340",
              "s" : [ {
                "r" : "1341",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1342",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1342",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1347",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1347",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1348",
              "s" : [ {
                "r" : "1349",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1350",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
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
            "localId" : "1351",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1352",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1350",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1355",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1355",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1356",
              "s" : [ {
                "r" : "1357",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1358",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1356",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1359",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1360",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1357",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1358",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1363",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1363",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1364",
              "s" : [ {
                "r" : "1365",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1366",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "1364",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1367",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1368",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "1365",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "1366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 40,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1371",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqRatios",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1371",
            "s" : [ {
              "value" : [ "", "define ", "EqRatios", ": " ]
            }, {
              "r" : "1372",
              "s" : [ {
                "r" : "1375",
                "s" : [ {
                  "r" : "1373",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "1374",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1378",
                "s" : [ {
                  "r" : "1376",
                  "s" : [ {
                    "value" : [ "15 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "1377",
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
          "localId" : "1372",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1379",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1380",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Ratio",
            "localId" : "1375",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "1373",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "1374",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dL",
              "annotation" : [ ]
            }
          }, {
            "type" : "Ratio",
            "localId" : "1378",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "1376",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 15,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "1377",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "dL",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1383",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqRatios",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1383",
            "s" : [ {
              "value" : [ "", "define ", "UneqRatios", ": " ]
            }, {
              "r" : "1384",
              "s" : [ {
                "r" : "1387",
                "s" : [ {
                  "r" : "1385",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "1386",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "r" : "1390",
                "s" : [ {
                  "r" : "1388",
                  "s" : [ {
                    "value" : [ "15 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "1389",
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
          "localId" : "1384",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1391",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1392",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Ratio",
            "localId" : "1387",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "1385",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "1386",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dL",
              "annotation" : [ ]
            }
          }, {
            "type" : "Ratio",
            "localId" : "1390",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "1388",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 15,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "1389",
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
define AGtB_Long: 5L != 4L
define AEqB_Long: 5L != 5L
define ALtB_Long: 5L != 6L
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
        "r" : "1338",
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
        "name" : "AGtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "244",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Long", ": " ]
            }, {
              "r" : "250",
              "s" : [ {
                "r" : "246",
                "value" : [ "5L", " ", "!=", " ", "4L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "250",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "248",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "249",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "246",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "247",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "4",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Long", ": " ]
            }, {
              "r" : "260",
              "s" : [ {
                "r" : "256",
                "value" : [ "5L", " ", "!=", " ", "5L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "260",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "261",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
              "value" : "5",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "264",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "264",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Long", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "r" : "266",
                "value" : [ "5L", " ", "!=", " ", "6L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "268",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "269",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "6",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "EqTuples", ": " ]
            }, {
              "r" : "318",
              "s" : [ {
                "r" : "276",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "277",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "278",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "279",
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
                "r" : "290",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "291",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "292",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "293",
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
          "localId" : "318",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "319",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "304",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "305",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "307",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "308",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "309",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "310",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "311",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "312",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "313",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "314",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "315",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "316",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "317",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "276",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "283",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "284",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "285",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "286",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "287",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "288",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "289",
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
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Tuple",
                  "localId" : "278",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "280",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "281",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "282",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "c",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "279",
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
              "localId" : "290",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "297",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "298",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "299",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "300",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "301",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "302",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "303",
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
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Tuple",
                  "localId" : "292",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "294",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "295",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "296",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "c",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "293",
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
        "localId" : "322",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "322",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuples", ": " ]
            }, {
              "r" : "368",
              "s" : [ {
                "r" : "324",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "325",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "326",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "327",
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
                "r" : "338",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "339",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "b", ": " ]
                  }, {
                    "r" : "340",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "value" : [ "c", ": " ]
                      }, {
                        "r" : "341",
                        "s" : [ {
                          "r" : "342",
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
          "localId" : "368",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "369",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "354",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "355",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "356",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "357",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "358",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "359",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "360",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "361",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "362",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "363",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "364",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "365",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "366",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "367",
                      "name" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "324",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
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
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Tuple",
                  "localId" : "326",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
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
                  },
                  "element" : [ {
                    "name" : "c",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "327",
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
              "localId" : "338",
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
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "350",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "351",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "352",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "353",
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
                  "localId" : "339",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Tuple",
                  "localId" : "340",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "344",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "345",
                      "name" : "c",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "346",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "c",
                    "value" : {
                      "type" : "Negate",
                      "localId" : "341",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                      "annotation" : [ ],
                      "signature" : [ {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "343",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "annotation" : [ ]
                      } ],
                      "operand" : {
                        "type" : "Literal",
                        "localId" : "342",
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
        "localId" : "372",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqTuplesWithNullFields",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "372",
            "s" : [ {
              "value" : [ "", "define ", "EqTuplesWithNullFields", ": " ]
            }, {
              "r" : "402",
              "s" : [ {
                "r" : "374",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "375",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "377",
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "383",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "384",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "386",
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
          "localId" : "402",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "403",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "373",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "392",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "393",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "394",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "395",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "396",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "397",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "398",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "399",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "400",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "401",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "374",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "378",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "379",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "380",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "381",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "382",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "375",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "377",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "Tuple",
              "localId" : "383",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "387",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "388",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "389",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "390",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "391",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "384",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "386",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            } ]
          }
        }
      }, {
        "localId" : "406",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqTuplesWithNullFields",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "406",
            "s" : [ {
              "value" : [ "", "define ", "UneqTuplesWithNullFields", ": " ]
            }, {
              "r" : "436",
              "s" : [ {
                "r" : "408",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "409",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "411",
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "417",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "418",
                    "s" : [ {
                      "value" : [ "'Goodbye'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "420",
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
          "localId" : "436",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "437",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "407",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
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
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
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
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "408",
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
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "409",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "411",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "Tuple",
              "localId" : "417",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "421",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "422",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "423",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "424",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "425",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "418",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Goodbye",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "420",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            } ]
          }
        }
      }, {
        "localId" : "440",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UncertTuplesWithNullFieldOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "440",
            "s" : [ {
              "value" : [ "", "define ", "UncertTuplesWithNullFieldOnOne", ": " ]
            }, {
              "r" : "471",
              "s" : [ {
                "r" : "442",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "443",
                    "s" : [ {
                      "value" : [ "'Hello'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "445",
                    "value" : [ "b", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "451",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "452",
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
                    "r" : "454",
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
          "localId" : "471",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "472",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "441",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "TupleTypeSpecifier",
              "localId" : "461",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "462",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "463",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "464",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "465",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "TupleTypeSpecifier",
              "localId" : "466",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "467",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "468",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "469",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "470",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "442",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
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
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "449",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "450",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "443",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Null",
                  "localId" : "445",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "Tuple",
              "localId" : "451",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "456",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "457",
                  "name" : "a",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "458",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "459",
                  "name" : "b",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "460",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "a",
                "value" : {
                  "type" : "Literal",
                  "localId" : "452",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "annotation" : [ ]
                }
              }, {
                "name" : "b",
                "value" : {
                  "type" : "Literal",
                  "localId" : "454",
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
        "localId" : "475",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "475",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimes", ": " ]
            }, {
              "r" : "533",
              "s" : [ {
                "r" : "495",
                "s" : [ {
                  "r" : "477",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "484",
                  "s" : [ {
                    "r" : "484",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "522",
                "s" : [ {
                  "r" : "504",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "511",
                  "s" : [ {
                    "r" : "511",
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
          "localId" : "533",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "534",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "476",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "531",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "532",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "495",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
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
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "501",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "502",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "503",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "477",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "478",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "479",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "480",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "481",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "482",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "483",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "484",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "522",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "523",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "524",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "525",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "526",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "527",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
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
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "504",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "505",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "506",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "507",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "508",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "509",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "510",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "511",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "537",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "537",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimes", ": " ]
            }, {
              "r" : "595",
              "s" : [ {
                "r" : "557",
                "s" : [ {
                  "r" : "539",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "546",
                  "s" : [ {
                    "r" : "546",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "584",
                "s" : [ {
                  "r" : "566",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "201", ", " ]
                }, {
                  "r" : "573",
                  "s" : [ {
                    "r" : "573",
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
          "localId" : "595",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "596",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "538",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "593",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "594",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "557",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
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
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "563",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "564",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "565",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "539",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "540",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "541",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "542",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "543",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "544",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "545",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "546",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "584",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "585",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "586",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "587",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "588",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "589",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
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
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "566",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "567",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "568",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "569",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "570",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "571",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "572",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "201",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "573",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "599",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesTZ",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "599",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesTZ", ": " ]
            }, {
              "r" : "657",
              "s" : [ {
                "r" : "619",
                "s" : [ {
                  "r" : "601",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "23", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "608",
                  "s" : [ {
                    "r" : "608",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "646",
                "s" : [ {
                  "r" : "628",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "16", ", ", "2", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "635",
                  "s" : [ {
                    "r" : "635",
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
          "localId" : "657",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "658",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "600",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "655",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "656",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "619",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
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
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "625",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "626",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "627",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "601",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "602",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "603",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "604",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "23",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "605",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "606",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "607",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "608",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "646",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "647",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "648",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "649",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "650",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "651",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
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
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "628",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "629",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "630",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "16",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "631",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "632",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "633",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "634",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "635",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "4.0",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "661",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesTZ",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "661",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesTZ", ": " ]
            }, {
              "r" : "719",
              "s" : [ {
                "r" : "681",
                "s" : [ {
                  "r" : "663",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "670",
                  "s" : [ {
                    "r" : "670",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "708",
                "s" : [ {
                  "r" : "690",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "697",
                  "s" : [ {
                    "r" : "697",
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
          "localId" : "719",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "720",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "662",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "717",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "718",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "681",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
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
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "687",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "688",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "689",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "663",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "664",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "665",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "666",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "667",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "668",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "669",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "670",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "708",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "709",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "710",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "711",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
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
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "690",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "691",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "692",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "693",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "694",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "695",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "696",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "200",
                "annotation" : [ ]
              },
              "timezoneOffset" : {
                "type" : "Literal",
                "localId" : "697",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.0",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "723",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesNullMs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "723",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullMs", ": " ]
            }, {
              "r" : "772",
              "s" : [ {
                "r" : "741",
                "s" : [ {
                  "r" : "725",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "763",
                "s" : [ {
                  "r" : "749",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "772",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "773",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "724",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "770",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "771",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "741",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "742",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "743",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "744",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "745",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "746",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "747",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "748",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "725",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "726",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "727",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "728",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "729",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "730",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "731",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "763",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
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
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "769",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "749",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "750",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "751",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "752",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "753",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "754",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "776",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesNullOtherMs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "776",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullOtherMs", ": " ]
            }, {
              "r" : "825",
              "s" : [ {
                "r" : "792",
                "s" : [ {
                  "r" : "778",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "815",
                "s" : [ {
                  "r" : "799",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "825",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "826",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "777",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "823",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "824",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "792",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "793",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "794",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "795",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "796",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "797",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "798",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "778",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "779",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "780",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "781",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "782",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "783",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "815",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "816",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "817",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "818",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "819",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "820",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "821",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "822",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "799",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "800",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "801",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "802",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "803",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "804",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "25",
                "annotation" : [ ]
              },
              "millisecond" : {
                "type" : "Literal",
                "localId" : "805",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "829",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesOnlyDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "829",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "857",
              "s" : [ {
                "r" : "839",
                "s" : [ {
                  "r" : "831",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "851",
                "s" : [ {
                  "r" : "843",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "857",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "858",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "830",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "855",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "856",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "839",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "840",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "841",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "842",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "831",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "832",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "833",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "851",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "852",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "853",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "854",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "843",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "844",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "845",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "861",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesOnlyDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "861",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "889",
              "s" : [ {
                "r" : "871",
                "s" : [ {
                  "r" : "863",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "14", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "883",
                "s" : [ {
                  "r" : "875",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "889",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "890",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "862",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "887",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "888",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "871",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "872",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "873",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "874",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "863",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "864",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "865",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "14",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "883",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "884",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "885",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "886",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "875",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "876",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "877",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "893",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "PossiblyEqDateTimesOnlyDateOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "893",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "930",
              "s" : [ {
                "r" : "903",
                "s" : [ {
                  "r" : "895",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "921",
                "s" : [ {
                  "r" : "907",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "13", ", ", "43", ", ", "32", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "930",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "931",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "894",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "928",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "929",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "903",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "904",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "905",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "906",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "895",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "896",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "897",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "921",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
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
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "927",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "907",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "908",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "909",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "910",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "911",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "43",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "912",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "32",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "934",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesOnlyDateOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "934",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "971",
              "s" : [ {
                "r" : "950",
                "s" : [ {
                  "r" : "936",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ", ", "13", ", ", "12", ", ", "43", ", ", "32", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "965",
                "s" : [ {
                  "r" : "957",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "971",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "972",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "935",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "969",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "970",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "950",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "951",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "952",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "953",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "954",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "955",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "956",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "936",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "937",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "938",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "939",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "940",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "43",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "941",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "32",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "965",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "966",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "967",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "968",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "957",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "958",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "959",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "975",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "PossiblyEqualDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "975",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "997",
              "s" : [ {
                "r" : "985",
                "s" : [ {
                  "r" : "977",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "993",
                "s" : [ {
                  "r" : "989",
                  "value" : [ "DateTime", "(", "2000", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "997",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "998",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "976",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "995",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "996",
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
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "977",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "978",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "979",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "993",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "994",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "989",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1001",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ImpossiblyEqualDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1001",
            "s" : [ {
              "value" : [ "", "define ", "ImpossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "1026",
              "s" : [ {
                "r" : "1011",
                "s" : [ {
                  "r" : "1003",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1021",
                "s" : [ {
                  "r" : "1015",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1026",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1027",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1002",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1024",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1025",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "1011",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1012",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1013",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1014",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1003",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1004",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1005",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "15",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "1021",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1022",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1023",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1015",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1016",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1030",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1030",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeFalse", ": " ]
            }, {
              "r" : "1061",
              "s" : [ {
                "r" : "1040",
                "s" : [ {
                  "r" : "1032",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1052",
                "s" : [ {
                  "r" : "1044",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1061",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1062",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1031",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1059",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1060",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDateTime",
              "localId" : "1057",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1058",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1040",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1041",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1042",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1043",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1032",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1033",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1034",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "annotation" : [ ]
                }
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
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1055",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1044",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1045",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1046",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1065",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeNotEqual",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1065",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeNotEqual", ": " ]
            }, {
              "r" : "1096",
              "s" : [ {
                "r" : "1075",
                "s" : [ {
                  "r" : "1067",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1087",
                "s" : [ {
                  "r" : "1079",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1096",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1097",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1066",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1094",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1095",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDateTime",
              "localId" : "1092",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1093",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1075",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1076",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1077",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1078",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1067",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1068",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1069",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "DateTime",
              "localId" : "1087",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1088",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1089",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1090",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1079",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1080",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1081",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1100",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeUncertainTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1100",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeUncertainTrue", ": " ]
            }, {
              "r" : "1140",
              "s" : [ {
                "r" : "1110",
                "s" : [ {
                  "r" : "1102",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1128",
                "s" : [ {
                  "r" : "1114",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1140",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1141",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1101",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1138",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1139",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDateTime",
              "localId" : "1136",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1137",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1110",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1111",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1112",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1113",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  "value" : "13",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "DateTime",
              "localId" : "1128",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1129",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1130",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1131",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1132",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1133",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1134",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1114",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1115",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1116",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "1117",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "1118",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "1119",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "23",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "1144",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1144",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateFalse", ": " ]
            }, {
              "r" : "1175",
              "s" : [ {
                "r" : "1154",
                "s" : [ {
                  "r" : "1146",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1166",
                "s" : [ {
                  "r" : "1158",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1175",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1176",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1145",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1173",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1174",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "1154",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
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
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1146",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1147",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1148",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDateTime",
              "localId" : "1171",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1172",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1166",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1167",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1168",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1169",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1158",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1159",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1160",
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
        "localId" : "1179",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateNotEqual",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1179",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateNotEqual", ": " ]
            }, {
              "r" : "1210",
              "s" : [ {
                "r" : "1189",
                "s" : [ {
                  "r" : "1181",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1201",
                "s" : [ {
                  "r" : "1193",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1210",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1211",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1180",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1208",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1209",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "1189",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
                "value" : "12",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDateTime",
              "localId" : "1206",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1207",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1201",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
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
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1193",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1194",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1195",
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
        "localId" : "1214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateUncertainNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1214",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateUncertainNull", ": " ]
            }, {
              "r" : "1254",
              "s" : [ {
                "r" : "1230",
                "s" : [ {
                  "r" : "1216",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1245",
                "s" : [ {
                  "r" : "1237",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
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
            "localId" : "1215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1252",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1253",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "DateTime",
              "localId" : "1230",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1231",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1232",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1233",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1234",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1235",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1236",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1216",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1217",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1218",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "1219",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "1220",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "1221",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "23",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDateTime",
              "localId" : "1250",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1251",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Date",
                "localId" : "1245",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ {
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
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "1237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "1238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "1239",
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
        "localId" : "1258",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1258",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
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
                  "value" : [ "4 ", "'m'" ]
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
              "value" : 4,
              "unit" : "m",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1268",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1268",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
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
                  "value" : [ "5 ", "'m'" ]
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
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1278",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
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
                  "value" : [ "6 ", "'m'" ]
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
              "value" : 6,
              "unit" : "m",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1288",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1288",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "1294",
              "s" : [ {
                "r" : "1290",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1291",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
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
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "cm",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1298",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1298",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "1304",
              "s" : [ {
                "r" : "1300",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1301",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
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
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1301",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 500,
              "unit" : "cm",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1308",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1308",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "1314",
              "s" : [ {
                "r" : "1310",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1311",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
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
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "km",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1318",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1318",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1324",
              "s" : [ {
                "r" : "1320",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1321",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1324",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1325",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1322",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1323",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1320",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "Cel",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1321",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "m",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1328",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1328",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1334",
              "s" : [ {
                "r" : "1330",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1331",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1334",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1335",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1332",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1333",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1330",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "Cel",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1331",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "1338",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1338",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "1344",
              "s" : [ {
                "r" : "1340",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "!=", " " ]
              }, {
                "r" : "1341",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "1344",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1345",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Equal",
            "localId" : "1339",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1342",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1343",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "1340",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "Cel",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "1341",
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
define EqLong: 5L ~ 5L
define UneqLong: 5L ~ 6L
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
define SameTuples: Tuple{a: 'a', b: 'b', z: 9L } ~ Tuple{a: 'a', b: 'b', z: 9L }
define SameTuplesNull: Tuple{a: null} ~ Tuple{a : null}
define DifferentTuples: Tuple{a: 'a', b: 'b'} ~ Tuple{a: 'x', b: 'b'}
define SameNestedTuples: Tuple{a: 'a', b: Tuple{c: 'c'}} ~ Tuple{a: 'a', b: Tuple{c: 'c'}}
define SameNestedTuplesNull: Tuple{a: 'a', b: Tuple{c: null}} ~ Tuple{a: 'a', b: Tuple{c: null}}

define EmptyLists: { } ~ { }
define DifferentTypesLists: {'1', '2', '3'} ~ {1, 2, 3}
define DifferentLengthLists: {'a'} ~ {'a', 'a'}
define DifferentOrderLists: {'a', 'b'} ~ {'b', 'a'}
define DifferentOrderListsLong: {1L, 5L, 10L} ~ {5L, 1L, 10L}
define SameLists: {'a', 'b', 'c'} ~ {'a', 'b', 'c'}
define SameListsLong: {1L, 5L, 10L} ~ {1L, 5L, 10L}
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
      "startLine" : 58,
      "startChar" : 37,
      "endLine" : 58,
      "endChar" : 42,
      "message" : "List-valued expression was demoted to a singleton.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 59,
      "startChar" : 26,
      "endLine" : 59,
      "endChar" : 31,
      "message" : "List-valued expression was demoted to a singleton.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "1871",
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
        "name" : "EqLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "279",
            "s" : [ {
              "value" : [ "", "define ", "EqLong", ": " ]
            }, {
              "r" : "280",
              "s" : [ {
                "r" : "281",
                "value" : [ "5L", " ", "~", " ", "5L" ]
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
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "287",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "287",
            "s" : [ {
              "value" : [ "", "define ", "UneqLong", ": " ]
            }, {
              "r" : "288",
              "s" : [ {
                "r" : "289",
                "value" : [ "5L", " ", "~", " ", "6L" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "288",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "291",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "292",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "290",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "6",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "295",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "CaseInsensitiveStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "295",
            "s" : [ {
              "value" : [ "", "define ", "CaseInsensitiveStrings", ": " ]
            }, {
              "r" : "296",
              "s" : [ {
                "r" : "297",
                "s" : [ {
                  "value" : [ "'FOO'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "299",
                "s" : [ {
                  "value" : [ "'foo'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "296",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "301",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "302",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FOO",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "305",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceTabTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "305",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceTabTrue", ": " ]
            }, {
              "r" : "306",
              "s" : [ {
                "r" : "307",
                "s" : [ {
                  "value" : [ "'foo bar'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "309",
                "s" : [ {
                  "value" : [ "'foo\\tbar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "306",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "311",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "312",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\tbar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "315",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceTabReturnTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "315",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceTabReturnTrue", ": " ]
            }, {
              "r" : "316",
              "s" : [ {
                "r" : "317",
                "s" : [ {
                  "value" : [ "'foo\\tbar'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "319",
                "s" : [ {
                  "value" : [ "'foo\\nbar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "316",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "321",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "317",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\tbar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\nbar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "325",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceIncorrectSpaceFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "325",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceIncorrectSpaceFalse", ": " ]
            }, {
              "r" : "326",
              "s" : [ {
                "r" : "327",
                "s" : [ {
                  "value" : [ "'foo bar'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "'foo\\t\\tbar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "326",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "331",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "332",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "327",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\t\tbar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "335",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceIncorrectNumberTabsFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "335",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceIncorrectNumberTabsFalse", ": " ]
            }, {
              "r" : "336",
              "s" : [ {
                "r" : "337",
                "s" : [ {
                  "value" : [ "'foo\\t\\tbar'" ]
                } ]
              }, {
                "value" : [ " ", "~" ]
              }, {
                "r" : "339",
                "s" : [ {
                  "value" : [ "'foo\\tbar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "336",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "341",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "342",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "337",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\t\tbar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "339",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo\tbar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "345",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WhiteSpaceNoSpaceFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "345",
            "s" : [ {
              "value" : [ "", "define ", "WhiteSpaceNoSpaceFalse", ": " ]
            }, {
              "r" : "346",
              "s" : [ {
                "r" : "347",
                "s" : [ {
                  "value" : [ "'foo bar'" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "349",
                "s" : [ {
                  "value" : [ "'foobar'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "346",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "351",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "352",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "347",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foobar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "355",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqRatios",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "355",
            "s" : [ {
              "value" : [ "", "define ", "EqRatios", ": " ]
            }, {
              "r" : "356",
              "s" : [ {
                "r" : "359",
                "s" : [ {
                  "r" : "357",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "358",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "362",
                "s" : [ {
                  "r" : "360",
                  "s" : [ {
                    "value" : [ "15 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "361",
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
          "localId" : "356",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "363",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "364",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Ratio",
            "localId" : "359",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "357",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "358",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dL",
              "annotation" : [ ]
            }
          }, {
            "type" : "Ratio",
            "localId" : "362",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "360",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 15,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "361",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "dL",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "367",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqRatios",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "367",
            "s" : [ {
              "value" : [ "", "define ", "UneqRatios", ": " ]
            }, {
              "r" : "368",
              "s" : [ {
                "r" : "371",
                "s" : [ {
                  "r" : "369",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "370",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "374",
                "s" : [ {
                  "r" : "372",
                  "s" : [ {
                    "value" : [ "15 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "373",
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
          "localId" : "368",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "375",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "376",
            "name" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Ratio",
            "localId" : "371",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "369",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "370",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dL",
              "annotation" : [ ]
            }
          }, {
            "type" : "Ratio",
            "localId" : "374",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "annotation" : [ ],
            "numerator" : {
              "localId" : "372",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 15,
              "unit" : "mg",
              "annotation" : [ ]
            },
            "denominator" : {
              "localId" : "373",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "dL",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "379",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqRatioTypes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "379",
            "s" : [ {
              "value" : [ "", "define ", "UneqRatioTypes", ": " ]
            }, {
              "r" : "380",
              "s" : [ {
                "r" : "383",
                "s" : [ {
                  "r" : "381",
                  "s" : [ {
                    "value" : [ "10 ", "'mg'" ]
                  } ]
                }, {
                  "value" : [ " : " ]
                }, {
                  "r" : "382",
                  "s" : [ {
                    "value" : [ "2 ", "'dL'" ]
                  } ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "398",
                "s" : [ {
                  "r" : "384",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "380",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "407",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "408",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "409",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "410",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "ToList",
            "localId" : "405",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Ratio",
              "localId" : "383",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
              "annotation" : [ ],
              "numerator" : {
                "localId" : "381",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 10,
                "unit" : "mg",
                "annotation" : [ ]
              },
              "denominator" : {
                "localId" : "382",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 2,
                "unit" : "dL",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ToList",
            "localId" : "406",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "DateTime",
              "localId" : "398",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
                "localId" : "384",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "385",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "386",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              },
              "hour" : {
                "type" : "Literal",
                "localId" : "387",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "388",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "389",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "23",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "413",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "413",
            "s" : [ {
              "value" : [ "// define EmptyTuples: { : } ~ { : } // TODO: We don't seem to support this format\n", "define ", "SameTuples", ": " ]
            }, {
              "r" : "414",
              "s" : [ {
                "r" : "415",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "416",
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
                    "r" : "418",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "420",
                    "value" : [ "z", ": ", "9L" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "428",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "429",
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
                    "r" : "431",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "433",
                    "value" : [ "z", ": ", "9L" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "414",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "441",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "442",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "443",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "444",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "445",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "446",
              "name" : "z",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "447",
                "name" : "{urn:hl7-org:elm-types:r1}Long",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "448",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "449",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "450",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "451",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "452",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "453",
              "name" : "z",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "454",
                "name" : "{urn:hl7-org:elm-types:r1}Long",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "415",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "421",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "422",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "423",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "424",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "425",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "426",
                "name" : "z",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "427",
                  "name" : "{urn:hl7-org:elm-types:r1}Long",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "416",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "418",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }
            }, {
              "name" : "z",
              "value" : {
                "type" : "Literal",
                "localId" : "420",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
                "valueType" : "{urn:hl7-org:elm-types:r1}Long",
                "value" : "9",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "428",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "434",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "435",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "436",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "437",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "438",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "439",
                "name" : "z",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "440",
                  "name" : "{urn:hl7-org:elm-types:r1}Long",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "429",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "431",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }
            }, {
              "name" : "z",
              "value" : {
                "type" : "Literal",
                "localId" : "433",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
                "valueType" : "{urn:hl7-org:elm-types:r1}Long",
                "value" : "9",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "457",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameTuplesNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "457",
            "s" : [ {
              "value" : [ "", "define ", "SameTuplesNull", ": " ]
            }, {
              "r" : "458",
              "s" : [ {
                "r" : "459",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "460",
                    "value" : [ "a", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "464",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "r" : "465",
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
          "localId" : "458",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "469",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "470",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "471",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "472",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "473",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "474",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "459",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "461",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "462",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "463",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Null",
                "localId" : "460",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "464",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "466",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "467",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "468",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Null",
                "localId" : "465",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "477",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "477",
            "s" : [ {
              "value" : [ "", "define ", "DifferentTuples", ": " ]
            }, {
              "r" : "478",
              "s" : [ {
                "r" : "479",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "480",
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
                    "r" : "482",
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
                "r" : "489",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "490",
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
                    "r" : "492",
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
          "localId" : "478",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "499",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "500",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "501",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "502",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "503",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "504",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "505",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "506",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "507",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "508",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "479",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "484",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "485",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "486",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "487",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "488",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "480",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "482",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "489",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "494",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "495",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "496",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "497",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "498",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "490",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "x",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "492",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "511",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameNestedTuples",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "511",
            "s" : [ {
              "value" : [ "", "define ", "SameNestedTuples", ": " ]
            }, {
              "r" : "512",
              "s" : [ {
                "r" : "513",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "514",
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
                    "r" : "516",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "value" : [ "c", ": " ]
                      }, {
                        "r" : "517",
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
                "r" : "529",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "530",
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
                    "r" : "532",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "value" : [ "c", ": " ]
                      }, {
                        "r" : "533",
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
          "localId" : "512",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
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
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "552",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "553",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "554",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "555",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "556",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "557",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "558",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "513",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "522",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "523",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "524",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "525",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "526",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "527",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "528",
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
                "localId" : "514",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "516",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "519",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "520",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "521",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "517",
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
            "localId" : "529",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "538",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "539",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "540",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "541",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
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
                "localId" : "530",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "532",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "535",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "536",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "537",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "533",
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
        "localId" : "561",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameNestedTuplesNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "561",
            "s" : [ {
              "value" : [ "", "define ", "SameNestedTuplesNull", ": " ]
            }, {
              "r" : "562",
              "s" : [ {
                "r" : "563",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "564",
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
                    "r" : "566",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "567",
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
                "r" : "578",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "579",
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
                    "r" : "581",
                    "s" : [ {
                      "value" : [ "Tuple{" ]
                    }, {
                      "s" : [ {
                        "r" : "582",
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
          "localId" : "562",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "593",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "594",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "595",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "596",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "597",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "598",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "599",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "600",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "601",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "602",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "603",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "604",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "605",
                  "name" : "c",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "606",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "563",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "571",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "572",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "573",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "574",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "575",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "576",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "577",
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
                "localId" : "564",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "566",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "568",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "569",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "570",
                      "name" : "{urn:hl7-org:elm-types:r1}Any",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Null",
                    "localId" : "567",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "578",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "586",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "587",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "588",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "589",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "590",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "591",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "592",
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
                "localId" : "579",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Tuple",
                "localId" : "581",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "583",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "584",
                    "name" : "c",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "585",
                      "name" : "{urn:hl7-org:elm-types:r1}Any",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "c",
                  "value" : {
                    "type" : "Null",
                    "localId" : "582",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "609",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EmptyLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "609",
            "s" : [ {
              "value" : [ "", "define ", "EmptyLists", ": " ]
            }, {
              "r" : "610",
              "s" : [ {
                "r" : "611",
                "value" : [ "{ }", " ", "~", " ", "{ }" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "610",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "617",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "618",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "619",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "620",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "611",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "612",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "613",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          }, {
            "type" : "List",
            "localId" : "614",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "615",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "616",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          } ]
        }
      }, {
        "localId" : "623",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentTypesLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "623",
            "s" : [ {
              "value" : [ "", "define ", "DifferentTypesLists", ": " ]
            }, {
              "r" : "624",
              "s" : [ {
                "r" : "625",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "626",
                  "s" : [ {
                    "value" : [ "'1'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "628",
                  "s" : [ {
                    "value" : [ "'2'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "630",
                  "s" : [ {
                    "value" : [ "'3'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "634",
                "s" : [ {
                  "r" : "635",
                  "value" : [ "{", "1", ", ", "2", ", ", "3", "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "624",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "640",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "641",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "642",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "643",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "625",
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
              "localId" : "626",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "628",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "630",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "3",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "634",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "638",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "639",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "635",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "636",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "637",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "646",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentLengthLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "646",
            "s" : [ {
              "value" : [ "", "define ", "DifferentLengthLists", ": " ]
            }, {
              "r" : "647",
              "s" : [ {
                "r" : "648",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "649",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "653",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "654",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "656",
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
          "localId" : "647",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "660",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "661",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "662",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "663",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "648",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "651",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "652",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "649",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "653",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "658",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "659",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "654",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "656",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "666",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentOrderLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "666",
            "s" : [ {
              "value" : [ "", "define ", "DifferentOrderLists", ": " ]
            }, {
              "r" : "667",
              "s" : [ {
                "r" : "668",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "669",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "671",
                  "s" : [ {
                    "value" : [ "'b'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "675",
                "s" : [ {
                  "value" : [ "{" ]
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
          "localId" : "667",
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
            "localId" : "668",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "673",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "674",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "669",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "671",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "b",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "675",
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
              "value" : "a",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "688",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DifferentOrderListsLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "688",
            "s" : [ {
              "value" : [ "", "define ", "DifferentOrderListsLong", ": " ]
            }, {
              "r" : "689",
              "s" : [ {
                "r" : "690",
                "s" : [ {
                  "r" : "691",
                  "value" : [ "{", "1L", ", ", "5L", ", ", "10L", "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "696",
                "s" : [ {
                  "r" : "697",
                  "value" : [ "{", "5L", ", ", "1L", ", ", "10L", "}" ]
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
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "704",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "705",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
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
                "name" : "{urn:hl7-org:elm-types:r1}Long",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "691",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "692",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "693",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
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
                "name" : "{urn:hl7-org:elm-types:r1}Long",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "697",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "698",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "699",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "708",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "708",
            "s" : [ {
              "value" : [ "", "define ", "SameLists", ": " ]
            }, {
              "r" : "709",
              "s" : [ {
                "r" : "710",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "711",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "713",
                  "s" : [ {
                    "value" : [ "'b'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "715",
                  "s" : [ {
                    "value" : [ "'c'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
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
                  "value" : [ ", " ]
                }, {
                  "r" : "722",
                  "s" : [ {
                    "value" : [ "'b'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "724",
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
          "localId" : "709",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "728",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "729",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "730",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "731",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "710",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "717",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "718",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "711",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "713",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "b",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "715",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "c",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "719",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "726",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "727",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "720",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "722",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "b",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "724",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "c",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "734",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameListsLong",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "734",
            "s" : [ {
              "value" : [ "", "define ", "SameListsLong", ": " ]
            }, {
              "r" : "735",
              "s" : [ {
                "r" : "736",
                "s" : [ {
                  "r" : "737",
                  "value" : [ "{", "1L", ", ", "5L", ", ", "10L", "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "742",
                "s" : [ {
                  "r" : "743",
                  "value" : [ "{", "1L", ", ", "5L", ", ", "10L", "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "735",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "748",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "749",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "750",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "751",
              "name" : "{urn:hl7-org:elm-types:r1}Long",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "736",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "740",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "741",
                "name" : "{urn:hl7-org:elm-types:r1}Long",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "737",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "738",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "739",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "742",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "746",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "747",
                "name" : "{urn:hl7-org:elm-types:r1}Long",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "743",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "744",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "745",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
              "valueType" : "{urn:hl7-org:elm-types:r1}Long",
              "value" : "10",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "754",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameListsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "754",
            "s" : [ {
              "value" : [ "", "define ", "SameListsNull", ": " ]
            }, {
              "r" : "755",
              "s" : [ {
                "r" : "756",
                "s" : [ {
                  "r" : "757",
                  "value" : [ "{", "null", ", ", "null", ", ", "null", "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "762",
                "s" : [ {
                  "r" : "763",
                  "value" : [ "{", "null", ", ", "null", ", ", "null", "}" ]
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
            "localId" : "768",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "769",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "770",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "771",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "756",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "760",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "761",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Null",
              "localId" : "757",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "758",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "759",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "List",
            "localId" : "762",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "766",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "767",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Null",
              "localId" : "763",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "764",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "765",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "774",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameNestedLists",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "774",
            "s" : [ {
              "value" : [ "", "define ", "SameNestedLists", ": " ]
            }, {
              "r" : "775",
              "s" : [ {
                "r" : "776",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "777",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "778",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  }, {
                    "value" : [ "," ]
                  }, {
                    "r" : "780",
                    "s" : [ {
                      "value" : [ "'d'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "784",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "785",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "787",
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
                "r" : "794",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "795",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "796",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  }, {
                    "value" : [ "," ]
                  }, {
                    "r" : "798",
                    "s" : [ {
                      "value" : [ "'d'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "802",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "803",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "805",
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
          "localId" : "775",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "812",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "813",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "814",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "815",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "816",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "817",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "776",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "791",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "792",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "793",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }
            },
            "element" : [ {
              "type" : "List",
              "localId" : "777",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "782",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "783",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "778",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "780",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "d",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "List",
              "localId" : "784",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "789",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "790",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "785",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "787",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c",
                "annotation" : [ ]
              } ]
            } ]
          }, {
            "type" : "List",
            "localId" : "794",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "809",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "810",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "811",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }
            },
            "element" : [ {
              "type" : "List",
              "localId" : "795",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "800",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "801",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "796",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "798",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "d",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "List",
              "localId" : "802",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "807",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "808",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "803",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "805",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c",
                "annotation" : [ ]
              } ]
            } ]
          } ]
        }
      }, {
        "localId" : "820",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameNestedListsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "820",
            "s" : [ {
              "value" : [ "", "define ", "SameNestedListsNull", ": " ]
            }, {
              "r" : "821",
              "s" : [ {
                "r" : "822",
                "s" : [ {
                  "r" : "823",
                  "value" : [ "{", "null", ", " ]
                }, {
                  "r" : "824",
                  "s" : [ {
                    "r" : "825",
                    "value" : [ "{", "null", ", ", "null", "}" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "835",
                "s" : [ {
                  "r" : "836",
                  "value" : [ "{", "null", ", " ]
                }, {
                  "r" : "837",
                  "s" : [ {
                    "r" : "838",
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
          "localId" : "821",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "848",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "849",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "850",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "851",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "852",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "853",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "822",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "832",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "833",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "834",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "829",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "823",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "830",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "831",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "List",
              "localId" : "824",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "827",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "828",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Null",
                "localId" : "825",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }, {
                "type" : "Null",
                "localId" : "826",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              } ]
            } ]
          }, {
            "type" : "List",
            "localId" : "835",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "845",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "846",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "847",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "842",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "836",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "843",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "844",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            }, {
              "type" : "List",
              "localId" : "837",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "840",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "841",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Null",
                "localId" : "838",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }, {
                "type" : "Null",
                "localId" : "839",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              } ]
            } ]
          } ]
        }
      }, {
        "localId" : "856",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EmptyInterval",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "856",
            "s" : [ {
              "value" : [ "", "define ", "EmptyInterval", ": " ]
            }, {
              "r" : "857",
              "s" : [ {
                "r" : "860",
                "s" : [ {
                  "r" : "858",
                  "value" : [ "Interval(", "null", ", ", "null", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "865",
                "s" : [ {
                  "r" : "863",
                  "value" : [ "Interval(", "null", ", ", "null", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "857",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "868",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "869",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "870",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "871",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "860",
            "lowClosed" : false,
            "highClosed" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "861",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "862",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Null",
              "localId" : "858",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Null",
              "localId" : "859",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "865",
            "lowClosed" : false,
            "highClosed" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "866",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "867",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Null",
              "localId" : "863",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Null",
              "localId" : "864",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "874",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "IntervalDifferentPointTypes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "874",
            "s" : [ {
              "value" : [ "", "define ", "IntervalDifferentPointTypes", ":  " ]
            }, {
              "r" : "875",
              "s" : [ {
                "r" : "878",
                "s" : [ {
                  "r" : "876",
                  "value" : [ "Interval[", "1", ", ", "5", "]" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "885",
                "s" : [ {
                  "value" : [ "Interval[" ]
                }, {
                  "r" : "881",
                  "s" : [ {
                    "value" : [ "'1'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "883",
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
          "localId" : "875",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "888",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "889",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "890",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "891",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "878",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "879",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "880",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "876",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "877",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "885",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "886",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "887",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "881",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "883",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "894",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "IntervalDifferentStarts",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "894",
            "s" : [ {
              "value" : [ "", "define ", "IntervalDifferentStarts", ": " ]
            }, {
              "r" : "895",
              "s" : [ {
                "r" : "898",
                "s" : [ {
                  "r" : "896",
                  "value" : [ "Interval[", "1", ",", "3", "]" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "903",
                "s" : [ {
                  "r" : "901",
                  "value" : [ "Interval[", "2", ",", "3", "]" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "895",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "906",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "907",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "908",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "909",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "898",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "899",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "900",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "896",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "897",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "903",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "904",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "905",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "901",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "902",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "912",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "IntervalDifferentEndings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "912",
            "s" : [ {
              "value" : [ "", "define ", "IntervalDifferentEndings", ": " ]
            }, {
              "r" : "913",
              "s" : [ {
                "r" : "916",
                "s" : [ {
                  "r" : "914",
                  "value" : [ "Interval[", "1", ",", "3", "]" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "921",
                "s" : [ {
                  "r" : "919",
                  "value" : [ "Interval[", "1", ",", "4", "]" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "913",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "924",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "925",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "926",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "927",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "916",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "917",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "918",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "914",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "915",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "921",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "922",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "923",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "919",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "920",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "930",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameIntervals",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "930",
            "s" : [ {
              "value" : [ "", "define ", "SameIntervals", ": " ]
            }, {
              "r" : "931",
              "s" : [ {
                "r" : "934",
                "s" : [ {
                  "r" : "932",
                  "value" : [ "Interval[", "1", ",", "3", "]" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "939",
                "s" : [ {
                  "r" : "937",
                  "value" : [ "Interval[", "1", ",", "3", "]" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "931",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "942",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "943",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "944",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "945",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "934",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "935",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "936",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "932",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "933",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          }, {
            "type" : "Interval",
            "localId" : "939",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "940",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "941",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "937",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "938",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "948",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TupleAndList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "948",
            "s" : [ {
              "value" : [ "", "define ", "TupleAndList", ": " ]
            }, {
              "r" : "949",
              "s" : [ {
                "r" : "950",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "951",
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
                "r" : "956",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "957",
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
          "localId" : "949",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "968",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "969",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "970",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "971",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "972",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "973",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          } ],
          "operand" : [ {
            "type" : "ToList",
            "localId" : "962",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "ToList",
              "localId" : "961",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Tuple",
                "localId" : "950",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "953",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "954",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "955",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "951",
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
            "localId" : "963",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "964",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "956",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "959",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "960",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "957",
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
              "localId" : "965",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToList",
                "localId" : "967",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "966",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          } ]
        }
      }, {
        "localId" : "976",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ListAndTuple",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "976",
            "s" : [ {
              "value" : [ "", "define ", "ListAndTuple", ": " ]
            }, {
              "r" : "977",
              "s" : [ {
                "r" : "978",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "979",
                  "s" : [ {
                    "value" : [ "'1'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "983",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "984",
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
          "localId" : "977",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "996",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "997",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "998",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "999",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "1000",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1001",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }
          } ],
          "operand" : [ {
            "type" : "Query",
            "localId" : "989",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "990",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "978",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "981",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "982",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "979",
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
              "localId" : "991",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToList",
                "localId" : "993",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "992",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }, {
            "type" : "ToList",
            "localId" : "995",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "ToList",
              "localId" : "994",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Tuple",
                "localId" : "983",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "986",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "987",
                    "name" : "a",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "988",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "element" : [ {
                  "name" : "a",
                  "value" : {
                    "type" : "Literal",
                    "localId" : "984",
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
        "localId" : "1004",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TupleAndNullList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1004",
            "s" : [ {
              "value" : [ "", "define ", "TupleAndNullList", ": " ]
            }, {
              "r" : "1005",
              "s" : [ {
                "r" : "1006",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "1007",
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
                "r" : "1012",
                "s" : [ {
                  "r" : "1013",
                  "value" : [ "{", "null", "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1005",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "1023",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1024",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1025",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "1026",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1027",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1028",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "Tuple",
            "localId" : "1006",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1009",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1010",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1011",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "1007",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "1",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "As",
            "localId" : "1019",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "SingletonFrom",
              "localId" : "1016",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "1017",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1018",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ],
              "operand" : {
                "type" : "List",
                "localId" : "1012",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "1014",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1015",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Null",
                  "localId" : "1013",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                } ]
              }
            },
            "asTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1020",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1021",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1022",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          } ]
        }
      }, {
        "localId" : "1031",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullListAndTuple",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1031",
            "s" : [ {
              "value" : [ "", "define ", "NullListAndTuple", ": " ]
            }, {
              "r" : "1032",
              "s" : [ {
                "r" : "1033",
                "s" : [ {
                  "r" : "1034",
                  "value" : [ "{", "null", "}" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1037",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "s" : [ {
                    "value" : [ "a", ": " ]
                  }, {
                    "r" : "1038",
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
          "localId" : "1032",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "1050",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1051",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1052",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "1053",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "1054",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "1055",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "1046",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "SingletonFrom",
              "localId" : "1043",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "1044",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1045",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              } ],
              "operand" : {
                "type" : "List",
                "localId" : "1033",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "1035",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "1036",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Null",
                  "localId" : "1034",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                } ]
              }
            },
            "asTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1047",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1048",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1049",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          }, {
            "type" : "Tuple",
            "localId" : "1037",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "1040",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "1041",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "1042",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "1038",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "1",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "1058",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameCodeAndCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1058",
            "s" : [ {
              "value" : [ "", "define ", "SameCodeAndCode", ": " ]
            }, {
              "r" : "1059",
              "s" : [ {
                "r" : "1060",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1061",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code clone\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1059",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1062",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1063",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "CodeRef",
            "localId" : "1060",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "annotation" : [ ]
          }, {
            "type" : "CodeRef",
            "localId" : "1061",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code clone",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1066",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameCodeAndConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1066",
            "s" : [ {
              "value" : [ "", "define ", "SameCodeAndConcept", ": " ]
            }, {
              "r" : "1067",
              "s" : [ {
                "r" : "1068",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code clone\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1069",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1067",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1073",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1074",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToConcept",
            "localId" : "1071",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1072",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "1068",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Tobacco smoking status code clone",
              "annotation" : [ ]
            }
          }, {
            "type" : "ConceptRef",
            "localId" : "1069",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1077",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameConceptAndCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1077",
            "s" : [ {
              "value" : [ "", "define ", "SameConceptAndCode", ": " ]
            }, {
              "r" : "1078",
              "s" : [ {
                "r" : "1079",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1080",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code clone\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1078",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1084",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1085",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ConceptRef",
            "localId" : "1079",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          }, {
            "type" : "ToConcept",
            "localId" : "1082",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1083",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "1080",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Tobacco smoking status code clone",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1088",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameConceptAndConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1088",
            "s" : [ {
              "value" : [ "", "define ", "SameConceptAndConcept", ": " ]
            }, {
              "r" : "1089",
              "s" : [ {
                "r" : "1090",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1091",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status clone\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1089",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1092",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1093",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ConceptRef",
            "localId" : "1090",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          }, {
            "type" : "ConceptRef",
            "localId" : "1091",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status clone",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1096",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffCodeAndCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1096",
            "s" : [ {
              "value" : [ "", "define ", "DiffCodeAndCode", ": " ]
            }, {
              "r" : "1097",
              "s" : [ {
                "r" : "1098",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1099",
                "s" : [ {
                  "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1097",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1100",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1101",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "CodeRef",
            "localId" : "1098",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "annotation" : [ ]
          }, {
            "type" : "CodeRef",
            "localId" : "1099",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Total Score [AUDIT-C] code",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1104",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffCodeAndConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1104",
            "s" : [ {
              "value" : [ "", "define ", "DiffCodeAndConcept", ": " ]
            }, {
              "r" : "1105",
              "s" : [ {
                "r" : "1106",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status code clone\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1107",
                "s" : [ {
                  "value" : [ "\"Total Score [AUDIT-C]\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1105",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1111",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1112",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToConcept",
            "localId" : "1109",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1110",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "1106",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Tobacco smoking status code clone",
              "annotation" : [ ]
            }
          }, {
            "type" : "ConceptRef",
            "localId" : "1107",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Total Score [AUDIT-C]",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1115",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffConceptAndCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1115",
            "s" : [ {
              "value" : [ "", "define ", "DiffConceptAndCode", ": " ]
            }, {
              "r" : "1116",
              "s" : [ {
                "r" : "1117",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1118",
                "s" : [ {
                  "value" : [ "\"Total Score [AUDIT-C] code\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1116",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1122",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1123",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ConceptRef",
            "localId" : "1117",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          }, {
            "type" : "ToConcept",
            "localId" : "1120",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1121",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "1118",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Total Score [AUDIT-C] code",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1126",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffConceptAndConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1126",
            "s" : [ {
              "value" : [ "", "define ", "DiffConceptAndConcept", ": " ]
            }, {
              "r" : "1127",
              "s" : [ {
                "r" : "1128",
                "s" : [ {
                  "value" : [ "\"Tobacco smoking status\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1129",
                "s" : [ {
                  "value" : [ "\"Total Score [AUDIT-C]\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1127",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1130",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1131",
            "name" : "{urn:hl7-org:elm-types:r1}Concept",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ConceptRef",
            "localId" : "1128",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "annotation" : [ ]
          }, {
            "type" : "ConceptRef",
            "localId" : "1129",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Total Score [AUDIT-C]",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1134",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameVSIdAndVersion",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1134",
            "s" : [ {
              "value" : [ "", "define ", "SameVSIdAndVersion", ": " ]
            }, {
              "r" : "1135",
              "s" : [ {
                "r" : "1136",
                "s" : [ {
                  "value" : [ "\"Unknown\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1137",
                "s" : [ {
                  "value" : [ "\"UnknownSame\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1135",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1138",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1139",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "1136",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Unknown",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "1137",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "UnknownSame",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1142",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SameVSCodes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1142",
            "s" : [ {
              "value" : [ "", "define ", "SameVSCodes", ": " ]
            }, {
              "r" : "1143",
              "s" : [ {
                "r" : "1144",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1145",
                "s" : [ {
                  "value" : [ "\"KnownSameCodes\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1143",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1146",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1147",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "1144",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "1145",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "KnownSameCodes",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1150",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DiffVSCodes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1150",
            "s" : [ {
              "value" : [ "", "define ", "DiffVSCodes", ": " ]
            }, {
              "r" : "1151",
              "s" : [ {
                "r" : "1152",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1153",
                "s" : [ {
                  "value" : [ "\"KnownDifferentCodes\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1151",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1154",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1155",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "1152",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "1153",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "KnownDifferentCodes",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1158",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UnresolvableDiffVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1158",
            "s" : [ {
              "value" : [ "", "define ", "UnresolvableDiffVS", ": " ]
            }, {
              "r" : "1159",
              "s" : [ {
                "r" : "1160",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1161",
                "s" : [ {
                  "value" : [ "\"Unknown\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1159",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1162",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1163",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "1160",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "1161",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Unknown",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "1166",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1166",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimes", ": " ]
            }, {
              "r" : "1167",
              "s" : [ {
                "r" : "1186",
                "s" : [ {
                  "r" : "1168",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1175",
                  "s" : [ {
                    "r" : "1175",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1213",
                "s" : [ {
                  "r" : "1195",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1202",
                  "s" : [ {
                    "r" : "1202",
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
          "localId" : "1167",
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
            "localId" : "1186",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1187",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1188",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1189",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1193",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1194",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1168",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1169",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1170",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1171",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1172",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1173",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1174",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1175",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1214",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1215",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1219",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1220",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1221",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1195",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1196",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1197",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1198",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1199",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1200",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1201",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1202",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1226",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimes", ": " ]
            }, {
              "r" : "1227",
              "s" : [ {
                "r" : "1246",
                "s" : [ {
                  "r" : "1228",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1235",
                  "s" : [ {
                    "r" : "1235",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1273",
                "s" : [ {
                  "r" : "1255",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "201", ", " ]
                }, {
                  "r" : "1262",
                  "s" : [ {
                    "r" : "1262",
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
          "localId" : "1227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1282",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1283",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1247",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1248",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1249",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1229",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1230",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1231",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1232",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1274",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1275",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1276",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1277",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1278",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1279",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1280",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1281",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1256",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1257",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1259",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1260",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1261",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "201",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1262",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1286",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesTZ",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1286",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesTZ", ": " ]
            }, {
              "r" : "1287",
              "s" : [ {
                "r" : "1306",
                "s" : [ {
                  "r" : "1288",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "23", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1295",
                  "s" : [ {
                    "r" : "1295",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1333",
                "s" : [ {
                  "r" : "1315",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "16", ", ", "2", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1322",
                  "s" : [ {
                    "r" : "1322",
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
          "localId" : "1287",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1342",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1343",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1306",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1307",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1308",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1309",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1310",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1311",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1312",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1313",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1314",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1289",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1290",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1292",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1293",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1295",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1334",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1335",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1336",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1337",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1338",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1339",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1340",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1341",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1315",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1316",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1317",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1318",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1319",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1320",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1321",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1322",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1346",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesTZ",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1346",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesTZ", ": " ]
            }, {
              "r" : "1347",
              "s" : [ {
                "r" : "1366",
                "s" : [ {
                  "r" : "1348",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1355",
                  "s" : [ {
                    "r" : "1355",
                    "value" : [ "+", "1.0" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1393",
                "s" : [ {
                  "r" : "1375",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "200", ", " ]
                }, {
                  "r" : "1382",
                  "s" : [ {
                    "r" : "1382",
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
          "localId" : "1347",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1402",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1403",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1367",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1368",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1369",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1370",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1371",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1372",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1373",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1374",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1348",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1349",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1351",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1352",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1353",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1354",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1355",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1393",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1394",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1395",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1396",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1397",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1398",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1399",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1400",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1401",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1375",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1376",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1377",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1378",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1379",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1380",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1381",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "200",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "1382",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1406",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesNullMs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1406",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullMs", ": " ]
            }, {
              "r" : "1407",
              "s" : [ {
                "r" : "1424",
                "s" : [ {
                  "r" : "1408",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1446",
                "s" : [ {
                  "r" : "1432",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1407",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1453",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1454",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1425",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1426",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1427",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1428",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1429",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1430",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1431",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1408",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1409",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1410",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1411",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1412",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1413",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1414",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1446",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1447",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1448",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1449",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1450",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1451",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1452",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1432",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1433",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1434",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1435",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1436",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1437",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1457",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesNullOtherMs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1457",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesNullOtherMs", ": " ]
            }, {
              "r" : "1458",
              "s" : [ {
                "r" : "1473",
                "s" : [ {
                  "r" : "1459",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1496",
                "s" : [ {
                  "r" : "1480",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ", ", "13", ", ", "30", ", ", "25", ", ", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1458",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1504",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1505",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1473",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1474",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1475",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1476",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1477",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1478",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1479",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1459",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1460",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1461",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1462",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1463",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1464",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1496",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1497",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1498",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1499",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1500",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1501",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1502",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1503",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1480",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1481",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1482",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1483",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1484",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "30",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1485",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "25",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "1486",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1508",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EqDateTimesOnlyDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1508",
            "s" : [ {
              "value" : [ "", "define ", "EqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "1509",
              "s" : [ {
                "r" : "1518",
                "s" : [ {
                  "r" : "1510",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1530",
                "s" : [ {
                  "r" : "1522",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1509",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1534",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1535",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1518",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1519",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1520",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1521",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1510",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1511",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1512",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
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
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1522",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1523",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1524",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1538",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesOnlyDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1538",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDate", ": " ]
            }, {
              "r" : "1539",
              "s" : [ {
                "r" : "1548",
                "s" : [ {
                  "r" : "1540",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "14", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1560",
                "s" : [ {
                  "r" : "1552",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1539",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1564",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1565",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1548",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1549",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1550",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1551",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1540",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1541",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1542",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "14",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1560",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
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
              "localId" : "1552",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1553",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1554",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1568",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "PossiblyEqDateTimesOnlyDateOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1568",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "1569",
              "s" : [ {
                "r" : "1578",
                "s" : [ {
                  "r" : "1570",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1596",
                "s" : [ {
                  "r" : "1582",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "13", ", ", "43", ", ", "32", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1569",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1603",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1604",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1578",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1579",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1580",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1581",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1570",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1571",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1572",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1596",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1597",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1598",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1599",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1600",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1601",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1602",
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
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1585",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1586",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "43",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1587",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "32",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1607",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "UneqDateTimesOnlyDateOnOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1607",
            "s" : [ {
              "value" : [ "", "define ", "UneqDateTimesOnlyDateOnOne", ": " ]
            }, {
              "r" : "1608",
              "s" : [ {
                "r" : "1623",
                "s" : [ {
                  "r" : "1609",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ", ", "13", ", ", "12", ", ", "43", ", ", "32", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1638",
                "s" : [ {
                  "r" : "1630",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1608",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1642",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1643",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1623",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1624",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1625",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1626",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1627",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1628",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1629",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1609",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1610",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1611",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1612",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1613",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "43",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1614",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "32",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1638",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1639",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1640",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1641",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1630",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1631",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1632",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1646",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "PossiblyEqualDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1646",
            "s" : [ {
              "value" : [ "", "define ", "PossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "1647",
              "s" : [ {
                "r" : "1656",
                "s" : [ {
                  "r" : "1648",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1664",
                "s" : [ {
                  "r" : "1660",
                  "value" : [ "DateTime", "(", "2000", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1647",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1666",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1667",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1656",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1657",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1658",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1659",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1648",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1649",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1650",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1664",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1665",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1660",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1670",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ImpossiblyEqualDateTimes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1670",
            "s" : [ {
              "value" : [ "", "define ", "ImpossiblyEqualDateTimes", ": " ]
            }, {
              "r" : "1671",
              "s" : [ {
                "r" : "1680",
                "s" : [ {
                  "r" : "1672",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "15", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1690",
                "s" : [ {
                  "r" : "1684",
                  "value" : [ "DateTime", "(", "2000", ", ", "4", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1671",
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
            "type" : "DateTime",
            "localId" : "1680",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1681",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1682",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1683",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1672",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1673",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1674",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "15",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "1690",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1691",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1692",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1684",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1685",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1697",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1697",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeTrue", ": " ]
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
                "r" : "1719",
                "s" : [ {
                  "r" : "1711",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
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
            "localId" : "1726",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1727",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1724",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1725",
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
            "localId" : "1719",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1720",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1721",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1722",
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
            }
          } ]
        }
      }, {
        "localId" : "1730",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeNotEqual",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1730",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeNotEqual", ": " ]
            }, {
              "r" : "1731",
              "s" : [ {
                "r" : "1740",
                "s" : [ {
                  "r" : "1732",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1752",
                "s" : [ {
                  "r" : "1744",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1731",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1759",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1760",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDateTime",
            "localId" : "1757",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1758",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1740",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1741",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1742",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1743",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1732",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1733",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1734",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1752",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1753",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1754",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1755",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1744",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1745",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1746",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1763",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateAndDateTimeUncertainFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1763",
            "s" : [ {
              "value" : [ "", "define ", "DateAndDateTimeUncertainFalse", ": " ]
            }, {
              "r" : "1764",
              "s" : [ {
                "r" : "1773",
                "s" : [ {
                  "r" : "1765",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1791",
                "s" : [ {
                  "r" : "1777",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1764",
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
              "localId" : "1773",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1774",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1775",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1776",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1765",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1766",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1767",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "DateTime",
            "localId" : "1791",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1792",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1793",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1794",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
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
              "localId" : "1777",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1778",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1779",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1780",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1781",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1782",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "1805",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1805",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateTrue", ": " ]
            }, {
              "r" : "1806",
              "s" : [ {
                "r" : "1815",
                "s" : [ {
                  "r" : "1807",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1827",
                "s" : [ {
                  "r" : "1819",
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
            "localId" : "1834",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1835",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1815",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1816",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1817",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1818",
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
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1832",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1833",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1827",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1828",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1829",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1830",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1819",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1820",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1821",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "1838",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateNotEqual",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1838",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateNotEqual", ": " ]
            }, {
              "r" : "1839",
              "s" : [ {
                "r" : "1848",
                "s" : [ {
                  "r" : "1840",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "12", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1860",
                "s" : [ {
                  "r" : "1852",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1839",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1867",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1868",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1848",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1849",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1850",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1851",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1840",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1841",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1842",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1865",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1866",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1860",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1861",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1862",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1863",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1852",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1853",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1854",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "13",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "1871",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DateTimeAndDateUncertainFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "1871",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeAndDateUncertainFalse", ": " ]
            }, {
              "r" : "1872",
              "s" : [ {
                "r" : "1887",
                "s" : [ {
                  "r" : "1873",
                  "value" : [ "DateTime", "(", "2000", ", ", "3", ", ", "13", ", ", "2", ", ", "4", ", ", "23", ")" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "r" : "1902",
                "s" : [ {
                  "r" : "1894",
                  "value" : [ "Date", "(", "2000", ", ", "3", ", ", "13", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equivalent",
          "localId" : "1872",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "1909",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "1910",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "1887",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1888",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1889",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1890",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1891",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1892",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "1893",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "1873",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2000",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "1874",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "1875",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "13",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "1876",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "1877",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "1878",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "1907",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "1908",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "1902",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "1903",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1904",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "1905",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "1894",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2000",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "1895",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "1896",
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
define AGtB_Long: 5L < 4L
define AEqB_Long: 5L < 5L
define ALtB_Long: 5L < 6L
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
        "r" : "326",
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
        "name" : "AGtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Long", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "value" : [ "5L", " ", "<", " ", "4L" ]
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
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Long", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "value" : [ "5L", " ", "<", " ", "5L" ]
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
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Long", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "value" : [ "5L", " ", "<", " ", "6L" ]
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
            "value" : "6",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "262",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
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
                  "value" : [ "4 ", "'m'" ]
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
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "270",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
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
                  "value" : [ "5 ", "'m'" ]
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
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "278",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
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
                  "value" : [ "6 ", "'m'" ]
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
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "286",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "294",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "294",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "296",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "302",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "310",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "310",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "311",
              "s" : [ {
                "r" : "312",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "311",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "314",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "318",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "318",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "319",
              "s" : [ {
                "r" : "320",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "321",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "319",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "323",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "320",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "326",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "326",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "327",
              "s" : [ {
                "r" : "328",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<", " " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Less",
          "localId" : "327",
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
            "type" : "Quantity",
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "329",
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
define AGtB_Long: 5L <= 4L
define AEqB_Long: 5L <= 5L
define ALtB_Long: 5L <= 6L
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
        "r" : "326",
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
        "name" : "AGtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Long", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "value" : [ "5L", " ", "<=", " ", "4L" ]
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
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Long", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "value" : [ "5L", " ", "<=", " ", "5L" ]
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
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Long", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "value" : [ "5L", " ", "<=", " ", "6L" ]
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
            "value" : "6",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "262",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
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
        "name" : "AEqB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
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
                  "value" : [ "5 ", "'m'" ]
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
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "278",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
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
                  "value" : [ "6 ", "'m'" ]
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
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "286",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
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
            "unit" : "m",
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
        "name" : "AEqB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "294",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "296",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "302",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "310",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "310",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "311",
              "s" : [ {
                "r" : "312",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "311",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "314",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "318",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "318",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "319",
              "s" : [ {
                "r" : "320",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "321",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "319",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "323",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "320",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "326",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "326",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "327",
              "s" : [ {
                "r" : "328",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", "<=", " " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LessOrEqual",
          "localId" : "327",
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
            "type" : "Quantity",
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "329",
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
define AGtB_Long: 5L > 4L
define AEqB_Long: 5L > 5L
define ALtB_Long: 5L > 6L
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
        "r" : "326",
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
        "name" : "AGtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Long", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "value" : [ "5L", " ", ">", " ", "4L" ]
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
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Long", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "value" : [ "5L", " ", ">", " ", "5L" ]
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
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Long", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "value" : [ "5L", " ", ">", " ", "6L" ]
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
            "value" : "6",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "262",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
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
                  "value" : [ "4 ", "'m'" ]
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
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "270",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
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
                  "value" : [ "5 ", "'m'" ]
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
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "278",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
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
                  "value" : [ "6 ", "'m'" ]
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
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "286",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "294",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "294",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "296",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "302",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "310",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "310",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "311",
              "s" : [ {
                "r" : "312",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
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
            "localId" : "314",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "318",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "318",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "319",
              "s" : [ {
                "r" : "320",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "321",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "319",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "323",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "320",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "326",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "326",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "327",
              "s" : [ {
                "r" : "328",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">", " " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "327",
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
            "type" : "Quantity",
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "329",
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
define AGtB_Long: 5L >= 4L
define AEqB_Long: 5L >= 5L
define ALtB_Long: 5L >= 6L
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
        "name" : "AGtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Long", ": " ]
            }, {
              "r" : "239",
              "s" : [ {
                "r" : "240",
                "value" : [ "5L", " ", ">=", " ", "4L" ]
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
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Long", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "r" : "248",
                "value" : [ "5L", " ", ">=", " ", "5L" ]
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
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Long",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Long",
            "valueType" : "{urn:hl7-org:elm-types:r1}Long",
            "value" : "5",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Long",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Long", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "256",
                "value" : [ "5L", " ", ">=", " ", "6L" ]
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
            "value" : "6",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "262",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity", ": " ]
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
                  "value" : [ "4 ", "'m'" ]
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
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "270",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity", ": " ]
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
                  "value" : [ "5 ", "'m'" ]
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
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "278",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity", ": " ]
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
                  "value" : [ "6 ", "'m'" ]
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
            "value" : 6,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "286",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_diff", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "value" : [ "5 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "294",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "294",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_diff", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "296",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "500 ", "'cm'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 500,
            "unit" : "cm",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "302",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_diff",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_diff", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "304",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "5 ", "'km'" ]
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
            "unit" : "m",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "km",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "310",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AGtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "310",
            "s" : [ {
              "value" : [ "", "define ", "AGtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "311",
              "s" : [ {
                "r" : "312",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "4 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "311",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "314",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 4,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "318",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AEqB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "318",
            "s" : [ {
              "value" : [ "", "define ", "AEqB_Quantity_incompatible", ": " ]
            }, {
              "r" : "319",
              "s" : [ {
                "r" : "320",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "321",
                "s" : [ {
                  "value" : [ "5 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "319",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "323",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Quantity",
            "localId" : "320",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "326",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ALtB_Quantity_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "326",
            "s" : [ {
              "value" : [ "", "define ", "ALtB_Quantity_incompatible", ": " ]
            }, {
              "r" : "327",
              "s" : [ {
                "r" : "328",
                "s" : [ {
                  "value" : [ "5 ", "'Cel'" ]
                } ]
              }, {
                "value" : [ " ", ">=", " " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "40 ", "'m'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GreaterOrEqual",
          "localId" : "327",
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
            "type" : "Quantity",
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 5,
            "unit" : "Cel",
            "annotation" : [ ]
          }, {
            "type" : "Quantity",
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 40,
            "unit" : "m",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "334",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DivideUcum_incompatible",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "334",
            "s" : [ {
              "value" : [ "", "define ", "DivideUcum_incompatible", ": " ]
            }, {
              "r" : "335",
              "s" : [ {
                "r" : "336",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "336",
                  "s" : [ {
                    "r" : "337",
                    "s" : [ {
                      "value" : [ "100 ", "'[nmi_i]'" ]
                    } ]
                  }, {
                    "value" : [ " / " ]
                  }, {
                    "r" : "338",
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
                "r" : "341",
                "s" : [ {
                  "value" : [ "49 ", "'mg/[lb_av]'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "335",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "342",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "343",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Divide",
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "339",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "340",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "337",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 100,
              "unit" : "[nmi_i]",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "338",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "h",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Quantity",
            "localId" : "341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "value" : 49,
            "unit" : "mg/[lb_av]",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "346",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DivideUcum",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "346",
            "s" : [ {
              "value" : [ "", "define ", "DivideUcum", ": " ]
            }, {
              "r" : "347",
              "s" : [ {
                "r" : "348",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "348",
                  "s" : [ {
                    "r" : "349",
                    "s" : [ {
                      "value" : [ "100 ", "'mg'" ]
                    } ]
                  }, {
                    "value" : [ " / " ]
                  }, {
                    "r" : "350",
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
                "r" : "353",
                "s" : [ {
                  "value" : [ "49 ", "'mg/[lb_av]'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Greater",
          "localId" : "347",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "354",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "355",
            "name" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Divide",
            "localId" : "348",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "351",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "352",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Quantity",
              "localId" : "349",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 100,
              "unit" : "mg",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "[lb_av]",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Quantity",
            "localId" : "353",
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

