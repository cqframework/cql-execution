/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Date
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Year: Date(2012)
define Month: Date(2012, 2)
define Day: Date(2012, 2, 15)
*/

module.exports['Date'] = {
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Year",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Year",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2012",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Month",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Month",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "Date","(","2012",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Day",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","Day",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "Date","(","2012",", ","2",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* DateComponentFrom
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IdesOfMarch: Date(2000, 3, 15)
define Year: year from IdesOfMarch
define Month: month from IdesOfMarch
define Day: day from IdesOfMarch
define ImpreciseIdesOfMarch: Date(2000, 3)
define ImpreciseComponentTuple: Tuple {
  Year: year from ImpreciseIdesOfMarch,
  Month: month from ImpreciseIdesOfMarch,
  Day: day from ImpreciseIdesOfMarch
}
define NullDate: year from (null as Date)
*/

module.exports['DateComponentFrom'] = {
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
            "r" : "278",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "IdesOfMarch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IdesOfMarch",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Year",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Year",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "value" : [ "year from " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DateTimeComponentFrom",
               "signature" : [ {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Month",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","Month",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "value" : [ "month from " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DateTimeComponentFrom",
               "signature" : [ {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Day",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","Day",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "day from " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DateTimeComponentFrom",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "ImpreciseIdesOfMarch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseIdesOfMarch",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "242",
                        "value" : [ "Date","(","2000",", ","3",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "252",
            "name" : "ImpreciseComponentTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseComponentTuple",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "value" : [ "Tuple {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Year",": " ]
                        }, {
                           "r" : "254",
                           "s" : [ {
                              "value" : [ "year from " ]
                           }, {
                              "r" : "255",
                              "s" : [ {
                                 "value" : [ "ImpreciseIdesOfMarch" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Month",": " ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "month from " ]
                           }, {
                              "r" : "258",
                              "s" : [ {
                                 "value" : [ "ImpreciseIdesOfMarch" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Day",": " ]
                        }, {
                           "r" : "260",
                           "s" : [ {
                              "value" : [ "day from " ]
                           }, {
                              "r" : "261",
                              "s" : [ {
                                 "value" : [ "ImpreciseIdesOfMarch" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n}" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "270",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "271",
                  "name" : "Year",
                  "elementType" : {
                     "localId" : "272",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "273",
                  "name" : "Month",
                  "elementType" : {
                     "localId" : "274",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "275",
                  "name" : "Day",
                  "elementType" : {
                     "localId" : "276",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "253",
               "type" : "Tuple",
               "resultTypeSpecifier" : {
                  "localId" : "263",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "264",
                     "name" : "Year",
                     "elementType" : {
                        "localId" : "265",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "266",
                     "name" : "Month",
                     "elementType" : {
                        "localId" : "267",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "268",
                     "name" : "Day",
                     "elementType" : {
                        "localId" : "269",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "element" : [ {
                  "name" : "Year",
                  "value" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ {
                        "localId" : "256",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "255",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "Month",
                  "value" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Month",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ {
                        "localId" : "259",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "258",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "Day",
                  "value" : {
                     "localId" : "260",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Day",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ {
                        "localId" : "262",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "261",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "278",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NullDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","NullDate",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "year from " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "280",
                           "s" : [ {
                              "r" : "281",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "282",
                              "s" : [ {
                                 "value" : [ "Date" ]
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
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DateTimeComponentFrom",
               "signature" : [ {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "281",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "282",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* SameAs
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year as Date(2000, 11, 23)
define NotSameYear: Date(2000, 3, 15) same year as Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month as Date(2000, 3, 23)
define NotSameMonth: Date(2000, 3, 15) same month as Date(2000, 4, 23)
define SameMonthWrongYear: Date(2000, 3, 15) same month as Date(2001, 3, 23)
define SameDay: Date(2000, 3, 15) same day as Date(2000, 3, 15)
define NotSameDay: Date(2000, 3, 15) same day as Date(2000, 3, 23)
define SameDayWrongMonth: Date(2000, 3, 15) same day as Date(2000, 4, 15)
define Same: Date(2000, 3, 15) same as Date(2000, 3, 15)
define NotSame: Date(2000, 3, 16) same as Date(2000, 3, 15)
define NullLeft: null same as Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same as (null as Date)
define NullBoth: (null as Date) same as null
*/

module.exports['SameAs'] = {
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
            "r" : "541",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ " ","same year as"," " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotSameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","NotSameYear",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "r" : "242",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "266",
                        "value" : [ " ","same year as"," " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "295",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "r" : "283",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotSameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","NotSameMonth",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "300",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "324",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "320",
                        "s" : [ {
                           "r" : "312",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "325",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonthWrongYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "328",
                  "s" : [ {
                     "value" : [ "","define ","SameMonthWrongYear",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "r" : "337",
                        "s" : [ {
                           "r" : "329",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "353",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "349",
                        "s" : [ {
                           "r" : "341",
                           "value" : [ "Date","(","2001",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "337",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "330",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "331",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "342",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "343",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "357",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "382",
                     "s" : [ {
                        "r" : "366",
                        "s" : [ {
                           "r" : "358",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "382",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "378",
                        "s" : [ {
                           "r" : "370",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "382",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "384",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "366",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "378",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "386",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotSameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "386",
                  "s" : [ {
                     "value" : [ "","define ","NotSameDay",": " ]
                  }, {
                     "r" : "411",
                     "s" : [ {
                        "r" : "395",
                        "s" : [ {
                           "r" : "387",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "411",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "407",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "411",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "412",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "413",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "395",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "387",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "388",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "389",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "407",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "408",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "409",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "410",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "399",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "401",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDayWrongMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "415",
                  "s" : [ {
                     "value" : [ "","define ","SameDayWrongMonth",": " ]
                  }, {
                     "r" : "440",
                     "s" : [ {
                        "r" : "424",
                        "s" : [ {
                           "r" : "416",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "440",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "436",
                        "s" : [ {
                           "r" : "428",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "440",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "441",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "442",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "424",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "425",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "426",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "427",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "416",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "417",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "418",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "436",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "437",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "438",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "439",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "428",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "429",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "430",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "444",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "444",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "469",
                     "s" : [ {
                        "r" : "453",
                        "s" : [ {
                           "r" : "445",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "469",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "465",
                        "s" : [ {
                           "r" : "457",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "469",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "470",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "453",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "454",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "455",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "456",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "445",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "446",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "447",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "465",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "458",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "459",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "473",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "473",
                  "s" : [ {
                     "value" : [ "","define ","NotSame",": " ]
                  }, {
                     "r" : "498",
                     "s" : [ {
                        "r" : "482",
                        "s" : [ {
                           "r" : "474",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "498",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "494",
                        "s" : [ {
                           "r" : "486",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "498",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "499",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "500",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "482",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "483",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "484",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "485",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "494",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "488",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "502",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "502",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "516",
                     "s" : [ {
                        "r" : "503",
                        "value" : [ "null"," ","same as"," " ]
                     }, {
                        "r" : "512",
                        "s" : [ {
                           "r" : "504",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "516",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "518",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "519",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "517",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "503",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "512",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "513",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "514",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "515",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "504",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "505",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "506",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "521",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "521",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "537",
                     "s" : [ {
                        "r" : "530",
                        "s" : [ {
                           "r" : "522",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "537",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "534",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "534",
                           "s" : [ {
                              "r" : "535",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "536",
                              "s" : [ {
                                 "value" : [ "Date" ]
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "538",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "539",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "530",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "522",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "523",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "524",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "534",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "535",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "536",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "541",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "541",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "546",
                     "s" : [ {
                        "r" : "542",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "542",
                           "s" : [ {
                              "r" : "543",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "544",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "546",
                        "value" : [ " ","same as"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "546",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "548",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "549",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "542",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "543",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "544",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "547",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* SameOrAfter
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year or after Date(2000, 11, 23)
define YearAfter: Date(2000, 3, 15) same year or after Date(1999, 11, 23)
define YearBefore: Date(2000, 3, 15) same year or after Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month or after Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 15) same month or after Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 15) same month or after Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) same day or after Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) same day or after Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) same day or after Date(2000, 3, 16)
define Same: Date(2000, 3, 15) same or after Date(2000, 3, 15)
define After: Date(2000, 3, 15) same or after Date(2000, 3, 15)
define Before: Date(2000, 3, 14) same or after Date(2000, 3, 15)
define SameDayMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4, 15)
define DayAfterMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4, 14)
define DayBeforeMonthAfter: Date(2000, 3, 15) same day or after Date(2000, 2, 16)
define ImpreciseDay: Date(2000, 3, 15) same day or after Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) same day or after Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4)
define NullLeft: null same or after Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same or after null
define NullBoth: (null as Date) same or after null
*/

module.exports['SameOrAfter'] = {
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
            "r" : "763",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "r" : "242",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "266",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "295",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "r" : "283",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "300",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "324",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "320",
                        "s" : [ {
                           "r" : "312",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "325",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "328",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "r" : "337",
                        "s" : [ {
                           "r" : "329",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "353",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "349",
                        "s" : [ {
                           "r" : "341",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "337",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "330",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "331",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "342",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "343",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "357",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "382",
                     "s" : [ {
                        "r" : "366",
                        "s" : [ {
                           "r" : "358",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "382",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "378",
                        "s" : [ {
                           "r" : "370",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "382",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "384",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "366",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "378",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "386",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "386",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "411",
                     "s" : [ {
                        "r" : "395",
                        "s" : [ {
                           "r" : "387",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "411",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "407",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "411",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "412",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "413",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "395",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "387",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "388",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "389",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "407",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "408",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "409",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "410",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "399",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "401",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "415",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "440",
                     "s" : [ {
                        "r" : "424",
                        "s" : [ {
                           "r" : "416",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "440",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "436",
                        "s" : [ {
                           "r" : "428",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "440",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "441",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "442",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "424",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "425",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "426",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "427",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "416",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "417",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "418",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "436",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "437",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "438",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "439",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "428",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "429",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "430",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "444",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "444",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "469",
                     "s" : [ {
                        "r" : "453",
                        "s" : [ {
                           "r" : "445",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "469",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "465",
                        "s" : [ {
                           "r" : "457",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "469",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "470",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "453",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "454",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "455",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "456",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "445",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "446",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "447",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "465",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "458",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "459",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "473",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "473",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "498",
                     "s" : [ {
                        "r" : "482",
                        "s" : [ {
                           "r" : "474",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "498",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "494",
                        "s" : [ {
                           "r" : "486",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "498",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "499",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "500",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "482",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "483",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "484",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "485",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               }, {
                  "localId" : "494",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "488",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "502",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "502",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "527",
                     "s" : [ {
                        "r" : "511",
                        "s" : [ {
                           "r" : "503",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "527",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "523",
                        "s" : [ {
                           "r" : "515",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "527",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "528",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "529",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "511",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "512",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "513",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "514",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "503",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "504",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "505",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "523",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "524",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "525",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "526",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "515",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "516",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "517",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "531",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "531",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "556",
                     "s" : [ {
                        "r" : "540",
                        "s" : [ {
                           "r" : "532",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "r" : "556",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "552",
                        "s" : [ {
                           "r" : "544",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "556",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "557",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "558",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "540",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "541",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "542",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "543",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "532",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "533",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "534",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "552",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "544",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "560",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "560",
                  "s" : [ {
                     "value" : [ "","define ","SameDayMonthBefore",": " ]
                  }, {
                     "r" : "585",
                     "s" : [ {
                        "r" : "569",
                        "s" : [ {
                           "r" : "561",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "585",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "581",
                        "s" : [ {
                           "r" : "573",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "585",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "586",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "587",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "569",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "570",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "571",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "572",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "561",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "562",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "563",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "581",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "582",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "583",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "584",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "573",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "574",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "575",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "589",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfterMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "589",
                  "s" : [ {
                     "value" : [ "","define ","DayAfterMonthBefore",": " ]
                  }, {
                     "r" : "614",
                     "s" : [ {
                        "r" : "598",
                        "s" : [ {
                           "r" : "590",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "614",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "610",
                        "s" : [ {
                           "r" : "602",
                           "value" : [ "Date","(","2000",", ","4",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "614",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "615",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "616",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "598",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "599",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "600",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "601",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               }, {
                  "localId" : "610",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "602",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "603",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "604",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "618",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBeforeMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "618",
                  "s" : [ {
                     "value" : [ "","define ","DayBeforeMonthAfter",": " ]
                  }, {
                     "r" : "643",
                     "s" : [ {
                        "r" : "627",
                        "s" : [ {
                           "r" : "619",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "643",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "639",
                        "s" : [ {
                           "r" : "631",
                           "value" : [ "Date","(","2000",", ","2",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "643",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "644",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "645",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "627",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "628",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "629",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "630",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "619",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "620",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "621",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "639",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "631",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "632",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "633",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "647",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "647",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "669",
                     "s" : [ {
                        "r" : "656",
                        "s" : [ {
                           "r" : "648",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "669",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "666",
                        "s" : [ {
                           "r" : "660",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "669",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "670",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "671",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "656",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "657",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "658",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "659",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "648",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "649",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "650",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "666",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "667",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "668",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               } ]
            }
         }, {
            "localId" : "673",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "673",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "695",
                     "s" : [ {
                        "r" : "682",
                        "s" : [ {
                           "r" : "674",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "695",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "692",
                        "s" : [ {
                           "r" : "686",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "695",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "696",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "697",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "682",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "674",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "675",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "676",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "692",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "693",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "694",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "686",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "687",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "699",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "699",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "721",
                     "s" : [ {
                        "r" : "708",
                        "s" : [ {
                           "r" : "700",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "721",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "718",
                        "s" : [ {
                           "r" : "712",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "721",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "722",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "723",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "708",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "709",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "710",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "711",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "700",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "701",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "702",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "718",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "719",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "720",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "712",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "713",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "725",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "725",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "739",
                     "s" : [ {
                        "r" : "726",
                        "value" : [ "null"," ","same or after"," " ]
                     }, {
                        "r" : "735",
                        "s" : [ {
                           "r" : "727",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "739",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "741",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "742",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "740",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "726",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "735",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "727",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "728",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "729",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "744",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "744",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "758",
                     "s" : [ {
                        "r" : "753",
                        "s" : [ {
                           "r" : "745",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "758",
                        "value" : [ " ","same or after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "758",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "760",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "761",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "753",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "754",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "755",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "756",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "745",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "746",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "747",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "759",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "757",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "763",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "763",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "768",
                     "s" : [ {
                        "r" : "764",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "764",
                           "s" : [ {
                              "r" : "765",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "766",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "768",
                        "value" : [ " ","same or after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "768",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "770",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "771",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "764",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "765",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "766",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "769",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "767",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* SameOrBefore
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year or before Date(2000, 11, 23)
define YearAfter: Date(2000, 3, 15) same year or before Date(1999, 11, 23)
define YearBefore: Date(2000, 3, 15) same year or before Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month or before Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 15) same month or before Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 15) same month or before Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) same day or before Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) same day or before Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) same day or before Date(2000, 3, 16)
define Same: Date(2000, 3, 15) same or before Date(2000, 3, 15)
define After: Date(2000, 3, 16) same or before Date(2000, 3, 15)
define Before: Date(2000, 3, 15) same or before Date(2000, 3, 15)
define SameDayMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4, 15)
define DayAfterMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4, 14)
define DayBeforeMonthAfter: Date(2000, 3, 15) same day or before Date(2000, 2, 16)
define ImpreciseDay: Date(2000, 3, 15) same day or before Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) same day or before Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4)
define NullLeft: null same or before Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same or before null
define NullBoth: (null as Date) same or before null
*/

module.exports['SameOrBefore'] = {
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
            "r" : "763",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "r" : "242",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "266",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "295",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "r" : "283",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "300",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "324",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "320",
                        "s" : [ {
                           "r" : "312",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "325",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "328",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "r" : "337",
                        "s" : [ {
                           "r" : "329",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "353",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "349",
                        "s" : [ {
                           "r" : "341",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "337",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "330",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "331",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "342",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "343",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "357",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "382",
                     "s" : [ {
                        "r" : "366",
                        "s" : [ {
                           "r" : "358",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "382",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "378",
                        "s" : [ {
                           "r" : "370",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "382",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "384",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "366",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "378",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "386",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "386",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "411",
                     "s" : [ {
                        "r" : "395",
                        "s" : [ {
                           "r" : "387",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "411",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "407",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "411",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "412",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "413",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "395",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "387",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "388",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "389",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "407",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "408",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "409",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "410",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "399",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "401",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "415",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "440",
                     "s" : [ {
                        "r" : "424",
                        "s" : [ {
                           "r" : "416",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "440",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "436",
                        "s" : [ {
                           "r" : "428",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "440",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "441",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "442",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "424",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "425",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "426",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "427",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "416",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "417",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "418",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "436",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "437",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "438",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "439",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "428",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "429",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "430",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "444",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "444",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "469",
                     "s" : [ {
                        "r" : "453",
                        "s" : [ {
                           "r" : "445",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "469",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "465",
                        "s" : [ {
                           "r" : "457",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "469",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "470",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "453",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "454",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "455",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "456",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "445",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "446",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "447",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "465",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "458",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "459",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "473",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "473",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "498",
                     "s" : [ {
                        "r" : "482",
                        "s" : [ {
                           "r" : "474",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "498",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "494",
                        "s" : [ {
                           "r" : "486",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "498",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "499",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "500",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "482",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "483",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "484",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "485",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               }, {
                  "localId" : "494",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "488",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "502",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "502",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "527",
                     "s" : [ {
                        "r" : "511",
                        "s" : [ {
                           "r" : "503",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "527",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "523",
                        "s" : [ {
                           "r" : "515",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "527",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "528",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "529",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "511",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "512",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "513",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "514",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "503",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "504",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "505",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "523",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "524",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "525",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "526",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "515",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "516",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "517",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "531",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "531",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "556",
                     "s" : [ {
                        "r" : "540",
                        "s" : [ {
                           "r" : "532",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "556",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "552",
                        "s" : [ {
                           "r" : "544",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "556",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "557",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "558",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "540",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "541",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "542",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "543",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "532",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "533",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "534",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "552",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "544",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "560",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "560",
                  "s" : [ {
                     "value" : [ "","define ","SameDayMonthBefore",": " ]
                  }, {
                     "r" : "585",
                     "s" : [ {
                        "r" : "569",
                        "s" : [ {
                           "r" : "561",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "585",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "581",
                        "s" : [ {
                           "r" : "573",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "585",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "586",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "587",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "569",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "570",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "571",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "572",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "561",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "562",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "563",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "581",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "582",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "583",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "584",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "573",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "574",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "575",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "589",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfterMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "589",
                  "s" : [ {
                     "value" : [ "","define ","DayAfterMonthBefore",": " ]
                  }, {
                     "r" : "614",
                     "s" : [ {
                        "r" : "598",
                        "s" : [ {
                           "r" : "590",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "614",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "610",
                        "s" : [ {
                           "r" : "602",
                           "value" : [ "Date","(","2000",", ","4",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "614",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "615",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "616",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "598",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "599",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "600",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "601",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               }, {
                  "localId" : "610",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "602",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "603",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "604",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "618",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBeforeMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "618",
                  "s" : [ {
                     "value" : [ "","define ","DayBeforeMonthAfter",": " ]
                  }, {
                     "r" : "643",
                     "s" : [ {
                        "r" : "627",
                        "s" : [ {
                           "r" : "619",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "643",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "639",
                        "s" : [ {
                           "r" : "631",
                           "value" : [ "Date","(","2000",", ","2",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "643",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "644",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "645",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "627",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "628",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "629",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "630",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "619",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "620",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "621",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "639",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "631",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "632",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "633",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "647",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "647",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "669",
                     "s" : [ {
                        "r" : "656",
                        "s" : [ {
                           "r" : "648",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "669",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "666",
                        "s" : [ {
                           "r" : "660",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "669",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "670",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "671",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "656",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "657",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "658",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "659",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "648",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "649",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "650",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "666",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "667",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "668",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               } ]
            }
         }, {
            "localId" : "673",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "673",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "695",
                     "s" : [ {
                        "r" : "682",
                        "s" : [ {
                           "r" : "674",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "695",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "692",
                        "s" : [ {
                           "r" : "686",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "695",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "696",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "697",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "682",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "674",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "675",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "676",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "692",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "693",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "694",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "686",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "687",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "699",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "699",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "721",
                     "s" : [ {
                        "r" : "708",
                        "s" : [ {
                           "r" : "700",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "721",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "718",
                        "s" : [ {
                           "r" : "712",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "721",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "722",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "723",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "708",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "709",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "710",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "711",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "700",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "701",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "702",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "718",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "719",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "720",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "712",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "713",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "725",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "725",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "739",
                     "s" : [ {
                        "r" : "726",
                        "value" : [ "null"," ","same or before"," " ]
                     }, {
                        "r" : "735",
                        "s" : [ {
                           "r" : "727",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "739",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "741",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "742",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "740",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "726",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "735",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "727",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "728",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "729",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "744",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "744",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "758",
                     "s" : [ {
                        "r" : "753",
                        "s" : [ {
                           "r" : "745",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "758",
                        "value" : [ " ","same or before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "758",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "760",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "761",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "753",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "754",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "755",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "756",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "745",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "746",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "747",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "759",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "757",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "763",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "763",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "768",
                     "s" : [ {
                        "r" : "764",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "764",
                           "s" : [ {
                              "r" : "765",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "766",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "768",
                        "value" : [ " ","same or before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "768",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "770",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "771",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "764",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "765",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "766",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "769",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "767",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* After
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 12, 15) after year of Date(2000, 11, 23)
define YearAfter: Date(2000, 12, 15) after year of Date(1999, 11, 23)
define YearBefore: Date(2000, 12, 15) after year of Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 25) after month of Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 25) after month of Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 25) after month of Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) after day of Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) after day of Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) after day of Date(2000, 3, 16)
define Same: Date(2000, 3, 15) after Date(2000, 3, 15)
define After: Date(2000, 3, 16) after Date(2000, 3, 15)
define Before: Date(2000, 3, 15) after Date(2000, 3, 15)
define ImpreciseDay: Date(2000, 3, 15) after day of Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) after day of Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) after day of Date(2000, 4)
define NullLeft: null after Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) after null
define NullBoth: (null as Date) after null
*/

module.exports['After'] = {
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "r" : "242",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "266",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "295",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "r" : "283",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "300",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "324",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "320",
                        "s" : [ {
                           "r" : "312",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "After",
               "signature" : [ {
                  "localId" : "325",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "328",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "r" : "337",
                        "s" : [ {
                           "r" : "329",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "353",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "349",
                        "s" : [ {
                           "r" : "341",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "After",
               "signature" : [ {
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "337",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "330",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "331",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "342",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "343",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "357",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "382",
                     "s" : [ {
                        "r" : "366",
                        "s" : [ {
                           "r" : "358",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "382",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "378",
                        "s" : [ {
                           "r" : "370",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "382",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "After",
               "signature" : [ {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "384",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "366",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "378",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "386",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "386",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "411",
                     "s" : [ {
                        "r" : "395",
                        "s" : [ {
                           "r" : "387",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "411",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "407",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "411",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "412",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "413",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "395",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "387",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "388",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "389",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "407",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "408",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "409",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "410",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "399",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "401",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "415",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "440",
                     "s" : [ {
                        "r" : "424",
                        "s" : [ {
                           "r" : "416",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "440",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "436",
                        "s" : [ {
                           "r" : "428",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "440",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "441",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "442",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "424",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "425",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "426",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "427",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "416",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "417",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "418",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "436",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "437",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "438",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "439",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "428",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "429",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "430",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "444",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "444",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "469",
                     "s" : [ {
                        "r" : "453",
                        "s" : [ {
                           "r" : "445",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "469",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "465",
                        "s" : [ {
                           "r" : "457",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "469",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "470",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "453",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "454",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "455",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "456",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "445",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "446",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "447",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "465",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "458",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "459",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "473",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "473",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "498",
                     "s" : [ {
                        "r" : "482",
                        "s" : [ {
                           "r" : "474",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "498",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "494",
                        "s" : [ {
                           "r" : "486",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "498",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "499",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "500",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "482",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "483",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "484",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "485",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               }, {
                  "localId" : "494",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "488",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "502",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "502",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "527",
                     "s" : [ {
                        "r" : "511",
                        "s" : [ {
                           "r" : "503",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "527",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "523",
                        "s" : [ {
                           "r" : "515",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "527",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "528",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "529",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "511",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "512",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "513",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "514",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "503",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "504",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "505",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "523",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "524",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "525",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "526",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "515",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "516",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "517",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "531",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "531",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "556",
                     "s" : [ {
                        "r" : "540",
                        "s" : [ {
                           "r" : "532",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "556",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "552",
                        "s" : [ {
                           "r" : "544",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "556",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "557",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "558",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "540",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "541",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "542",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "543",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "532",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "533",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "534",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "552",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "544",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "560",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "560",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "582",
                     "s" : [ {
                        "r" : "569",
                        "s" : [ {
                           "r" : "561",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "582",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "579",
                        "s" : [ {
                           "r" : "573",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "582",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "583",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "584",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "569",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "570",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "571",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "572",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "561",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "562",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "563",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "579",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "580",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "581",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "573",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "574",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "586",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "586",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "608",
                     "s" : [ {
                        "r" : "595",
                        "s" : [ {
                           "r" : "587",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "608",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "605",
                        "s" : [ {
                           "r" : "599",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "608",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "609",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "610",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "595",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "596",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "597",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "598",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "587",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "588",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "589",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "605",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "606",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "607",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "599",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "600",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "612",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "612",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "634",
                     "s" : [ {
                        "r" : "621",
                        "s" : [ {
                           "r" : "613",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "634",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "631",
                        "s" : [ {
                           "r" : "625",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "634",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "635",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "636",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "621",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "622",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "623",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "624",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "613",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "614",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "615",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "631",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "632",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "633",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "625",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "626",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "638",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "638",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "652",
                     "s" : [ {
                        "r" : "639",
                        "value" : [ "null"," ","after"," " ]
                     }, {
                        "r" : "648",
                        "s" : [ {
                           "r" : "640",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "652",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "654",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "655",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "653",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "639",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "648",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "649",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "650",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "651",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "640",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "641",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "642",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "657",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "657",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "671",
                     "s" : [ {
                        "r" : "666",
                        "s" : [ {
                           "r" : "658",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "671",
                        "value" : [ " ","after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "671",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "673",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "674",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "666",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "667",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "668",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "669",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "658",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "659",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "660",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "672",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "670",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "676",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "676",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "681",
                     "s" : [ {
                        "r" : "677",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "677",
                           "s" : [ {
                              "r" : "678",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "679",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "681",
                        "value" : [ " ","after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "681",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "683",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "684",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "677",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "678",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "679",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "682",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "680",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* Before
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 10, 15) before year of Date(2000, 11, 23)
define YearAfter: Date(2000, 10, 15) before year of Date(1999, 11, 23)
define YearBefore: Date(2000, 10, 15) before year of Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 22) before month of Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 22) before month of Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 22) before month of Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) before day of Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) before day of Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) before day of Date(2000, 3, 16)
define Same: Date(2000, 3, 15) before Date(2000, 3, 15)
define After: Date(2000, 3, 15) before Date(2000, 3, 15)
define Before: Date(2000, 3, 14) before Date(2000, 3, 15)
define ImpreciseDay: Date(2000, 3, 15) before day of Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) before day of Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) before day of Date(2000, 4)
define NullLeft: null before Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) before null
define NullBoth: (null as Date) before null
*/

module.exports['Before'] = {
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "r" : "242",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "266",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "295",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "r" : "283",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "300",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "324",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "320",
                        "s" : [ {
                           "r" : "312",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "325",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "328",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "r" : "337",
                        "s" : [ {
                           "r" : "329",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "353",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "349",
                        "s" : [ {
                           "r" : "341",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "337",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "330",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "331",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "342",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "343",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "357",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "382",
                     "s" : [ {
                        "r" : "366",
                        "s" : [ {
                           "r" : "358",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "382",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "378",
                        "s" : [ {
                           "r" : "370",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "382",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "384",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "366",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "378",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "386",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "386",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "411",
                     "s" : [ {
                        "r" : "395",
                        "s" : [ {
                           "r" : "387",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "411",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "407",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "411",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "412",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "413",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "395",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "387",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "388",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "389",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "407",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "408",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "409",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "410",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "399",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "401",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "415",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "440",
                     "s" : [ {
                        "r" : "424",
                        "s" : [ {
                           "r" : "416",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "440",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "436",
                        "s" : [ {
                           "r" : "428",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "440",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "441",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "442",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "424",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "425",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "426",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "427",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "416",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "417",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "418",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "436",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "437",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "438",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "439",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "428",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "429",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "430",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "444",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "444",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "469",
                     "s" : [ {
                        "r" : "453",
                        "s" : [ {
                           "r" : "445",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "469",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "465",
                        "s" : [ {
                           "r" : "457",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "469",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "470",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "453",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "454",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "455",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "456",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "445",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "446",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "447",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "465",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "458",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "459",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "473",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "473",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "498",
                     "s" : [ {
                        "r" : "482",
                        "s" : [ {
                           "r" : "474",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "498",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "494",
                        "s" : [ {
                           "r" : "486",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "498",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "499",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "500",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "482",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "483",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "484",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "485",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               }, {
                  "localId" : "494",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "488",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "502",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "502",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "527",
                     "s" : [ {
                        "r" : "511",
                        "s" : [ {
                           "r" : "503",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "527",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "523",
                        "s" : [ {
                           "r" : "515",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "527",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "528",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "529",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "511",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "512",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "513",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "514",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "503",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "504",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "505",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "523",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "524",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "525",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "526",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "515",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "516",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "517",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "531",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "531",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "556",
                     "s" : [ {
                        "r" : "540",
                        "s" : [ {
                           "r" : "532",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "r" : "556",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "552",
                        "s" : [ {
                           "r" : "544",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "556",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "557",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "558",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "540",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "541",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "542",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "543",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "532",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "533",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "534",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "552",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "544",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "560",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "560",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "582",
                     "s" : [ {
                        "r" : "569",
                        "s" : [ {
                           "r" : "561",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "582",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "579",
                        "s" : [ {
                           "r" : "573",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "582",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "583",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "584",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "569",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "570",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "571",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "572",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "561",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "562",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "563",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "579",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "580",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "581",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "573",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "574",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "586",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "586",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "608",
                     "s" : [ {
                        "r" : "595",
                        "s" : [ {
                           "r" : "587",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "608",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "605",
                        "s" : [ {
                           "r" : "599",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "608",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "609",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "610",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "595",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "596",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "597",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "598",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "587",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "588",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "589",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "605",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "606",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "607",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "599",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "600",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "612",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "612",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "634",
                     "s" : [ {
                        "r" : "621",
                        "s" : [ {
                           "r" : "613",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "634",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "631",
                        "s" : [ {
                           "r" : "625",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "634",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "635",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "636",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "621",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "622",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "623",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "624",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "613",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "614",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "615",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "631",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "632",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "633",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "625",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "626",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "638",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "638",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "652",
                     "s" : [ {
                        "r" : "639",
                        "value" : [ "null"," ","before"," " ]
                     }, {
                        "r" : "648",
                        "s" : [ {
                           "r" : "640",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "652",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "654",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "655",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "653",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "639",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "648",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "649",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "650",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "651",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "640",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "641",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "642",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "657",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "657",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "671",
                     "s" : [ {
                        "r" : "666",
                        "s" : [ {
                           "r" : "658",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "671",
                        "value" : [ " ","before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "671",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "673",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "674",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "666",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "667",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "668",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "669",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "658",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "659",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "660",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "672",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "670",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "676",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "676",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "681",
                     "s" : [ {
                        "r" : "677",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "677",
                           "s" : [ {
                              "r" : "678",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "679",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "681",
                        "value" : [ " ","before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "681",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "683",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "684",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "677",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "678",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "679",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "682",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "680",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* DifferenceBetween
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NewYear2013: Date(2013, 1, 1)
define NewYear2014: Date(2014, 1, 1)
define January2014: Date(2014, 1)
define YearsBetween: difference in years between NewYear2013 and NewYear2014
define MonthsBetween: difference in months between NewYear2013 and NewYear2014
define WeeksBetween: difference in weeks between NewYear2013 and NewYear2014
define DaysBetween: difference in days between NewYear2013 and NewYear2014
define YearsBetweenUncertainty: difference in years between NewYear2014 and January2014
define MonthsBetweenUncertainty: difference in months between NewYear2014 and January2014
define WeeksBetweenUncertainty: difference in weeks between NewYear2014 and January2014
define DaysBetweenUncertainty: difference in days between NewYear2014 and January2014
*/

module.exports['DifferenceBetween'] = {
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
            "r" : "300",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "NewYear2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2013",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2013",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "NewYear2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2014",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "Date","(","2014",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "January2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","January2014",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "241",
                        "value" : [ "Date","(","2014",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "YearsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetween",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "difference in years between " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MonthsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetween",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "difference in months between " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "WeeksBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetween",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "difference in weeks between " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetween",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "value" : [ "difference in days between " ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "276",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "277",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "274",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "YearsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetweenUncertainty",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "difference in years between " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MonthsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetweenUncertainty",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "value" : [ "difference in months between " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "WeeksBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetweenUncertainty",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "value" : [ "difference in weeks between " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "300",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DaysBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetweenUncertainty",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "value" : [ "difference in days between " ]
                     }, {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "301",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "304",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "303",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

/* DifferenceBetween Comparisons
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NewYear2014: Date(2014, 1, 1)
define February2014: Date(2014, 2)
define GreaterThan25DaysAfter: difference in days between NewYear2014 and February2014 > 25
define GreaterThan40DaysAfter: difference in days between NewYear2014 and February2014 > 40
define GreaterThan80DaysAfter: difference in days between NewYear2014 and February2014 > 80
define GreaterOrEqualTo25DaysAfter: difference in days between NewYear2014 and February2014 >= 25
define GreaterOrEqualTo40DaysAfter: difference in days between NewYear2014 and February2014 >= 40
define GreaterOrEqualTo80DaysAfter: difference in days between NewYear2014 and February2014 >= 80
define EqualTo25DaysAfter: difference in days between NewYear2014 and February2014 = 25
define EqualTo40DaysAfter: difference in days between NewYear2014 and February2014 = 40
define EqualTo80DaysAfter: difference in days between NewYear2014 and February2014 = 80
define LessOrEqualTo25DaysAfter: difference in days between NewYear2014 and February2014 <= 25
define LessOrEqualTo40DaysAfter: difference in days between NewYear2014 and February2014 <= 40
define LessOrEqualTo80DaysAfter: difference in days between NewYear2014 and February2014 <= 80
define LessThan25DaysAfter: difference in days between NewYear2014 and February2014 < 25
define LessThan40DaysAfter: difference in days between NewYear2014 and February2014 < 40
define LessThan80DaysAfter: difference in days between NewYear2014 and February2014 < 80
define TwentyFiveDaysLessThanDaysBetween: 25 < difference in days between NewYear2014 and February2014
define FortyDaysEqualToDaysBetween: 40 = difference in days between NewYear2014 and February2014
define TwentyFiveDaysGreaterThanDaysBetween: 25 > difference in days between NewYear2014 and February2014
*/

module.exports['DifferenceBetween Comparisons'] = {
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
            "r" : "424",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "NewYear2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2014",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2014",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "February2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","February2014",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "Date","(","2014",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterThan25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan25DaysAfter",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "240",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "241",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "244",
                        "value" : [ " ",">"," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "242",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "243",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterThan40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan40DaysAfter",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "252",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ",">"," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterThan80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan80DaysAfter",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "262",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "263",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "266",
                        "value" : [ " ",">"," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "262",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "263",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterOrEqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "273",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "274",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "277",
                        "value" : [ " ",">="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "275",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "276",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterOrEqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo40DaysAfter",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "284",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "285",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "288",
                        "value" : [ " ",">="," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterOrEqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "292",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "293",
                     "s" : [ {
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "295",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "299",
                        "value" : [ " ",">="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "293",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
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
                  "localId" : "294",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "298",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "295",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "296",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "306",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "307",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "310",
                        "value" : [ " ","="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "312",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "308",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "310",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo40DaysAfter",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "316",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "318",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "321",
                        "value" : [ " ","="," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "322",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "323",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "316",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "320",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "321",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "325",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "328",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "329",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "332",
                        "value" : [ " ","="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "333",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "334",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "330",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "331",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "328",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "332",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessOrEqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "337",
                     "s" : [ {
                        "r" : "338",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "339",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "340",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "343",
                        "value" : [ " ","<="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "337",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "344",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "345",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "338",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "341",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "342",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "339",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "340",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "347",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessOrEqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo40DaysAfter",": " ]
                  }, {
                     "r" : "348",
                     "s" : [ {
                        "r" : "349",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "350",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "351",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "354",
                        "value" : [ " ","<="," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "348",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "356",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "352",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "353",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "350",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "351",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "354",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "358",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessOrEqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "358",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "r" : "360",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "361",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "362",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "365",
                        "value" : [ " ","<="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "359",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "366",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "367",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "360",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "363",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "364",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "361",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "362",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "365",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "369",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessThan25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "369",
                  "s" : [ {
                     "value" : [ "","define ","LessThan25DaysAfter",": " ]
                  }, {
                     "r" : "370",
                     "s" : [ {
                        "r" : "371",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "372",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "373",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "376",
                        "value" : [ " ","<"," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "370",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "377",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "378",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "371",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "374",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "375",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "373",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "376",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "380",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessThan40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "380",
                  "s" : [ {
                     "value" : [ "","define ","LessThan40DaysAfter",": " ]
                  }, {
                     "r" : "381",
                     "s" : [ {
                        "r" : "382",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "383",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "384",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "387",
                        "value" : [ " ","<"," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "381",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "388",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "389",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "382",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "385",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "383",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "384",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "387",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "391",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessThan80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "391",
                  "s" : [ {
                     "value" : [ "","define ","LessThan80DaysAfter",": " ]
                  }, {
                     "r" : "392",
                     "s" : [ {
                        "r" : "393",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "394",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "395",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "398",
                        "value" : [ " ","<"," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "392",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "399",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "400",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "393",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "396",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "397",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "394",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "395",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "398",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "402",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TwentyFiveDaysLessThanDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "402",
                  "s" : [ {
                     "value" : [ "","define ","TwentyFiveDaysLessThanDaysBetween",": " ]
                  }, {
                     "r" : "403",
                     "s" : [ {
                        "r" : "404",
                        "value" : [ "25"," ","<"," " ]
                     }, {
                        "r" : "405",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "406",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "407",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "403",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "410",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "411",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "404",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }, {
                  "localId" : "405",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "408",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "409",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "406",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "407",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "localId" : "413",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FortyDaysEqualToDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "413",
                  "s" : [ {
                     "value" : [ "","define ","FortyDaysEqualToDaysBetween",": " ]
                  }, {
                     "r" : "414",
                     "s" : [ {
                        "r" : "415",
                        "value" : [ "40"," ","="," " ]
                     }, {
                        "r" : "416",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "417",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "418",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "414",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "421",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "422",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               }, {
                  "localId" : "416",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "419",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "420",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "417",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "418",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "localId" : "424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TwentyFiveDaysGreaterThanDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","TwentyFiveDaysGreaterThanDaysBetween",": " ]
                  }, {
                     "r" : "425",
                     "s" : [ {
                        "r" : "426",
                        "value" : [ "25"," ",">"," " ]
                     }, {
                        "r" : "427",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "428",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "429",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "425",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "432",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "433",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "426",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }, {
                  "localId" : "427",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "430",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "431",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "428",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "429",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* DurationBetween
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define DecTen2013: Date(2013, 12, 10)
define JanOne2015: Date(2015, 1, 1)
define January2015: Date(2015, 1)
define YearsBetween: years between DecTen2013 and JanOne2015
define MonthsBetween: months between DecTen2013 and JanOne2015
define WeeksBetween: weeks between DecTen2013 and JanOne2015
define DaysBetween: days between DecTen2013 and JanOne2015
define YearsBetweenUncertainty: years between JanOne2015 and January2015
define MonthsBetweenUncertainty: months between JanOne2015 and January2015
define WeeksBetweenUncertainty: weeks between JanOne2015 and January2015
define DaysBetweenUncertainty: days between JanOne2015 and January2015
*/

module.exports['DurationBetween'] = {
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
            "r" : "300",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DecTen2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","DecTen2013",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2013",", ","12",", ","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "JanOne2015",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","JanOne2015",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "Date","(","2015",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "January2015",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","January2015",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "241",
                        "value" : [ "Date","(","2015",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "YearsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetween",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "years between " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MonthsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetween",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
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
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "WeeksBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetween",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "weeks between " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetween",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "value" : [ "days between " ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "276",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "277",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "274",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "YearsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetweenUncertainty",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "years between " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MonthsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetweenUncertainty",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "WeeksBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetweenUncertainty",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "value" : [ "weeks between " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "300",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DaysBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetweenUncertainty",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "value" : [ "days between " ]
                     }, {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "301",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "304",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "303",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

/* DateMath
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define June15th2013: Date(2013, 6, 15)
define PlusThreeYears: June15th2013 + 3 years
define MinusThreeYears: June15th2013 - 3 years
define PlusEightMonths: June15th2013 + 8 months
define MinusEightMonths: June15th2013 - 8 months
define PlusThreeWeeks: June15th2013 + 3 weeks
define MinusThreeWeeks: June15th2013 - 3 weeks
define PlusTwentyDays: June15th2013 + 20 days
define MinusTwentyDays: June15th2013 - 20 days
*/

module.exports['DateMath'] = {
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
            "r" : "275",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "June15th2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","June15th2013",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2013",", ","6",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "PlusThreeYears",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","PlusThreeYears",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "3 ","years" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 3,
                  "unit" : "years",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "MinusThreeYears",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","MinusThreeYears",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "3 ","years" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 3,
                  "unit" : "years",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "PlusEightMonths",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","PlusEightMonths",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "8 ","months" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 8,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "MinusEightMonths",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","MinusEightMonths",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "8 ","months" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 8,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "PlusThreeWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","PlusThreeWeeks",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "3 ","weeks" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 3,
                  "unit" : "weeks",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "MinusThreeWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","MinusThreeWeeks",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "3 ","weeks" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 3,
                  "unit" : "weeks",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "PlusTwentyDays",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","PlusTwentyDays",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "20 ","days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 20,
                  "unit" : "days",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "MinusTwentyDays",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","MinusTwentyDays",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "20 ","days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "276",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "278",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 20,
                  "unit" : "days",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

